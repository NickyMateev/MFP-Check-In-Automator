function openPage() {
  chrome.tabs.create({
    url: "https://github.com/NickyMateev/MFP-Weight-Automation"
  });
}

chrome.browserAction.onClicked.addListener(openPage);
