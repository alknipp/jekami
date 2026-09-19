/* Jekami Quiz - Service Worker

   Nach jeder Aenderung an den Fragen die VERSION hochzaehlen,
   damit installierte Geraete den neuen Stand bekommen.

   Die Liste der Themendateien baut sich selbst aus fragen/liste.js -
   ein neues Themengebiet muss hier nicht eingetragen werden. */
var VERSION = "jekami-v11";

var DATEIEN = [
  "./", "./index.html", "./manifest.webmanifest",
  "./icon-192.png", "./icon-512.png", "./icon-512-maskable.png",
  "./fragen/liste.js"
];

try {
  importScripts("./fragen/liste.js");
  if (typeof JEKAMI_THEMEN !== "undefined") {
    for (var i = 0; i < JEKAMI_THEMEN.length; i++) {
      DATEIEN.push("./fragen/" + JEKAMI_THEMEN[i] + ".js");
    }
  }
} catch (e) { /* ohne Liste wird nur die Grundausstattung zwischengespeichert */ }

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(VERSION)
      .then(function (c) { return c.addAll(DATEIEN); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (k) {
        if (k !== VERSION) return caches.delete(k);
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function (e) {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request).then(function (res) {
      var copy = res.clone();
      caches.open(VERSION).then(function (c) { c.put(e.request, copy); });
      return res;
    }).catch(function () {
      return caches.match(e.request).then(function (hit) {
        return hit || caches.match("./index.html");
      });
    })
  );
});
