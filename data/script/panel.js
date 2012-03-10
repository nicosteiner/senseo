var WatchPug = WatchPug || {};

// temp fake strBundle
  
WatchPug.StrBundle = {

  string: {
  
    'intro.SenSEOForFirebug': 'SenSEO for Firebug',
    'intro.EnterSomeKeywords': 'Enter some Keywords SenSEO should analyze the page for.',
    'intro.ClickInspectSEOCriteria': 'Click "Inspect SEO Criteria" to have SenSEO analyze the page.',
    'intro.CopyrightNicoSteiner': 'Copyright &copy; Nico Steiner. All rights reserved.',

    'console.Keywords': 'Keywords',
    'console.InspectSeoCriteria': 'Inspect SEO Criteria',
    'console.CrawlAllPages': 'Crawl all Pages',
    'console.ShowComponents': 'Components',
    'console.Printview': 'Printview',

    'menu.Home': 'SenSEO Home',
    'menu.HideStatusBar': 'Hide Statusbar Info',
    'menu.HighContrastView': 'High contrast view',

    'pref.Title': 'SenSEO Options',
    'pref.Options': 'SenSEO Options',
    'pref.DoNotShowStatusBar': 'Do not show SenSEO on status bar',
    'pref.HighContrastView': 'High contrast view',

    'sc.Title': 'title tag',
    'sc.MetaDescription': 'meta description tag',
    'sc.MetaKeywords': 'meta keywords tag',
    'sc.MetaRobots': 'meta robots',
    'sc.RobotsTxt': 'robots.txt',
    'sc.SitemapXml': 'sitemap.xml',
    
    'sc.LevelHeadline': 'level headline',
    'sc.Image': 'image',
    'sc.LinksWithoutTitle': 'Links without Title',
    'sc.LocationHost': 'Location-HostPath',
    'sc.LocationPath': 'Location-Path',
    'sc.VisibleContent': 'Visible Content',
    'sc.TextLength': 'Number of Words',
    'sc.KeywordMatches': 'Number of matching Keywords',
    'sc.KeywordDensity': 'Keyword-Density',
    'sc.NumberOfElements': 'Number of HTML-Elements',
    'sc.ElementsTextRation': 'Ratio from Words to HTML-Elements',
    'sc.NumberOfLinks': 'Number of Links',
    'sc.CharacterEncoding': 'Character-Encoding',

    'pv.DocumentCheckedBySenSEO': 'Document checked by SenSEO',
    'pv.AnalysisHeadline': 'Analysis',
    'pv.ComponentsHeadline': 'Components',
    'pv.MoreInformation': 'For more information see',
    'pv.pleaseEnterKeywords': 'Please enter some keywords!',
    'pv.insufficientData': 'Insufficient data to generate the preview.',

    'al.tt.WatchPugGrade': 'SenSEO grade',

    'al.tt.UseTitleTag': 'Use title tag correctly',
    'al.tt.UseMetaDescription': 'Use meta description tag correctly',
    'al.tt.UseMetaKeywords': 'Use meta keywords tag correctly',
    'al.tt.UseMetaRobots': 'Provide robots.txt or robots meta tag',
    'al.tt.UseSitemap': 'Provide sitemap.xml',
    'al.tt.HeadlineTags': 'heading tags',
    'al.tt.PageContent': 'Page content',
    'al.tt.Domain': 'Domain',
    'al.tt.Path': 'Path',
    'al.tt.NotFound': 'not found',
    'al.tt.MoreInfo': 'more info',
    'al.tt.Highlight': 'highlight',

    'al.st.TitleOnetime': 'Use this tag exactly one time.',
    'al.st.TitleIncludes': 'Title should include all keywords.',
    'al.st.TitleLength': 'Length should not be greater than 65 characters.',
    'al.st.TitleWords': 'Title should not contain more than 15 words.',

    'al.st.DescriptionOnetime': 'Use this tag exactly one time.',
    'al.st.DescriptionIncludes': 'Meta description should include all keywords.',
    'al.st.DescriptionLength': 'Length should not be greater than 150 characters.',
    'al.st.DescriptionWords': 'Meta description should not contain more than 30 words.',

    'al.st.KeywordsOnetime': 'Use this tag only one time.',
    'al.st.KeywordsIncludes': 'Meta keywords should include all keywords.',
    'al.st.KeywordsRelevant': 'Use only relevant keywords which can be found in the content.',
    'al.st.KeywordsWords': 'Tag should not contain more than 10 keywords.',
    'al.st.KeywordsSeperated': 'Write keywords comma seperated.',
    'al.st.KeywordsLowercase': 'Write keywords lowercase.',

    'al.st.MetaRobots': 'Use robots declarations to control search engine access.',
    'al.st.Sitemap': 'Offer a sitemap and submit it with Google Webmaster Tools.',

    'al.st.HeadlinesStructure': 'Use headings to structure your content.',
    'al.st.HeadlinesOnetime': 'Use <h1> only one time.',
    'al.st.HeadlinesInclude': '<h1> should include all keywords.',
    'al.st.HeadlinesOther': 'Use <h2> and <h3> tags.',

    'al.st.ContentUnique': 'Offer unique content on your page.',
    'al.st.ContentDuplicate': 'Prevent duplicate content.',
    'al.st.ContentAlt': 'Images should always have alternative texts.',
    'al.st.ContentPictureQuality': 'Improve the quality of your pictures (resolution, pixel).',
    'al.st.ContentForImages': 'Surround your images with suitable content like headlines or paragraphs.',
    'al.st.ContentStyle': 'Write your content in a clear and natural style.',
    'al.st.ContentSocialMedia': 'Add social media sharing buttons to your site.',
    'al.st.ContentKeywords': 'Mention your keywords a few times.',
    'al.st.ContentLinks': 'Keep the links to a reasonable number (fewer than 100).',

    'al.st.HostIncludes': 'Domain should include all keywords.',
    'al.st.HostIdn': 'Don\'t use IDN domains (domains with special characters).',
    'al.st.HostHyphen': 'Use hyphens instead of underscores to seperate words.',
    'al.st.Host2Years': 'Your domain should be older than 2 years.',
    'al.st.HostSelf': 'Selfhost your domain to improve authority.',
    'al.st.HostRedirect': 'Redirect non-www domains to www domains or the other way round.',

    'al.st.PathLength': 'Try to keep the path short.',
    'al.st.PathDynparam': 'Don\'t use dynamic parameters.',
    'al.st.PathHyphen': 'Use hyphens instead of underscores to seperate words.',
    'al.st.PathLowercase': 'Words in the path should be lowercase.',
    'al.st.PathLevels': 'Path should not go deeper than 3 levels.',

    'al.st.CodeSemanticValid': 'Make sure your code is semantic and valid.',
    'al.st.FastPageLoad': 'Optimize page load time of your site (faster than two seconds).',
    'al.st.Microdata': 'Use microdata to mark up reviews, addresses etc.',

    'al.lg.Pass': 'pass',
    'al.lg.Warning': 'warning',
    'al.lg.Fail': 'fail',
    'al.lg.NotChecked': 'not checked'
  },
  
  getString: function(key) {
  
    return WatchPug.StrBundle.string[key];
  
  }
  
};

