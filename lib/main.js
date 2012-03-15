var WatchPug = WatchPug || {};

var data = require("self").data;

var chrome = require("chrome");
var windows = require("windows").browserWindows;
var panel = require("panel");
var tabs = require("tabs");
var pageMod = require("page-mod");
var request = require("request").Request;
var ss = require("simple-storage");
var sp = require("simple-prefs");

var activeDocumentComponents;

var thisWindow = windows.activeWindow;

var hideToolbarIconPref = sp.prefs.hideToolbarIcon;
var colorBlindFriendlyPref = sp.prefs.colorBlindFriendly;

// register some listeners

// caring the preferences

sp.on('hideToolbarIcon', function() {

  hideToolbarIconPref = sp.prefs.hideToolbarIcon;

  WatchPug.AddonPanel.showToolbarIcon();

});

sp.on('colorBlindFriendly', function() {

  colorBlindFriendlyPref = sp.prefs.colorBlindFriendly;

  WatchPug.AddonPanel.port.emit('getSettings', {
  
    'toolbar-icon': hideToolbarIconPref,
    
    'color-blind': colorBlindFriendlyPref
  
  });
  
});

// add an toolbar icon for new windows opened by the user

windows.on('open', function() {

  WatchPug.AddonPanel.showToolbarIcon();
  
});

// panel logic

WatchPug.AddonPanel = panel.Panel({

  width: 600,
  height: 352,
  
  activeTabWorker: null,
  
  type: 'arrow',
  
  contentURL: data.url('panel.html'),
  
  contentScriptFile: [data.url('script/jquery-1.7.1.min.js'),
                      data.url('script/jquery-ba-replacetext.js'),
                      data.url('script/panel.js')],
                      
  onMessage: function (contentScriptMessage) {
  
    if (contentScriptMessage.command === 'highlight-element') {
    
      if (WatchPug.AddonPanel.activeTabWorker) {
    
        // pass through message to analyze.js
    
        WatchPug.AddonPanel.activeTabWorker.postMessage(contentScriptMessage);
        
      }
    
    }
  
  },
  
  onShow: function() {
  
    // when panel is shown, the document of the active tab is analyzed by analyze.js
    // result of analyzation is passed to panel.js as JSON object
    
    // external data is fetched asynchronously
  
    WatchPug.AddonPanel.activeTabWorker = tabs.activeTab.attach({

      contentScriptFile: [data.url('script/jquery-1.7.1.min.js'),
                          data.url('script/analyze.js')],
    
      onMessage: function (contentScriptMessage) {
      
        WatchPug.AddonPanel.postMessage(contentScriptMessage);
      
      }
      
    });
    
    WatchPug.AddonPanel.port.emit('getSettings', {
    
      'toolbar-icon': hideToolbarIconPref,
      
      'color-blind': colorBlindFriendlyPref
    
    });
  
    WatchPug.AddonPanel.getResponseText = function(key, url) {

      var doc, html, body;
      
      // there might by strange protocols
      
      if (url.substr(0, 4) === 'http') {
    
        request({
        
          url: url,
          
          onComplete: function (response) {
            
            // parse HTML
            
            // see: https://developer.mozilla.org/en/Code_snippets/HTML_to_DOM
            
            doc = chrome.components.classes['@mozilla.org/appshell/window-mediator;1'].getService(chrome.components.interfaces.nsIWindowMediator).getMostRecentWindow('navigator:browser').document;
            html = doc.implementation.createDocument('http://www.w3.org/1999/xhtml', 'html', null);
            body = doc.createElementNS('http://www.w3.org/1999/xhtml', 'body');
          
            html.documentElement.appendChild(body);

            body.appendChild(chrome.components.classes['@mozilla.org/feed-unescapehtml;1']
                .getService(chrome.components.interfaces.nsIScriptableUnescapeHTML)
                .parseFragment(response.text, false, null, body));

            WatchPug.AddonPanel.port.emit('getResponseText', {
            
              key: key,
              
              url: url,
              
              headers: response.headers,
              
              status: response.status,
              
              text: response.text,
              
              json: response.json,
              
              html: body
              
            });
          
          }
          
        }).get();
        
      } else {

        // fake "not found" response
      
        WatchPug.AddonPanel.port.emit('getResponseText', {
        
          key: key,
          
          status: 404
          
        });
        
      }

    };

    WatchPug.AddonPanel.port.on('getResponseText', function (key, url) {
      
      WatchPug.AddonPanel.getResponseText(key, url);
      
    });
  
    WatchPug.AddonPanel.port.on('crawlPages', function (pages) {
      
      WatchPug.AddonPanel.crawlPages(pages);
      
    });
  
    WatchPug.AddonPanel.activeTabWorker.port.on('getResponseText', function (key, url) {
      
      WatchPug.AddonPanel.getResponseText(key, url);
      
    });
  
  },
  
  onHide: function() {
  
    WatchPug.AddonPanel.port.emit('resetUI');
  
  }
  
});

WatchPug.CrawlPanel = panel.Panel({

  width: 1200,
  height: 700,
  
  contentURL: data.url('crawler.html'),
  
  contentScriptFile: [data.url('script/jquery-1.7.1.min.js'),
                      data.url('script/crawl-pages.js')],
                      
  onMessage: function (contentScriptMessage) {

  },
  
  onShow: function(pages) {
  
  },
  
  onHide: function() {
  
  }
  
});

WatchPug.CrawlPanel.getPageMarkup = function(url) {

  // there might by strange protocols
  
  if (url.substr(0, 4) === 'http') {

    request({
    
      url: url,
      
      onComplete: function (response) {
        
        WatchPug.CrawlPanel.port.emit('getPageMarkup', {
        
          url: url,
          
          status: response.status,
          
          text: response.text
          
        });
      
      }
      
    }).get();
    
  } else {

    // fake "not found" response
  
    WatchPug.CrawlPanel.port.emit('getPageMarkup', {
    
      url: url,
      
      status: 404
      
    });
    
  }

};

WatchPug.CrawlPanel.port.on('getPageMarkup', function (url) {
  
  WatchPug.CrawlPanel.getPageMarkup(url);
  
});
  
WatchPug.CrawlPanel.injectPages = function(pages) {
  
  WatchPug.CrawlPanel.port.emit('injectPages', {
  
    pages: pages
    
  });

};

WatchPug.AddonPanel.crawlPages = function (pages) {

  WatchPug.CrawlPanel.show();
  
  WatchPug.CrawlPanel.injectPages(pages);

};

// toolbar icon logic

WatchPug.AddonPanel.showToolbarIcon = function () {

  var doc, toolbar, button,
      searchPugExtensionButton;
  
  doc = chrome.components.classes['@mozilla.org/appshell/window-mediator;1'].getService(chrome.components.interfaces.nsIWindowMediator).getMostRecentWindow('navigator:browser').document;
    
  toolbar = doc.getElementById('nav-bar');
    
  searchPugExtensionButton = doc.getElementById('searchpug-extension');
    
  if (toolbar){
    
    if (searchPugExtensionButton) {
    
      searchPugExtensionButton.parentNode.removeChild(searchPugExtensionButton);
      
    }
    
    if (hideToolbarIconPref === false) {
    
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
    
  }
  
};

// show toolbar icon on addon load

WatchPug.AddonPanel.showToolbarIcon();