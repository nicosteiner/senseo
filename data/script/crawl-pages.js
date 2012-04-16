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
      
        // time for the next 10 pages?
        
        if (SenSEO.CrawlPage.crawledPages%10 === 0) {
        
          SenSEO.CrawlPage.crawlNextPages();
        
        }
        
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
    
    SenSEO.CrawlPage.crawlNextPages();
    
  },
  
  prepareDataURI: function() {
  
    SenSEO.CrawlPage.dataURI = 'data:application/csv;charset=utf-8,' + encodeURIComponent('url|title|description|keywords|author|ranking\n');
  
  },
  
  exportDataURI: function() {
  
    var i, j,
        concatenatedDataURI = '';
    
    if (SenSEO.CrawlPage.dataURIRaw && SenSEO.CrawlPage.dataURIRaw.length) {
    
      for (i = 0; i < SenSEO.CrawlPage.dataURIRaw.length; i += 1) {
    
        for (j = 0; j < SenSEO.CrawlPage.dataURIRaw[i].length; j += 1) {
      
          concatenatedDataURI += SenSEO.CrawlPage.dataURIRaw[i][j];
          
          if (j < SenSEO.CrawlPage.dataURIRaw[i].length - 1) {
          
            concatenatedDataURI += '|';
          
          }
          
        }
        
        concatenatedDataURI += '\n';
        
        SenSEO.CrawlPage.dataURI += encodeURIComponent(concatenatedDataURI);
      
      }
      
      // starts download because of csv content type
      
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
  
  crawlNextPages: function() {

    var i, nextFiveOrLess;

    // a maximum of 10 pages are processed at once
    
    nextFiveOrLess = SenSEO.CrawlPage.allPagesSum - SenSEO.CrawlPage.crawledPages < 10 ? SenSEO.CrawlPage.allPagesSum - SenSEO.CrawlPage.crawledPages : 10;
    
    for (i = SenSEO.CrawlPage.crawledPages; i < SenSEO.CrawlPage.crawledPages + nextFiveOrLess; i += 1) {
    
      self.port.emit('getPageMarkup', SenSEO.CrawlPage.allPages[i]);
    
    }
    
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
        text = data.text,
        headStart, headEnd, headMarkup,
        title, description, keywords, author, keywordList, mainKeyword,
        ranking;
    
    if (status === 200 && !SenSEO.CrawlPage.stopCrawling) {
    
      if (url !== '' && text !== '') {
      
        headStart = text.indexOf('<head>');
      
        headEnd = text.indexOf('</head>') + 7;
      
        headMarkup = text.substring(headStart, headEnd);
      
        title = $('<html>').html(headMarkup).find('title').text();
        
        description = $('<html>').html(headMarkup).find('meta[name="description"]').attr('content');

        keywords = $('<html>').html(headMarkup).find('meta[name="keywords"]').attr('content');

        author = $('<html>').html(headMarkup).find('meta[name="author"]').attr('content');

        keywordList = keywords ? keywords.split(',') : null;
      
        mainKeyword = keywordList && keywordList[0] !== '' ? keywordList[0] : null;
  
        ranking = SenSEO.CrawlPage.calculateRanking(url, title, description, mainKeyword);
  
        SenSEO.CrawlPage.addPagesTableRow(url, title, description, keywords, author, mainKeyword, ranking);

        SenSEO.CrawlPage.addDataURIRow(url, title, description, keywords, author, ranking);

      }

    }
  
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
      
        replaceString = $('<div>')
                        .append($('<span>')
                        .attr('class', 'match')
                        .text(mainKeyword).clone()).html();

        formattedOutput = text.replace(rx, replaceString);
        
      }
      
    }
    
    return formattedOutput || text;
    
  },
  
  formatMainKeyword: function(keywords, mainKeyword) {
  
    var replaceString,
        formattedOutput;
  
    if (keywords && keywords !== '') {
    
      replaceString = $('<div>')
                      .append($('<span>')
                      .attr('class', 'mainkeyword')
                      .text(mainKeyword).clone()).html();

      if (keywords.indexOf(',') !== -1) {
    
        formattedOutput = replaceString + keywords.substring(keywords.indexOf(','));
        
      } else {
      
        formattedOutput = replaceString;
      
      }
      
    }
    
    return formattedOutput || keywords;
    
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
      
    } else {
    
      // all strange stuff is normalized to empty string
    
      return '';
    
    }
  
  },
  
  calculateRanking: function(url, title, description, mainKeyword) {
  
    var ranking = 0;
  
    // min ranking is 0 / max ranking is 5
  
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
  
    return ranking;
  
  },
  
  addPagesTableRow: function(url, title, description, keywords, author, mainKeyword, ranking) {

    var urlMarkup,
        rankingMarkup,
        componentsLinkMarkup,
        inspectLinkMarkup,
        i;
  
    urlMarkup = url && url !== '' ? SenSEO.CrawlPage.formatOutput(url, mainKeyword) : $('<span class="error">n/a</span>');
  
    title = title && title !== '' ? SenSEO.CrawlPage.formatOutput(title, mainKeyword) : $('<span class="error">n/a</span>');
  
    description = description && description !== '' ? SenSEO.CrawlPage.formatOutput(description, mainKeyword) : $('<span class="error">n/a</span>');
  
    author = author && author !== '' ? author : $('<span class="error">n/a</span>');
  
    keywords = keywords && keywords !== '' ? SenSEO.CrawlPage.formatMainKeyword(keywords, mainKeyword) : $('<span class="error">n/a</span>');
  
    rankingMarkup = $('<span class="ranking">');
  
    for (i = 0; i < ranking; i += 1) {
  
      rankingMarkup.append('<img src="img/ranking-top.png" width="12" height="12">');
      
    }
  
    for (i = 0; i < (5 - ranking); i += 1) {
  
      rankingMarkup.append('<img src="img/ranking-flop.png" width="12" height="12">');
      
    }
  
    componentsLinkMarkup = $('<a href="#">Components</a>');
  
    inspectLinkMarkup = $('<a href="#">Inspect</a>');
  
    SenSEO.CrawlPage.pagesTableBody.append(
                        $('<tr>')
                        .append($('<th>')
                        .append(urlMarkup))
                        .append($('<td>')
                        .append(title))
                        .append($('<td>')
                        .append(description))
                        .append($('<td>')
                        .append(keywords))
                        .append($('<td>')
                        .append(author))
                        .append($('<td>')
                        .append(rankingMarkup))
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