WatchPug.Panel = {

  activeDocumentComponents: [],
  
  found: [],
  
  status: [],
  
  grade: [],
  
  setting: [],
  
  callback: [],
  
  tabs: ['intro', 'inspect', 'components', 'settings'],
  
  keywordsString: '',
  
  keywords: '',

  requestKeyword: '',
  
  processedDomainAge: false,
  
  processedRobotsFile: false,
  
  processedSitemapFile: false,
  
  processedValidationResult: false,
  
  forceAsyncDataIsReady: false,
  
  inspectOngoing: true,
  
  highlightedDataRow: null,
  
  savedGrade: null,
  
  savedStatus: null,
  
  init: function() {

    // init panel instantly for faster user experience

    if ($('#intro-container').hasClass('hidden') &&
        $('#inspect-container').hasClass('hidden') &&
        $('#components-container').hasClass('hidden') &&
        $('#settings-container').hasClass('hidden')) {
      
      // if all containers are hidden, panel is opened first time
    
      WatchPug.Panel.initPanel();
      
      WatchPug.Panel.initInputsAndButtons();
      
    }
    
    // reset UI when panel is opened
    
    self.port.on('resetUI', function handleValidatePageEvent() {

      WatchPug.Panel.resetUI();
    
      // asynch data needs longer (is set to true by getResponseText port)
      
      WatchPug.Panel.resetAsyncProcess();
      
    });
    
    // asynchronously fetched markup data lands here

    self.port.on('getResponseText', function handleValidatePageEvent(data) {
      
      // manual switch for different responses
      
      if (data.key === 'domain-age') {
      
        WatchPug.Panel.processDomainAge(data);
        
        WatchPug.Panel.processedDomainAge = true;
      
      } else if (data.key === 'robots-file') {
      
        WatchPug.Panel.processRobotsFile(data);
      
        WatchPug.Panel.processedRobotsFile = true;
      
      } else if (data.key === 'sitemap-file') {

        WatchPug.Panel.processSitemapFile(data);
      
        WatchPug.Panel.processedSitemapFile = true;
      
      } else if (data.key === 'validation-result') {

        WatchPug.Panel.processValidationResult(data);
      
        WatchPug.Panel.processedValidationResult = true;
      
      } else if (data.key === 'related-keywords') {

        WatchPug.Panel.processRelatedKeywords(data);
      
      }
      
      if (data.key !== 'related-keywords' && WatchPug.Panel.asyncDataIsReady()) {
      
        WatchPug.Panel.showInspectResultPre();
        
      }
      
    });
  
    // preferences land here

    self.port.on('getSettings', function handleSettingsData(data) {
      
      WatchPug.Panel.setting = data;
      
    });
  
    self.on('message', function(activeDocumentComponents) {
    
      WatchPug.Panel.activeDocumentComponents = activeDocumentComponents;
      
      // init UI
      
      WatchPug.Panel.getKeywordValue();
  
      WatchPug.Panel.getKeywordMatches();
  
      WatchPug.Panel.getKeywordDensity();
      
      // community wants last tab to be active when panel is reopened
      
      // check for updating analyze data related active tab
      
      if (!$('#inspect-container').hasClass('hidden')) {
      
        WatchPug.Panel.handleInspectButton();
      
      } else if (!$('#components-container').hasClass('hidden')) {
      
        WatchPug.Panel.handleComponentsButton();
      
      }
      
      // after 3 seconds force async data readiness

      window.setTimeout(function() {
      
        if (WatchPug.Panel.inspectOngoing) {
      
          WatchPug.Panel.forceAsyncDataIsReady = true;
          
          WatchPug.Panel.showInspectResultPre();
          
        }
      
      }, 4000);
      
    });
    
  },
  
  asyncDataIsReady: function() {

    if (WatchPug.Panel.forceAsyncDataIsReady || (
        WatchPug.Panel.processedDomainAge &&
        WatchPug.Panel.processedRobotsFile &&
        WatchPug.Panel.processedSitemapFile &&
        WatchPug.Panel.processedValidationResult)) {
      
      return true;
      
    } else {
    
      return false;
      
    }
    
  },

  showInspectResultPre: function() {
  
    // always show senseo grade
    
    WatchPug.Panel.analyzeForKeyword();
  
    WatchPug.Panel.showSenSEOGrade();
  
    if (WatchPug.Panel.inspectButtonIsWaiting) {
    
      WatchPug.Panel.inspectButtonIsWaiting = false;
    
      WatchPug.Panel.showInspectResult();

    }
    
  },

  resetUI: function() {
  
    self.postMessage({
    
      command: 'highlight-element',
      
      highlightInfo: 'remove-highlight-element none'
      
    });
    
    // show / hide specific containers
    
    $('#inspect-related').addClass('hidden');
    
    $('#inspect-results').addClass('hidden');

    WatchPug.Panel.inspectResultOngoing();
  
  },
  
  inspectResultOngoing: function() {
  
    WatchPug.Panel.inspectOngoing = true;
  
    // show active loading indicator
  
    $('#inspect-result-ongoing').removeClass('hidden');
    
    $('#inspect-result-ready').addClass('hidden');
  
  },
    
  inspectResultReady: function() {
  
    WatchPug.Panel.inspectOngoing = false;
  
    // show inspect result
  
    $('#inspect-result-ongoing').addClass('hidden');
  
    $('#inspect-result-ready').removeClass('hidden');
  
  },
    
  resetAsyncProcess: function() {
  
    WatchPug.Panel.processedDomainAge = false;
    WatchPug.Panel.processedRobotsFile = false;
    WatchPug.Panel.processedSitemapFile = false;
    WatchPug.Panel.processedValidationResult = false;
    WatchPug.Panel.processedRelatedKeywords = false;
    
    WatchPug.Panel.forceAsyncDataIsReady = false;
    
  },

  processRobotsFile: function(data) {
  
    var url = data.url,
        status = data.status;
  
    if (status === 200) {
  
      WatchPug.Panel.activeDocumentComponents['robots-file']
        .data = $('<div>').text('found').append($('<a>').attr({
                  'href': url,
                  'target': 'blank'
                }).text('show').clone()).html();
                
      // update components table
      
      $('#robots-file').empty().append(WatchPug.Panel.activeDocumentComponents['robots-file'].data);

    }
  
  },
  
  processSitemapFile: function(data) {
  
    var url = data.url,
        status = data.status;
  
    if (status === 200) {
  
      WatchPug.Panel.activeDocumentComponents['sitemap-file']
        .data = $('<div>').text('found').append($('<a>').attr({
                  'href': url,
                  'target': 'blank'
                }).text('show').clone()).html();
      
      $('#sitemap-file').empty().append(WatchPug.Panel.activeDocumentComponents['sitemap-file'].data);

    }
  
  },
  
  processDomainAge: function(data) {
  
    var url = data.url,
        status = data.status,
        responseText = data.text,
        domainAge,
        a, b, c, d;
  
    if (status === 200) {
  
      // jquery .clone().html() hack doesn't work for waybackmachine.org
      
      // parse manually
      
      a = responseText.indexOf('<p class="wbThis">');
      
      b = responseText.substring(a, responseText.length).indexOf('<a href="http://web.archive.org');
      
      c = a + b;
      
      d = responseText.substring(c + 1, responseText.length);
      
      domainAge = d.substring(d.indexOf('>') + 1, d.indexOf('</a>'));
      
      WatchPug.Panel.activeDocumentComponents['domain-age']
        .data = $('<div>').text($.trim(domainAge)).append($('<a>').attr({
                  'href': url,
                  'target': 'blank'
                }).text('show').clone()).html();
      
      $('#domain-age').empty().append(WatchPug.Panel.activeDocumentComponents['domain-age'].data);
      
    }
    
  },
  
  processValidationResult: function(data) {
  
    var url = data.url,
        status = data.status,
        responseText = data.text,
        validatorW3orgDOM, validResult, invalidResult;
  
    if (status === 200) {
  
      validatorW3orgDOM = $('<div>')
                        .append(responseText).clone();
                              
      // get validation result
      
      validResult = $(validatorW3orgDOM).find('table.header td.valid').text();
    
      invalidResult = $(validatorW3orgDOM).find('table.header td.invalid').text();
      
      // set new data value (result with link to W3C validator)
      
      if (validResult) {
      
        WatchPug.Panel.activeDocumentComponents['validation-result']
          .data = $('<div>').text('valid: ' + $.trim(validResult)).append($('<a>').attr({
                    'href': url,
                    'target': 'blank'
                  }).text('show').clone()).html();

      }
    
      if (invalidResult) {
      
        WatchPug.Panel.activeDocumentComponents['validation-result']
          .data = $('<div>').text('invalid: ' + $.trim(invalidResult)).append($('<a>').attr({
                    'href': url,
                    'target': 'blank'
                  }).text('show').clone()).html();
    
      }
      
      $('#validation-result').empty().append(WatchPug.Panel.activeDocumentComponents['validation-result'].data);

    }
  
  },
  
  getRelatedKeywords: function() {
  
    var url;
  
    if (WatchPug.Panel.keywordsString !== '' && WatchPug.Panel.keywordsString !== WatchPug.Panel.requestKeyword) {
      
      WatchPug.Panel.requestKeyword = WatchPug.Panel.keywordsString;
      
      url = 'http://us.api.semrush.com/?action=report&type=phrase_related&key=89a72d6e1c56ce52a7eaf077907304e8&display_limit=10&export=api&export_columns=Ph&phrase=' + encodeURIComponent(WatchPug.Panel.keywordsString);

      // show loading indicator until response is ready
      
      $('#related-keywords').html = '<img src="img/roller.gif">';
      
      // this goes to main.js and from there back to panel.js
      
      self.port.emit('getResponseText', 'related-keywords', url);
    
    }
      
  },

  processRelatedKeywords: function(data) {
  
    var relatedKeywordsContainer = $('#related-keywords'),
        status = data.status,
        text = data.text,
        relatedKeywordsArray,
        rHtml = '',
        relatedKeyword,
        i;

    if (status === 200 && relatedKeywordsContainer) {
    
      relatedKeywordsArray = text.split('\n');
    
      for (i = 1; i < relatedKeywordsArray.length - 1; i += 1) {
      
        relatedKeyword = relatedKeywordsArray[i];
    
        if (relatedKeyword) {
    
          rHtml = rHtml + $('<div>').append($('<em>').text(relatedKeyword).clone()).html();
          
        }

      }
      
      if (!relatedKeywordsArray || relatedKeywordsArray.length === 1) {
      
        rHtml += '<em>no keyword matches</em> ';
      
      }
      
      relatedKeywordsContainer.html(rHtml);

    }
    
  },

  initPanel: function() {

    $('#intro-enter-keywords').html(WatchPug.StrBundle.getString('intro.EnterSomeKeywords'));
    $('#intro-click-inspect').html(WatchPug.StrBundle.getString('intro.ClickInspectSEOCriteria'));

    $('#intro-container').removeClass('hidden');
    
  },
  
  initInputsAndButtons: function() {
  
    $('#inspect-button').html(WatchPug.StrBundle.getString('console.InspectSeoCriteria'));
    $('#components-button').html(WatchPug.StrBundle.getString('console.ShowComponents'));
    $('#printview-button').html(WatchPug.StrBundle.getString('console.Printview'));

    $('#keyword-input').blur(function() {
      
      WatchPug.Panel.hideSpeechBubble();
    
      $('#keyword-input').removeClass('required');
    
      WatchPug.Panel.getKeywordValue();
  
      WatchPug.Panel.getKeywordMatches();
  
      WatchPug.Panel.getKeywordDensity();
        
    });
    
    $('#keyword-input').keypress(function(e) {
      
      // if user presses enter, inspect document
      
      if (e.keyCode === 13) {
      
        e.target.blur();
      
        WatchPug.Panel.handleInspectButton();
      
      }
      
    });
  
    $('#inspect-button').click(function(e) {
        
      e.preventDefault();
      
      WatchPug.Panel.handleInspectButton();
      
    });
  
    $('#components-button').click(function(e) {
        
      e.preventDefault();
      
      WatchPug.Panel.handleComponentsButton();
  
    });
  
    $('#printview-button').click(function(e) {
        
      e.preventDefault();
      
      WatchPug.Panel.handlePrintviewButton();
  
    });
  
    $('#help-button').click(function(e) {
        
      e.preventDefault();
      
      WatchPug.Panel.handleHelpButton();
  
    });
  
    $('#bug-button').click(function() {
      
      WatchPug.Panel.handleBugButton();
  
    });
  
    $('#settings-button').click(function(e) {
        
      e.preventDefault();
      
      WatchPug.Panel.handleSettingsButton();
  
    });
    
    $('#save-result').click(function() {
    
      WatchPug.Panel.handleSaveResult();
    
    });
    
  },
  
  // this is not working / propably an addon sdk bug
  
  // keep an eye on: https://bugzilla.mozilla.org/show_bug.cgi?id=723502

  /*
  
  readData: function(dataKey, callback) {
  
    WatchPug.Panel.callback[dataKey] = callback;
  
    self.postMessage({
    
      command: 'read-data',
      
      dataKey: dataKey
      
    });
  
  },
  
  storeData: function(dataKey, dataValue) {
  
    self.postMessage({
    
      command: 'store-data',
      
      dataKey: dataKey,
      
      dataValue: dataValue
      
    });
  
    return true;
  
  },
  
  */
  
  getKeywordValue: function() {
  
    WatchPug.Panel.keywordsString = $('#keyword-input').val();
    
    WatchPug.Panel.keywords = WatchPug.Panel.keywordsString.split(" ");
    
  },
  
  handleInspectButton: function() {
  
    if (WatchPug.Panel.keywordsString !== '') {
  
      WatchPug.Panel.setActiveTab('inspect');
      
      WatchPug.Panel.getRelatedKeywords();
      
      WatchPug.Panel.inspectButtonIsWaiting = true;
      
      // wait until async data is ready
      
      // if asyncDataIsReady is false, getResponseText message will show inspect result later
      
      if (WatchPug.Panel.asyncDataIsReady()) {
      
        WatchPug.Panel.showInspectResultPre();
        
      }
      
    } else {
    
      $('#keyword-input').addClass('required');
      
      $('#keyword-input').focus();
    
      WatchPug.Panel.showSpeechBubble({top: 34, left: 5}, 'keyword(s) required');
    
    }
  
  },
  
  handleComponentsButton: function() {
  
    WatchPug.Panel.setActiveTab('components');
    
    if (WatchPug.Panel.keywordsString !== '') {
  
      if (WatchPug.Panel.asyncDataIsReady()) {
      
        WatchPug.Panel.showInspectResultPre();
        
      }
      
    }

    // only if senseo grade bar is completely hidden, show busy indicator
  
    if ($('#inspect-result-ongoing').hasClass('hidden') && $('#inspect-result-ready').hasClass('hidden')) {
  
      WatchPug.Panel.inspectResultOngoing();
    
    }
    
    WatchPug.Panel.renderComponentsTable('components-table', WatchPug.Panel.activeDocumentComponents);
  
  },
  
  handlePrintviewButton: function() {
  
    
  
  },
  
  handleHelpButton: function() {
  
    
  
  },
  
  handleBugButton: function() {
  
  },
  
  handleSettingsButton: function() {
  
    WatchPug.Panel.setActiveTab('settings');
  
    $('#settings-toolbar-icon').html(String(WatchPug.Panel.setting['toolbar-icon']));
  
    $('#settings-color-blind').html(String(WatchPug.Panel.setting['color-blind']));
  
  },
  
  handleSaveResult: function() {
  
    // save result
    
    WatchPug.Panel.savedGrade = WatchPug.Panel.grade;
  
    WatchPug.Panel.savedStatus = WatchPug.Panel.status;
    
    // try animation
    
    $('#inspect-results article').addClass('compare');

  },
  
  setActiveTab: function(tab) {
  
    var i;
  
    $('#inspect-result').removeClass('hidden');
    
    for (i = 0; i < WatchPug.Panel.tabs.length; i += 1) {
    
      if (WatchPug.Panel.tabs[i] === tab) {
      
        $('#' + WatchPug.Panel.tabs[i] + '-container').removeClass('hidden');
      
      } else {
      
        $('#' + WatchPug.Panel.tabs[i] + '-container').addClass('hidden');
      
      }
    
    }
  
  },
  
  getKeywordInput: function() {
  
    return $('#keyword-input').attr('value');
  
  },
  
  showSpeechBubble: function(offset, text) {
  
    var speechBubble = $('#speech-bubble');
    
    speechBubble.find('p').html(text);
    
    speechBubble.removeClass('hidden');
  
    speechBubble.offset(offset);
    
  },
  
  hideSpeechBubble: function() {
  
    $('#speech-bubble').addClass('hidden');
  
  },
  
  highlightDataRow: function() {
  
    if (WatchPug.Panel.highlightedDataRow) {
    
      $(WatchPug.Panel.highlightedDataRow).removeClass('clicked');
      
    }
  
    $(this).addClass('clicked');
    
    WatchPug.Panel.highlightedDataRow = this;
  
  },
  
  renderComponentsTable: function(componentsTable, components) {
    
    var i,
        key,
        componentsTableBody = $('#' + componentsTable + ' tbody'),
        dataRow;
    
    // remove outdated table content
  
    componentsTableBody.empty();
  
    for (key in components) {
    
      if (components.hasOwnProperty(key)) {
      
        if (key === 'body-text') {
        
          components[key].data = WatchPug.Panel.encodeMarkup(components[key].data);
          
        }
      
        if (typeof(components[key].data) === 'string' || typeof(components[key].data) === 'number') {
        
          // one dataset
          
          dataRow = $('<div>').append($('<tr>')
                              .append($('<th>')
                              .text(components[key].head))
                              .append($('<td>')
                              .append(WatchPug.Panel.formatOutput(components[key].data))).clone()).html();
          
          componentsTableBody.append(dataRow);
          
          //$(dataRow).click(WatchPug.Panel.highlightDataRow);
          
        } else {
        
          // multible datasets
          
          for (i = 0; i < components[key].head.length; i += 1) {

            dataRow = $('<div>').append($('<tr>')
                                .append($('<th>')
                                .text(components[key].head[i]))
                                .append($('<td>')
                                .append(WatchPug.Panel.formatOutput(components[key].data[i]))).clone()).html();
            
            componentsTableBody.append(dataRow);
            
            //$(dataRow).click(WatchPug.Panel.highlightDataRow);
/*          
            componentsTableBody.append($('<tr>')
                               .append($('<th>')
                               .text(components[key].head[i]))
                               .append($('<td>')
                               .append(WatchPug.Panel.formatOutput(components[key].data[i]))
                               ));
           */ 
          }

        }
        
      }
      
    }
    
    WatchPug.Panel.createDataRowEvents(componentsTableBody);
    
    WatchPug.Panel.createHighlightEvents(componentsTable);
  
  },
  
  createDataRowEvents: function(componentsTableBody) {
  
    $(componentsTableBody).find('tr').click(WatchPug.Panel.highlightDataRow);
  
  },
  
  createHighlightEvents: function(componentsTable) {
  
    var highlightHeadline = $('#' + componentsTable + ' tbody .highlight-headline'),
        highlightImage = $('#' + componentsTable + ' tbody .highlight-image'),
        highlightMicrodata = $('#' + componentsTable + ' tbody .highlight-microdata'),
        highlightButton = $('#' + componentsTable + ' tbody .highlight-button'),
        allHighlightElements = highlightHeadline
                               .add(highlightImage)
                               .add(highlightMicrodata)
                               .add(highlightButton),
        i;
  
    if (allHighlightElements.length) {
  
      for (i = 0; i < allHighlightElements.length; i += 1) {
  
        $(allHighlightElements[i]).click(WatchPug.Panel.highlightElementCommand);

      }
      
    }
  
  },
  
  highlightElementCommand: function(e) {
  
    e.preventDefault();
    
    // second class contains pointer to data object
    
    self.postMessage({
    
      command: 'highlight-element',
      
      highlightInfo: e.target.className
      
    });
    
  },
  
  getKeywordMatches: function() {

    var bodyData = WatchPug.Panel.activeDocumentComponents['body-text'].data,
        matches = 0,
        rx,
        i;
    
    if (bodyData && WatchPug.Panel.keywords.length) {
    
      for (i = 0; i < WatchPug.Panel.keywords.length; i += 1) {
      
        if (WatchPug.Panel.keywords[i] !== '') {
      
          rx = new RegExp(WatchPug.Panel.keywords[i], 'gi');
          
          if (bodyData && bodyData.match && bodyData.match(rx)) {
          
            matches = matches + bodyData.match(rx).length;
            
          }
          
        }
        
      }
      
    }
    
    WatchPug.Panel.activeDocumentComponents['keyword-matches'] = {
      
      head: 'keyword matches',
      
      data: matches
      
    };
    
  },

  encodeMarkup: function(s) {
  
    var encodedMarkup = s;
  
    if (encodedMarkup && encodedMarkup.replace) {
  
      encodedMarkup.replace(/</g, '&lt;').replace(/>/g, '&gt;');
      
    }
    
    return encodedMarkup;
    
  },

  getKeywordDensity: function() {

    var keywordDensity;
  
    if (WatchPug.Panel.activeDocumentComponents['keyword-matches']) {
  
      keywordDensity = Math.round(WatchPug.Panel.activeDocumentComponents['keyword-matches'].data / WatchPug.Panel.activeDocumentComponents['number-words'].data * 100 * 100) / 100;
      
      WatchPug.Panel.activeDocumentComponents['keyword-density'] = {
        
        head: 'keyword density',
        
        data: keywordDensity
        
      };
      
    }
  
  },

  formatOutput: function(text) {
  
    var i, rx, replaceString, markupIndex, textExtract, textMarkup, formattedOutput;
  
    if (text && WatchPug.Panel.keywords.length) {
    
      for (i = 0; i < WatchPug.Panel.keywords.length; i += 1) {
      
        if (WatchPug.Panel.keywords[i] !== '') {
      
          rx = new RegExp(WatchPug.Panel.keywords[i], 'gi');
          
          if (text && text.replace && text.match(rx)) {
          
            replaceString = $('<div>')
                            .append($('<span>')
                            .attr('class', 'match')
                            .text(WatchPug.Panel.keywords[i]).clone()).html();

            // extract only text and no markup
            
            markupIndex = text.indexOf('<');
            
            textExtract = markupIndex >= 0 ? text.substr(0, markupIndex) : text;

            textMarkup = markupIndex >= 0 ? text.substr(markupIndex, text.length - markupIndex) : '';
            
            formattedOutput = textExtract.replace(rx, replaceString);
            
            text = formattedOutput + textMarkup;
            
          }
          
        }
        
      }
      
    }
    
    if (text && text === 'n/a') {
    
      text = $('<div>')
             .append($('<span>')
             .attr('class', 'info')
             .text(text).clone()).html();
    
    }
    
    return text;
    
  },
  
  trimWhitespace: function(text) {

    text = text.replace(/^\s+/, '').replace(/\s+$/, '');
    
    return text;
    
  },

  similarGrade: function(text1, text2) {

    var matches = 0,
        i, j;
    
    if (text1 && text2) {
    
      text1 = text1.split(" ");
      
      text2 = text2.split(" ");
      
      for (i = 0; i < text1.length; i += 1) {
      
        for (j = 0; j < text2.length; j += 1) {
        
          if (text1[i].toLowerCase() === text2[j].toLowerCase()) {
          
            matches = matches + 1;
            
            break;
            
          }
          
        }
        
      }
      
      return Math.round((matches / ((text1.length + text2.length) / 2) * 100) * 100) / 100;
      
    }
    
  },

  includesAllKeywords: function(text, keywords) {

    var i, rx;
  
    if (text && keywords) {
    
      for (i = 0; i < keywords.length; i += 1) {
      
        rx = new RegExp(WatchPug.Panel.trimWhitespace(keywords[i].replace(/^\W/g, ' ').replace(/\W$/g, ' ')), 'i');
        
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

    var i, rx;
  
    if (text && keywords) {
    
      for (i = 0; i < keywords.length; i += 1) {
      
        rx = new RegExp(WatchPug.Panel.trimWhitespace(keywords[i].replace(/^\W/g, ' ').replace(/\W$/g, ' ')), 'i');
        
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

    var count, index, i, percent;
  
    if (grades) {
    
      count = grades.length;
      index = 0;
      
      for (i = 0; i < count; i += 1) {
      
        if (grades[i] === 'pass') {
        
          index += 3;
          
        }
        
        if (grades[i] === 'warning') {
        
          index += 1;
          
        }
        
      }
      
      percent = parseInt(index / (count * 3) * 100, 10);

      if (percent >= 90) {
      
        return ['A', percent];
        
      } else if (percent >= 80) {
      
        return ['B', percent];
        
      } else if (percent >= 70) {
      
        return ['C', percent];
        
      } else if (percent >= 60) {
      
        return ['D', percent];
        
      } else if (percent >= 50) {
      
        return ['E', percent];
        
      } else {
      
        return ['F', percent];
      
      }
      
    }
    
  },

  calculateWeightedGrade: function(grades) {

    var count, index, avweight, i, percent;
  
    if (grades) {
    
      count = grades.length;
      index = 0;
      avweight = 0;
      
      for (i = 0; i < count; i += 1) {
      
        index = index + grades[i][0] * grades[i][1];
        
        avweight += grades[i][1];
        
      }
      
      percent = parseInt(index / (count * 100 * (avweight / count)) * 100, 10);

      if (percent > 90) {
      
        return ['A', percent];
        
      } else if (percent > 80) {
      
        return ['B', percent];
        
      } else if (percent > 70) {
      
        return ['C', percent];
        
      } else if (percent > 60) {
      
        return ['D', percent];
        
      } else if (percent > 50) {
      
        return ['E', percent];
        
      } else {
      
        return ['F', percent];
      
      }
      
    }
    
  },
  
  analyzeForKeyword: function() {
  
    var keywords,
        titleData, titleCount,
        descriptionData,
        robotsData, robotsFile,
        sitemapFile,
        h1Data, h2Data, h3Data, h4Data, h5Data, h6Data,
        pageLoadTime,
        altImagesGrade,
        hostData,
        domainKeywords,
        domainAge,
        pathData,
        levels,
        i;
  
    keywords = WatchPug.Panel.keywords;

    titleData = WatchPug.Panel.activeDocumentComponents['title-found'].data;
    
    titleCount = WatchPug.Panel.activeDocumentComponents['title-found'].count;
    
    WatchPug.Panel.found.title = titleData === 'n/a' ? false : true;
    
    if (WatchPug.Panel.found.title && titleCount && titleCount === 1) {
    
      WatchPug.Panel.status['title-onetime'] = 'pass';
      
    } else {
    
      WatchPug.Panel.status['title-onetime'] = 'fail';
      
    }
    
    if (WatchPug.Panel.found.title && titleData && WatchPug.Panel.includesAllKeywords(titleData, keywords)) {
    
      WatchPug.Panel.status['title-includes'] = 'pass';
      
    } else if (WatchPug.Panel.found.title && titleData && WatchPug.Panel.includesSomeKeywords(titleData, keywords)) {
    
      WatchPug.Panel.status['title-includes'] = 'warning';
      
    } else {
    
      WatchPug.Panel.status['title-includes'] = 'fail';
      
    }
    
    if (WatchPug.Panel.found.title && titleData && titleData.length <= 65) {
    
      WatchPug.Panel.status['title-length'] = 'pass';
      
    } else if (WatchPug.Panel.found.title && titleData && titleData.length <= 75) {
    
      WatchPug.Panel.status['title-length'] = 'warning';
      
    } else {
    
      WatchPug.Panel.status['title-length'] = 'fail';
      
    }
    
    if (WatchPug.Panel.found.title && titleData && titleData.split(" ").length <= 15) {
    
      WatchPug.Panel.status['title-words'] = 'pass';
      
    } else if (WatchPug.Panel.found.title && titleData && titleData.split(" ").length <= 18) {
    
      WatchPug.Panel.status['title-words'] = 'warning';
      
    } else {
    
      WatchPug.Panel.status['title-words'] = 'fail';
      
    }
    
    WatchPug.Panel.grade.title = WatchPug.Panel.calculateGrade([WatchPug.Panel.status['title-onetime'], WatchPug.Panel.status['title-includes'], WatchPug.Panel.status['title-length'], WatchPug.Panel.status['title-words']]);
    
    descriptionData = WatchPug.Panel.activeDocumentComponents['meta-description'].data;
    
    WatchPug.Panel.found.description = descriptionData === 'n/a' ? false : true;
    
    if (WatchPug.Panel.found.description && WatchPug.Panel.activeDocumentComponents['meta-description'].count === 1) {
    
      WatchPug.Panel.status['description-onetime'] = 'pass';
      
    } else {
    
      WatchPug.Panel.status['description-onetime'] = 'fail';
      
    }
    
    if (WatchPug.Panel.found.description && WatchPug.Panel.includesAllKeywords(descriptionData, keywords)) {
    
      WatchPug.Panel.status['description-includes'] = 'pass';
      
    } else if (WatchPug.Panel.found.description && descriptionData && WatchPug.Panel.includesSomeKeywords(descriptionData, keywords)) {
    
      WatchPug.Panel.status['description-includes'] = 'warning';
      
    } else {
    
      WatchPug.Panel.status['description-includes'] = 'fail';
      
    }
    
    if (WatchPug.Panel.found.description && descriptionData && descriptionData.length <= 150) {
    
      WatchPug.Panel.status['description-length'] = 'pass';
      
    } else if (WatchPug.Panel.found.description && descriptionData && descriptionData.length <= 170) {
    
      WatchPug.Panel.status['description-length'] = 'warning';
      
    } else {
    
      WatchPug.Panel.status['description-length'] = 'fail';
      
    }
    
    if (WatchPug.Panel.found.description && descriptionData && descriptionData.split(" ").length <= 30) {
    
      WatchPug.Panel.status['description-words'] = 'pass';
      
    } else if (WatchPug.Panel.found.description && descriptionData && descriptionData.split(" ").length <= 35) {
    
      WatchPug.Panel.status['description-words'] = 'warning';
      
    } else {
    
      WatchPug.Panel.status['description-words'] = 'fail';
      
    }
    
    WatchPug.Panel.grade.description = WatchPug.Panel.calculateGrade([WatchPug.Panel.status['description-onetime'], WatchPug.Panel.status['description-includes'], WatchPug.Panel.status['description-length'], WatchPug.Panel.status['description-words']]);
    
    robotsData = WatchPug.Panel.activeDocumentComponents['meta-robots'];
    
    robotsFile = WatchPug.Panel.activeDocumentComponents['robots-file'];
    
    if ((robotsData && robotsData.data !== '') || (robotsFile && robotsFile.data.indexOf('>n/a<') < 0)) {
    
      WatchPug.Panel.status['robots-exists'] = 'pass';
      
    } else {
    
      WatchPug.Panel.status['robots-exists'] = 'fail';
      
    }
    
    WatchPug.Panel.found.robots = WatchPug.Panel.status['robots-exists'] === 'pass' ? true : false;
    
    WatchPug.Panel.grade.robots = WatchPug.Panel.calculateGrade([WatchPug.Panel.status['robots-exists']]);
    
    sitemapFile = WatchPug.Panel.activeDocumentComponents['sitemap-file'];
    
    if (sitemapFile && sitemapFile.data.indexOf('>n/a<') < 0) {
    
      WatchPug.Panel.status['sitemap-exists'] = 'pass';
      
    } else {
    
      WatchPug.Panel.status['sitemap-exists'] = 'fail';
      
    }
    
    WatchPug.Panel.found.sitemap = WatchPug.Panel.status['sitemap-exists'] === 'pass' ? true : false;
    
    WatchPug.Panel.grade.sitemap = WatchPug.Panel.calculateGrade([WatchPug.Panel.status['sitemap-exists']]);
    
    h1Data = WatchPug.Panel.activeDocumentComponents['headline-1'];
    h2Data = WatchPug.Panel.activeDocumentComponents['headline-2'];
    h3Data = WatchPug.Panel.activeDocumentComponents['headline-3'];
    h4Data = WatchPug.Panel.activeDocumentComponents['headline-4'];
    h5Data = WatchPug.Panel.activeDocumentComponents['headline-5'];
    h6Data = WatchPug.Panel.activeDocumentComponents['headline-6'];
    
    WatchPug.Panel.found.headlines = h1Data || h2Data || h3Data || h4Data || h5Data || h6Data ? true : false;
    
    if (h1Data.missing && h2Data.missing && h3Data.missing && h4Data.missing && h5Data.missing && h6Data.missing) {
    
      WatchPug.Panel.status['headlines-structure'] = 'fail';
      
    } else {
    
      WatchPug.Panel.status['headlines-structure'] = 'pass';
      
    }

    if (!h1Data.missing && h1Data.data.length === 1) {
    
      WatchPug.Panel.status['headlines-onetime'] = 'pass';
      
    } else {
    
      WatchPug.Panel.status['headlines-onetime'] = 'fail';
      
    }

    if (!h1Data.missing && WatchPug.Panel.includesAllKeywords(h1Data.data[0], keywords)) {
    
      WatchPug.Panel.status['headlines-includes'] = 'pass';
      
    } else if (!h1Data.missing && WatchPug.Panel.includesSomeKeywords(h1Data.data[0], keywords)) {
    
      WatchPug.Panel.status['headlines-includes'] = 'warning';
      
    } else {
    
      WatchPug.Panel.status['headlines-includes'] = 'fail';
      
    }
    
    if (!h2Data.missing && !h3Data.missing && h2Data.data.length >= 1 && h3Data.data.length >= 1) {
    
      WatchPug.Panel.status['headlines-other'] = 'pass';
      
    } else if ((!h2Data.missing && h2Data.data.length >= 1) || (!h3Data.missing && h3Data.data.length >= 1)) {
    
      WatchPug.Panel.status['headlines-other'] = 'warning';
      
    } else {
    
      WatchPug.Panel.status['headlines-other'] = 'fail';
      
    }

    WatchPug.Panel.grade.headlines = WatchPug.Panel.calculateGrade([WatchPug.Panel.status['headlines-structure'], WatchPug.Panel.status['headlines-onetime'], WatchPug.Panel.status['headlines-includes'], WatchPug.Panel.status['headlines-other']]);

    WatchPug.Panel.found.content = WatchPug.Panel.activeDocumentComponents['body-text'] && WatchPug.Panel.activeDocumentComponents['body-text'] !== '' ? true : false;
    
    
    if (WatchPug.Panel.activeDocumentComponents['img-without-alt'].data === 0) {
    
      altImagesGrade = 100;
      
    } else {
    
      altImagesGrade = WatchPug.Panel.activeDocumentComponents['img-without-alt'].data / WatchPug.Panel.activeDocumentComponents['img-alt'].data.length * 100;
    
    }
    
    if (altImagesGrade > 90) {
    
      WatchPug.Panel.status['content-alt'] = 'pass';
      
    } else if (altImagesGrade > 80) {
    
      WatchPug.Panel.status['content-alt'] = 'warning';
      
    } else {
    
      WatchPug.Panel.status['content-alt'] = 'fail';
      
    }
    
    if (WatchPug.Panel.activeDocumentComponents['facebook-like-button'].data !== 'n/a' && WatchPug.Panel.activeDocumentComponents['plus-one-button'].data !== 'n/a' && WatchPug.Panel.activeDocumentComponents['twitter-button'].data !== 'n/a') {
    
      WatchPug.Panel.status['content-social-media'] = 'pass';
      
    } else {
    
      if (WatchPug.Panel.activeDocumentComponents['facebook-like-button'].data !== 'n/a' || WatchPug.Panel.activeDocumentComponents['plus-one-button'].data !== 'n/a' || WatchPug.Panel.activeDocumentComponents['twitter-button'].data !== 'n/a') {
    
        WatchPug.Panel.status['content-social-media'] = 'warning';
      
      } else {
      
        WatchPug.Panel.status['content-social-media'] = 'fail';
        
      }
    
    }
    
    if (WatchPug.Panel.activeDocumentComponents['keyword-matches'].data >= 2 && WatchPug.Panel.activeDocumentComponents['keyword-matches'].data <= 50) {
    
      WatchPug.Panel.status['content-keywords'] = 'pass';
      
    } else {
    
      if (WatchPug.Panel.activeDocumentComponents['keyword-matches'].data === 1 || WatchPug.Panel.activeDocumentComponents['keyword-matches'] > 50) {
    
        WatchPug.Panel.status['content-keywords'] = 'warning';
      
      } else {
      
        WatchPug.Panel.status['content-keywords'] = 'fail';
        
      }
    
    }
    
    if (WatchPug.Panel.activeDocumentComponents['number-links'].data < 80) {
    
      WatchPug.Panel.status['content-links'] = 'pass';
      
    } else if (WatchPug.Panel.activeDocumentComponents['number-links'].data < 100) {
    
      WatchPug.Panel.status['content-links'] = 'warning';
      
    } else {
    
      WatchPug.Panel.status['content-links'] = 'fail';
      
    }

    pageLoadTime = parseInt(WatchPug.Panel.activeDocumentComponents['page-load-time'].data.split(' ')[0], 10);
    
    if (pageLoadTime < 2000) {
    
      WatchPug.Panel.status['content-load-time'] = 'pass';
      
    } else if (pageLoadTime < 3000) {
    
      WatchPug.Panel.status['content-load-time'] = 'warning';
      
    } else {
    
      WatchPug.Panel.status['content-load-time'] = 'fail';
      
    }
    
    if (WatchPug.Panel.activeDocumentComponents['microdata-found'].data !== 'n/a') {
    
      WatchPug.Panel.status['content-microdata'] = 'pass';
      
    } else {
    
      WatchPug.Panel.status['content-microdata'] = 'fail';
      
    }
    
    if (WatchPug.Panel.activeDocumentComponents['validation-result'].data.toLowerCase().indexOf('passed') >= 0) {
    
      // result starts with valid
    
      WatchPug.Panel.status['content-validation'] = 'pass';
      
    } else if (WatchPug.Panel.activeDocumentComponents['validation-result'].data.toLowerCase().indexOf('0 errors') >= 0) {
    
      // result contains no errors but is invalid
    
      WatchPug.Panel.status['content-validation'] = 'warning';
      
    } else {
    
      // result contains errors and is invalid
    
      WatchPug.Panel.status['content-validation'] = 'fail';
      
    }
    
    WatchPug.Panel.grade.content = WatchPug.Panel.calculateGrade([WatchPug.Panel.status['content-alt'], WatchPug.Panel.status['content-social-media'], WatchPug.Panel.status['content-keywords'], WatchPug.Panel.status['content-links'], WatchPug.Panel.status['content-load-time'], WatchPug.Panel.status['content-microdata']]);
    
    WatchPug.Panel.found.host = WatchPug.Panel.activeDocumentComponents['location-hostname'].data ? true : false;
    
    hostData = WatchPug.Panel.activeDocumentComponents['location-hostname'].data;
    
    domainAge = parseInt((new Date()).getFullYear(), 10) - parseInt(WatchPug.Panel.activeDocumentComponents['domain-age'].data.split(' ')[2], 10);
    
    domainKeywords = keywords;
    
    for (i = 0; i < domainKeywords.length; i += 1) {
    
      // TODO: localize & replacement
    
      domainKeywords[i] = domainKeywords[i].replace(/ä/g, 'ae')
                                           .replace(/ö/g, 'oe')
                                           .replace(/ü/g, 'ue')
                                           .replace(/ß/g, 'ss')
                                           .replace(/&/g, 'und');
    
    }
    
    if (hostData && WatchPug.Panel.includesAllKeywords(hostData, domainKeywords)) {
    
      WatchPug.Panel.status['host-includes'] = 'pass';
      
    } else if (hostData && WatchPug.Panel.includesSomeKeywords(hostData, domainKeywords)) {
    
      WatchPug.Panel.status['host-includes'] = 'warning';
      
    } else {
    
      WatchPug.Panel.status['host-includes'] = 'fail';
      
    }
    
    if (hostData.match(/xn--/)) {
    
      WatchPug.Panel.status['host-idn'] = 'fail';
      
    } else {
    
      WatchPug.Panel.status['host-idn'] = 'pass';
      
    }
    
    if (hostData.match(/_/)) {
    
      WatchPug.Panel.status['host-hyphen'] = 'fail';
      
    } else {
    
      WatchPug.Panel.status['host-hyphen'] = 'pass';
      
    }
    
    if (domainAge >= 2) {
    
      WatchPug.Panel.status['host-age'] = 'pass';
      
    } else if (domainAge >= 1) {
    
      WatchPug.Panel.status['host-age'] = 'warning';
      
    } else {
    
      WatchPug.Panel.status['host-age'] = 'fail';
      
    }
    
    WatchPug.Panel.grade.host = WatchPug.Panel.calculateGrade([WatchPug.Panel.status['host-includes'], WatchPug.Panel.status['host-idn'], WatchPug.Panel.status['host-hyphen'], WatchPug.Panel.status['host-age']]);
    
    WatchPug.Panel.found.path = WatchPug.Panel.activeDocumentComponents['path-name'].data ? true : false;
    
    pathData = WatchPug.Panel.activeDocumentComponents['path-name'].data;
    
    if (pathData && pathData.length <= 65) {
    
      WatchPug.Panel.status['path-length'] = 'pass';
      
    } else if (pathData && pathData.length <= 75) {
    
      WatchPug.Panel.status['path-length'] = 'warning';
      
    } else {
    
      WatchPug.Panel.status['path-length'] = 'fail';
      
    }

    if (WatchPug.Panel.activeDocumentComponents['url-params'].data && WatchPug.Panel.activeDocumentComponents['url-params'].data !== '') {
    
      WatchPug.Panel.status['path-dynparam'] = 'fail';
      
    } else {
    
      WatchPug.Panel.status['path-dynparam'] = 'pass';
      
    }
            
    if (pathData.match(/_/)) {
    
      WatchPug.Panel.status['path-hyphen'] = 'fail';
      
    } else {
    
      WatchPug.Panel.status['path-hyphen'] = 'pass';
      
    }
    
    if (pathData.toLowerCase() === pathData) {
    
      WatchPug.Panel.status['path-lowercase'] = 'pass';
      
    } else {
    
      WatchPug.Panel.status['path-lowercase'] = 'fail';
      
    }
    
    levels = 2;
    
    if (pathData.match(/^\//)) {
    
      levels += 1;
      
    }
    
    if (pathData.match(/\/$/)) {
    
      levels += 1;
      
    }
    
    if (pathData && pathData.match(/\//g).length > levels) {
    
      WatchPug.Panel.status['path-levels'] = 'fail';
      
    } else {
    
      WatchPug.Panel.status['path-levels'] = 'pass';
      
    }
    
    WatchPug.Panel.grade.path = WatchPug.Panel.calculateGrade([WatchPug.Panel.status['path-length'], WatchPug.Panel.status['path-dynparam'], WatchPug.Panel.status['path-hyphen'], WatchPug.Panel.status['path-lowercase'], WatchPug.Panel.status['path-levels']]);
    
    WatchPug.Panel.grade.weighted = WatchPug.Panel.calculateWeightedGrade([[WatchPug.Panel.grade.title[1], 3], [WatchPug.Panel.grade.description[1], 2], [WatchPug.Panel.grade.robots[1], 1], [WatchPug.Panel.grade.sitemap[1], 1], [WatchPug.Panel.grade.headlines[1], 2], [WatchPug.Panel.grade.content[1], 2], [WatchPug.Panel.grade.host[1], 2], [WatchPug.Panel.grade.path[1], 1]]);
    
  },
  
  generateInspectResultMarkup: function(id, grade, titleStrBundleKey, infoUrl, found, data) {
  
    var notFound, key, html,
        criteriaList = '';
    
    notFound = found ? '' : $('<div>')
                            .append($('<span>')
                            .attr('class', 'error')
                            .text(' (' + WatchPug.StrBundle.getString('al.tt.NotFound') + ')').clone()).html();
    
    
    for (key in data) {
    
      if (data.hasOwnProperty(key)) {
      
        criteriaList = criteriaList + $('<div>')
                                      .append($('<li>')
                                      .attr('class', data[key].status)
                                      .text(WatchPug.StrBundle.getString(data[key].strBundleKey)).clone()).html();
      
      }
      
    }
  
    html = $('<div>')
           .append($('<article>')
           .attr('id', 'inspect-results-' + id)
             .append($('<div>')
             .attr('class', 'grade ' + grade.toLowerCase())
             .text(grade))
             .append($('<div>')
             .attr('class', 'details')
               .append($('<a>')
               .attr({
                 'href': infoUrl,
                 'target': 'blank'
               })
               .append(WatchPug.StrBundle.getString(titleStrBundleKey) + ' [' + WatchPug.StrBundle.getString('al.tt.MoreInfo') + ']')
               .append(notFound))
               .append($('<ul>')
               .append(criteriaList))).clone()).html();
           
    return html;
  
  },
  
  showSenSEOGrade: function() {

    if (WatchPug.Panel.grade.weighted) {
    
      WatchPug.Panel.inspectResultReady();
    
      $('#searchpug-grade').html(WatchPug.StrBundle.getString('al.tt.WatchPugGrade'));
    
      $('#inspect-keyword').html(WatchPug.Panel.keywordsString);
      
      $('#inspect-grade').html(WatchPug.Panel.grade.weighted[0] + ' (' + WatchPug.Panel.grade.weighted[1] + '/100)');
      
      // update twitter area
      
      $('#twitter-grade').html(WatchPug.Panel.grade.weighted[0]);
      
      $('#tweet-this').attr('href', 'http://twitter.com/home?status=' + encodeURIComponent('I got grade ' + WatchPug.Panel.grade.weighted[0] + ' (' + WatchPug.Panel.grade.weighted[1] + '/100) for optimizing my website with SenSEO Firefox extension http://goo.gl/d7dp'));
  
    } else {
    
      $('#inspect-result').addClass('hidden');
    
    }
    
  },
  
  showInspectResult: function() {
  
    $('#inspect-related').removeClass('hidden');
      
    var inspectResultsContainer = $('#inspect-results');
  
    inspectResultsContainer.removeClass('hidden');
  
    if (WatchPug.Panel.setting['color-blind']) {
    
      inspectResultsContainer.addClass('color-blind-friendly');
    
    } else {
    
      inspectResultsContainer.removeClass('color-blind-friendly');
    
    }
  
    inspectResultsContainer.html(
  
      WatchPug.Panel.generateInspectResultsContainerMarkup() + $('<div>').append($('<div>')
                                                              .attr('class', 'legend')
                                                            .append($('<span>')
                                                              .attr('class', 'legend pass')
                                                              .text(WatchPug.StrBundle.getString('al.lg.Pass')))
                                                            .append($('<span>')
                                                              .attr('class', 'legend warning')
                                                              .text(WatchPug.StrBundle.getString('al.lg.Warning')))
                                                            .append($('<span>')
                                                              .attr('class', 'legend fail')
                                                              .text(WatchPug.StrBundle.getString('al.lg.Fail')))
                                                            .append($('<span>')
                                                              .attr('class', 'legend neutral')
                                                              .text(WatchPug.StrBundle.getString('al.lg.NotChecked'))).clone()).html()
                                                              
                                );
      
  },
  
  generateInspectResultsContainerMarkup: function() {
  
    return WatchPug.Panel.generateInspectResultMarkup('title-found', WatchPug.Panel.grade.title[0], 'al.tt.UseTitleTag', 'http://sensational-seo.com/on-page-criteria.html#title', WatchPug.Panel.found.title, {
    
      1: {
        status: WatchPug.Panel.status['title-onetime'],
        strBundleKey: 'al.st.TitleOnetime'
      },
       
      2: {
        status: WatchPug.Panel.status['title-includes'],
        strBundleKey: 'al.st.TitleIncludes'
      },
       
      3: {
        status: WatchPug.Panel.status['title-length'],
        strBundleKey: 'al.st.TitleLength'
      },
       
      4: {
        status: WatchPug.Panel.status['title-words'],
        strBundleKey: 'al.st.TitleWords'
      }

    }) +
    
    WatchPug.Panel.generateInspectResultMarkup('description', WatchPug.Panel.grade.description[0], 'al.tt.UseMetaDescription', 'http://sensational-seo.com/on-page-criteria.html#metadescription', WatchPug.Panel.found.description, {
    
      1: {
        status: WatchPug.Panel.status['description-onetime'],
        strBundleKey: 'al.st.DescriptionOnetime'
      },
       
      2: {
        status: WatchPug.Panel.status['description-includes'],
        strBundleKey: 'al.st.DescriptionIncludes'
      },
       
      3: {
        status: WatchPug.Panel.status['description-length'],
        strBundleKey: 'al.st.DescriptionLength'
      },
       
      4: {
        status: WatchPug.Panel.status['description-words'],
        strBundleKey: 'al.st.DescriptionWords'
      }

    }) +
    
    WatchPug.Panel.generateInspectResultMarkup('robots', WatchPug.Panel.grade.robots[0], 'al.tt.UseMetaRobots', 'http://sensational-seo.com/on-page-criteria.html#robots', WatchPug.Panel.found.robots, {
    
      1: {
        status: WatchPug.Panel.status['robots-exists'],
        strBundleKey: 'al.st.MetaRobots'
      }
      
    }) +
       
    WatchPug.Panel.generateInspectResultMarkup('sitemap', WatchPug.Panel.grade.sitemap[0], 'al.tt.UseSitemap', 'http://sensational-seo.com/on-page-criteria.html#robots', WatchPug.Panel.found.sitemap, {
    
      1: {
        status: WatchPug.Panel.status['sitemap-exists'],
        strBundleKey: 'al.st.Sitemap'
      }
      
    }) +
    
    WatchPug.Panel.generateInspectResultMarkup('headlines', WatchPug.Panel.grade.headlines[0], 'al.tt.HeadlineTags', 'http://sensational-seo.com/on-page-criteria.html#headline', WatchPug.Panel.found.headlines, {
    
      1: {
        status: WatchPug.Panel.status['headlines-structure'],
        strBundleKey: 'al.st.HeadlinesStructure'
      },
       
      2: {
        status: WatchPug.Panel.status['headlines-onetime'],
        strBundleKey: 'al.st.HeadlinesOnetime'
      },
       
      3: {
        status: WatchPug.Panel.status['headlines-includes'],
        strBundleKey: 'al.st.HeadlinesInclude'
      },
       
      4: {
        status: WatchPug.Panel.status['headlines-other'],
        strBundleKey: 'al.st.HeadlinesOther'
      }

    }) +
    
    WatchPug.Panel.generateInspectResultMarkup('content', WatchPug.Panel.grade.content[0], 'al.tt.PageContent', 'http://sensational-seo.com/on-page-criteria.html#pagecontent', WatchPug.Panel.found.content, {
    
      1: {
        status: 'neutral',
        strBundleKey: 'al.st.ContentUnique'
      },
       
      2: {
        status: 'neutral',
        strBundleKey: 'al.st.ContentDuplicate'
      },
       
      3: {
        status: 'neutral',
        strBundleKey: 'al.st.ContentStyle'
      },
       
      4: {
        status: WatchPug.Panel.status['content-alt'],
        strBundleKey: 'al.st.ContentAlt'
      },
      
      5: {
        status: 'neutral',
        strBundleKey: 'al.st.ContentPictureQuality'
      },
      
      6: {
        status: 'neutral',
        strBundleKey: 'al.st.ContentForImages'
      },
      
      7: {
        status: WatchPug.Panel.status['content-social-media'],
        strBundleKey: 'al.st.ContentSocialMedia'
      },
       
      8: {
        status: WatchPug.Panel.status['content-keywords'],
        strBundleKey: 'al.st.ContentKeywords'
      },
       
      9: {
        status: WatchPug.Panel.status['content-links'],
        strBundleKey: 'al.st.ContentLinks'
      },
       
      10: {
        status: WatchPug.Panel.status['content-validation'],
        strBundleKey: 'al.st.CodeSemanticValid'
      },
       
      11: {
        status: WatchPug.Panel.status['content-load-time'],
        strBundleKey: 'al.st.FastPageLoad'
      },
       
      12: {
        status: WatchPug.Panel.status['content-microdata'],
        strBundleKey: 'al.st.Microdata'
      }

    }) +
    
    WatchPug.Panel.generateInspectResultMarkup('host', WatchPug.Panel.grade.host[0], 'al.tt.Domain', 'http://sensational-seo.com/on-page-criteria.html#domain', WatchPug.Panel.found.host, {
    
      1: {
        status: WatchPug.Panel.status['host-includes'],
        strBundleKey: 'al.st.HostIncludes'
      },
       
      2: {
        status: WatchPug.Panel.status['host-idn'],
        strBundleKey: 'al.st.HostIdn'
      },
       
      3: {
        status: WatchPug.Panel.status['host-hyphen'],
        strBundleKey: 'al.st.HostHyphen'
      },
       
      4: {
        status: WatchPug.Panel.status['host-age'],
        strBundleKey: 'al.st.Host2Years'
      },
       
      5: {
        status: 'neutral',
        strBundleKey: 'al.st.HostSelf'
      },
      
      6: {
        status: 'neutral',
        strBundleKey: 'al.st.HostRedirect'
      }

    }) +
    
    WatchPug.Panel.generateInspectResultMarkup('path', WatchPug.Panel.grade.path[0], 'al.tt.Path', 'http://sensational-seo.com/on-page-criteria.html#path', WatchPug.Panel.found.path, {
    
      1: {
        status: WatchPug.Panel.status['path-length'],
        strBundleKey: 'al.st.PathLength'
      },
       
      2: {
        status: WatchPug.Panel.status['path-dynparam'],
        strBundleKey: 'al.st.PathDynparam'
      },
       
      3: {
        status: WatchPug.Panel.status['path-hyphen'],
        strBundleKey: 'al.st.PathHyphen'
      },
       
      4: {
        status: WatchPug.Panel.status['path-lowercase'],
        strBundleKey: 'al.st.PathLowercase'
      },
       
      5: {
        status: WatchPug.Panel.status['path-levels'],
        strBundleKey: 'al.st.PathLevels'
      }

    });

  }
    
// this is new parser stuff
  
  /*
  getDomain: function() {
  
    var url = window.location.href;

    var url_parts = WatchPug.Analyze.data['location-hostname'].split('/');

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
  */
  
};

WatchPug.Panel.init();