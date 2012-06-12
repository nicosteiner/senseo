var SenSEO = SenSEO || {};

// temp fake strBundle
  
SenSEO.StrBundle = {

  string: {
  
    'console.StartCrawlingButton': 'Start crawling',
    'console.Crawling': 'Crawling',
    'console.StopCrawlingButton': 'Stop crawling',
    'console.StopCrawling': 'Crawling stops',
    'console.ExportDataButton': 'Export data table'
    
  },
  
  getString: function(key) {
  
    return SenSEO.StrBundle.string[key];
  
  }
  
};

SenSEO.CrawlPage = {

  crawledPages: 0,
  
  allPages: [],
  
  allPagesSum: 0,
  
  stopCrawling: false,
  
  dataURI: '',
  
  dataURIRaw: [],

  init: function() {

    // init encoder.js for encoding parts of analyzed document (title etc.)
    
    Encoder.EncodeType = 'numerical';
  
    self.port.on('injectPages', function (data) {

      SenSEO.CrawlPage.allPages = data.pages;
    
      SenSEO.CrawlPage.allPagesSum = data.pages.length;
    
    });
  
    self.port.on('getPageMarkup', function (data) {

      SenSEO.CrawlPage.crawledPages += 1;
    
      // crawling finished?
      
      if (SenSEO.CrawlPage.crawledPages === SenSEO.CrawlPage.allPagesSum || SenSEO.CrawlPage.stopCrawling) {
      
        SenSEO.CrawlPage.crawlingFinished();
      
      } else {
      
        SenSEO.CrawlPage.crawlNextPage();
        
      }
    
      // because of race conditions it's important
      // to place that at the end of function
    
      SenSEO.CrawlPage.analyzePageMarkup(data);
      
    });
  
    SenSEO.CrawlPage.crawlerStatus = $('#crawler-status');
    
    SenSEO.CrawlPage.pagesTableBody = $('#crawler-table tbody');
    
    SenSEO.CrawlPage.initInputsAndButtons();
  
  },

  initInputsAndButtons: function() {
  
    $('#crawl-start-button').text(SenSEO.StrBundle.getString('console.StartCrawlingButton'));
    $('#crawl-crawling span').text(SenSEO.StrBundle.getString('console.Crawling'));
    $('#crawl-stop-button').text(SenSEO.StrBundle.getString('console.StopCrawlingButton'));
    $('#crawl-stop-crawling span').text(SenSEO.StrBundle.getString('console.StopCrawling'));
    $('#export-button').text(SenSEO.StrBundle.getString('console.ExportDataButton'));
    
    $('#crawl-start-button').click(function(e) {
        
      e.preventDefault();
      
      $('#crawl-start-button').addClass('hidden');
      
      $('#crawl-instructions').addClass('hidden');
    
      $('#export-button').addClass('hidden');
    
      $('#crawl-crawling').removeClass('hidden');
      
      $('#crawl-stop-button').removeClass('hidden');
      
      $('#crawler-table').removeClass('hidden');
    
      SenSEO.CrawlPage.startCrawlingPages();
      
    });
  
    $('#crawl-stop-button').click(function(e) {
        
      e.preventDefault();
      
      $('#crawl-stop-button').addClass('hidden');
    
      $('#crawl-crawling').addClass('hidden');
      
      $('#crawl-stop-crawling').removeClass('hidden');
    
      SenSEO.CrawlPage.stopCrawlingPages();
      
    });
    
    $('#export-button').click(function(e) {
        
      e.preventDefault();
      
      SenSEO.CrawlPage.exportDataURI();
      
    });
    
    $('#close-crawl-panel').click(function(e) {
        
      e.preventDefault();
      
      SenSEO.CrawlPage.closeCrawlingPanel();
      
    });
  
  },
    
  startCrawlingPages: function() {

    SenSEO.CrawlPage.crawledPages = 0;
    
    SenSEO.CrawlPage.stopCrawling = false;
    
    SenSEO.CrawlPage.preparePagesTable();
    
    SenSEO.CrawlPage.prepareDataURI();
    
    SenSEO.CrawlPage.crawlerStatus.find('.info').removeClass('hidden');
    
    SenSEO.CrawlPage.crawlerStatus.find('.finished').addClass('hidden');
    
    SenSEO.CrawlPage.crawlNextPage();
    
  },
  
  prepareDataURI: function() {
  
    SenSEO.CrawlPage.dataURI = 'data:application/csv;charset=utf-8,' + encodeURIComponent('url|title|description|keywords|author|ranking\n');
  
  },
  
  exportDataURI: function() {
  
    var i, j,
        concatenatedDataURI = '';
    
    if (SenSEO.CrawlPage.dataURIRaw && SenSEO.CrawlPage.dataURIRaw.length) {
    
      for (i = 0; i < SenSEO.CrawlPage.dataURIRaw.length; i += 1) {
    
        // reset string for every run
    
        concatenatedDataURI = '';
    
        for (j = 0; j < SenSEO.CrawlPage.dataURIRaw[i].length; j += 1) {
      
          // for export convert undifend to empty string
      
          if (typeof SenSEO.CrawlPage.dataURIRaw[i][j] === 'undefined') {
          
            SenSEO.CrawlPage.dataURIRaw[i][j] = '';
          
          }
      
          if (SenSEO.CrawlPage.dataURIRaw[i][j] && SenSEO.CrawlPage.dataURIRaw[i][j].ranking) {
      
            concatenatedDataURI += SenSEO.CrawlPage.dataURIRaw[i][j].ranking;
            
          } else {
      
            concatenatedDataURI += SenSEO.CrawlPage.dataURIRaw[i][j];
            
          }
          
          if (j < SenSEO.CrawlPage.dataURIRaw[i].length - 1) {
          
            concatenatedDataURI += '|';
          
          }
          
        }
        
        concatenatedDataURI += '\n';
        
        SenSEO.CrawlPage.dataURI += encodeURIComponent(concatenatedDataURI);
      
      }
      
      // triggers download because of csv content type
      
      document.location.href = SenSEO.CrawlPage.dataURI;
  
    }
  
  },
  
  closeCrawlingPanel: function() {

    self.port.emit('closeCrawlingPanel');
  
  },
  
  showComponents: function(url, keyword) {

    self.port.emit('showComponents', url, keyword);
  
  },
  
  inspectResult: function(url, keyword) {

    self.port.emit('inspectResult', url, keyword);
  
  },
  
  crawlNextPage: function() {

    self.port.emit('getPageMarkup', SenSEO.CrawlPage.allPages[SenSEO.CrawlPage.crawledPages]);
    
  },
  
  crawlingFinished: function() {

    $('#crawl-stop-button').addClass('hidden');
  
    $('#crawl-stop-crawling').addClass('hidden');
    
    $('#crawl-crawling').addClass('hidden');
      
    $('#crawl-start-button').removeClass('hidden');
    
    $('#export-button').removeClass('hidden');
    
    SenSEO.CrawlPage.crawlerStatus.find('.finished').removeClass('hidden');
    
  },
  
  stopCrawlingPages: function() {

    SenSEO.CrawlPage.stopCrawling = true;
  
  },
  
  analyzePageMarkup: function(data) {
  
    var url = data.url,
        status = data.status,
        contentType = data.contentType,
        text = data.text,
        i,
        metaMarkupArray = [],
        headMarkup,
        markupStart, markupEnd,
        title = '',
        description = '',
        keywords = '',
        author = '',
        keywordList, mainKeyword,
        ranking;

    if (!SenSEO.CrawlPage.stopCrawling) {
        
      if (status === 200) {
      
        if (url !== '' && text !== '') {
          
          if (contentType.indexOf('text/html') !== -1) {
          
            try {
          
              markupStart = text.indexOf('<head>');
            
              markupEnd = text.indexOf('</head>') + 7;
            
              if (markupStart && markupEnd) {
              
                headMarkup = text.substring(markupStart, markupEnd);
              
                markupStart = headMarkup.indexOf('<title>') + 7;
              
                markupEnd = headMarkup.indexOf('</title>');
                
                if (markupStart && markupEnd) {
                
                  title = headMarkup.substring(markupStart, markupEnd);
                
                  // transform entities
                  
                  title = Encoder.htmlDecode(title);
                  
                }
                
                // is there an other meta element?
                
                while (headMarkup.indexOf('<meta ') !== -1 && headMarkup !== '') {
                
                  markupStart = headMarkup.indexOf('<meta ');
                  
                  markupEnd = headMarkup.indexOf('>', headMarkup.indexOf('<meta '));
                
                  metaMarkupArray.push(headMarkup.substring(markupStart, markupEnd + 1));
                
                  headMarkup = headMarkup.substring(markupEnd + 2, headMarkup.length);
                  
                }
                
                for (i = 0; i < metaMarkupArray.length; i += 1) {
                
                  if (metaMarkupArray[i].toLowerCase().indexOf('name="description"') !== -1) {
                  
                    markupStart = metaMarkupArray[i].indexOf('content="') + 9;
                  
                    markupEnd = metaMarkupArray[i].indexOf('"', markupStart);
                  
                    description = metaMarkupArray[i].substring(markupStart, markupEnd);
                  
                    description = Encoder.htmlDecode(description);
                  
                  }
                
                  if (metaMarkupArray[i].indexOf('name="keywords"') !== -1) {
                  
                    markupStart = metaMarkupArray[i].toLowerCase().indexOf('content="') + 9;
                  
                    markupEnd = metaMarkupArray[i].indexOf('"', markupStart);
                  
                    keywords = metaMarkupArray[i].substring(markupStart, markupEnd);
                  
                    keywords = Encoder.htmlDecode(keywords);
                  
                  }
                
                  if (metaMarkupArray[i].indexOf('name="author"') !== -1) {
                  
                    markupStart = metaMarkupArray[i].toLowerCase().indexOf('content="') + 9;
                  
                    markupEnd = metaMarkupArray[i].indexOf('"', markupStart);
                  
                    author = metaMarkupArray[i].substring(markupStart, markupEnd);
                  
                    author = Encoder.htmlDecode(author);
                  
                  }
                
                }
                
                keywordList = keywords ? keywords.split(',') : null;
              
                mainKeyword = keywordList && keywordList[0] !== '' ? keywordList[0] : null;
          
                ranking = SenSEO.CrawlPage.calculateRanking(url, title, description, mainKeyword);
          
                SenSEO.CrawlPage.addPagesTableRow(url, title, description, keywords, author, mainKeyword, ranking);

                SenSEO.CrawlPage.addDataURIRow(url, title, description, keywords, author, ranking);
                
                
              }
              
            } catch(e) {
            
              SenSEO.CrawlPage.showError(url, 'Unkown error: ' + e);
            
            }

          } else {
          
            SenSEO.CrawlPage.showError(url, 'Content-Type of document is not text/html but ' + contentType);
            
          }

        } else {
          
          SenSEO.CrawlPage.showError(url, 'No URL and/or no document content');
            
        }
        
      } else {
          
        SenSEO.CrawlPage.showError(url, 'Error while loading document: ' + status);
          
      }
      
    }
  
  },
  
  showError: function(url, message) {
  
    SenSEO.CrawlPage.pagesTableBody.append(
                        $('<tr class="error">')
                        .append($('<th>')
                        .text(url))
                        .append($('<td colspan="8">')
                        .text(message)));
                            
    SenSEO.CrawlPage.updateCrawlerStatus();
  
  },
  
  preparePagesTable: function() {
    
    // remove outdated table content
  
    SenSEO.CrawlPage.pagesTableBody.empty();
  
  },
  
  getKeywordMatches: function(text, keywords) {

    var matches = 0,
        rx,
        i;
    
    if (text && keywords.length) {
    
      for (i = 0; i < keywords.length; i += 1) {
      
        if (keywords[i] !== '') {
      
          rx = new RegExp(keywords[i], 'gi');
          
          if (text && text.match && text.match(rx)) {
          
            matches = matches + text.match(rx).length;
            
          }
          
        }
        
      }
      
    }
    
    return matches;

  },
  
  formatOutput: function(text, mainKeyword) {
  
    var replaceString,
        formattedOutput,
        rx;
  
    if (text && mainKeyword) {
    
      rx = new RegExp(mainKeyword, 'gi');
      
      if (text && text.replace && text.match(rx)) {
      
        // refactore!
      
        /*
      
        replaceString = $('<div>')
                        .append($('<span>')
                        .attr('class', 'match')
                        .text(mainKeyword).clone()).html();

        formattedOutput = text.replace(rx, replaceString);
        
        */
        
      }
      
    }
    
    return formattedOutput || text;
    
  },
  
  formatMainKeyword: function(keywords, mainKeyword) {
  
    var markup;
  
    if (keywords && keywords !== '') {
    
      markup = $('<span>')
                 .attr('class', 'mainkeyword')
                 .text(mainKeyword);
                
      if (keywords.indexOf(',') !== -1) {
    
        markup.append($('<span>')
                .text(keywords.substring(keywords.indexOf(',')))
              );
        
      }
      
    }
    
    return markup || keywords;
    
  },
  
  addDataURIRow: function(url, title, description, keywords, author, ranking) {
  
    SenSEO.CrawlPage.dataURIRaw.push([
                                      SenSEO.CrawlPage.replacePipeByComma(url),
                                      SenSEO.CrawlPage.replacePipeByComma(title),
                                      SenSEO.CrawlPage.replacePipeByComma(description),
                                      SenSEO.CrawlPage.replacePipeByComma(keywords),
                                      SenSEO.CrawlPage.replacePipeByComma(author),
                                      ranking
                                     ]);
  
  },
  
  replacePipeByComma: function(text) {
    
    // this is important because we generate semicolon seperated values
  
    if (text) {
  
      return text.replace('|', ',');
      
    }
  
  },
  
  calculateRanking: function(url, title, description, mainKeyword) {
  
    var ranking = 0, cause = '', i, td, dd;
  
    // min ranking is 0 / max ranking is 5
  
    // positives
  
    if (title && title !== '') {
    
      ranking += 1;
    
    }
  
    if (description && description !== '') {
    
      ranking += 1;
    
    }
  
    if (mainKeyword && SenSEO.CrawlPage.getKeywordMatches(url, [mainKeyword])) {
    
      ranking += 1;
    
    }
  
    if (mainKeyword && SenSEO.CrawlPage.getKeywordMatches(title, [mainKeyword])) {
    
      ranking += 1;
    
    }
  
    if (mainKeyword && SenSEO.CrawlPage.getKeywordMatches(description, [mainKeyword])) {
    
      ranking += 1;
    
    }
    
    // negatives
    
    // Title has wrong length
    
    if (title && (title.length < 20 || title.length > 70)) {
    
      ranking -= 1;
      
      cause += '<span title="Title has wrong length">tl</span> ';
    
    }
    
    // Description has wrong length
  
    if (description && (description.length < 50 || description.length > 160)) {
    
      ranking -= 1;
    
      cause += '<span title="Description has wrong length">dl</span> ';
    
    }
  
    // Duplicate title/description
    
    if (SenSEO.CrawlPage.dataURIRaw && SenSEO.CrawlPage.dataURIRaw.length) {
    
      td = false;
      
      dd = false;
    
      for (i = 0; i < SenSEO.CrawlPage.dataURIRaw.length; i += 1) {
    
        // index 1: title / index 2: description
    
        if (SenSEO.CrawlPage.dataURIRaw[i][1] === title) {
        
          td = true;
        
        }
    
        if (SenSEO.CrawlPage.dataURIRaw[i][2] === description) {
        
          dd = true;
        
        }
    
        if (td && dd) {
        
          break;
          
        }
    
      }
      
      if (td) {
      
        ranking -= 1;
      
        cause += '<span title="Duplicate title">td</span> ';
      
      }
    
      if (dd) {
      
        ranking -= 1;
      
        cause += '<span title="Duplicate description">dd</span> ';
      
      }
    
    }

    if (ranking < 0) {
    
      ranking = 0;
      
    }
    
    if (cause === '') {
    
      cause = '-';
      
    }
    
    return {
    
      ranking: ranking,
      
      cause: cause
      
    };
  
  },
  
  addPagesTableRow: function(url, title, description, keywords, author, mainKeyword, ranking) {

    var urlMarkup,
        rankingMarkup,
        componentsLinkMarkup,
        inspectLinkMarkup,
        errorRow,
        i;
  
    urlMarkup = url && url !== '' ? SenSEO.CrawlPage.formatOutput(url, mainKeyword) : $('<span class="error">n/a</span>');
  
    title = title && title !== '' ? SenSEO.CrawlPage.formatOutput(title, mainKeyword) : $('<span class="error">n/a</span>');
  
    description = description && description !== '' ? SenSEO.CrawlPage.formatOutput(description, mainKeyword) : $('<span class="error">n/a</span>');
  
    author = author && author !== '' ? author : $('<span class="error">n/a</span>');
  
    keywords = keywords && keywords !== '' ? SenSEO.CrawlPage.formatMainKeyword(keywords, mainKeyword) : $('<span class="error">n/a</span>');
  
    rankingMarkup = $('<span class="ranking">');
  
    for (i = 0; i < ranking.ranking; i += 1) {
  
      rankingMarkup.append('<img src="img/ranking-top.png" width="12" height="12">');
      
    }
  
    for (i = 0; i < (5 - ranking.ranking); i += 1) {
  
      rankingMarkup.append('<img src="img/ranking-flop.png" width="12" height="12">');
      
    }
  
    componentsLinkMarkup = $('<a href="#">Components</a>');
  
    inspectLinkMarkup = $('<a href="#">Inspect</a>');
  
    errorRow = ranking.cause !== '-' ? 'softerror' : 'noerror';
  
    errorRow = ranking.ranking === 5 ? 'perfect' : errorRow;
  
    SenSEO.CrawlPage.pagesTableBody.append(
                        $('<tr>')
                        .addClass(errorRow)
                        .append($('<th>')
                        .text(urlMarkup))
                        .append($('<td>')
                        .text(title))
                        .append($('<td>')
                        .text(description))
                        .append($('<td>')
                        .text(keywords))
                        .append($('<td>')
                        .text(author))
                        .append($('<td>')
                        .append(rankingMarkup))
                        .append($('<td>')
                        .append(ranking.cause))
                        .append($('<td>')
                        .append(componentsLinkMarkup).click(function() {
                          SenSEO.CrawlPage.showComponents(url, mainKeyword);
                        })).append($('<td>')
                        .append(inspectLinkMarkup).click(function() {
                          SenSEO.CrawlPage.inspectResult(url, mainKeyword);
                        })));
    
    SenSEO.CrawlPage.updateCrawlerStatus();
    
  },
  
  updateCrawlerStatus: function() {
  
    SenSEO.CrawlPage.crawlerStatus.find('.progress').text(SenSEO.CrawlPage.crawledPages + '/' + SenSEO.CrawlPage.allPagesSum);
  
    SenSEO.CrawlPage.crawlerStatus.find('.done').css('width', (1200 / SenSEO.CrawlPage.allPagesSum * SenSEO.CrawlPage.crawledPages));
  
  }
  
};

SenSEO.CrawlPage.init();