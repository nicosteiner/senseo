var SenSEO = SenSEO || {};

SenSEO.Analyze = {

  data: {},

  getTitle: function () {

    var title = $('head title');

    SenSEO.Analyze.data['title-found'] = {

      head: 'title tag',

      count: title.length,

      data: title && title[0] && title[0].text !== '' ? SenSEO.Analyze.convertToTextOnly(title[0]) : 'n/a'
      
    };
  
  },
  
  getTitleLength: function() {
  
    SenSEO.Analyze.data['title-length'] = {
      
      head: 'title tag length',
      
      data: SenSEO.Analyze.data['title-found'].data !== 'n/a' ? SenSEO.Analyze.data['title-found'].data.length : 'n/a'
      
    };
  
  },
  
  getMetaDescription: function() {

    // check for cases insensitive <meta name="description">
  
    var metaDescription = $('head meta').filter(function() {
      
      return (/description/i.test(this.name));
      
    });
    
    SenSEO.Analyze.data['meta-description'] = {
      
      head: 'description meta tag',
      
      count: metaDescription.length,
      
      data: metaDescription && metaDescription.attr('content') ? SenSEO.Analyze.convertToTextOnly(metaDescription.attr('content')) : 'n/a'
      
    };
  
  },
  
  getMetaDescriptionLength: function() {
  
    SenSEO.Analyze.data['meta-description-length'] = {
      
      head: 'description meta tag length',
      
      data: SenSEO.Analyze.data['meta-description'].data !== 'n/a' ? SenSEO.Analyze.data['meta-description'].data.length : 'n/a'
      
    };
  
  },
  
  getMetaKeywords: function() {

    // TODO: check for cases insensitive <meta name="keywords">
  
    var metaKeywords = $('head meta[name = "keywords"]');
    
    SenSEO.Analyze.data['meta-keywords'] = {
      
      head: 'keywords meta tag',
      
      data: metaKeywords && metaKeywords.attr('content') ? SenSEO.Analyze.convertToTextOnly(metaKeywords.attr('content')) : 'n/a'
      
    };
  
  },
  
  getMetaRobots: function() {

    // TODO: check for cases insensitive <meta name="robots">
  
    var metaRobots = $('head meta[name = "robots"]');
    
    SenSEO.Analyze.data['meta-robots'] = {
      
      head: 'robots meta tag',
      
      data: metaRobots && metaRobots.attr('content') ? SenSEO.Analyze.convertToTextOnly(metaRobots.attr('content')) : 'n/a'
      
    };
  
  },

  getLinkCanonical: function() {

    // TODO: check for cases insensitive <link rel="canonical">
  
    var linkCanonical = $('head link[rel = "canonical"]');
    
    SenSEO.Analyze.data['link-canonical'] = {
      
      head: 'canonical URL',
      
      data: linkCanonical && linkCanonical.attr('href') ? SenSEO.Analyze.convertToTextOnly(linkCanonical.attr('href')) : 'n/a'
      
    };
  
  },
  
  getPageLoadTime: function() {

    var perfData = window.performance.timing,
        pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;

    SenSEO.Analyze.data['page-load-time'] = {
      
      head: 'page load time (ms)',
      
      data: pageLoadTime + '<a href="http://gtmetrix.com/?url=' + encodeURIComponent(SenSEO.Analyze.data['location-protocol'].data + '//' + SenSEO.Analyze.data['location-hostname'].data) + '" target="blank">analyze performance</a>'
      
    };
  
  },
  
  getHeadlineData: function(level) {

    var headlines = $('body h' + level),
        textOnlyHeadline,
        highlightHeadlineHTML,
        i;
    
    if (headlines.length) {
      
      SenSEO.Analyze.data['headline-' + level] = {
        
        head: [],
        
        missing: false,
      
        data: [],
        
        element: []
        
      };
      
      // class of anker maps to the SenSEO.Anaalyze.data key / index
      // => class="level-index"
      
      for (i = 0; i < headlines.length; i += 1) {
      
        // try to find out if headline is visible
      
        textOnlyHeadline = SenSEO.Analyze.convertToTextOnly(headlines[i]);
        
        if ($(headlines[i]).is(':visible')) {
        
          highlightHeadlineHTML = $('<div>')
                                  .append(textOnlyHeadline)
                                  .append($('<a>').attr({
                                    'href': '#',
                                    'class': 'highlight-headline ' + level + '-' + i
                                  }).text('highlight').clone()).html();
                                  
        } else {
        
          highlightHeadlineHTML = $('<div>')
                                  .append(textOnlyHeadline)
                                  .append($('<span>').attr({
                                    'class': 'info'
                                  }).text(' (hidden)').clone()).html();
          
        }
      
        // use escape html
      
        SenSEO.Analyze.data['headline-' + level].head.push('<h' + level + '> heading tag');
        
        SenSEO.Analyze.data['headline-' + level].data.push(highlightHeadlineHTML);
        
        SenSEO.Analyze.data['headline-' + level].element.push(headlines[i]);
        
      }
    
    } else {
    
      SenSEO.Analyze.data['headline-' + level] = {
        
        head: '<h' + level + '> heading tag',
        
        missing: true,
        
        data: 'n/a'
        
      };
    
    }
    
  },
  
  getMicrodata: function() {
  
    // needs to be extended
    
    // every microdata is relevant for highlighting
  
    var microdata = $('body [itemscope]'),
        highlightMicrodataHTML,
        itempropElements,
        itemprops,
        i, j;

    if (microdata.length) {
      
      SenSEO.Analyze.data['microdata-found'] = {
        
        head: 'microdata',
        
        data: 'found' + '<a id="go-to-testing-tool" target="blank" href="http://www.google.com/webmasters/tools/richsnippets?url=' + encodeURIComponent(SenSEO.Analyze.data['location-href'].data) + '">preview</a>'
        
      };
      
      SenSEO.Analyze.data['microdata-itemprop'] = {
        
        head: [],
        
        missing: [],
      
        data: [],
        
        element: []
        
      };
      
      for (i = 0; i < microdata.length; i += 1) {

        // find itemprops
        
        itemprops = '';
        
        itempropElements = $(microdata[i]).find('[itemprop]');
        
        for (j = 0; j < itempropElements.length; j += 1) {

          itemprops += $(itempropElements[j]).attr('itemprop');
          
          if (j < itempropElements.length - 1) {
          
            itemprops += ', ';
          
          }
        
        }
      
        // try to find out if microdata is visible
      
        if ($(microdata[i]).is(':visible')) {
        
          highlightMicrodataHTML = $('<div>').text(itemprops).append($('<a>').attr({
                                     'href': '#',
                                     'class': 'highlight-microdata index-' + i
                                   }).text('highlight').clone()).html();
                                  
        } else {
        
          highlightMicrodataHTML = $('<div>').text(itemprops).append($('<span>').attr({
                                     'class': 'info'
                                   }).text(' (hidden)').clone()).html();
                                   
        }
        
        SenSEO.Analyze.data['microdata-itemprop'].head.push('microdata (' + $(microdata[i]).attr('itemtype').substring($(microdata[i]).attr('itemtype').lastIndexOf('/') + 1) + ')');
        
        SenSEO.Analyze.data['microdata-itemprop'].missing.push(false);
        
        SenSEO.Analyze.data['microdata-itemprop'].data.push(highlightMicrodataHTML);
        
        SenSEO.Analyze.data['microdata-itemprop'].element.push(microdata[i]);
      
      }
    
    } else {
    
      SenSEO.Analyze.data['microdata-found'] = {
        
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
        imgSrc,
        imgFileName,
        imgAltMissing,
        highlightImageHTML;
    
    SenSEO.Analyze.data['img-alt'] = {
      
      head: [],
      
      missing: [],
      
      data: [],
      
      element: []
      
    };

    for (i = 0; i < allImages.length; i += 1) {
    
      imgSrc = allImages[i].src.split('/');
      
      imgFileName = imgSrc[imgSrc.length - 1];
      
      imgFileName = imgFileName.length > 30 ? imgFileName.substring(0, 27) + '...' : imgFileName;
    
      imgAlt = allImages[i].alt && allImages[i].alt !== '' ? allImages[i].alt : 'n/a';
    
      imgAltMissing = allImages[i].alt && allImages[i].alt !== '' ? false : true;
    
      if ($(allImages[i]).is(':visible')) {
      
        highlightImageHTML = $('<div>').text(imgAlt).append($('<a>').attr({
                               'href': '#',
                               'class': 'highlight-image index-' + i
                             }).text('highlight').clone()).html();
                                
      } else {
      
        highlightImageHTML = $('<div>').text(imgAlt).append($('<span>').attr({
                               'class': 'info'
                             }).text(' (hidden)').clone()).html();

      }
      
      SenSEO.Analyze.data['img-alt'].head.push(imgFileName);
      
      SenSEO.Analyze.data['img-alt'].missing.push(imgAltMissing);
      
      SenSEO.Analyze.data['img-alt'].data.push(highlightImageHTML);
      
      SenSEO.Analyze.data['img-alt'].element.push(allImages[i]);
      
    }
    
  },
  
  getImagesWithoutAlt: function() {

    var allImages = $('body img'),
    allAltImages = $('body img[alt != ""]'),
    allImagesCount = allImages.length,
    allAltImagesCount = allAltImages.length;

    SenSEO.Analyze.data['img-without-alt'] = {
      
      head: 'images without alt attribute',
      
      data: allImagesCount - allAltImagesCount
      
    };
    
  },
  
  getNumberOfLinks: function() {

    var allLinks = $('body a');
    
    SenSEO.Analyze.data['number-links'] = {
      
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
        bodyText = document.evaluate('/html/body//.[name() != "SCRIPT" and name() != "STYLE"]/text()', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null ),
        bodyData = '',
        i;
    
    for (i = 0; i < bodyText.snapshotLength; i += 1) {
    
      trimtext = bodyText.snapshotItem(i).textContent;
      
      while (trimtext.search(/\s\s+/g) !== -1) {
      
        trimtext = trimtext.replace(/\s\s+/g, ' ');
        
      }
    
      trimtext = trimtext.replace(/\015\012|\015|\012/g, '');
    
      if (SenSEO.Analyze.trim(trimtext) !== '') {
      
        bodyData = bodyData + SenSEO.Analyze.trim(trimtext) + ' ';
        
      }
      
    }

    SenSEO.Analyze.data['body-text'] = {
      
      head: 'body text',
      
      data: SenSEO.Analyze.convertToTextOnly(SenSEO.Analyze.trim(bodyData))
      
    };

  },
  
  convertToTextOnly: function(textAndMarkup) {
  
    var textOnly, wrapper;
  
    // convert text containing markup to text only version

    if (textAndMarkup.textContent) {
    
      // when textAndMarkup is an element containing text
    
      // see: https://developer.mozilla.org/en/DOM/Node.textContent
    
      textOnly = textAndMarkup.textContent;
    
    } else {

      // when textAndMarkup is a mix of markup surrounded by text
    
      // see: http://stackoverflow.com/questions/5550633/append-html-to-jquery-element-without-running-scripts-inside-the-html
    
      wrapper = document.createElement('div');
      
      wrapper.innerHTML = textAndMarkup;
      
      $(wrapper).find('script').remove();
      
      $(wrapper).find('style').remove();
      
      textOnly = $(wrapper).text();

    }
    
    return textOnly;
  
  },
  
  getNumberOfElements: function() {

    var allElements = document.evaluate('count(descendant-or-self::*)', document, null, XPathResult.ANY_TYPE, null );

    SenSEO.Analyze.data['number-elements'] = {
      
      head: 'number of elements',
      
      data: SenSEO.Analyze.convertToTextOnly(allElements.numberValue)
      
    };
    
  },

  getNumberOfWords: function() {

    SenSEO.Analyze.data['number-words'] = {
      
      head: 'number of words',
      
      data: SenSEO.Analyze.data['body-text'].data.split(" ").length
      
    };
  
  },

  getElementWordRatio: function() {

    var ratio = Math.round(SenSEO.Analyze.data['number-elements'].data / SenSEO.Analyze.data['number-words'].data * 100) / 100;
    
    SenSEO.Analyze.data['element-word-ratio'] = {
      
      head: 'element-word ratio',
      
      data: '1:' + (ratio * 100)
      
    };
  
  },

  getLocationHref: function() {

    SenSEO.Analyze.data['location-href'] = {
      
      head: 'URL',
      
      data: SenSEO.Analyze.convertToTextOnly(window.location.href)
      
    };
    
  },

  getProtocol: function() {

    var protocol = window.location.protocol;
    
    SenSEO.Analyze.data['location-protocol'] = {
      
      head: 'protocol',
      
      data: SenSEO.Analyze.convertToTextOnly(protocol)
      
    };
    
  },

  getHostName: function() {

    var hostData = window.location.hostname;
    
    SenSEO.Analyze.data['location-hostname'] = {
      
      head: 'hostname',
      
      data: SenSEO.Analyze.convertToTextOnly(hostData)
      
    };
    
  },

  getPathName: function() {

    var pathName = window.location.pathname;
    
    SenSEO.Analyze.data['path-name'] = {
      
      head: 'path name',
      
      data: SenSEO.Analyze.convertToTextOnly(pathName)
      
    };
    
  },

  getURLParams: function() {

    var urlParams = window.location.search;
    
    SenSEO.Analyze.data['url-params'] = {
      
      head: 'url params',
      
      data: SenSEO.Analyze.convertToTextOnly(urlParams)
      
    };
    
  },

  getPort: function() {

    var port = window.location.port;
    
    if (!port) {
    
      port = '80';
    
    }
    
    SenSEO.Analyze.data['location-port'] = {
      
      head: 'port',
      
      data: SenSEO.Analyze.convertToTextOnly(port)
      
    };
    
  },

  getDocumentHeaders: function() {

    var url = SenSEO.Analyze.data['location-protocol'].data + '//' + SenSEO.Analyze.data['location-hostname'].data + SenSEO.Analyze.data['path-name'].data + ':' + SenSEO.Analyze.data['location-port'].data + SenSEO.Analyze.data['url-params'].data;
    
    SenSEO.Analyze.data['last-modified'] = {
      
      head: 'response-header (Last-Modified)',
      
      data: '<span id="last-modified"><span class="info">n/a</span></span>'
      
    };
    
    SenSEO.Analyze.data['content-type'] = {
      
      head: 'response-header (Content-Type)',
      
      data: '<span id="content-type"><span class="info">n/a</span></span>'
      
    };
    
    // this goes to main.js and from there to panel.js
    
    self.port.emit('getResponseText', 'document-headers', url);
  
  },
  
  getValidationResult: function() {
  
    var url = 'http://validator.w3.org/check?uri=' + encodeURIComponent(SenSEO.Analyze.data['location-protocol'].data + '//' + SenSEO.Analyze.data['location-hostname'].data + '/') + '&charset=(detect+automatically)&doctype=Inline&group=0';
    
    SenSEO.Analyze.data['validation-result'] = {
      
      head: 'W3C validation',
      
      data: '<span id="validation-result"><span class="info">n/a</span></span>'
      
    };
    
    // this goes to main.js and from there to panel.js
    
    self.port.emit('getResponseText', 'validation-result', url);
    
  },
  
  getDomainAge: function() {
  
    var url = 'http://wayback.archive.org/web/*/' + encodeURIComponent(SenSEO.Analyze.data['location-hostname'].data);
    
    SenSEO.Analyze.data['domain-age'] = {
      
      head: 'domain age',
      
      data: '<span id="domain-age"><span class="info">n/a</span></span>'
      
    };
    
    // this goes to main.js and from there to panel.js
    
    self.port.emit('getResponseText', 'domain-age', url);
    
  },
  
  getRobotsFileContent: function() {

    var url = SenSEO.Analyze.data['location-protocol'].data + '//' + SenSEO.Analyze.data['location-hostname'].data + ':' + SenSEO.Analyze.data['location-port'].data + '/robots.txt';
    
    SenSEO.Analyze.data['robots-file'] = {
    
      head: 'robots.txt',
      
      data: '<span id="robots-file"><span class="info">n/a</span></span>'
      
    };
    
    SenSEO.Analyze.data['robots-sitemap-location'] = {
    
      head: 'sitemap location in robots.txt',
      
      data: '<span id="robots-sitemap-location"><span class="info">n/a</span></span>'
      
    };
    
    // this goes to main.js and from there to panel.js
    
    self.port.emit('getResponseText', 'robots-file', url);
      
  },
  
  getSitemapContent: function() {
  
    SenSEO.Analyze.data['sitemap-file'] = {
      
      head: 'sitemap.xml',
      
      data: '<span id="sitemap-file"><span class="info">n/a</span></span>'
      
    };
    
    // this goes to main.js and from there to panel.js
    
    // sitemap.xml is checked from panel.js, when robots.txt text data is avaiable (sitemap location could be specefied there)
    
    // ...

  },

  getFacebookLikeButton: function() {
  
    var button = $('iframe[src*="//www.facebook.com/"]'),
        highlightButton;
    
    if (button.length) {
    
      if ($(button).width() && $(button).height() && $(button).css('display') !== 'none' && $(button).css('visibility') !== 'hidden') {
      
        highlightButton = $('<div>').text('found').append($('<a>').attr({
                            'href': '#',
                            'class': 'highlight-button facebook'
                          }).text('highlight').clone()).html();
                                
      } else {
      
        highlightButton = $('<div>').text('found').append($('<span>').attr({
                            'class': 'info'
                          }).text(' (hidden)').clone()).html();
                                 
      }

      SenSEO.Analyze.data['facebook-like-button'] = {
        
        head: 'Facebook like button',
        
        data: highlightButton,
        
        element: button
        
      };
    
    } else {

      SenSEO.Analyze.data['facebook-like-button'] = {
        
        head: 'Facebook like button',
        
        data: 'n/a'
        
      };
    
    }
    
  },
  
  getGooglePlusButton: function() {
  
    var button = $('iframe[src*="//plusone.google.com/"]'),
        highlightButton;
    
    if (button.length) {
    
      if ($(button).width() && $(button).height() && $(button).css('display') !== 'none' && $(button).css('visibility') !== 'hidden') {
      
        highlightButton = $('<div>').text('found').append($('<a>').attr({
                            'href': '#',
                            'class': 'highlight-button plus-one'
                          }).text('highlight').clone()).html();
                                
      } else {
      
        highlightButton = $('<div>').text('found').append($('<span>').attr({
                            'class': 'info'
                          }).text(' (hidden)').clone()).html();
                                 
      }

      SenSEO.Analyze.data['plus-one-button'] = {
        
        head: 'Google +1 button',
        
        data: highlightButton,
        
        element: button
        
      };
    
    } else {

      SenSEO.Analyze.data['plus-one-button'] = {
        
        head: 'Google +1 button',
        
        data: 'n/a'
        
      };
    
    }
  
  },
  
  getTweetButton: function() {
  
    var button = $('iframe[src*="//platform.twitter.com/"]'),
        highlightButton;

    if (button.length) {
    
      if ($(button).width() && $(button).height() && $(button).css('display') !== 'none' && $(button).css('visibility') !== 'hidden') {
      
        highlightButton = $('<div>').text('found').append($('<a>').attr({
                            'href': '#',
                            'class': 'highlight-button twitter'
                          }).text('highlight').clone()).html();
                                
      } else {
      
        highlightButton = $('<div>').text('found').append($('<span>').attr({
                            'class': 'info'
                          }).text(' (hidden)').clone()).html();
                                 
      }

      SenSEO.Analyze.data['twitter-button'] = {
        
        head: 'Twitter button',
        
        data: highlightButton,
        
        element: button
        
      };
    
    } else {

      SenSEO.Analyze.data['twitter-button'] = {
        
        head: 'Twitter button',
        
        data: 'n/a'
        
      };
    
    }
    
  },

  sendData: function(data) {

    // send data back to addon (and from there to panel.js)

    try {
    
      if (data) {
      
        self.postMessage(data);
      
      } else {
    
        self.postMessage(SenSEO.Analyze.data);
        
      }

    } catch (e) {}
    
  },
  
  highlightElement: function(highlightInfo) {
  
    var targetData = highlightInfo.split(' '),  // highlightInfo in this case contains type and level/index of the element
        targetDataKey = targetData[0],  // first value contains type of element
        targetDataValue = targetData[1],
        level,
        index,
        type,
        targetElement;

    if (targetDataKey === 'remove-highlight-element') {
    
      if (SenSEO.Analyze.highlightDOMElement) {
    
        SenSEO.Analyze.highlightDOMElement.css('display', 'none');
        
      }

      if (SenSEO.Analyze.highlightBubbleElement) {
    
        SenSEO.Analyze.highlightBubbleElement.css('display', 'none');
        
      }

    }
    
    if (targetDataKey === 'highlight-headline') {
    
      level = targetDataValue.split('-')[0];
    
      index = targetDataValue.split('-')[1];
    
      // try to localize target element
      
      targetElement = SenSEO.Analyze.data['headline-' + level].element[index];
      
      SenSEO.Analyze.highlightTargetElement(targetElement, 'h' + level);
      
    }
    
    if (targetDataKey === 'highlight-image') {
    
      index = targetDataValue.split('-')[1];
    
      // try to localize target element
      
      targetElement = SenSEO.Analyze.data['img-alt'].element[index];
      
      SenSEO.Analyze.highlightTargetElement(targetElement, 'image');
      
    }
    
    if (targetDataKey === 'highlight-microdata') {
    
      index = targetDataValue.split('-')[1];
    
      // try to localize target element
      
      targetElement = SenSEO.Analyze.data['microdata-itemprop'].element[index];
      
      SenSEO.Analyze.highlightTargetElement(targetElement, 'microdata');
      
    }
    
    if (targetDataKey === 'highlight-button') {
    
      type = targetDataValue;
      
      if (type === 'facebook') {

        // try to localize target element
        
        targetElement = SenSEO.Analyze.data['facebook-like-button'].element;
        
        SenSEO.Analyze.highlightTargetElement(targetElement, 'Facebook');

      }

      if (type === 'plus-one') {

        // try to localize target element
        
        targetElement = SenSEO.Analyze.data['plus-one-button'].element;
        
        SenSEO.Analyze.highlightTargetElement(targetElement, 'Google +1');

      }

      if (type === 'twitter') {

        // try to localize target element
        
        targetElement = SenSEO.Analyze.data['twitter-button'].element;
        
        SenSEO.Analyze.highlightTargetElement(targetElement, 'Twitter');

      }

    }
    
  },
  
  highlightTargetElement: function(targetElement, content) {
    
    var hightlightStylesheet,
        targetElementOffset,
        targetElementWidth,
        targetElementHeight,
        offsetDiff,
        scrollTop;
        
    // get offset / dimension of target element
    
    targetElementOffset = $(targetElement).offset();
    
    targetElementWidth = $(targetElement).width();
    
    targetElementHeight = $(targetElement).height();

    // if there is no highlight element, create one

    if (targetElementWidth && targetElementHeight) {
    
      if (!SenSEO.Analyze.highlightDOMElement) {
      
        $('body').append($('<div>')
                 .attr('id', 'senseo-highlight-container'));
        
        SenSEO.Analyze.highlightDOMElement = $('#senseo-highlight-container');
        
        // create own stylesheet for highlight element styles
        // from: https://developer.mozilla.org/en/DOM/CSSStyleSheet/insertRule
        
        document.getElementsByTagName('head')[0].appendChild(document.createElement('style'));

        hightlightStylesheet = document.styleSheets[document.styleSheets.length - 1];
        
        // does not work
        /*
        if (CSSRule.KEYFRAMES_RULE) {
          document.styleSheets[0].insertRule('@keyframes bgpulse { 0% { background-color: rgba(200, 200, 200, 0.5); } 100% { background-color: rgba(200, 200, 200, 0); } }', 0);
        }
        document.styleSheets[0].insertRule('#senseo-highlight-container {animation-name: bgpulse; animation-duration: 1s; animation-iteration-count: infinite; animation-direction: alternate; animation-timing-function: ease-in-out;}', 0);
        */
        hightlightStylesheet.insertRule('#senseo-highlight-container {-moz-transition-property: left, top, width, height; -moz-transition-duration: 0.15s; -moz-transition-timing-function: ease-out;}', 0);
        hightlightStylesheet.insertRule('#senseo-highlight-container {position: absolute; z-index: 9998; border: 1px red dashed; background-color: rgba(255, 50, 50, 0.3); box-shadow: 0 0 4px #000; -moz-box-sizing: border-box; padding: 3px 5px; text-align: right; color: red; font-family: Arial, Verdana, sans serif; font-size: 18px; font-weight: bold}', 0);
        
      }
      
      SenSEO.Analyze.highlightDOMElement.css({
                                              'display': 'block',
                                              'left': targetElementOffset.left,
                                              'top': targetElementOffset.top,
                                              'width': targetElementWidth,
                                              'height': targetElementHeight
                                            });
                                            
      if (!SenSEO.Analyze.highlightBubbleElement) {
      
        $('body').append($('<div>')
                 .attr('id', 'senseo-highlight-bubble')
                 .append($('<p>')));
        
        SenSEO.Analyze.highlightBubbleElement = $('#senseo-highlight-bubble');
        
        hightlightStylesheet.insertRule('#senseo-highlight-bubble {-moz-transition-property: left, top; -moz-transition-duration: 0.15s; -moz-transition-timing-function: ease-out;}', 0);
        hightlightStylesheet.insertRule('#senseo-highlight-bubble {position: absolute; z-index: 9999; display: inline-block; font-family: Verdana, Arial; width: 80px; padding: 2px; background: -moz-linear-gradient(top, #888 0%,#444 100%); position: absolute; border-radius: 3px; border: 1px #333 solid;}', 0);
        hightlightStylesheet.insertRule('#senseo-highlight-bubble p {font-size: 11px; color: #eef; text-align: center; margin: 0; padding: 0; line-hieght: 1em;}', 0);
        hightlightStylesheet.insertRule('#senseo-highlight-bubble:after {position: absolute; top: -5px; left: 40px; content: ""; display: block; border-left: 5px solid transparent; border-right: 5px solid transparent; border-bottom: 5px solid #333;}', 0);
        
      }

      $(SenSEO.Analyze.highlightBubbleElement).find('p').html(content);

      $(SenSEO.Analyze.highlightBubbleElement).css({
                                                   'display': 'block',
                                                   'left': targetElementOffset.left + Math.round(targetElementWidth / 2) - 43,
                                                   'top': targetElementOffset.top + targetElementHeight + 4
                                                 });

      // show highlighted area
      
      offsetDiff = $(window).height() > 450 ? 400 : $(window).height() / 2;
      
      scrollTop = targetElementOffset.top - offsetDiff < 0 ? 0 : targetElementOffset.top - offsetDiff;
      
      $('html, body').animate({scrollTop: scrollTop}, 300);
    
    }
    
  },
  
  init: function() {

    SenSEO.Analyze.getTitle();
    
    SenSEO.Analyze.getTitleLength();
    
    SenSEO.Analyze.getMetaDescription();
    
    SenSEO.Analyze.getMetaDescriptionLength();
    
    SenSEO.Analyze.getMetaKeywords();
    
    SenSEO.Analyze.getMetaRobots();
    
    SenSEO.Analyze.getHeadlineData(1);
    
    SenSEO.Analyze.getHeadlineData(2);
    
    SenSEO.Analyze.getHeadlineData(3);
    
    SenSEO.Analyze.getHeadlineData(4);
    
    SenSEO.Analyze.getHeadlineData(5);
    
    SenSEO.Analyze.getHeadlineData(6);
    
    SenSEO.Analyze.getImageAltData();
    
    SenSEO.Analyze.getImagesWithoutAlt();

    SenSEO.Analyze.getNumberOfLinks();

    SenSEO.Analyze.getLocationHref();

    SenSEO.Analyze.getLinkCanonical();
    
    SenSEO.Analyze.getProtocol();

    SenSEO.Analyze.getHostName();

    SenSEO.Analyze.getPathName();
    
    SenSEO.Analyze.getURLParams();

    SenSEO.Analyze.getPort();

    SenSEO.Analyze.getDocumentHeaders();

    SenSEO.Analyze.getPageLoadTime();
    
    SenSEO.Analyze.getDomainAge();
  
    SenSEO.Analyze.getMicrodata();
    
    SenSEO.Analyze.getValidationResult();
  
    SenSEO.Analyze.getRobotsFileContent();
    
    SenSEO.Analyze.getSitemapContent();
    
    SenSEO.Analyze.getFacebookLikeButton();
    
    SenSEO.Analyze.getGooglePlusButton();
    
    SenSEO.Analyze.getTweetButton();
    
    SenSEO.Analyze.getBodyData();
    
    SenSEO.Analyze.getNumberOfElements();

    SenSEO.Analyze.getNumberOfWords();

    SenSEO.Analyze.getElementWordRatio();

    SenSEO.Analyze.sendData();

    // initialize message listener
    
    self.on('message', function(message) {
    
      if (message.command) {
      
        if (message.command === 'highlight-element') {
        
          SenSEO.Analyze.highlightElement(message.highlightInfo);
        
        }
        
      }
      
    });
    
  }

};

SenSEO.Analyze.init();