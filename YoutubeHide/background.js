function checkForValidUrl(tabId, changeInfo, tab) {
if (tab.url.indexOf("www.youtube.com")>=0) {
chrome.pageAction.show(tabId);
}
};

chrome.tabs.onUpdated.addListener(checkForValidUrl);

chrome.pageAction.onClicked.addListener(function(tab) {
	  chrome.tabs.executeScript({
	    code: 'var player = document.getElementsByClassName("html5-video-player")[0];if(player.style.height=="10%"){player.style.cssText="height=100%;top:0%;transform:none;"}else player.style.cssText="height: 10%;top: 100%;transform: translateY(-90%);";console.log("working")'
	  });
});




