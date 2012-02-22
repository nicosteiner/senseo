var WatchPug = WatchPug || {};

var data = require("self").data;

var chrome = require("chrome");
var windows = require("windows").browserWindows;
var panel = require("panel");
var tabs = require("tabs");
var pageMod = require("page-mod");
var request = require("request").Request;
var ss = require("simple-storage");

var activeDocumentComponents;

var thisWindow = windows.activeWindow;

WatchPug.AddonPanel = panel.Panel({

  width: 600,
  height: 352,
  
  activeTabWorker: null,
  
  type: 'arrow',
  
  contentURL: data.url('panel.html'),
  
  contentScriptFile: [data.url('script/jquery-1.7.1.min.js'),
                      data.url('script/panel.js')],
                      
  onMessage: function (contentScriptMessage) {
  
    if (contentScriptMessage.command === 'open-tab') {
  
      // Open a new tab on active window and make tab active
      
      thisWindow.tabs.open(contentScriptMessage.url);
  
    }
    
    if (contentScriptMessage.command === 'request-url') {
  
      // gets response of url request
      
      request({
      
        url: contentScriptMessage.url,
        
        onComplete: function (response) {
        
          WatchPug.AddonPanel.postMessage({
          
            requestUrl: true,
            
            response: response.text
            
          });
        
        }
        
      }).get();
  
    }
    
    if (contentScriptMessage.command === 'highlight-element') {
    
      if (WatchPug.AddonPanel.activeTabWorker) {
    
        // pass through message to analyze.js
    
        WatchPug.AddonPanel.activeTabWorker.postMessage(contentScriptMessage);
        
      }
    
    }
    
    if (contentScriptMessage.command === 'store-data') {
     
      ss.storage.data = ss.storage.data || [];
    
      ss.storage.data[contentScriptMessage.dataKey] = contentScriptMessage.dataValue;

    }
    
    if (contentScriptMessage.command === 'read-data') {
      
      if (typeof ss.storage.data !== 'undefined') {
    
        WatchPug.AddonPanel.postMessage({
          
          readData: true,
          
          dataKey: contentScriptMessage.dataKey,
          
          dataValue: ss.storage.data[contentScriptMessage.dataKey]
          
        });
        
      }
    
    }
    
  },
  
  onShow: function() {
  
    // when panel is shown, the document of the active tab is analyzed by analyze.js
    // result of analyzation is passed to panel.js as JSON object
  
    WatchPug.AddonPanel.activeTabWorker = tabs.activeTab.attach({

      contentScriptFile: [data.url('script/jquery-1.7.1.min.js'),
                          data.url('script/analyze.js')],
    
      onMessage: function (contentScriptMessage) {
      
        WatchPug.AddonPanel.postMessage(contentScriptMessage);
      
      }
      
    });
  
  }
  
});

WatchPug.AddonPanel.ToolbarIcon = (function (xulDoc) {

  var doc, toolbar, button, searchPugExtensionButton;
  
  // Add a toolbar icon
  
  doc = xulDoc || chrome.components.classes['@mozilla.org/appshell/window-mediator;1'].getService(chrome.components.interfaces.nsIWindowMediator).getMostRecentWindow('navigator:browser').document;
  
  toolbar = doc.getElementById('nav-bar');
  
  searchPugExtensionButton = doc.getElementById('searchpug-extension');
  
  // remove and recreate extension for development reasons
  
  // REMOVE FOR PRODUCTION!
  
  if (searchPugExtensionButton) {
      
    searchPugExtensionButton.parentNode.removeChild(searchPugExtensionButton);
      
  }
  
  if (toolbar){
  
    button = doc.createElement('toolbarbutton');
    
    toolbar.appendChild(button);
    
    button.setAttribute('tooltiptext', 'SearchPug');
    
    button.setAttribute('label', 'SearchPug');
    
    button.id = 'searchpug-extension';
    
    button.className = ' searchpug-extension toolbarbutton-1 chromeclass-Toolbar-Additional chromeclass-toolbar-additional ';
    
    button.image = data.url('img/logo-16.png');
    
    button.onmousedown = function(e) {

      WatchPug.AddonPanel.show(e.target);
      
    };
    
  }
  
}());