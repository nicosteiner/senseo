var WatchPug = WatchPug || {};

WatchPug.Analyze = {

  data: {},

  getTitle: function() {
  
    var title = $('head title')[0].text;
  
    WatchPug.Analyze.data['title'] = {
      
      head: 'title tag',
      
      count: $('head title').length,
      
      data: title && title !== '' ? title : 'n/a'
      
    };
  
  },
  
  getTitleLength: function() {
  
    WatchPug.Analyze.data['title-length'] = {
      
      head: 'title tag length',
      
      data: WatchPug.Analyze.data['title'].data !== 'n/a' ? WatchPug.Analyze.data['title'].data.length : 'n/a'
      
    };
  
  },
  
  getMetaDescription: function() {

    var metaDescription = $('head meta[name = "description"]');
    
    WatchPug.Analyze.data['meta-description'] = {
      
      head: 'description meta tag',
      
      count: $('head meta[name = "description"]').length,
      
      data: metaDescription && metaDescription.attr('content') ? metaDescription.attr('content') : 'n/a'
      
    };
  
  },
  
  getMetaDescriptionLength: function() {
  
    WatchPug.Analyze.data['meta-description-length'] = {
      
      head: 'description meta tag length',
      
      data: WatchPug.Analyze.data['meta-description'].data !== 'n/a' ? WatchPug.Analyze.data['meta-description'].data.length : 'n/a'
      
    };
  
  },
  
  getMetaKeywords: function() {

    var metaKeywords = $('head meta[name = "keywords"]');
    
    WatchPug.Analyze.data['meta-keywords'] = {
      
      head: 'keywords meta tag',
      
      data: metaKeywords && metaKeywords.attr('content') ? metaKeywords.attr('content') : 'n/a'
      
    };
  
  },
  
  getMetaRobots: function() {

    var metaRobots = $('head meta[name = "robots"]');
    
    WatchPug.Analyze.data['meta-robots'] = {
      
      head: 'robots meta tag',
      
      data: metaRobots && metaRobots.attr('content') ? metaRobots.attr('content') : 'n/a'
      
    };
  
  },

  getLinkCanonical: function() {

    var linkCanonical = $('head link[rel = "canonical"]');
    
    WatchPug.Analyze.data['link-canonical'] = {
      
      head: 'canonical URL',
      
      data: linkCanonical && linkCanonical.attr('href') ? linkCanonical.attr('href') : 'n/a'
      
    };
  
  },
  
  getPageLoadTime: function() {

    var perfData = window.performance.timing;

    var pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;

    WatchPug.Analyze.data['page-load-time'] = {
      
      head: 'page load time (ms)',
      
      data: pageLoadTime
      
    };
  
  },
  
  getHeadlineData: function(level) {

    var headlines = $('body h' + level);
    
    var i;
    
    if (headlines.length) {
      
      WatchPug.Analyze.data['headline-' + level] = {
        
        head: [],
        
        missing: false,
      
        data: []
        
      };
      
      for (i = 0; i < headlines.length; i += 1) {
      
        WatchPug.Analyze.data['headline-' + level].head.push('&lt;h' + level + '&gt; heading tag');
        
        WatchPug.Analyze.data['headline-' + level].data.push(headlines[i].textContent);
        
      }
    
    } else {
    
      WatchPug.Analyze.data['headline-' + level] = {
        
        head: '&lt;h' + level + '&gt; heading tag',
        
        missing: true,
        
        data: 'n/a'
        
      };
    
    }
    
  },
  
  getMicrodata: function() {
  
    var microdata = $('body [itemscope]');

    if (microdata.length) {
    
      WatchPug.Analyze.data['microdata'] = {
        
        head: 'Microdata',
        
        data: 'found (<a id="go-to-testing-tool" href="http://www.google.com/webmasters/tools/richsnippets?url=' + WatchPug.Analyze.data['location-href'].data + '">show</a>)'
        
      };
      
    } else {

      WatchPug.Analyze.data['microdata'] = {
        
        head: 'Microdata',
        
        data: 'n/a'
        
      };
      
    }
  
  },
  
  getImageAltData: function() {

    var allImages = $('body img');
    
    var i;
    
    WatchPug.Analyze.data['img-alt'] = {
      
      head: [],
      
      missing: [],
      
      data: []
      
    };

    var imgAlt, imgAltMissing;
    
    for (i = 0; i < allImages.length; i += 1) {
    
      imgAlt = allImages[i].alt && allImages[i].alt !== '' ? allImages[i].alt : 'n/a';
    
      imgAltMissing = allImages[i].alt && allImages[i].alt !== '' ? false : true;
    
      WatchPug.Analyze.data['img-alt'].head.push(allImages[i].src);
      
      WatchPug.Analyze.data['img-alt'].missing.push(imgAltMissing);
      
      WatchPug.Analyze.data['img-alt'].data.push(imgAlt);
      
    }
    
  },
  
  getImagesWithoutAlt: function() {

    var allImages = $('body img');
    var allAltImages = $('body img[alt != ""]');

    var allImagesCount = allImages.length;
    var allAltImagesCount = allAltImages.length;

    WatchPug.Analyze.data['img-without-alt'] = {
      
      head: 'images without alt attribute',
      
      data: allImagesCount - allAltImagesCount
      
    };
    
  },
  
  getNumberOfLinks: function() {

    var allLinks = $('body a');
    
    WatchPug.Analyze.data['number-links'] = {
      
      head: 'number of links',
      
      data: allLinks.length
      
    };

  },
  
  trim: function(s) {

    while (s.substring(0,1) == ' ') {
    
      s = s.substring(1,s.length);
      
    }
    
    while (s.substring(s.length-1,s.length) == ' ') {
    
      s = s.substring(0,s.length-1);
      
    }
    
    return s;
    
  },
  
  getBodyData: function() {
  
    var trimtext;
  
    var bodyText = document.evaluate('/html/body//.[name() != "SCRIPT"]/text()', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null );
    
    var bodyData = '';
    
    for (var i = 0; i < bodyText.snapshotLength; i++) {
    
      trimtext = bodyText.snapshotItem(i).textContent;
      
      while (trimtext.search(/\s\s+/g) != -1) {
      
        trimtext = trimtext.replace(/\s\s+/g, ' ');
        
      }
    
      trimtext = trimtext.replace(/\015\012|\015|\012/g, '');
    
      if (WatchPug.Analyze.trim(trimtext) != '') {
      
        bodyData = bodyData + WatchPug.Analyze.trim(trimtext) + ' ';
        
      }
      
    }

    WatchPug.Analyze.data['body-text'] = {
      
      head: 'body text',
      
      data: WatchPug.Analyze.trim(bodyData)
      
    };

  },
  
  getNumberOfElements: function() {

    var allElements = document.evaluate('count(descendant-or-self::*)', document, null, XPathResult.ANY_TYPE, null );

    WatchPug.Analyze.data['number-elements'] = {
      
      head: 'number of elements',
      
      data: allElements.numberValue
      
    };
    
  },

  getNumberOfWords: function() {

    WatchPug.Analyze.data['number-words'] = {
      
      head: 'number of words',
      
      data: WatchPug.Analyze.data['body-text'].data.split(" ").length
      
    };
  
  },

  getElementWordRatio: function() {

    var ratio = Math.round(WatchPug.Analyze.data['number-elements'].data / WatchPug.Analyze.data['number-words'].data * 100) / 100;
    
    WatchPug.Analyze.data['element-word-ratio'] = {
      
      head: 'element-word ratio',
      
      data: '1:' + (ratio * 100)
      
    };
  
  },

  getLocationHref: function() {

    WatchPug.Analyze.data['location-href'] = {
      
      head: 'URL',
      
      data: window.location.href
      
    };
    
  },

  getProtocol: function() {

    var protocol = window.location.protocol;
    
    WatchPug.Analyze.data['location-protocol'] = {
      
      head: 'protocol',
      
      data: protocol
      
    };
    
  },

  getHostName: function() {

    var hostData = window.location.hostname;
    
    WatchPug.Analyze.data['location-hostname'] = {
      
      head: 'hostname',
      
      data: hostData
      
    };
    
  },

  getPathName: function() {

    var pathName = window.location.pathname;
    
    WatchPug.Analyze.data['path-name'] = {
      
      head: 'path name',
      
      data: pathName
      
    };
    
  },

  getURLParams: function() {

    var urlParams = window.location.search;
    
    WatchPug.Analyze.data['url-params'] = {
      
      head: 'url params',
      
      data: urlParams
      
    };
    
  },

  getRobotsFileContent: function() {

    var req = new XMLHttpRequest();
    
    var url = WatchPug.Analyze.data['location-protocol'].data + '//' + WatchPug.Analyze.data['location-hostname'].data + '/robots.txt';
    
    WatchPug.Analyze.data['robots-file'] = {
    
      head: 'robots.txt',
      
      data: 'n/a'
      
    };
    
    // there might by strange protocols
    
    if (WatchPug.Analyze.data['location-protocol'].data.substr(0, 4) === 'http') {
    
      req.open('GET', WatchPug.Analyze.data['location-protocol'].data + '//' + WatchPug.Analyze.data['location-hostname'].data + '/robots.txt', true);
      
      req.onreadystatechange = function () {
      
        if (req.readyState == 4) {
        
          if (req.status == 200) {

            WatchPug.Analyze.data['robots-file'] = {
              
              head: 'robots.txt',
              
              data: 'found (<a id="show-robots" href="' + url + '">show</a>)'
              
            };
            
            WatchPug.Analyze.sendData(WatchPug.Analyze.data['robots-file']);
          
          }
          
        }
        
      };
        
      req.send(null);
      
    }
    
  },
  
  getSitemapContent: function() {
  
    var req = new XMLHttpRequest();
    
    var url = WatchPug.Analyze.data['location-protocol'].data + '//' + WatchPug.Analyze.data['location-hostname'].data + '/sitemap.xml';
    
    WatchPug.Analyze.data['sitemap-file'] = {
      
      head: 'sitemap.xml',
      
      data: 'n/a'
      
    };
    
    // there might by strange protocols
    
    if (WatchPug.Analyze.data['location-protocol'].data.substr(0, 4) === 'http') {
    
      req.open('GET', url, true);
      
      req.onreadystatechange = function () {
      
        if (req.readyState == 4) {
        
          if (req.status == 200) {

            WatchPug.Analyze.data['sitemap-file'] = {
              
              head: 'sitemap.xml',
              
              data: 'found (<a id="show-sitemap" href="' + url + '">show</a>)'
              
            };
            
            WatchPug.Analyze.sendData(WatchPug.Analyze.data['sitemap-file']);
          
          }
          
        }
        
      };
        
      req.send(null);
      
    }
    
  },
  
  sendData: function(data) {

    // send data back to addon (and from there to panel.js)
  
    if (data) {
    
      self.postMessage(data);
    
    } else {
  
      self.postMessage(WatchPug.Analyze.data);
      
    }

  },
  
  init: function() {

    WatchPug.Analyze.getTitle();
    
    WatchPug.Analyze.getTitleLength();
    
    WatchPug.Analyze.getMetaDescription();
    
    WatchPug.Analyze.getMetaDescriptionLength();
    
    WatchPug.Analyze.getMetaKeywords();
    
    WatchPug.Analyze.getPageLoadTime();
    
    WatchPug.Analyze.getMetaRobots();
    
    WatchPug.Analyze.getHeadlineData(1);
    
    WatchPug.Analyze.getHeadlineData(2);
    
    WatchPug.Analyze.getHeadlineData(3);
    
    WatchPug.Analyze.getHeadlineData(4);
    
    WatchPug.Analyze.getHeadlineData(5);
    
    WatchPug.Analyze.getHeadlineData(6);
    
    WatchPug.Analyze.getImageAltData();
    
    WatchPug.Analyze.getImagesWithoutAlt();

    WatchPug.Analyze.getNumberOfLinks();

    WatchPug.Analyze.getLocationHref();

    WatchPug.Analyze.getLinkCanonical();
    
    WatchPug.Analyze.getProtocol();

    WatchPug.Analyze.getHostName();

    WatchPug.Analyze.getPathName();
    
    WatchPug.Analyze.getURLParams();

    WatchPug.Analyze.getMicrodata();
    
    WatchPug.Analyze.getRobotsFileContent();
    
    WatchPug.Analyze.getSitemapContent();
    
    WatchPug.Analyze.getBodyData();
    
    WatchPug.Analyze.getNumberOfElements();

    WatchPug.Analyze.getNumberOfWords();

    WatchPug.Analyze.getElementWordRatio();

    WatchPug.Analyze.sendData();
  
  }

};

WatchPug.Analyze.init();