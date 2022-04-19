'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"main.dart.js": "6f56b030189043363f7b644c5b16e594",
"manifest.json": "0f8962fe399d4ce3417f7a891b7e78ce",
"index.html": "5e262d471d934fc16d4af970ee97c379",
"/": "5e262d471d934fc16d4af970ee97c379",
"assets/assets/images/login03.png": "2238908b1e54f9b1678f27c543b90205",
"assets/assets/images/Img_2.png": "50bf76bfe52288249408bfe76af6c02d",
"assets/assets/images/dr.samratjankar.jpg": "46972b3912e7169b53ab80849ac72cb6",
"assets/assets/images/profile.png": "057d526daa4cfcbadc8e574c2dfbaa28",
"assets/assets/images/Drsubramanians.jpg": "668430a1201d0a1b4a425f7438568d85",
"assets/assets/images/DrVishnu.jpeg": "9825a5a6406e8bf22d0d1869a62c3ff2",
"assets/assets/images/TreePose.jpg": "d344397682e6e0c8b75ca512aa53c4a7",
"assets/assets/images/DrNeelam31jan.jpg": "435be4f6cb142397031e37d31908161f",
"assets/assets/images/login02.png": "c9ae4fcc7b5931e5654f4f0dc0855bea",
"assets/assets/images/Sukhasana.jpg": "9d6f1e97e69d5490f008ca258065d1ba",
"assets/assets/images/Downward-Facing.jpg": "03661ccd162a2059b43bb693cb5100dc",
"assets/assets/images/labTest.png": "29c661828aec7a1f8dea646e2827a27e",
"assets/assets/images/loginGoogle.jpg": "d9d2d6775c637ed4007958e5c51e64a4",
"assets/assets/images/Sidestep.jpeg": "ec4792512086e4035df87b48f90cbead",
"assets/assets/images/Img_0.png": "afbe6d2666c4766da1192ed32c81e379",
"assets/assets/images/social_distance.jpg": "05759021da806d6ffa83a45101e022d3",
"assets/assets/images/Staircrawl.jpg": "2a36f5ed4ca4bbdaad7286a5db23e9a8",
"assets/assets/images/onBoardDoc.png": "7daa40456e4f12f039be426f2dbbd9d5",
"assets/assets/images/meditation_bg.png": "aa94331127b67abc08d5f0f80dd13018",
"assets/assets/images/wear_mask.png": "7ac433e98ec358e3a57b51073a304921",
"assets/assets/images/Stepup.jpg": "80d919606ad02683075e440fe15ffedb",
"assets/assets/images/Drsunil.jpg": "d1913ebebf065627662e2b4ca09d445c",
"assets/assets/images/map.png": "e07af100194efbbbbae66dfdc0478ee5",
"assets/assets/images/meditation.jpg": "83984db0e6864c499d5d30aeba221fb9",
"assets/assets/images/ChildPose.jpg": "8eba93c25a7cf60a7c86bc04578e9366",
"assets/assets/images/hospitalBldg.png": "09721f284dba1758f1aef8c4d3e70d8a",
"assets/assets/images/user_5.png": "8e98aa502e33de2e867686b60507a8c7",
"assets/assets/images/Stairlunge.jpg": "ea7821e07c1617f5d5a7d8af7720f7e7",
"assets/assets/images/user_2.png": "7eccb0a70693054530486c9faf4a27dd",
"assets/assets/images/appop.png": "57c6ad286ab7e18d721163e6cc0093c8",
"assets/assets/images/Drmmmgynec.jpg": "9a53c5298241c858f357b012e59ae9bf",
"assets/assets/images/covid.jpg": "599fdc94f793adc8cfc98019c61464b6",
"assets/assets/images/healthy.png": "f683e23cf4d078570421b54aefd970b1",
"assets/assets/images/Cat-Cow.jpg": "79f0cf9e6aae554626b3491fa1e82cdc",
"assets/assets/images/virtualAppop.png": "cb4c36b18a083aa62ed7510d01ca79cc",
"assets/assets/images/Stairpushup.jpg": "b0824b1f369c15effdfd119df003fcf6",
"assets/assets/images/caugh.png": "9639f120b671705cabbb5416e00f8e01",
"assets/assets/images/login01.png": "ad0d576da246208b5f8b7b785a2ea652",
"assets/assets/images/BabyPigeon.jpg": "45a9dd883a13ace759dfa6ef3306c5a8",
"assets/assets/images/washHand.png": "fe76a11cdbd5823d67e7bcf91acdf65c",
"assets/assets/images/undraw_pilates_gpdb.png": "a57e817e33a29b996813ec85d29065f0",
"assets/assets/images/manDoc.png": "66c3ce916d9ba3d278e5bdc4ebb53bac",
"assets/assets/images/morgue.png": "193d130fc6fe637a7e371d3723ca28e1",
"assets/assets/images/wash_hands.png": "403b264a110f0af9db5b9c47288ec3dd",
"assets/assets/images/headache.png": "7aacf91147e3571ac3aab07b9e7149f3",
"assets/assets/images/Img_1.png": "8737b19ca2018ab533c0ea38926d307d",
"assets/assets/images/virus.png": "bfbf6f56ed6350e51156698abf5c708b",
"assets/assets/images/gratitude.jpg": "36bf8d1ccec1375a7c61ad1c58945299",
"assets/assets/images/user_3.png": "4175bf553052bdd6e1f3e93b71aab1b5",
"assets/assets/images/Logo%2520Outlook.png": "b30d7f8d436a715920f5766a8f4f590c",
"assets/assets/images/workout.jpg": "531afce2381136df5df6e38e07b1bade",
"assets/assets/images/ladyDoc.png": "9d6c7f0e09d400a9255818ed74275b3b",
"assets/assets/images/breathing.jpg": "6ba3d597736c9af656ed25e2180be63d",
"assets/assets/images/fever.png": "6ff9628a44a28b363593cae1ff6a6248",
"assets/assets/images/yoga.jpg": "2c08964deebcd05e0ea21275b6ab7d09",
"assets/assets/images/user_4.png": "bc10492e902061e17e16fd406be2c328",
"assets/assets/images/dr.vjy.jpg": "a2cfd8f36e3c37f8a3885bae8ba8e4ae",
"assets/assets/images/DrMadhavan.jpg": "e76029eb317f074a7c890620b1c83961",
"assets/assets/images/ambulance.png": "a2c7bc24a3e60aab92b52ef2ad089ce3",
"assets/assets/images/calender.png": "41200dbb6b4aae3368bee689bcff84e2",
"assets/assets/images/Crabwalks.jpg": "8d9f72ec27ccb01d89820865dd82931c",
"assets/assets/images/mapLoc.png": "9af1199dd7b4d496edb07880b91e98ef",
"assets/assets/images/protein.jpg": "2743f036c019442db2c5ac6fa71c4916",
"assets/assets/images/mentalTrain.jpg": "a7401300970d431490ac920a56caa53c",
"assets/assets/images/wear-mask2.png": "376df4864d602f730a7442582eb63822",
"assets/assets/images/user_1.png": "b27e4014918be9067acf17512520f699",
"assets/assets/Icons/Paperclip.svg": "d7e7dec5e3b15d70d1cc543902e3e3b8",
"assets/assets/Icons/Markup.svg": "2a0f37b8f81e85e200239f26c8295718",
"assets/assets/fonts/OnePlus-Regular.ttf": "478bc7ba04e0a6f8b63518330b4e6330",
"assets/FontManifest.json": "c04e27ee9a0069e5a7ba5b3c767db58a",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/AssetManifest.json": "a4d760e0fda91ddd385bd40b66ba02c0",
"assets/NOTICES": "5936cff4abc47fa9175e1ad9e476c494",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"version.json": "640bf03d001d5d7075b97a433a80fcd8"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
