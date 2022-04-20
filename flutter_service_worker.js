'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"main.dart.js": "8a648a9722334991c2ed7518b0b5c9e5",
"manifest.json": "0f8962fe399d4ce3417f7a891b7e78ce",
"index.html": "aa17fbcb7cf147281727dcb1fd43bb97",
"/": "aa17fbcb7cf147281727dcb1fd43bb97",
"assets/assets/images/login03.png": "2238908b1e54f9b1678f27c543b90205",
"assets/assets/images/Img_2.png": "50bf76bfe52288249408bfe76af6c02d",
"assets/assets/images/dr.samratjankar.jpg": "46972b3912e7169b53ab80849ac72cb6",
"assets/assets/images/jhon5.png": "4189d30182f683e4fadf13dff535b33e",
"assets/assets/images/jhon4.png": "825a3c0f55044eaa30172081535d2649",
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
"assets/assets/images/docprofile/doc3.png": "548336b32e0eb7526d59684fac3cbf7f",
"assets/assets/images/docprofile/doc2.png": "2c0f3f8f0d1a7798b18e3a7b0bd2ef48",
"assets/assets/images/docprofile/doc1.png": "c39fd0047638c69455d7897a858bd0b0",
"assets/assets/images/wear_mask.png": "7ac433e98ec358e3a57b51073a304921",
"assets/assets/images/Stepup.jpg": "80d919606ad02683075e440fe15ffedb",
"assets/assets/images/doctor.png": "4e74ae1b2091f6a3c430d2b39ebe8b39",
"assets/assets/images/Drsunil.jpg": "d1913ebebf065627662e2b4ca09d445c",
"assets/assets/images/pharm.png": "71170748d228af84072578a3bb849eee",
"assets/assets/images/map.png": "e07af100194efbbbbae66dfdc0478ee5",
"assets/assets/images/meditation.jpg": "83984db0e6864c499d5d30aeba221fb9",
"assets/assets/images/ChildPose.jpg": "8eba93c25a7cf60a7c86bc04578e9366",
"assets/assets/images/hospitalBldg.png": "09721f284dba1758f1aef8c4d3e70d8a",
"assets/assets/images/doc3.png": "077f0478abe087b7d96db5410885ec69",
"assets/assets/images/user_5.png": "8e98aa502e33de2e867686b60507a8c7",
"assets/assets/images/Stairlunge.jpg": "ea7821e07c1617f5d5a7d8af7720f7e7",
"assets/assets/images/user_2.png": "7eccb0a70693054530486c9faf4a27dd",
"assets/assets/images/doc2.png": "6c4b8f00c06411b3d46b2f62bf47460e",
"assets/assets/images/appop.png": "57c6ad286ab7e18d721163e6cc0093c8",
"assets/assets/images/bed.png": "0c0156baccf2d303e16b58d554c630f9",
"assets/assets/images/Drmmmgynec.jpg": "9a53c5298241c858f357b012e59ae9bf",
"assets/assets/images/doc1.png": "aaddc80bbdd433b7244bceef944cf5de",
"assets/assets/images/covid.jpg": "599fdc94f793adc8cfc98019c61464b6",
"assets/assets/images/healthy.png": "f683e23cf4d078570421b54aefd970b1",
"assets/assets/images/Cat-Cow.jpg": "79f0cf9e6aae554626b3491fa1e82cdc",
"assets/assets/images/virtualAppop.png": "cb4c36b18a083aa62ed7510d01ca79cc",
"assets/assets/images/Stairpushup.jpg": "b0824b1f369c15effdfd119df003fcf6",
"assets/assets/images/caugh.png": "9639f120b671705cabbb5416e00f8e01",
"assets/assets/images/login01.png": "ad0d576da246208b5f8b7b785a2ea652",
"assets/assets/images/BabyPigeon.jpg": "45a9dd883a13ace759dfa6ef3306c5a8",
"assets/assets/images/client_img.png": "aa5fd7d869a7217f2c5410af6fd0b713",
"assets/assets/images/washHand.png": "fe76a11cdbd5823d67e7bcf91acdf65c",
"assets/assets/images/undraw_pilates_gpdb.png": "a57e817e33a29b996813ec85d29065f0",
"assets/assets/images/manDoc.png": "66c3ce916d9ba3d278e5bdc4ebb53bac",
"assets/assets/images/morgue.png": "193d130fc6fe637a7e371d3723ca28e1",
"assets/assets/images/jhon2.png": "0ea5ba325421916a46233365176106e9",
"assets/assets/images/wash_hands.png": "403b264a110f0af9db5b9c47288ec3dd",
"assets/assets/images/headache.png": "7aacf91147e3571ac3aab07b9e7149f3",
"assets/assets/images/Img_1.png": "8737b19ca2018ab533c0ea38926d307d",
"assets/assets/images/doc5.png": "c6e7bec5a3ab26c1e4ad310674e307d8",
"assets/assets/images/virus.png": "bfbf6f56ed6350e51156698abf5c708b",
"assets/assets/images/gratitude.jpg": "36bf8d1ccec1375a7c61ad1c58945299",
"assets/assets/images/user_3.png": "4175bf553052bdd6e1f3e93b71aab1b5",
"assets/assets/images/Logo%2520Outlook.png": "b30d7f8d436a715920f5766a8f4f590c",
"assets/assets/images/workout.jpg": "531afce2381136df5df6e38e07b1bade",
"assets/assets/images/jhon6.png": "be4d1f770a7287a0c3dd2316a9ba7da9",
"assets/assets/images/ladyDoc.png": "9d6c7f0e09d400a9255818ed74275b3b",
"assets/assets/images/breathing.jpg": "6ba3d597736c9af656ed25e2180be63d",
"assets/assets/images/jhon.png": "7d127223618abfcaeb65c2fd0fb9977d",
"assets/assets/images/fever.png": "6ff9628a44a28b363593cae1ff6a6248",
"assets/assets/images/yoga.jpg": "2c08964deebcd05e0ea21275b6ab7d09",
"assets/assets/images/nurse.png": "91cc3dc6935bf9b77711e1ccf6f46827",
"assets/assets/images/doc4.png": "2ac9ac9fb67c7cb6d1bb16530c047349",
"assets/assets/images/logo.png": "5e3b63556df83de09b82f687cdce7c16",
"assets/assets/images/user_4.png": "bc10492e902061e17e16fd406be2c328",
"assets/assets/images/profile_pic.png": "5f56c3070f1c066ae15ecad12fb44f54",
"assets/assets/images/dr.vjy.jpg": "a2cfd8f36e3c37f8a3885bae8ba8e4ae",
"assets/assets/images/jhon3.png": "9685a48af5264709ecbef44b12547e18",
"assets/assets/images/DrMadhavan.jpg": "e76029eb317f074a7c890620b1c83961",
"assets/assets/images/ambulance.png": "a2c7bc24a3e60aab92b52ef2ad089ce3",
"assets/assets/images/calender.png": "41200dbb6b4aae3368bee689bcff84e2",
"assets/assets/images/Crabwalks.jpg": "8d9f72ec27ccb01d89820865dd82931c",
"assets/assets/images/mapLoc.png": "9af1199dd7b4d496edb07880b91e98ef",
"assets/assets/images/protein.jpg": "2743f036c019442db2c5ac6fa71c4916",
"assets/assets/images/mentalTrain.jpg": "a7401300970d431490ac920a56caa53c",
"assets/assets/images/wear-mask2.png": "376df4864d602f730a7442582eb63822",
"assets/assets/images/user_1.png": "b27e4014918be9067acf17512520f699",
"assets/assets/Icons/menu_doc.svg": "09673c2879de2db9646345011dbaa7bb",
"assets/assets/Icons/menu_tran.svg": "6c95fa7ae6679737dc57efd2ccbb0e57",
"assets/assets/Icons/excle_file.svg": "dc91b258ecf87f5731fb2ab9ae15a3ec",
"assets/assets/Icons/page.svg": "4ef1f7902519369328d2f767e013a660",
"assets/assets/Icons/doc_file.svg": "552a02a5a3dbaee682de14573f0ca9f3",
"assets/assets/Icons/widget.svg": "d0f726e196364e4dda71cc7deb937745",
"assets/assets/Icons/bell.svg": "9aea806dbf838f574307a1cdaa30d468",
"assets/assets/Icons/home.svg": "6562cb62d0241e03e68924b953972428",
"assets/assets/Icons/menu_profile.svg": "fe56f998a7c1b307809ea3653a1b62f9",
"assets/assets/Icons/figma_file.svg": "0ae328b79325e7615054aed3147c81f9",
"assets/assets/Icons/drop_box.svg": "3295157e194179743d6093de9f1ff254",
"assets/assets/Icons/menu_task.svg": "1a02d1c14f49a765da34487d23a3093b",
"assets/assets/Icons/search.svg": "396d519c18918ed763d741f4ba90243a",
"assets/assets/Icons/unknown.svg": "b2f3cdc507252d75dea079282f14614f",
"assets/assets/Icons/menu_setting.svg": "d0e24d5d0956729e0e2ab09cb4327e32",
"assets/assets/Icons/chart.svg": "cf4887fca371f038418b138973d5af22",
"assets/assets/Icons/media.svg": "059dfe46bd2d92e30bf361c2f7055c3b",
"assets/assets/Icons/application.svg": "9be889c185336f26e90f8b567607c957",
"assets/assets/Icons/ui.svg": "d0f726e196364e4dda71cc7deb937745",
"assets/assets/Icons/Paperclip.svg": "d7e7dec5e3b15d70d1cc543902e3e3b8",
"assets/assets/Icons/one_drive.svg": "aa908c0a29eb795606799385cdfc8592",
"assets/assets/Icons/google_drive.svg": "9a3005a58d47a11bfeffc11ddd3567c1",
"assets/assets/Icons/pdf_file.svg": "ca854643eeee7bedba7a1d550e2ba94f",
"assets/assets/Icons/folder.svg": "40a82e74e930ac73aa6ccb85d8c5a29c",
"assets/assets/Icons/menu_notification.svg": "460268d6e4bdeab56538d7020cc4b326",
"assets/assets/Icons/forms.svg": "c064d6e6aabc0e44a9e87d0889d2037c",
"assets/assets/Icons/Markup.svg": "2a0f37b8f81e85e200239f26c8295718",
"assets/assets/Icons/logo.svg": "b3af0c077a73709c992d7e075b76ce33",
"assets/assets/Icons/xd_file.svg": "38913b108e39bcd55988050d2d80194c",
"assets/assets/Icons/media_file.svg": "2ac15c968f8a8cea571a0f3e9f238a66",
"assets/assets/Icons/documents.svg": "51896b51d35e28711cf4bd218bde185d",
"assets/assets/Icons/sound_file.svg": "fe212d5edfddd0786319edf50601ec73",
"assets/assets/Icons/menu_store.svg": "2fd4ae47fd0fca084e50a600dda008cd",
"assets/assets/Icons/msg.svg": "d74b10fc0e0db96ad6446a2e65dc35b7",
"assets/assets/Icons/menu_dashbord.svg": "b2cdf62e9ce9ca35f3fc72f1c1fcc7d4",
"assets/assets/fonts/OnePlus-Regular.ttf": "478bc7ba04e0a6f8b63518330b4e6330",
"assets/FontManifest.json": "c04e27ee9a0069e5a7ba5b3c767db58a",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/AssetManifest.json": "7c1b74aee4c2ae1d4fd4ea1ef82c4518",
"assets/NOTICES": "39c361e56be1159b1e81562f88af1eea",
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
