self.addEventListener("install", (evt) => {
  console.log("service worker is installed");
});

self.addEventListener("activate", (evt) => {
  console.log("service worker is activated");
});

self.addEventListener("fetch", (evt) => {
  console.log("service worker is fetching");
});
