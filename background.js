chrome.runtime.onInstalled.addListener(() => {
  chrome.declarativeNetRequest.updateDynamicRules({
    addRules: [
      {
        id: 1,
        priority: 1,
        action: { type: "block" },
        condition: {
          urlFilter: "ads|adserver|doubleclick|googlesyndication|tracking",
          resourceTypes: ["script", "image", "xmlhttprequest", "sub_frame"]
        }
      },
      {
        id: 2,
        priority: 1,
        action: { type: "block" },
        condition: {
          urlFilter: "*/ads/*",
          resourceTypes: ["script", "image", "sub_frame"]
        }
      }
    ],
    removeRuleIds: [1, 2]
  });
  console.log("Blocking rules applied via declarativeNetRequest.");
});
