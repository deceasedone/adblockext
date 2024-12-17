Description

This AdBlocker is a lightweight Chrome extension designed to block intrusive ads and tracking scripts on web pages. It blocks ad-serving network requests and removes ad elements directly from the page, ensuring a cleaner and faster browsing experience.
Features

    🚫 Blocks Ads: Prevents ads from loading using advanced network filtering rules.
    🧹 Removes Ad Elements: Dynamically removes visible ad elements from web pages.
    ⚡ Improves Performance: Reduces page load time by blocking unwanted resources like scripts, images, and frames.
    🛡️ Blocks Inline Ad Scripts: Prevents JavaScript functions commonly used to display ads.

How It Works

This AdBlocker uses two main approaches to block ads:

    Network-level Blocking (via declarativeNetRequest):
        Blocks requests to ad servers (e.g., ads, doubleclick, googlesyndication) before they load.

    Content Script Removal:
        Injects a script (content.js) to remove ad elements from the DOM.
        Blocks inline JavaScript functions that display ads.

Files Overview
manifest.json

Defines the extension configuration:

    Permissions to block network requests and modify content on web pages.
    Specifies the background service worker (background.js) and the content script (content.js).

background.js

Applies blocking rules using the declarativeNetRequest API to stop network requests matching common ad-related patterns.
content.js

    Removes ad-related elements using CSS selectors.
    Observes page changes with a MutationObserver to dynamically remove ads.
    Blocks inline ad-displaying functions like showAds().

Installation
1. Clone or Download the Repository

git clone https://github.com/deceasedone/adblockext.git
cd adblockext

2. Load the Extension in Chrome

    Open Chrome and go to chrome://extensions/.
    Enable Developer Mode (toggle in the top-right corner).
    Click "Load unpacked".
    Select the folder containing manifest.json, background.js, and content.js.

Usage
    Visit any website with ads.
    Ads should no longer load, and ad placeholders should disappear.
    Open Chrome DevTools (F12 or Ctrl+Shift+I) to confirm:
        Network Requests to known ad servers are blocked.
        Ad elements are removed from the DOM.
