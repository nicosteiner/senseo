var WatchPug = WatchPug || {};

WatchPug.Analyze = {

  data: {},

  getTitle: function () {

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

    var perfData = window.performance.timing,
        pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;

    WatchPug.Analyze.data['page-load-time'] = {
      
      head: 'page load time (ms)',
      
      data: pageLoadTime
      
    };
  
  },
  
  getHeadlineData: function(level) {

    var headlines = $('body h' + level),
        headlineTextContent,
        highlightHeadlineLink,
        i;
    
    if (headlines.length) {
      
      WatchPug.Analyze.data['headline-' + level] = {
        
        head: [],
        
        missing: false,
      
        data: [],
        
        element: []
        
      };
      
      // class of anker maps to the WatchPug.Anaalyze.data key / index
      // => class="level-index"
      
      for (i = 0; i < headlines.length; i += 1) {
      
        // try to find out if headline is visible
      
        if ($(headlines[i]).width() && $(headlines[i]).height() && $(headlines[i]).css('display') !== 'none' && $(headlines[i]).css('visibility') !== 'hidden') {
        
          highlightHeadlineLink = ' <a href="#" class="highlight-headline ' + level + '-' + i + '">highlight</a>';
        
        } else {
        
          highlightHeadlineLink = ' <span class="info">(hidden)</span>';
          
        }
      
        headlineTextContent = headlines[i].textContent + highlightHeadlineLink;
      
        WatchPug.Analyze.data['headline-' + level].head.push('&lt;h' + level + '&gt; heading tag');
        
        WatchPug.Analyze.data['headline-' + level].data.push(headlineTextContent);
        
        WatchPug.Analyze.data['headline-' + level].element.push(headlines[i]);
        
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
  
    // needs to be extended
    
    // every microdata is relevant for highlighting
  
    var microdata = $('body [itemscope]'),
        microdataType,
        highlightMicrodataLink,
        i, j;

    if (microdata.length) {
      
      WatchPug.Analyze.data['microdata-found'] = {
        
        head: 'microdata',
        
        data: 'found (<a id="go-to-testing-tool" href="http://www.google.com/webmasters/tools/richsnippets?url=' + WatchPug.Analyze.data['location-href'].data + '">show</a>)'
        
      };
      
      WatchPug.Analyze.data['microdata-itemprop'] = {
        
        head: [],
        
        missing: [],
      
        data: [],
        
        element: []
        
      };
      
      for (i = 0; i < microdata.length; i += 1) {

        // find itemprops
        
        var itempropElements = $(microdata[i]).find('[itemprop]');
        
        var itemprops = '';
        
        for (j = 0; j < itempropElements.length; j += 1) {

          itemprops += $(itempropElements[j]).attr('itemprop');
          
          if (j < itempropElements.length - 1) {
          
            itemprops += ', ';
          
          }
        
        }
      
        // try to find out if microdata is visible
      
        if ($(microdata[i]).width() && $(microdata[i]).height() && $(microdata[i]).css('display') !== 'none' && $(microdata[i]).css('visibility') !== 'hidden') {
        
          highlightMicrodataLink = ' <a href="#" class="highlight-microdata index-' + i + '">highlight</a>';
        
        } else {
        
          highlightMicrodataLink = ' <span class="info">(hidden)</span>';
          
        }
        
        WatchPug.Analyze.data['microdata-itemprop'].head.push('microdata (' + i + ')');
        
        WatchPug.Analyze.data['microdata-itemprop'].missing.push(false);
        
        WatchPug.Analyze.data['microdata-itemprop'].data.push(itemprops + highlightMicrodataLink);
        
        WatchPug.Analyze.data['microdata-itemprop'].element.push(microdata[i]);
      
      }
    
    } else {
    
      WatchPug.Analyze.data['microdata-found'] = {
        
        head: 'microdata',
        
        missing: true,
        
        data: 'n/a'
        
      };
    
    }
    
  },
  
  getImageAltData: function() {

    var allImages = $('body img'),
        i,
        imgAlt,
        imgAltMissing,
        highlightImageLink;
    
    WatchPug.Analyze.data['img-alt'] = {
      
      head: [],
      
      missing: [],
      
      data: [],
      
      element: []
      
    };

    for (i = 0; i < allImages.length; i += 1) {
    
      if ($(allImages[i]).width() && $(allImages[i]).height() && $(allImages[i]).css('display') !== 'none' && $(allImages[i]).css('visibility') !== 'hidden') {
      
        highlightImageLink = ' <a href="#" class="highlight-image index-' + i + '">highlight</a>';
      
      } else {
      
        highlightImageLink = ' <span class="info">(hidden)</span>';
        
      }
      
      imgAlt = allImages[i].alt && allImages[i].alt !== '' ? allImages[i].alt : 'n/a';
    
      imgAltMissing = allImages[i].alt && allImages[i].alt !== '' ? false : true;
    
      WatchPug.Analyze.data['img-alt'].head.push(allImages[i].src);
      
      WatchPug.Analyze.data['img-alt'].missing.push(imgAltMissing);
      
      WatchPug.Analyze.data['img-alt'].data.push(imgAlt + highlightImageLink);
      
      WatchPug.Analyze.data['img-alt'].element.push(allImages[i]);
      
    }
    
  },
  
  getImagesWithoutAlt: function() {

    var allImages = $('body img'),
    allAltImages = $('body img[alt != ""]'),
    allImagesCount = allImages.length,
    allAltImagesCount = allAltImages.length;

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

    while (s.substring(0,1) === ' ') {
    
      s = s.substring(1,s.length);
      
    }
    
    while (s.substring(s.length-1,s.length) === ' ') {
    
      s = s.substring(0,s.length-1);
      
    }
    
    return s;
    
  },
  
  getBodyData: function() {
  
    var trimtext,
        bodyText = document.evaluate('/html/body//.[name() != "SCRIPT"]/text()', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null ),
        bodyData = '',
        i;
    
    for (i = 0; i < bodyText.snapshotLength; i += 1) {
    
      trimtext = bodyText.snapshotItem(i).textContent;
      
      while (trimtext.search(/\s\s+/g) !== -1) {
      
        trimtext = trimtext.replace(/\s\s+/g, ' ');
        
      }
    
      trimtext = trimtext.replace(/\015\012|\015|\012/g, '');
    
      if (WatchPug.Analyze.trim(trimtext) !== '') {
      
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

    var req = new XMLHttpRequest(),
        url = WatchPug.Analyze.data['location-protocol'].data + '//' + WatchPug.Analyze.data['location-hostname'].data + '/robots.txt';
    
    WatchPug.Analyze.data['robots-file'] = {
    
      head: 'robots.txt',
      
      data: 'n/a'
      
    };
    
    // there might by strange protocols
    
    if (WatchPug.Analyze.data['location-protocol'].data.substr(0, 4) === 'http') {
    
      req.open('GET', WatchPug.Analyze.data['location-protocol'].data + '//' + WatchPug.Analyze.data['location-hostname'].data + '/robots.txt', true);
      
      req.onreadystatechange = function () {
      
        if (req.readyState === 4) {
        
          if (req.status === 200) {

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
  
    var req = new XMLHttpRequest(),
        url = WatchPug.Analyze.data['location-protocol'].data + '//' + WatchPug.Analyze.data['location-hostname'].data + '/sitemap.xml';
    
    WatchPug.Analyze.data['sitemap-file'] = {
      
      head: 'sitemap.xml',
      
      data: 'n/a'
      
    };
    
    // there might by strange protocols
    
    if (WatchPug.Analyze.data['location-protocol'].data.substr(0, 4) === 'http') {
    
      req.open('GET', url, true);
      
      req.onreadystatechange = function () {
      
        if (req.readyState === 4) {
        
          if (req.status === 200) {

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
  
  highlightElement: function(highlightInfo) {
  
    var targetData = highlightInfo.split(' '),  // highlightInfo in this case contains type and level/index of the element
        targetDataKey = targetData[0],  // first value contains type of element
        targetDataValue = targetData[1],
        level,
        index,
        targetElement;

    if (targetDataKey === 'highlight-headline') {
    
      level = targetDataValue.split('-')[0];
    
      index = targetDataValue.split('-')[1];
    
      // try to localize target element
      
      targetElement = WatchPug.Analyze.data['headline-' + level].element[index];
      
      WatchPug.Analyze.highlightTargetElement(targetElement, 'h' + level);
      
    }
    
    if (targetDataKey === 'highlight-image') {
    
      index = targetDataValue.split('-')[1];
    
      // try to localize target element
      
      targetElement = WatchPug.Analyze.data['img-alt'].element[index];
      
      WatchPug.Analyze.highlightTargetElement(targetElement, 'img');
      
    }
    
    if (targetDataKey === 'highlight-microdata') {
    
      index = targetDataValue.split('-')[1];
    
      // try to localize target element
      
      targetElement = WatchPug.Analyze.data['microdata-itemprop'].element[index];
      
      WatchPug.Analyze.highlightTargetElement(targetElement, 'microdata');
      
    }
    
  },
  
  highlightTargetElement: function(targetElement, content) {
    
    var targetElementOffset,
        targetElementWidth,
        targetElementHeight,
        scrollTop;
        
    // get offset / dimension of target element
    
    targetElementOffset = $(targetElement).offset();
    
    targetElementWidth = $(targetElement).width();
    
    targetElementHeight = $(targetElement).height();

    // if there is no highlight element, create one
    
    if (targetElementWidth && targetElementHeight) {
    
      if (!WatchPug.Analyze.$highlightElement) {
      
        WatchPug.Analyze.$highlightElement = $('<div></div>')
                                            .css({
                                              'position': 'absolute',
                                              'z-index': '9999',
                                              'border': '1px red solid',
                                              'background-color': 'rgba(255, 255, 0, 0.5)',
                                              '-moz-box-sizing': 'border-box',
                                              'padding': '3px 5px',
                                              'text-align': 'right',
                                              'color': 'red',
                                              'font-family': 'Arial, Verdana, sans serif',
                                              'font-size': '18px',
                                              'font-weight': 'bold'
                                            });
                                            
        $('body').append(WatchPug.Analyze.$highlightElement);
        
      }
      
      WatchPug.Analyze.$highlightElement.html(content);
      
      WatchPug.Analyze.$highlightElement.css({
                                          'left': targetElementOffset.left,
                                          'top': targetElementOffset.top,
                                          'width': targetElementWidth,
                                          'height': targetElementHeight
                                        });
                                        
      // show highlighted area
      
      scrollTop = targetElementOffset.top - 50 < 0 ? 0 : targetElementOffset.top - 50;
      
      $('html, body').animate({scrollTop: scrollTop}, 300);
    
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

    // initialize message listener
    
    self.on('message', function(message) {
    
      if (message.command) {
      
        if (message.command === 'highlight-element') {
        
          WatchPug.Analyze.highlightElement(message.highlightInfo);
        
        }
        
      }
      
    });
    
  }

};

WatchPug.Analyze.init();