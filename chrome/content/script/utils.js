SENSEO.Utils = {

  getTitleData: function() {

    var titleData = [];

    var iterator = content.document.evaluate('/html/head//title', content.document, null, XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null );

    var thisNode = iterator.iterateNext();
    
    while (thisNode) {
      titleData.push(thisNode.textContent);
      thisNode = iterator.iterateNext();
    }	
    
    return titleData;
    
  },

  getMetaDescriptionData: function() {

    var metaDescriptionData = [];

    var iterator = content.document.evaluate('/html/head//meta[translate(@name,"ABCDEFGHIJKLMNOPQRSTUVWXYZ","abcdefghijklmnopqrstuvwxyz") = "description"]/@content', content.document, null, XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null );

    var thisNode = iterator.iterateNext();
    
    while (thisNode) {
      metaDescriptionData.push(thisNode.textContent);
      thisNode = iterator.iterateNext();
    }	
    
    return metaDescriptionData;

  },

  getMetaKeywordsData: function() {

    var metaKeywordsData = [];

    var iterator = content.document.evaluate('/html/head//meta[translate(@name,"ABCDEFGHIJKLMNOPQRSTUVWXYZ","abcdefghijklmnopqrstuvwxyz") = "keywords"]/@content', content.document, null, XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null );

    var thisNode = iterator.iterateNext();
    
    while (thisNode) {
      metaKeywordsData.push(thisNode.textContent);
      thisNode = iterator.iterateNext();
    }	
    
    return metaKeywordsData;

  },

  getMetaRobotsData: function() {

    var metaRobotsData = [];

    var iterator = content.document.evaluate('/html/head//meta[translate(@name,"ABCDEFGHIJKLMNOPQRSTUVWXYZ","abcdefghijklmnopqrstuvwxyz") = "robots"]/@content', content.document, null, XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null );

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

  getHeadlineData: function(level) {

    var headlineData = [];

    var iterator = content.document.evaluate('/html/body//h' + level, content.document, null, XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null );

    var thisNode = iterator.iterateNext();
    
    while (thisNode) {
      headlineData.push(thisNode.textContent);
      thisNode = iterator.iterateNext();
    }	
    
    return headlineData;

  },

  getImageAltData: function(keywords) {

    var iteratorImgSrc = content.document.evaluate('/html/body//img/@src', content.document, null, XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null );
    var iteratorImgAlt = content.document.evaluate('/html/body//img/@alt', content.document, null, XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null );
    
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

  numberOfLinks: function() {

    var numberOfLinks = content.document.evaluate('count(/html/body//a)', content.document, null, XPathResult.ANY_TYPE, null );

    var allLinksCount = numberOfLinks.numberValue;

    return allLinksCount;

  },

  altImagesGrade: function() {

    var allImages = content.document.evaluate('count(/html/body//img)', content.document, null, XPathResult.ANY_TYPE, null );
    var allAltImages = content.document.evaluate('count(/html/body//img[@alt != ""])', content.document, null, XPathResult.ANY_TYPE, null );

    var allImagesCount = allImages.numberValue;
    var allAltImagesCount = allAltImages.numberValue;

    if (allImagesCount > 0) {
      return (allAltImagesCount / allImagesCount) * 100;
    } else {
      return 0;
    }

  },

  numberOfElements: function() {

    var allElements = content.document.evaluate('count(descendant-or-self::*)', content.document, null, XPathResult.ANY_TYPE, null );

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
   
  getBodyData: function() {

    var bodyText = content.document.evaluate('/html/body//.[name() != "SCRIPT"]/text()', content.document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null );
    
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
  
  setShortURL: function(shortURL) {
  
    if (SENSEO.Panel.panelDocument.getElementById('twitter-grade') && SENSEO.Panel.panelDocument.getElementById('twitter-site-url')) {
  
      SENSEO.Panel.panelDocument.getElementById('twitter-grade').innerHTML = SENSEO.grade;
      SENSEO.Panel.panelDocument.getElementById('twitter-site-url').innerHTML = shortURL;
    
      SENSEO.Panel.panelDocument.getElementById('twitter-container').style.display = 'inline-block';
      
      SENSEO.Panel.panelDocument.getElementById('tweet-this').href = 'http://twitter.com/home?status=' + encodeURI('I got grade A (' + SENSEO.grade + '/100) for optimizing my site ' + shortURL + ' with SenSEO Firefox extension http://goo.gl/d7dp');
      
    }
  
  },
  
  getShortURL: function(url) {

    // google shortener service is unstable (Labs status)
  
    var req = new XMLHttpRequest();
    
    req.onreadystatechange = function(scope) {
    
      return function(aEvt) {
      
        if (req.readyState == 4) {
        
          if (req.status == 200) {
          
            var ajaxResponse = req.responseText;
            
            if (ajaxResponse) {
            
              var firstSplit = ajaxResponse.split(',');
              
              var secondSplit = firstSplit[1].split(': ');
              
            }
            
            if (ajaxResponse.substring(0, 14) == '{"short_url":"') {
          
              var shortURL = ajaxResponse.substring(14, ajaxResponse.length - 2);
          
              if (shortURL) {
              
                scope.setShortURL(shortURL);
                
              }
          
            }
          
          }
          
        }
        
      }
        
    }(this);
    
    req.open('POST', 'https://www.googleapis.com/urlshortener/v1/url', true);

    req.setRequestHeader('Content-Type', 'application/json');

    req.send('{"longUrl": "' + encodeURIComponent(content.window.location) + '"}');
    
  }

};