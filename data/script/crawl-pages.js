var WatchPug = WatchPug || {};

WatchPug.CrawlPage = {

  init: function() {

    self.port.on('injectPages', function (data) {

      WatchPug.CrawlPage.preparePagesTable();
    
      WatchPug.CrawlPage.crawlPages(data.pages);
      
    });
  
    self.port.on('getPageMarkup', function (data) {

      WatchPug.CrawlPage.analyzePageMarkup(data);
    
    });
  
  },

  crawlPages: function(pages) {

    var i;

    self.port.emit('getPageMarkup', pages[0]);
    
    /*
    for (i = 0; i < pages.length; i++) {
    
      document.getElementById('crawler-container').innerHTML += pages[i] + '<br>';
    
    }
    */
  
  },
  
  analyzePageMarkup: function(data) {
  
    var url = data.url,
        status = data.status,
        text = data.text,
        pageMarkupDOM;
    
    if (status === 200) {
    
      if (url !== '' && text !== '') {
      
        // parse HTML
        
        // use iframe method!
        
        // https://developer.mozilla.org/en/Code_snippets/HTML_to_DOM
                                
        /*
        title = $(pageMarkupDOM).find('head title').text();
      
        description = $(pageMarkupDOM).find('head meta').filter(function() {
        
          return (/description/i.test(this.name));
        
        });

        keywords = $(pageMarkupDOM).find('head meta').filter(function() {
        
          return (/author/i.test(this.name));
        
        });

        author = $(pageMarkupDOM).find('head meta').filter(function() {
        
          return (/author/i.test(this.name));
        
        });
        
        WatchPug.CrawlPage.addPagesTableRow(url, title, description, keywords, author);
        */
      }

    }
  
  },
  
  preparePagesTable: function() {
    
    WatchPug.CrawlPage.pagesTableBody = $('#crawl-table tbody');
    
    // remove outdated table content
  
    WatchPug.CrawlPage.pagesTableBody.empty();
  
  },
  
  addPagesTableRow: function(url, title, description, keywords, author) {

    var dataRow;
  
    dataRow = $('<div>').append($('<tr>')
                        .append($('<th>')
                        .text(url))
                        .append($('<td>')
                        .text(title))
                        .append($('<td>')
                        .text(description))
                        .append($('<td>')
                        .text(keywords))
                        .append($('<td>')
                        .text(author)).clone()).html();
          
    WatchPug.CrawlPage.pagesTableBody.append(dataRow);
      
  }
  
};

WatchPug.CrawlPage.init();