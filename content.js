const adSelectors = [
    "iframe[src*='ads']",
    "div[id^='ad_'], div[class*='ad-'], div[data-ad]",
    "ins.adsbygoogle",
    "[id^='google_ads_iframe']",
    "a[href*='sponsor']",
    "img[src*='banner']",
    "div[class*='sponsor']"
  ];
  
  function removeAds() {
    try {
      adSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
          el.remove();
          console.log(`Removed ad element: ${selector}`);
        });
      });
    } catch (error) {
      console.error("Error removing ads:", error);
    }
  }
  
  removeAds();
  
  const observer = new MutationObserver(() => {
    removeAds();
  });
  observer.observe(document.body, { childList: true, subtree: true });
  
  (function blockInlineAds() {
    const blockedFunctions = [
      "showAds",
      "loadBanner",
      "insertAd",
      "displayGoogleAds"
    ];
  
    blockedFunctions.forEach(func => {
      try {
        if (window[func]) {
          window[func] = () => {
            console.log(`Blocked inline ad function: ${func}`);
          };
        }
      } catch (error) {
        console.error(`Error blocking function ${func}:`, error);
      }
    });
  
    console.log("Inline ad-blocker script initialized.");
  })();
  