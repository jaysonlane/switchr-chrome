//generated with extensionizr.com

chrome.commands.onCommand.addListener(function(command) {
  if (command == "up") {
    toggle();
  } else if (command == "down") {
    toggle();
  }
})

function toggle(){
  chrome.tabs.getSelected(null,function(tab) {
    var tablink = tab.url;

    if(tablink.substr(-2) === '.m'){
      var newLocation = tablink.replace('.m', '.h');
    }
    else if(tablink.substr(-2) === '.h'){
      var newLocation = tablink.replace('.h', '.m');
    }
    chrome.tabs.update(tab.id, {url: newLocation});
  });
}