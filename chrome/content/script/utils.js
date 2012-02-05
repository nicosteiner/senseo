SENSEO.Utils = {

  getTitleData: function(contentDocument) {

    var titleData = [];

    var iterator = contentDocument.evaluate('/html/head//title', contentDocument, null, XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null );

    var thisNode = iterator.iterateNext();
    
    while (thisNode) {
      titleData.push(thisNode.textContent);
      thisNode = iterator.iterateNext();
    }	
    
    return titleData;
    
  },

  getMetaDescriptionData: function(contentDocument) {

    var metaDescriptionData = [];

    var iterator = contentDocument.evaluate('/html/head//meta[translate(@name,"ABCDEFGHIJKLMNOPQRSTUVWXYZ","abcdefghijklmnopqrstuvwxyz") = "description"]/@content', contentDocument, null, XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null );

    var thisNode = iterator.iterateNext();
    
    while (thisNode) {
      metaDescriptionData.push(thisNode.textContent);
      thisNode = iterator.iterateNext();
    }	
    
    return metaDescriptionData;

  },

  getMetaKeywordsData: function(contentDocument) {

    var metaKeywordsData = [];

    var iterator = contentDocument.evaluate('/html/head//meta[translate(@name,"ABCDEFGHIJKLMNOPQRSTUVWXYZ","abcdefghijklmnopqrstuvwxyz") = "keywords"]/@content', contentDocument, null, XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null );

    var thisNode = iterator.iterateNext();
    
    while (thisNode) {
      metaKeywordsData.push(thisNode.textContent);
      thisNode = iterator.iterateNext();
    }	
    
    return metaKeywordsData;

  },
  
  getCanonicalUrl: function(contentDocument) {

    var iterator = contentDocument.evaluate('/html/head//link[translate(@rel,"ABCDEFGHIJKLMNOPQRSTUVWXYZ","abcdefghijklmnopqrstuvwxyz") = "canonical"]/@href', contentDocument, null, XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null );

    var thisNode = iterator.iterateNext();
    
    if (thisNode) {
    
      return thisNode.textContent;
      
    }	else {
    
      return false;
    
    }
    
  },
  
  getMetaRobotsData: function(contentDocument) {

    var metaRobotsData = [];

    var iterator = contentDocument.evaluate('/html/head//meta[translate(@name,"ABCDEFGHIJKLMNOPQRSTUVWXYZ","abcdefghijklmnopqrstuvwxyz") = "robots"]/@content', contentDocument, null, XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null );

    var thisNode = iterator.iterateNext();
    
    while (thisNode) {
      metaRobotsData.push(thisNode.textContent);
      thisNode = iterator.iterateNext();
    }	
    
    return metaRobotsData;
    
  },

  checkForRobotsTxt: function() {

    SENSEO.Utils.robotsTxtContent = null;
  
    var req = new XMLHttpRequest();
    
    req.open('GET', SENSEO.Utils.getProtocol() + '//' + SENSEO.Utils.getHostData() + '/robots.txt', true);
    
    req.onreadystatechange = function () {
    
      if (req.readyState == 4) {
      
        if (req.status == 200) {

          SENSEO.Utils.robotsTxtContent = req.responseText;
          
        }
        
      }
        
    };
      
    req.send(null);
    
  },

  checkForSitemap: function() {

    SENSEO.Utils.sitemapContent = null;
  
    var req = new XMLHttpRequest();
    
    req.open('GET', SENSEO.Utils.getProtocol() + '//' + SENSEO.Utils.getHostData() + '/sitemap.xml', true);
    
    req.onreadystatechange = function () {
    
      if (req.readyState == 4) {
      
        if (req.status == 200) {

          SENSEO.Utils.sitemapContent = req.responseText;
          
        }
        
      }
        
    };
    
    req.send(null);
    
  },

  getHeadlineData: function(contentDocument, level) {

    var headlineData = [];

    var iterator = contentDocument.evaluate('/html/body//h' + level, contentDocument, null, XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null );

    var thisNode = iterator.iterateNext();
    
    while (thisNode) {
      headlineData.push(thisNode.textContent);
      thisNode = iterator.iterateNext();
    }	
    
    return headlineData;

  },

  getImageAltData: function(contentDocument, keywords) {

    var iteratorImgSrc = contentDocument.evaluate('/html/body//img/@src', contentDocument, null, XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null );
    var iteratorImgAlt = contentDocument.evaluate('/html/body//img/@alt', contentDocument, null, XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null );
    
    var imageData = [];
    
    var thisNodeSrc = iteratorImgSrc.iterateNext();
    var thisNodeAlt = iteratorImgAlt.iterateNext();
    
    while (thisNodeSrc && thisNodeAlt) {
    
      var imgSrc = thisNodeSrc.textContent;
      var imgAlt = thisNodeAlt.textContent;
    
      if (imgSrc.lastIndexOf('/')) {
        imgSrc = imgSrc.substr(imgSrc.lastIndexOf('/') + 1);
      }

      if (imgAlt != '') {
        imageData.push([imgSrc, SENSEO.Utils.markKeywordMatches(imgAlt, keywords)]);
      } else {
        imageData.push([imgSrc, '<span class="failed">empty or n/a</span>']);
      }
      
      thisNodeSrc = iteratorImgSrc.iterateNext();
      thisNodeAlt = iteratorImgAlt.iterateNext();
    
    }	
    
    return imageData;
    
  },

  getAllLinkHrefs : function(contentDocument) {
    
    var allLinksXpath = contentDocument.evaluate('/html/body//a/@href', contentDocument, null, XPathResult.ANY_TYPE, null );
    
    var allLinkHrefs = [];
    
    var thisNodeLinkHref = allLinksXpath.iterateNext();
    
    while (thisNodeLinkHref) {
    
      var linkHref = thisNodeLinkHref.textContent;
    
      if (linkHref != '') {
      
        allLinkHrefs.push(linkHref);
        
      }
      
      thisNodeLinkHref = allLinksXpath.iterateNext();
    
    }
    
    return allLinkHrefs;
  
  },
  
  numberOfLinks: function(contentDocument) {

    var numberOfLinks = contentDocument.evaluate('count(/html/body//a)', contentDocument, null, XPathResult.ANY_TYPE, null );

    var allLinksCount = numberOfLinks.numberValue;

    return allLinksCount;

  },

  altImagesGrade: function(contentDocument) {

    var allImages = contentDocument.evaluate('count(/html/body//img)', contentDocument, null, XPathResult.ANY_TYPE, null );
    var allAltImages = contentDocument.evaluate('count(/html/body//img[@alt != ""])', contentDocument, null, XPathResult.ANY_TYPE, null );

    var allImagesCount = allImages.numberValue;
    var allAltImagesCount = allAltImages.numberValue;

    if (allImagesCount > 0) {
      return (allAltImagesCount / allImagesCount) * 100;
    } else {
      return 0;
    }

  },

  numberOfElements: function(contentDocument) {

    var allElements = contentDocument.evaluate('count(descendant-or-self::*)', contentDocument, null, XPathResult.ANY_TYPE, null );

    var allElementsCount = allElements.numberValue;

    return allElementsCount;
    
  },

  getKeywordMatches: function(text, keywords) {

    var matches = 0;
    
    if (text && keywords) {
      for (var i = 0; i < keywords.length; i++) {
        var rx = new RegExp(keywords[i], 'gi');
        if (text.match && text.match(rx)) {
          matches = matches + text.match(rx).length;
        }
      }
    }
    
    return matches;
    
  },

  getTextLength: function(text) {

    return text.split(" ").length;
    
  },

  getKeywordDensity: function(text, keywords) {

    var matches = SENSEO.Utils.getKeywordMatches(text, keywords);
    var density = Math.round(matches / SENSEO.Utils.getTextLength(text) * 100 * 100) / 100;
    
    return density;
    
  },

  getElementWordRatio: function(words, elements) {

    var ratio = Math.round(words / elements * 100 * 100) / 100;
    
    return ratio;
    
  },

  getProtocol: function() {

    var protocol = content.window.location.protocol;
    
    return protocol;
    
  },

  getHostData: function() {

    var hostData = content.window.location.hostname;
    
    return hostData;
    
  },

  getPathData: function() {

    var pathData = content.window.location.pathname;
    
    return decodeURI(pathData);
    
  },

  markKeywordMatches: function(text, keywords) {

    if (text && keywords) {
    
      text = SENSEO.Utils.encodeMarkup(text);
    
      for (var i = 0; i < keywords.length; i++) {
      
        var rx = new RegExp(keywords[i], 'gi');
        
        if (text.replace) {
        
          text = text.replace(rx, '<span class="match">' + keywords[i] + '</span>');
          
        }
        
      }
      
      return text;
      
    }
    
  },
  
  encodeMarkup: function(s) {
  
    return s.replace(/\</g, '&lt;').replace(/\>/g, '&gt;');
    
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

  replaceSpace: function(s) {

    return s.replace(/\s/g, '+');

  },
   
  getBodyData: function(contentDocument) {

    var bodyText = contentDocument.evaluate('/html/body//.[name() != "SCRIPT"]/text()', contentDocument, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null );
    
    var bodyData = '';
    
    for (var i = 0; i < bodyText.snapshotLength; i++) {
    
      var trimtext = bodyText.snapshotItem(i).textContent;
      
      while (trimtext.search(/\s\s+/g) != -1) {
        trimtext = trimtext.replace(/\s\s+/g, ' ');
      }
    
      trimtext = trimtext.replace(/\015\012|\015|\012/g, '');
    
      if (SENSEO.Utils.trim(trimtext) != '') {
        bodyData = bodyData + SENSEO.Utils.trim(trimtext) + ' ';
      }
        
    }

    return SENSEO.Utils.trim(bodyData);
    
  },

  similarGrade: function(text1, text2) {

    var matches = 0;
    
    if (text1 && text2) {
    
      var text1 = text1.split(" ");
      var text2 = text2.split(" ");
      
      for (var i = 0; i < text1.length; i++) {
        for (var j = 0; j < text2.length; j++) {
          if (text1[i].toLowerCase() == text2[j].toLowerCase()) {
            matches = matches + 1;
            break;
          }
        }
      }
      
      return Math.round((matches / ((text1.length + text2.length) / 2) * 100) * 100) / 100;
      
    }
    
  },

  trimWhitespace: function(text) {

    text = text.replace(/^\s+/, '').replace(/\s+$/, '');
    
    return text;
    
  },

  includesAllKeywords: function(text, keywords) {

    if (text && keywords) {
    
      for (var i = 0; i < keywords.length; i++) {
        var rx = new RegExp(SENSEO.Utils.trimWhitespace(keywords[i].replace(/^\W/g, ' ').replace(/\W$/g, ' ')), 'i');
        if (text.match) {
          if (!text.match(rx)) {
            return false;
          }
        }
      }
      
      return true;
      
    }
    
  },

  includesSomeKeywords: function(text, keywords) {

    if (text && keywords) {
    
      for (var i = 0; i < keywords.length; i++) {
        var rx = new RegExp(SENSEO.Utils.trimWhitespace(keywords[i].replace(/^\W/g, ' ').replace(/\W$/g, ' ')), 'i');
        if (text.match) {
          if (text.match(rx)) {
            return true;
          }
        }
      }
      
      return false;
      
    }
    
  },

  calculateGrade: function(grades) {

    if (grades) {
    
      var count = grades.length;
      var index = 0;
      
      for (var i = 0; i < count; i++) {
        if (grades[i] == 'pass') {
          index = index + 3;
        }
        if (grades[i] == 'warning') {
          index = index + 1;
        }
      }
      
      var percent = parseInt(index / (count * 3) * 100);

      if (percent >= 90)
        return ['A', percent];
      else if (percent >= 80)
        return ['B', percent];
      else if (percent >= 70)
        return ['C', percent];
      else if (percent >= 60)
        return ['D', percent];
      else if (percent >= 50)
        return ['E', percent];
      else
        return ['F', percent];
        
    }
    
  },

  calculateWeightedGrade: function(grades) {

    if (grades) {
    
      var count = grades.length;
      var index = 0;
      var avweight = 0;
      
      for (var i = 0; i < count; i++) {
        index = index + grades[i][0] * grades[i][1];
        avweight += grades[i][1];
      }
      
      var percent = parseInt(index / (count * 100 * (avweight / count)) * 100);

      if (percent > 90)
        return ['A', percent];
      else if (percent > 80)
        return ['B', percent];
      else if (percent > 70)
        return ['C', percent];
      else if (percent > 60)
        return ['D', percent];
      else if (percent > 50)
        return ['E', percent];
      else
        return ['F', percent];
        
    }
    
  },
  
  // new stuff
  
  getDomain: function() {
  
    var url = content.window.location.href;

    var url_parts = url.split('/');

    var domain_name = url_parts[0] + '//' + url_parts[2];

    return domain_name; 
  
  },
  
  normalizeUrl: function(url, domain, documentLocationHref) {
  
    var normalizedUrl;
    
    if (url.substring(0, 1) == '/') {

      if (!url.match(/Jumpto/) && !url.match(/deref/)) {
    
        // normalizedUrl starts with /
      
        normalizedUrl = domain + url;
        
      }
    
    } else {
    
      if (url.substring(0, 5) != 'http:' && url.substring(0, 6) != 'https:' && url.substring(0, 7) != 'chrome:' && url.substring(0, 4) != 'ftp:' && url.substring(0, 5) != 'mail:') {
      
        // normalizedUrl is relative without /
      
        normalizedUrl = documentLocationHref.substring(0, documentLocationHref.lastIndexOf('/')) + '/' + url;
      
      } else {
      
        // url has same domain
        
        if (url.slice(0, domain.length) == domain) {
        
          normalizedUrl = url;
        
        }
      
      }
    
    }
    
    // normalizedUrl can be undefined
    // in this case, canonical tag is not useful
    
    return normalizedUrl;
  
  }

};