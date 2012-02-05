var mse = {};

mse.Crawler = (function() {

  var submitButton = document.getElementById('submit');

  var startUrlElement = document.getElementById('start-url');
  
  var linkResultcontainer = document.getElementById('link-resultcontainer');
  
  var domain;
  
  var crawlingActive = false;
  
  var canonicalUrlList = [];
  
  var internalLinkList = [];
  
  var numberOfCrawledLinks = 0;
  
  var senseoObjectScope;
  
  var keywords = [];
  
  var maxCrawlResults = 500;
  
  return {

    init: function(scope, startUrl, keywordsRaw) {
    
      senseoObjectScope = scope;
      
      keywords = keywordsRaw.split(' ');
    
      // clear local storage first
      
      content.window.localStorage.clear();
    
      // init submit button
      
      if (startUrl) {
      
        internalLinkList.push(startUrl);
      
        domain = SENSEO.Utils.getDomain();
      
        mse.Crawler.triggerCrawling();
      
      }
    
    },
    
    triggerCrawling: function() {

      // crawling starts here
      // crawling must be independend from analyzing page content
    
      crawlingActive = true;
    
      // this triggers the important asynchronous part
    
      mse.Crawler.getPageContentByLinkList();      
    
    },
    
    getPageContentByLinkList: function() {
    
      if (crawlingActive && internalLinkList.length) {
    
        senseoObjectScope.updateCrawlingInfo(internalLinkList, numberOfCrawledLinks, maxCrawlResults);
          
        // get first url and remove it from the array the same time
    
        var url = internalLinkList.shift();
    
        numberOfCrawledLinks++;
        
        // stop crawling after 500 steps for preventing algorithm going crazy
          
        if (numberOfCrawledLinks > 500) {

          crawlingActive = false;
        
        }
        
        var req = new XMLHttpRequest();
    
        req.open('GET', url, true);
        
        req.onreadystatechange = function(scope, url) {
        
          return function() {
          
            if (req.readyState == 4) {
            
              if (req.status == 200) {
              
                if (req.responseText) {
              
                  var responseText= req.responseText;
                  
                  // transform responseText string to dom
                  
                  // http://groups.google.com/group/comp.lang.javascript/browse_thread/thread/762990f37ae218a3/6e0d948e1820bf24,?pli=1
                  // http://www.webdeveloper.com/forum/showthread.php?t=78024

                  if (SENSEO.Panel.container) {
                      
                    var responseTextIframe = SENSEO.Panel.container.getElementById ? SENSEO.Panel.container.getElementById('response-text-iframe') : false;
                    
                    if (!responseTextIframe) {
                    
                      // create iframe
                      
                      var responseTextIframeElement = SENSEO.Panel.panelDocument.createElement('iframe');
                      
                      responseTextIframeElement.setAttribute('id', 'response-text-iframe');
                      responseTextIframeElement.setAttribute('width', '0');
                      responseTextIframeElement.setAttribute('height', '0');
                      
                      responseTextIframe = SENSEO.Panel.container.appendChild(responseTextIframeElement);
                      
                    }
                    
                    // now responseTextIframe exists in one instance
                    
                    responseTextIframe.contentWindow.document.write(responseText);
                    
                    var responseXML = responseTextIframe.contentWindow.document;
                    
                    // clear iframe

                    responseTextIframe.parentNode.removeChild(responseTextIframe);
                    
                    // this is not the best sollution
                    
                    mse.Crawler.gotPageContentByUrl(responseXML, url);
                    
                  }
                  
                }
              
              }
              
            }
            
          }
            
        }(this, url);
        
        req.send(null);
        
      } else {
      
        // crawling has been stopped
        
        // do something useful here with collected data
        
        // output seo relevant content
        
        mse.Crawler.outputSeoData();
      
      }
    
    },

    gotPageContentByUrl: function(responseXML, url) {
      
      // find canonical url for the document
      
      var canonicalTagUrl = SENSEO.Utils.getCanonicalUrl(responseXML);
      
      var canonicalUrl = SENSEO.Utils.normalizeUrl(canonicalTagUrl, domain, url);
/*
        if (numberOfCrawledLinks < 5) {
        
          alert(canonicalTagUrl + ' #' + domain + ' # ' + url + ' = ' + canonicalUrl);
          alert(canonicalTagUrl.slice(0, domain.length));
        
        }
*/    

      if (!canonicalUrl) {
      
        canonicalUrl = url;
      }
      
      if (!mse.Crawler.urlHasAlreadyBeenCrawled(canonicalUrl) && (numberOfCrawledLinks + internalLinkList.length <= maxCrawlResults)) {
      
        // extract ALL links first
        
        var allLinkHrefs = SENSEO.Utils.getAllLinkHrefs(responseXML);
        
        var linkTypes = mse.Crawler.getLinkTypes(allLinkHrefs, canonicalUrl);
        
        for (var i = 0; i < linkTypes.length; i++) {
        
          // chrome: link case chrome: can happen when a link href="/" is detected
        
          if (linkTypes[i][1] == 'internal' && linkTypes[i][0].substring(0, 7) != 'chrome:') {
          
            internalLinkList.push(linkTypes[i][0]);
          
          }
        
        }
        //alert(canonicalUrl);
        // extract some seo relevant elements
        
        // title, description, bodytext, h1, h2
        
        var titleData = SENSEO.Utils.getTitleData(responseXML);
        
        titleData = titleData.length ? titleData[0] : '';
        
        var descriptionData = SENSEO.Utils.getMetaDescriptionData(responseXML);
        
        descriptionData = descriptionData.length ? descriptionData[0] : '';
        
        var h1Data = SENSEO.Utils.getHeadlineData(responseXML, 1);
        
        var h1DataAggregated = '';
        
        for (var i = 0; i < h1Data.length; i++) {
        
          h1DataAggregated = h1DataAggregated + h1Data[i];
        
          // if this is not the last headline, add a seperator
        
          if (i + 1 < h1Data.length) {
          
            h1DataAggregated += '; ';
            
          }
        
        }
        
        var h2Data = SENSEO.Utils.getHeadlineData(responseXML, 2);
        
        var h2DataAggregated = '';
        
        for (var i = 0; i < h2Data.length; i++) {
        
          h2DataAggregated = h2DataAggregated + h2Data[i];
        
          // if this is not the last headline, add a seperator
        
          if (i + 1 < h2Data.length) {
          
            h2DataAggregated += '; ';
            
          }
        
        }
        
        var bodyData = SENSEO.Utils.getBodyData(responseXML);
        
        // replace all pipes by uppercase i, because pipes are used as seperators in localstorage values
        
        titleData.replace(/\|/g, 'I');
        
        descriptionData.replace(/\|/g, 'I');
        
        h1DataAggregated.replace(/\|/g, 'I');
        
        h2DataAggregated.replace(/\|/g, 'I');
        
        bodyData.replace(/\|/g, 'I');
        
        // save data

        // localstorage limit is 5 mb - hope this is enough
        
        try {

          // use canonical url as key
          
          // save seo data as values seperated by pipes
        
          var seodata = titleData + '|' + descriptionData + '|' + h1DataAggregated + '|' + h2DataAggregated + '|' + bodyData;
        
          content.window.localStorage.setItem(canonicalUrl, seodata);

          // store canonicalUrl also in an array so there is a mapping possible
          // maybe this is not needed
        
          canonicalUrlList.push(canonicalUrl);
      
        } catch (e) {

          if (e == QUOTA_EXCEEDED_ERR) {
    
            // console.log('Quota exceeded!');
            
          }
          
        }
        
      }
      
      // next crawling step is triggered here
      
      mse.Crawler.getPageContentByLinkList();
      
    },
    
    urlHasAlreadyBeenCrawled: function(canonicalUrl) {
    
      if (content.window.localStorage.getItem(canonicalUrl)) {
      
        return true;
      
      } else {
      
        return false;
      
      }
    
    },
    
    outputSeoData: function() {
    
      if (keywords.length) {
    
        var ranking = [];
      
        var sHtml = '<table id="page-crawl-results"><thead>' +
                         '<th>URL</th><th>Title (x3)</th><th>Description (x1)</th><th>Headline h1 (x2)</th><th>Headline h2</th><th>Text (x1)</th><th>Ranking (8 is best)</th>' +
                         '</thead><tbody>';
      
        for (var i = 0; i < content.window.localStorage.length; i++) {
      
          var canonicalUrl = content.window.localStorage.key(i);
        
          var seodata = content.window.localStorage.getItem(canonicalUrl);
        
          if (seodata) {
        
            var seodataComponents = seodata.split('|');
        
            // [0] Title
            // [1] Description
            // [2] H1
            // [3] H2
            // [4] Text
        
            var titleCheck = SENSEO.Utils.getKeywordMatches(seodataComponents[0], keywords) ? 1 : 0;
            var descriptionCheck = SENSEO.Utils.getKeywordMatches(seodataComponents[1], keywords) ? 1 : 0;
            var h1Check = SENSEO.Utils.getKeywordMatches(seodataComponents[2], keywords) ? 1 : 0;
            var h2Check = SENSEO.Utils.getKeywordMatches(seodataComponents[3], keywords) ? 1 : 0;
            var textCheck = SENSEO.Utils.getKeywordMatches(seodataComponents[4], keywords) ? 1 : 0;
        
            ranking[canonicalUrl] = 3 * titleCheck + descriptionCheck + 2 * h1Check + h2Check + textCheck;
        
            sHtml = sHtml + '<tr>' + 
                                     '<td>' + canonicalUrl + '</td>' +
                                     '<td>' + titleCheck + '</td>' +
                                     '<td>' + descriptionCheck + '</td>' +
                                     '<td>' + h1Check + '</td>' +
                                     '<td>' + h2Check + '</td>' +
                                     '<td>' + textCheck + '</td>' +
                                     '<td>' + ranking[canonicalUrl] + '</td>' +
                                     '</tr>';
        
          }
          
        }
        
        sHtml += '</tbody></table>';
        
        senseoObjectScope.crawlingDone(sHtml);
        
      }
    
    },
    
    getLinkTypes: function(allLinkHrefs, documentLocationHref) {
    
      var allLinks = [];
    
      for (var i = 0; i < allLinkHrefs.length; i++) {
       
        // if the next checks don't match, link is internal
       
        var linkType = 'internal';
        
        // check if link starts with # (anker link)
       
        if (allLinkHrefs[i].match(/^\#/)) {

          linkType = 'anker';
        
        } else {
         
          // normalize link url
          
          var normalizedLink = SENSEO.Utils.normalizeUrl(allLinkHrefs[i], domain, documentLocationHref);
          
          if (normalizedLink) {
          
            allLinkHrefs[i] = normalizedLink;
          
          } else {

            linkType = 'external';
          
          }
       
        }
        
        if (!mse.Crawler.urlHasAlreadyBeenCrawled(allLinkHrefs[i])) {
        
          allLinks.push([allLinkHrefs[i], linkType]);
          
        }
       
      }
      
      return allLinks;
      
    }
    
  }

})();