// This file is optional and you can replace it with your own implementation

// This lets the app work offline and load faster
// Note this comes with some pitfalls. Learn more about service workers:
// https://bit.ly/CRA-PWA

// Make sure to update the URL to match your deployed app
const isLocalhost = Boolean(
  window.location.hostname === "localhost" ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === "[::1]" ||
    // 127.0.0.0/8 are considered localhost for IPv4.
    window.location.hostname.match(/^127\.\d+\.\d+\.\d+$/)
);

export function register(config) {
  if ("serviceWorker" in navigator) {
    const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

    if (isLocalhost) {
      // This is running on localhost. Let's check if a service worker still exists or not.
      checkValidServiceWorker(swUrl, config);

      // Add some additional logging to localhost, pointing developers to the
      // service worker/PWA documentation.
      navigator.serviceWorker.ready.then(() => {
        console.log(
          "This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA"
        );
      });
    } else {
      // Is not localhost. Just register service worker
      registerValidSW(swUrl, config);
    }
  }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker
    .register(swUrl)
    .then((registration) => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        if (installingWorker == null) {
          return;
        }
        installingWorker.onstatechange = () => {
          if (installingWorker.state === "installed") {
            if (navigator.serviceWorker.controller) {
              // At this point, the updated precached content has been fetched,
              // but the previous service worker will still serve the older
              // content until all client tabs are closed.
              console.log(
                "New content is available and will be used when all tabs for this page are closed."
              );
            } else {
              // At this point, everything has been precached.
              console.log("Content is cached for offline use.");
            }
          }
        };
      };
    })
    .catch((error) => {
      console.error("Error during service worker registration:", error);
    });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl)
    .then((response) => {
      // Ensure service worker exists
      const isValidSW = response.headers
        .get("content-type")
        .includes("javascript");
      if (isValidSW) {
        // Service worker found. Proceed with registration.
        registerValidSW(swUrl, config);
      } else {
        // No service worker. Reload the page.
        navigator.serviceWorker.ready.then(() => {
          window.location.reload();
        });
      }
    })
    .catch(() => {
      console.error(
        "No internet connection found. App is running in offline mode."
      );
    });
}

export function unregister() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        registration.unregister();
      })
      .catch((error) => {
        console.error(error.message);
      });
  }
}
