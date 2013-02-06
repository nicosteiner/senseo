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

var prefillKeywordPref = sp.prefs.prefillKeyword;
var numberOfPagesCrawled = sp.prefs.numberOfPagesCrawled;
var colorBlindFriendlyPref = sp.prefs.colorBlindFriendly;
var firstRunPref = sp.prefs.firstRun;

// register some listeners

// caring the preferences

sp.on('prefillKeyword', function() {

  prefillKeywordPref = sp.prefs.prefillKeyword;

});

sp.on('colorBlindFriendly', function() {

  colorBlindFriendlyPref = sp.prefs.colorBlindFriendly;

  WatchPug.AddonPanel.port.emit('getSettings', {
    
    'prefill-keyword': prefillKeywordPref,
    
    'color-blind': colorBlindFriendlyPref
  
  });
  
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
    
        // this can fail when active tab page changed
    
        try {
    
          WatchPug.AddonPanel.activeTabWorker.postMessage(contentScriptMessage);
          
        } catch (e) {}
        
      }
    
    }
  
  },
  
  onShow: function() {
  
    // when panel is shown, the document of the active tab is analyzed by analyze.js
    // result of analyzation is passed to panel.js as JSON object
    
    // external data is fetched asynchronously
  
    if (WatchPug.AddonPanel.activeTabWorker) {
    
      WatchPug.AddonPanel.activeTabWorker.destroy();
    
    }
  
    WatchPug.AddonPanel.activeTabWorker = tabs.activeTab.attach({

      contentScriptFile: [data.url('script/jquery-1.7.1.min.js'),
                          data.url('script/analyze.js')],
    
      onMessage: function (contentScriptMessage) {
      
        try {
      
          WatchPug.AddonPanel.postMessage(contentScriptMessage);

        } catch (e) {}
      
      }
      
    });
    
    WatchPug.AddonPanel.port.emit('getSettings', {
      
      'prefill-keyword': prefillKeywordPref,
      
      'color-blind': colorBlindFriendlyPref
    
    });
  
    WatchPug.AddonPanel.activeTabWorker.port.on('getResponseText', function (key, url) {
      
      WatchPug.AddonPanel.getResponseText(key, url);
      
    });
  
  },
  
  onHide: function() {
  
    WatchPug.AddonPanel.port.emit('resetUI');
  
  }
  
});
  
WatchPug.AddonPanel.getResponseText = function(key, url) {

  var doc, html, body;
  
  // there might by strange protocols
  
  if (url && url.substr(0, 4) === 'http') {

    request({
    
      url: url,
      
      onComplete: function (response) {
        
        // parse HTML
        
        // see: https://developer.mozilla.org/en/Code_snippets/HTML_to_DOM

        try {
        
          doc = chrome.components.classes['@mozilla.org/appshell/window-mediator;1'].getService(chrome.components.interfaces.nsIWindowMediator).getMostRecentWindow('navigator:browser').document;
          html = doc.implementation.createDocument('http://www.w3.org/1999/xhtml', 'html', null);
          body = doc.createElementNS('http://www.w3.org/1999/xhtml', 'body');

        } catch (e) {}

        if (body) {
        
          try {
        
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
            
          } catch(exeption) {
          
          }
        
        }
        
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

WatchPug.AddonPanel.port.on('openTab', function (url) {
  
  // Open a new tab on active window in the background.
  
  tabs.open({
  
    url: url,
    
    inBackground: true
    
  });

});

WatchPug.AddonPanel.port.on('panelPrepared', function () {
  
  if (WatchPug.AddonPanel.activeTabWorker) {
  
    WatchPug.AddonPanel.activeTabWorker.destroy();
  
  }
  
  WatchPug.AddonPanel.activeTabWorker = tabs.activeTab.attach({

    contentScriptFile: [data.url('script/jquery-1.7.1.min.js'),
                        data.url('script/analyze.js')],
  
    onMessage: function (contentScriptMessage) {
    
      try {
    
        WatchPug.AddonPanel.postMessage(contentScriptMessage);

      } catch (e) {}
    
    }
    
  });
  
  WatchPug.AddonPanel.activeTabWorker.port.on('getResponseText', function (key, url) {
    
    WatchPug.AddonPanel.getResponseText(key, url);
    
  });

});

WatchPug.AddonPanel.crawlPages = function (pages) {

  // find the toolbar button and bind the panel

  var doc, senseoExtensionButton;

  doc = chrome.components.classes['@mozilla.org/appshell/window-mediator;1'].getService(chrome.components.interfaces.nsIWindowMediator).getMostRecentWindow('navigator:browser').document;
    
  senseoExtensionButton = doc.getElementById('senseo-extension');

  WatchPug.CrawlPanel.show(senseoExtensionButton);
  
  WatchPug.CrawlPanel.injectPages(pages);

};

WatchPug.AddonPanel.showComponents = function (url, keyword) {

  tabs.activeTab.url = url;
  
  tabs.activeTab.on('ready', function() {
  
    WatchPug.AddonPanel.port.emit('prepareShowComponents', keyword);

  });
  
};

WatchPug.AddonPanel.inspectResult = function (url, keyword) {

  tabs.activeTab.url = url;

  tabs.activeTab.on('ready', function() {
  
    WatchPug.AddonPanel.port.emit('prepareInspectResult', keyword);

  });
  
};

WatchPug.CrawlPanel = panel.Panel({

  width: 1200,
  height: 700,
  
  contentURL: data.url('crawler.html'),
  
  contentScriptFile: [data.url('script/jquery-1.7.1.min.js'),
                      data.url('script/encoder.js'),
                      data.url('script/crawl-pages.js')],
                      
  onMessage: function () {

  },
  
  onShow: function() {
  
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
          
          contentType: response.headers['Content-Type'],
          
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

WatchPug.CrawlPanel.port.on('closeCrawlingPanel', function () {
  
  WatchPug.CrawlPanel.hide();
  
});

WatchPug.CrawlPanel.port.on('showComponents', function (url, keyword) {
  
  WatchPug.CrawlPanel.hide();
  
  WatchPug.AddonPanel.showComponents(url, keyword);
  
});

WatchPug.CrawlPanel.port.on('inspectResult', function (url, keyword) {
  
  WatchPug.CrawlPanel.hide();
  
  WatchPug.AddonPanel.inspectResult(url, keyword);
  
});

WatchPug.CrawlPanel.injectPages = function(pages) {
  
  // number of pages can be configured

  var numberOfPagesToBeCrawled = numberOfPagesCrawled <= 250 ? numberOfPagesCrawled : 250;
  
  // little cheat
  
  numberOfPagesToBeCrawled = numberOfPagesCrawled === 187 ? 2500 : numberOfPagesCrawled;
  
  WatchPug.CrawlPanel.port.emit('injectPages', {
  
    pages: pages.slice(0, numberOfPagesToBeCrawled)
    
  });

};

// create toolbarbutton on addon load

let tbb = require("toolbarbutton").ToolbarButton({

  id: 'senseo-extension',

  label: 'SenSEO',

  tooltiptext: 'SenSEO',

  image: data.url('img/logo-16.png'),

  panel: WatchPug.AddonPanel

});

if (firstRunPref === false) {

  sp.prefs.firstRun = true;

  tbb.moveTo({

    toolbarID: 'nav-bar',

    forceMove: false // only move from palette

  })

}