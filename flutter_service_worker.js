'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "8f1abdc4645dfc9655462f4129b7d853",
"index.html": "d6f9a8b5b263134b1429f1253a89a916",
"/": "d6f9a8b5b263134b1429f1253a89a916",
"main.dart.js": "a8355fc52da9a74bee834bccf9ad9184",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f4205d0252a13f8f36a4a11707b41997",
"assets/AssetManifest.json": "b054bed70c9f0128cc830437a35ea3c0",
"assets/NOTICES": "223d25ef2acaded7e7d89422b82e6926",
"assets/FontManifest.json": "39a5a5dad22696058933f1f3762080ba",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "aaa980442e2a687470e3dc9951c8eb7c",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/bullet.png": "27fc3249c11bf863be4180e5f5c36918",
"assets/assets/images/joystick_background.png": "33c95ac4a95859a999bf5d90a3025d5f",
"assets/assets/images/icon_plusSmall.png": "776e082f264bf5a5ca0acac83125e6a6",
"assets/assets/images/planet.png": "4120a64b59b6901aed48dde362357cf9",
"assets/assets/images/joystick.png": "02b3473e0a51c673dc9596428e816f14",
"assets/assets/images/nuke.png": "081d209ae4477c717b69073467346ad0",
"assets/assets/images/player3.png": "0258fbeabe7e1cf8c9271c017ec8fb63",
"assets/assets/images/freeze.png": "9bc839673b9af29622b708084987e40d",
"assets/assets/images/fire_button.png": "0ac879feaf552385931f3f6a1b772248",
"assets/assets/images/player2.png": "f4ec88d91a266795734656851e8e8a10",
"assets/assets/images/player0.png": "c79a1d2ddd21e9c85723b9ccc09834d2",
"assets/assets/images/button_bg.png": "12793fc4cee7743660b9afd74683ee51",
"assets/assets/images/player1.png": "1822226e10591afecbd62213e3b7f7d4",
"assets/assets/images/player5.png": "6b3c0fcd8243cdc8bce164582577eb73",
"assets/assets/images/game_logo.png": "7827531af9cc5e9469a4a9d27ddb47fc",
"assets/assets/images/player4.png": "4e4f3c0ecc0bd53731d5a9cfa6cbde89",
"assets/assets/images/player6.png": "a03a5543db95c59b4f3da39347425cea",
"assets/assets/images/space_background.png": "22fa30ad73abf45633d62c92cdb5412e",
"assets/assets/images/background.png": "92259fbd73877220969b47d8da554cfb",
"assets/assets/images/player7.png": "b3144635439e5a0196699be394d13b27",
"assets/assets/images/plane_bg.png": "3d20b113f6c0cd8b565208ab4b90c030",
"assets/assets/images/pause.png": "24c0fa34f060437b5d88cc8897c3477f",
"assets/assets/images/bg2.png": "425c04b93b94c499624807b2e14df6f9",
"assets/assets/images/simpleSpace_tilesheet@1.png": "6e9053a9f881ff979c73bc433c645829",
"assets/assets/images/texture.png": "1cff28a54e1cd4ca9d8af55ed4dfb5f6",
"assets/assets/images/back_button.png": "0931b1b66245794f842539ee2e59cc04",
"assets/assets/images/multi_fire.png": "ab0a7602da12d83363c08fbc6c3de467",
"assets/assets/images/space_star.png": "96671e93d0abb054534296218bad2df8",
"assets/assets/images/setting_bg.png": "dc318795402820bbc51e5f5e06e0d405",
"assets/assets/images/coin.png": "1a88b98317161c615510bc879618d2b0",
"assets/assets/images/play.png": "b45a137a6a3b9d8c7e5354d62fe1738e",
"assets/assets/images/texture1.png": "eb72faa0dd4823dbdb2861e372071c2c",
"assets/assets/images/setting.png": "06599c645865e814c3d8e45816deaee6",
"assets/assets/images/bg.png": "c049b1a54a9c5d4171ec0ad829927a64",
"assets/assets/audio/powerUp6.mp3": "9413f2282288750318870ec79f448644",
"assets/assets/audio/laserSmall_001.mp3": "94954adfb31f7ec08c1c3dce8869ba38",
"assets/assets/audio/laser1.mp3": "411e44734a77e6137a8977889e741ae6",
"assets/assets/audio/gamebackground.mp3": "97f958b541c3348ade4e47d30071b261",
"assets/assets/fonts/BungeeInline/BungeeInline-Regular.ttf": "4152729d3cc033542060221b7449bd42",
"assets/assets/fonts/QB-One-Bold.ttf": "f0b2b4ed50ce66bdac19f0455e485ac1",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
