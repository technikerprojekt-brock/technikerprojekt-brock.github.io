'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/config": "0edcf5bfba304372623a22b15b3e09a2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "b1b939d10d02475a3ebdf0abf41dd862",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d475ef97a655e2c8555a0b650def373a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f7f483ecd5c74ae15ffccff6c896b6f7",
".git/logs/refs/heads/main": "f7f483ecd5c74ae15ffccff6c896b6f7",
".git/logs/refs/remotes/origin/HEAD": "b1dfe1d57b7bb96624f8acf7031c4e91",
".git/logs/refs/remotes/origin/main": "bb5258e8845267cb33c009572e5f0674",
".git/objects/0a/687f4fa614a4c501392155dafa5d22f6d54ed7": "e48e074cedf36ec192dc7dc11f511396",
".git/objects/67/32392b8d7a0d582073691145bc8d61a6d74afb": "8c3198737dcef33c54f01628b634164d",
".git/objects/a6/cd95ee3d9ff3a61137e0fed498c6b9d98ed78f": "3f30df8ca27c1cf9c40d5fb8f180138f",
".git/objects/e9/c4f95381b0a863519b5548f7a3748759eca755": "9fde39dbed7be5f94e518140b9503ed5",
".git/objects/f0/abc881fa7c8403dfe2cc2f411a0442cd54b45c": "61934fad6d23e6f13453379f469fafd6",
".git/objects/fa/fc7d5c1b466d3d48791393724e13c5f35ffdb3": "427501242fab4ec8d419cd4d413fc153",
".git/objects/pack/pack-947972a8e7acb238ff9adeaafd2e95a868267d02.idx": "9abd90aff3d300e5207f9f3a2303111e",
".git/objects/pack/pack-947972a8e7acb238ff9adeaafd2e95a868267d02.pack": "da91f5acbc693e360fbbe5542fcfb84b",
".git/objects/pack/pack-c2465a50688a3539265c72048102fde4f2b7dc6c.idx": "78e524acdf99907ec69db1721587abce",
".git/objects/pack/pack-c2465a50688a3539265c72048102fde4f2b7dc6c.pack": "eeb10c2fa508074059d100c3df57567f",
".git/packed-refs": "2e7218716c5f2a68631d5b7b71a847c1",
".git/refs/heads/main": "baa0a86ac420f3f7346c5f37c9a57727",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "075272b27d601828fb390d00eff61999",
"apple-icon-114x114.png": "cc03c2a35b2baa40dc8ba02afe9f569a",
"apple-icon-120x120.png": "1c399c2cbcbb40227bee0156a350fba3",
"apple-icon-144x144.png": "985a12b028e5fe7f9ce801b81dff2018",
"apple-icon-152x152.png": "0de8f75c2cc1d461a5ace8dcf56d68e7",
"apple-icon-180x180.png": "41dd468502b45459fcfe8d7d350da1ae",
"apple-icon-57x57.png": "a430bc6cb48ec12848e8873bc0f85cd6",
"apple-icon-60x60.png": "5157abe8b4a03fb4c6c35d43cdcb593f",
"apple-icon-72x72.png": "c56750952675c505d6b7edd66dedc4e5",
"apple-icon-76x76.png": "a642bba02d923458ed7faca60f82008d",
"apple-icon-precomposed.png": "52b358511d1f68349b98920a1482d578",
"apple-icon.png": "52b358511d1f68349b98920a1482d578",
"assets/AssetManifest.bin": "4001792eea29859c14373f1717a399bb",
"assets/AssetManifest.json": "aa68721dd2e90e29849470e334afa60a",
"assets/assets/fonts/visuelt/VisueltPro-Black.ttf": "691b6f9aa3ee625e3cd8da2f8849a126",
"assets/assets/fonts/visuelt/VisueltPro-Bold.ttf": "18acd33c965a455418d4204f0f334ea8",
"assets/assets/fonts/visuelt/VisueltPro-ExtraLight.ttf": "90bfa0766e43260710e3c6ac0f78c9e9",
"assets/assets/fonts/visuelt/VisueltPro-Light.ttf": "2a1df2ff00c2611bf1b7fdeeaeebfa59",
"assets/assets/fonts/visuelt/VisueltPro-Medium.ttf": "cf4dbc20776a2b309fe30a9bbfe7de0a",
"assets/assets/fonts/visuelt/VisueltPro-Regular.ttf": "0f8cd2494eb8c5e3a33352b2dd38fd61",
"assets/assets/fonts/visuelt/VisueltPro-Thin.ttf": "82d7b5b67c24f00acb08f2dccf1fd03b",
"assets/assets/images/aufbau.jpg": "3784a343411cbb9479292909230f7c20",
"assets/assets/images/Aufsetzen.png": "1f9ee54af10e3a72743d8ebc18802456",
"assets/assets/images/Brock%2520Kehrtechnik%2520GmbH.png": "ec6847bbb2b05cc8ae6c79386af2751a",
"assets/assets/images/caesar.png": "c2bf68cb3b24b5361c95d04c445511a8",
"assets/assets/images/circle.png": "663d5187ada8666bfa87120d1665605f",
"assets/assets/images/Cover.jpg": "f5cd0f78b0b2efb57eefccac0baf0650",
"assets/assets/images/Daniel%2520Grams.jpg": "c53b3d958f5812673746549c46d1142a",
"assets/assets/images/down-arrow-2.png": "de203dedb01f2871b4ebbec490c20a6c",
"assets/assets/images/down-arrow.png": "4393cd5feeb20fb468c7eb223d1bbd06",
"assets/assets/images/google_play.png": "7c42f3803d546db3d393106501dba541",
"assets/assets/images/ios-down-arrow.png": "fa4679d2972f1d11355142a60ed34ede",
"assets/assets/images/Jurij%2520Kuvaev.png": "8cf064387e238b3733dd46a4b6239501",
"assets/assets/images/L%25C3%25B6sung.png": "a9c27e225152dbbf06b8b919d4972d67",
"assets/assets/images/Niklas%2520Benski.jpg": "0416049be135ee42990613ba47a50aca",
"assets/assets/images/Problematik.jpg": "682c58a4c921968cf36475e62bb4954b",
"assets/assets/images/Produktpalette%25201.png": "a39cff6c04a5aad53a0bdf0f05071d5e",
"assets/assets/images/Produktpalette%25202.png": "74eddf386cae25915d118a9876226e26",
"assets/assets/images/projects/aerium-v1/portfolio_cover.png": "44d787594b26ade2562489ced20d9914",
"assets/assets/images/projects/aerium-v1/portfolio_design_2.png": "415b12138860ce60055b3ce39e517fde",
"assets/assets/images/projects/aerium-v1/portfolio_design_3.png": "4b8a024161c0d3f30b858ac60b9286d0",
"assets/assets/images/projects/aerium-v2/aerium_v2.jpg": "33ec4d62fe74fb6ee3b01301f92ceb9c",
"assets/assets/images/projects/aerium-v2/first.jpg": "d7a4be69fcea5718ce8fdaa844ce0988",
"assets/assets/images/projects/aerium-v2/last.jpg": "ee1b6eee2d5df5a5bfdcb686266b75a0",
"assets/assets/images/projects/aerium-v2/overall.jpg": "f114c609432d9115658f5477900f66a7",
"assets/assets/images/projects/aerium-v2/typography.jpg": "e16664ace87aa12b2266e6f8127ca05f",
"assets/assets/images/projects/disneyplus/disneyplus_components.png": "74d9e2263cebd38337ac2ae9d2f23b16",
"assets/assets/images/projects/disneyplus/disneyplus_cover.png": "ffa11a0c8f114e0a24b31bb1790f2ef8",
"assets/assets/images/projects/disneyplus/disneyplus_description.png": "f049e03a0d786b44d57f80e702f10a5c",
"assets/assets/images/projects/disneyplus/disneyplus_designs.png": "084289a49e4ec07af37d41eb0b919123",
"assets/assets/images/projects/disneyplus/disneyplus_downloads_feature.png": "3bb3d18e2b7af7b62e3bc90a8deed037",
"assets/assets/images/projects/disneyplus/disneyplus_great_menu.png": "d13b01ee672be2e3e884fe866db90359",
"assets/assets/images/projects/disneyplus/disneyplus_header.png": "1ef584f42c10fd2f994f44e35d281751",
"assets/assets/images/projects/disneyplus/disneyplus_home.png": "7c3f46edc91974a22db6ecab11e49cbd",
"assets/assets/images/projects/disneyplus/disneyplus_mockups.png": "ec3d2333044bc2622030e38eb84a1b90",
"assets/assets/images/projects/disneyplus/disneyplus_more_description.png": "54c40930e0035fee095cc5f26e09e8d4",
"assets/assets/images/projects/disneyplus/disneyplus_profiles.png": "ee5c8f987396dbb6157911982b9e983d",
"assets/assets/images/projects/disneyplus/disneyplus_theme.png": "b4a28335035d4b169f1033313801fcc5",
"assets/assets/images/projects/disneyplus/disneyplus_the_end.png": "32e658209ce45e9227860a8c0fbf1b54",
"assets/assets/images/projects/disneyplus/mockups.png": "bfec31223be46e6c269d8bc71f3f707e",
"assets/assets/images/projects/drop/drop_cover.png": "c50dd8fc206812051747e58cf5a8b345",
"assets/assets/images/projects/drop/drop_description.gif": "7a0eede4ed79d2468eeaec6d30347b3c",
"assets/assets/images/projects/drop/drop_easy_access.gif": "7657c8f99a7a3a405cb71cb1f4bee892",
"assets/assets/images/projects/drop/drop_flowchart.png": "6601108c834215bb982c5fa49f586591",
"assets/assets/images/projects/drop/drop_minimal_design.png": "06c3434542050151428b3f66a0193244",
"assets/assets/images/projects/drop/drop_simple.png": "c4c00ba6b1933a304067dda102a922dd",
"assets/assets/images/projects/drop/drop_thanks.gif": "7f63f39ed7c894ee6e0755f77a39afb5",
"assets/assets/images/projects/drop/drop_wireframes.gif": "155af5f6c5def746328626cfce09c163",
"assets/assets/images/projects/flutter_catalog/activities.png": "56b8a82f91b3bb17fc2da735be8309e2",
"assets/assets/images/projects/flutter_catalog/flutter_catalog_cover.png": "529c018ceb7db5d85e0bba13a4cd19c3",
"assets/assets/images/projects/flutter_catalog/onboarding.png": "78cd62661bd65bca48016781ec5af76d",
"assets/assets/images/projects/flutter_catalog/screens.png": "f384d904e19edcdf3b83ac9fab4a2514",
"assets/assets/images/projects/flutter_catalog/stats.png": "c6c5da388e4771644e3a0057737cc018",
"assets/assets/images/projects/flutter_catalog/thanks.png": "f23385476a0df7db049d7b8f94714706",
"assets/assets/images/projects/flutter_catalog/typography.png": "b12b17f85e8e12bd2ccab08e987c640c",
"assets/assets/images/projects/foodybite/foodybite_cover.png": "969daa4932408c630eb26f795cd84840",
"assets/assets/images/projects/foodybite/foodybite_home.png": "831c86f2e1dd6fa238acd532e41b3607",
"assets/assets/images/projects/foodybite/foodybite_home_flow.png": "f144497bae302b17e440392f547410e7",
"assets/assets/images/projects/foodybite/foodybite_review_favorite_notifications_flow.png": "e80ce1073e823a2fc83ddbf1515794f7",
"assets/assets/images/projects/foodybite/foodybite_starting_flow.png": "77c7833485f0a71c95e3a74f3f01b7c4",
"assets/assets/images/projects/foodybite/foodybite_typography.png": "af6e1b156ad00cfb382824b30ba38a35",
"assets/assets/images/projects/login_catalog/login4.png": "f5eb46c00b1ad99b48dc75648ae232c0",
"assets/assets/images/projects/login_catalog/login5.png": "bafb620a4388df5ef86cff21ef895491",
"assets/assets/images/projects/login_catalog/login7.jpeg": "34412e31d874c3147f29d3bc522efbd2",
"assets/assets/images/projects/login_catalog/login8.png": "2bf8b3ab8d940dfb5c48069195c2d039",
"assets/assets/images/projects/login_catalog/login9.png": "4eb5737139e26eb31c1bea5e6e2c0a6b",
"assets/assets/images/projects/login_catalog/login_catalog_cover.jpg": "8142a609044c0f5b26df2964fe9304c4",
"assets/assets/images/projects/nimbus/nimbus.jpg": "9f925a888c2ff02c9f1206f99c2b155d",
"assets/assets/images/projects/nimbus/nimbus_cover.jpg": "454409edbf32cc8432d70c69155a6016",
"assets/assets/images/projects/otp_package/otp_cover.png": "6fc7ff3a9d1b6d8cbb81348c8f2df184",
"assets/assets/images/projects/outfitr/outfitr_1.jpeg": "5a72c14039670e01bcbfaccbff889551",
"assets/assets/images/projects/outfitr/outfitr_2.jpeg": "b5c6638904552202a14d3d65f6d69116",
"assets/assets/images/projects/outfitr/outfitr_4.jpeg": "4f45a2d1f2735a813f9e3ce4ca83f351",
"assets/assets/images/projects/outfitr/outfitr_5.jpeg": "32317c7e7d7bf50c3ca110d6d393e670",
"assets/assets/images/projects/outfitr/outfitr_6.jpeg": "8a986255dfcd301d00891cf0a6288df8",
"assets/assets/images/projects/outfitr/outfitr_cover.jpg": "73c49501f831207eb63ca115c5b1dd31",
"assets/assets/images/projects/roam/roam_cover.jpeg": "a67b0ed338d81feb4cf60955c3a821b2",
"assets/assets/images/projects/roam/roam_explore.jpeg": "545a73fcfd824fdc7aa66ec3b5601cf8",
"assets/assets/images/projects/roam/roam_flow_chart.png": "50aa1d22e98a682fb24ad8beca7f306f",
"assets/assets/images/projects/roam/roam_home.jpeg": "9bcacb5453047dca89cf69352742765f",
"assets/assets/images/projects/roam/roam_onboarding.jpeg": "d6f2a2c09df8af0fc8708db8bd3c9a93",
"assets/assets/images/projects/roam/roam_overall.jpeg": "5c76cf22ede0a7955733f39d4439a055",
"assets/assets/images/projects/roam/roam_profile.jpeg": "3351fb0171a75f53d2974e20e586db86",
"assets/assets/images/projects/roam/wireframes_app.jpeg": "2fba25598d725ec44a6b828448535e3a",
"assets/assets/images/projects/roam/wireframes_onboarding.jpeg": "0793bcaad704dc77c2115eca32ec488b",
"assets/assets/images/projects/roam/wireframes_signup_login.jpeg": "3f9c2d5af711cbc401036749fca0ec76",
"assets/assets/images/right-arrow.png": "62a7bab73a0fe40acd3f4555adfcab91",
"assets/assets/images/Transport.png": "fb33f648a8f84d429fc367479f8afdb4",
"assets/assets/images/up-arrow.png": "d0c6457f5704962b99f0e6aa3e9b18e7",
"assets/assets/images/works.png": "5c6f8eb3a22f703781aad6c2528cf0cd",
"assets/FontManifest.json": "a78f950d25c1e29b92a4a309465e60cd",
"assets/fonts/MaterialIcons-Regular.otf": "cc8f818edc21d485c1d06d27a1d2b35c",
"assets/NOTICES": "2ae6a748ce8b79b93da002b4cb7417f4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/flutter_feather_icons/fonts/feather.ttf": "a2bbdbf8ee3e7b49dc5c43e73e125ec0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d7791ef376c159f302b8ad90a748d2ab",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5070443340d1d8cceb516d02c3d6dee7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "658b490c9da97710b01bd0f8825fce94",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"browserconfig.xml": "97775b1fd3b6e6c13fc719c2c7dd0ffe",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon-16x16.png": "591ee920a7bed4bbaee618ef9916e9ad",
"favicon-32x32.png": "79916e8c7124b3d8d11fc0a50815f217",
"favicon-96x96.png": "ac2d9415c9c5123de0d2d0580ca41d0c",
"favicon.ico": "3931950d7e1d53fe8a97aabfc686f35e",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/android-icon-144x144.png": "985a12b028e5fe7f9ce801b81dff2018",
"icons/android-icon-192x192.png": "c494e5d491fb6f2ad357f4534079b5b1",
"icons/android-icon-36x36.png": "378630ccd067ecb606adec6d3247dc56",
"icons/android-icon-48x48.png": "295517bc213cac20e4e801603abd9823",
"icons/android-icon-72x72.png": "c56750952675c505d6b7edd66dedc4e5",
"icons/android-icon-96x96.png": "ac2d9415c9c5123de0d2d0580ca41d0c",
"index.html": "529b1d57e3ee5bb7e29d201c88d1edcc",
"/": "529b1d57e3ee5bb7e29d201c88d1edcc",
"main.dart.js": "fce964fbb2cafe608fc1072a868e8db8",
"manifest.json": "e50e6a1c9ed6452635d3211f39501e0d",
"ms-icon-144x144.png": "985a12b028e5fe7f9ce801b81dff2018",
"ms-icon-150x150.png": "b64bf40282867cbb78debd0c2c95fc31",
"ms-icon-310x310.png": "90915543025d26f220b6d304b3e58591",
"ms-icon-70x70.png": "40b8fd9d4034e82523cdbb28d36888f1",
"version.json": "272c8b75a305ff433bdc1d8ab79105ff"};
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
