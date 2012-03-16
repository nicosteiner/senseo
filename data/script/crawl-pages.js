var SenSEO = SenSEO || {};

SenSEO.CrawlPage = {

  crawledPages: 0,
  
  allPagesSum: 0,

  init: function() {

    self.port.on('injectPages', function (data) {

      SenSEO.CrawlPage.preparePagesTable();
    
      SenSEO.CrawlPage.allPagesSum = data.pages.length;
    
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
        headMarkupDOM,
        headStart, headEnd, headMarkup,
        title, description, keywords, author;
    
    if (status === 200) {
    
      if (url !== '' && text !== '') {
      
        headStart = text.indexOf('<head>');
      
        headEnd = text.indexOf('</head>') + 7;
      
        headMarkup = text.substring(headStart, headEnd);
      
        //console.log(headMarkup);
      
        // workaround for getting HTMLtoDOM parser work
      
        headMarkup = headMarkup.replace(/http\-equiv/g, 'httpequiv');
      
        headMarkupDOM = HTMLtoDOM(headMarkup);
        
        title = $(headMarkupDOM).find('title').text();
        
        description = $(headMarkupDOM).find('meta[name="description"]').attr('content');

        keywords = $(headMarkupDOM).find('meta[name="keywords"]').attr('content');

        author = $(headMarkupDOM).find('meta[name="author"]').attr('content');

        
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
  
  addPagesTableRow: function(url, title, description, keywords, author) {

    var dataRow;
  
    title = title || 'n/a';
  
    description = description || 'n/a';
  
    keywords = keywords || 'n/a';
  
    author = author || 'n/a';
  
    dataRow = $('<div>').append($('<tr>')
                        .append($('<th>')
                        .text(Encoder.htmlDecode(url)))
                        .append($('<td>')
                        .text(Encoder.htmlDecode(title)))
                        .append($('<td>')
                        .text(Encoder.htmlDecode(description)))
                        .append($('<td>')
                        .text(Encoder.htmlDecode(keywords)))
                        .append($('<td>')
                        .text(Encoder.htmlDecode(author)))
                        .append($('<td>')
                        .text('n/a')).clone()).html();
          
    SenSEO.CrawlPage.pagesTableBody.append(dataRow);
    
    SenSEO.CrawlPage.updateCrawlerStatus();
    
  },
  
  updateCrawlerStatus: function() {
  
    SenSEO.CrawlPage.crawlerStatus.find('.progress').text(SenSEO.CrawlPage.crawledPages + '/' + SenSEO.CrawlPage.allPagesSum);
  
    SenSEO.CrawlPage.crawlerStatus.find('.done').css('width', (1200 / SenSEO.CrawlPage.allPagesSum * SenSEO.CrawlPage.crawledPages));
  
  }
  
};

SenSEO.CrawlPage.init();