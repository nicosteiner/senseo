var SenSEO = SenSEO || {};

SenSEO.CrawlPage = {

  crawledPages: 0,
  
  allPagesSum: 0,

  init: function() {

    self.port.on('injectPages', function (data) {

      SenSEO.CrawlPage.preparePagesTable();
    
      SenSEO.CrawlPage.allPagesSum = data.pages.length;
    
      SenSEO.CrawlPage.crawledPages = 0;
    
      SenSEO.CrawlPage.crawlPages(data.pages);
      
    });
  
    self.port.on('getPageMarkup', function (data) {

      SenSEO.CrawlPage.crawledPages += 1;
    
      SenSEO.CrawlPage.analyzePageMarkup(data);
    
    });
  
  },

  crawlPages: function(pages) {

    var i;

    for (i = 0; i < pages.length; i++) {
    
      self.port.emit('getPageMarkup', pages[i]);
    
    }
  
  },
  
  analyzePageMarkup: function(data) {
  
    var url = data.url,
        status = data.status,
        text = data.text,
        headStart, headEnd, headMarkup,
        title, description, keywords, author;
    
    if (status === 200) {
    
      if (url !== '' && text !== '') {
      
        headStart = text.indexOf('<head>');
      
        headEnd = text.indexOf('</head>') + 7;
      
        headMarkup = text.substring(headStart, headEnd);
      
        title = $('<html>').html(headMarkup).find('title').text();
        
        description = $('<html>').html(headMarkup).find('meta[name="description"]').attr('content');

        keywords = $('<html>').html(headMarkup).find('meta[name="keywords"]').attr('content');

        author = $('<html>').html(headMarkup).find('meta[name="author"]').attr('content');

        SenSEO.CrawlPage.addPagesTableRow(url, title, description, keywords, author);

      }

    }
  
  },
  
  preparePagesTable: function() {
    
    SenSEO.CrawlPage.crawlerStatus = $('#crawler-status');
    
    SenSEO.CrawlPage.pagesTableBody = $('#crawler-table tbody');
    
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
  
  addPagesTableRow: function(url, title, description, keywords, author) {

    var dataRow,
        keywordList,
        ranking = 0,
        rankingMarkup,
        i;
  
    keywordList = keywords ? keywords.split(',') : null;
  
    mainKeyword = keywordList && keywordList[0] !== '' ? keywordList[0] : null;
  
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
  
    url = url && url !== '' ? $('<span>').text(url) : $('<span class="error">n/a</span>');
  
    title = title && title !== '' ? $('<span>').text(title) : $('<span class="error">n/a</span>');
  
    description = description && description !== '' ? $('<span>').text(description) : $('<span class="error">n/a</span>');
  
    author = author && author !== '' ? $('<span>').text(author) : $('<span class="error">n/a</span>');
  
    keywords = keywords && keywords !== '' ? $('<span>').text(keywords) : $('<span class="error">n/a</span>');
  
    rankingMarkup = $('<span class="ranking">');
  
    for (i = 0; i < ranking; i += 1) {
  
      rankingMarkup.append('<img src="img/ranking-top.png" width="12" height="12">');
      
    }
  
    for (i = 0; i < (5 - ranking); i += 1) {
  
      rankingMarkup.append('<img src="img/ranking-flop.png" width="12" height="12">');
      
    }
  
    dataRow = $('<div>').append($('<tr>')
                        .append($('<th>')
                        .append(url))
                        .append($('<td>')
                        .append(title))
                        .append($('<td>')
                        .append(description))
                        .append($('<td>')
                        .append(keywords))
                        .append($('<td>')
                        .append(author))
                        .append($('<td>')
                        .append(rankingMarkup)).clone()).html();
    
    SenSEO.CrawlPage.pagesTableBody.append(dataRow);
    
    SenSEO.CrawlPage.updateCrawlerStatus();
    
  },
  
  updateCrawlerStatus: function() {
  
    SenSEO.CrawlPage.crawlerStatus.find('.progress').text(SenSEO.CrawlPage.crawledPages + '/' + SenSEO.CrawlPage.allPagesSum);
  
    SenSEO.CrawlPage.crawlerStatus.find('.done').css('width', (1200 / SenSEO.CrawlPage.allPagesSum * SenSEO.CrawlPage.crawledPages));
  
  }
  
};

SenSEO.CrawlPage.init();