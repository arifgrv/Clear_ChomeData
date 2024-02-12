chrome.action.onClicked.addListener(function(tab) {
  clearBrowsingData();
});

function clearBrowsingData() {
  chrome.browsingData.remove({
    "since": 0
  }, {
    "appcache": true,
    "cache": true,
    "cookies": false,
    "downloads": true,
    "fileSystems": true,
    "formData": true,
    "history": true,
    "indexedDB": true,
    "localStorage": true,
    "pluginData": true,
    "serviceWorkers": true,
    "webSQL": true
  }, function() {
    console.log('Browsing data cleared');
  });
}
