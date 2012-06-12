var SenSEO = SenSEO || {};

// temp fake strBundle

SenSEO.StrBundle = {

  string: {
  
    'intro.SenSEOForFirebug': 'SenSEO for Firebug',
    'intro.EnterSomeKeywords': 'Enter some Keywords SenSEO should analyze the page for.',
    'intro.ClickInspectSEOCriteria': 'Click "Inspect SEO Criteria" to have SenSEO analyze the page.',
    'intro.CopyrightNicoSteiner': 'Copyright &copy; Nico Steiner. All rights reserved.',

    'console.Keywords': 'Keywords',
    'console.InspectSeoCriteria': 'Inspect SEO Criteria',
    'console.Crawl': 'Crawl',
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

    'al.tt.SenSEOGrade': 'SenSEO grade',

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
    'al.st.LastModifiedHeader': 'Make sure your web server supports the If-Modified-Since HTTP header.',
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
    'al.st.CrossBrowser': 'Make sure that your page looks the same in all browsers.',

    'al.lg.Pass': 'pass',
    'al.lg.Warning': 'warning',
    'al.lg.Fail': 'fail',
    'al.lg.NotChecked': 'not checked'
  },
  
  getString: function(key) {
  
    return SenSEO.StrBundle.string[key];
  
  }
  
};

SenSEO.Panel = {

  activeDocumentComponents: [],
  
  found: [],
  
  status: [],
  
  grade: [],
  
  savedStatus: [],
  
  savedGrade: [],
  
  lastVisitedURL: '',
  
  setting: [],
  
  callback: [],
  
  tabs: ['intro', 'inspect', 'components', 'crawl', 'settings'],
  
  keywordsString: '',
  
  keywords: false,

  requestKeyword: '',
  
  processedDocumentHeaders: false,
  
  processedDomainAge: false,
  
  processedRobotsFile: false,
  
  processedSitemapFile: false,
  
  processedValidationResult: false,
  
  forceAsyncDataIsReady: false,
  
  inspectOngoing: true,
  
  highlightedDataRow: null,
  
  init: function() {

    // init panel instantly for faster user experience

    if ($('#intro-container').hasClass('hidden') &&
        $('#inspect-container').hasClass('hidden') &&
        $('#components-container').hasClass('hidden') &&
        $('#settings-container').hasClass('hidden')) {
      
      // if all containers are hidden, panel is opened first time
    
      SenSEO.Panel.initPanel();
      
      SenSEO.Panel.initInputsAndButtons();
      
    }
    
    // reset UI when panel is opened
    
    self.port.on('resetUI', function() {

      SenSEO.Panel.resetUI();
    
    });
    
    // prefills keyword input field and shows components
    
    self.port.on('prepareShowComponents', function(keyword) {

      SenSEO.Panel.resetUI();
    
      SenSEO.Panel.setKeywordValue(keyword);
      
      SenSEO.Panel.setActiveTab('components');
      
      self.port.emit('panelPrepared');
      
    });
    
    self.port.on('prepareInspectResult', function(keyword) {

      SenSEO.Panel.resetUI();
    
      SenSEO.Panel.setKeywordValue(keyword);
      
      SenSEO.Panel.setActiveTab('inspect');
      
      self.port.emit('panelPrepared');
      
    });
    
    // asynchronously fetched markup data lands here

    self.port.on('getResponseText', function(data) {
      
      // manual switch for different responses

      if (data.key === 'document-headers') {
      
        SenSEO.Panel.processDocumentHeaders(data);
        
        SenSEO.Panel.processedDocumentHeaders = true;
      
      } else if (data.key === 'domain-age') {
      
        SenSEO.Panel.processDomainAge(data);
        
        SenSEO.Panel.processedDomainAge = true;
      
      } else if (data.key === 'robots-file') {
      
        SenSEO.Panel.processRobotsFile(data);
      
        SenSEO.Panel.processedRobotsFile = true;
      
      } else if (data.key === 'sitemap-file') {

        SenSEO.Panel.processSitemapFile(data);
      
        SenSEO.Panel.processedSitemapFile = true;
      
      } else if (data.key === 'validation-result') {

        SenSEO.Panel.processValidationResult(data);
      
        SenSEO.Panel.processedValidationResult = true;
      
      } else if (data.key === 'related-keywords') {

        SenSEO.Panel.processRelatedKeywords(data);
      
      }
      
      if (data.key !== 'related-keywords' && SenSEO.Panel.asyncDataIsReady()) {
      
        SenSEO.Panel.showInspectResultPre();
        
      }
      
    });
  
    // preferences land here

    self.port.on('getSettings', function handleSettingsData(data) {
      
      SenSEO.Panel.setting = data;
      
    });
  
    self.on('message', function(activeDocumentComponents) {
    
      var currentURL;
    
      SenSEO.Panel.activeDocumentComponents = activeDocumentComponents;
      
      // init UI
      
      // keyword prefill feature
      
      if (SenSEO.Panel.setting['prefill-keyword']) {
      
        // check if URL has changed
        
        // this prevents overwriting of manually changed keywords
        
        currentURL = SenSEO.Panel.activeDocumentComponents['location-hostname'].data + SenSEO.Panel.activeDocumentComponents['path-name'].data + SenSEO.Panel.activeDocumentComponents['url-params'].data;
        
        if (SenSEO.Panel.lastVisitedURL !== currentURL) {

          // save new current URL
        
          SenSEO.Panel.lastVisitedURL = currentURL;
        
          // check if keyword for prefilling input field is available
          
          if (SenSEO.Panel.activeDocumentComponents['meta-keywords'] !== 'n/a' && SenSEO.Panel.activeDocumentComponents['meta-keywords'].data.split(',')[0]) {
        
            // prefill first keyword in keyword metatags
        
            SenSEO.Panel.setKeywordValue(SenSEO.Panel.activeDocumentComponents['meta-keywords'].data.split(',')[0]);
        
          }
          
        }
        
      }
      
      SenSEO.Panel.getKeywordValue();
  
      SenSEO.Panel.getKeywordMatches();
  
      SenSEO.Panel.getKeywordDensity();
      
      // community wants last tab to be active when panel is reopened
      
      // check for updating analyze data related active tab
      
      if (!$('#inspect-container').hasClass('hidden')) {
      
        SenSEO.Panel.handleInspectButton();
      
      } else if (!$('#components-container').hasClass('hidden')) {
      
        SenSEO.Panel.handleComponentsButton();
      
      }
      
      // after 4 seconds force async data readiness

      window.setTimeout(function() {
      
        if (SenSEO.Panel.inspectOngoing) {
      
          SenSEO.Panel.forceAsyncDataIsReady = true;
          
          SenSEO.Panel.showInspectResultPre();
          
        }
      
      }, 4000);
      
    });
    
  },
  
  asyncDataIsReady: function() {

    if (SenSEO.Panel.forceAsyncDataIsReady || (
        SenSEO.Panel.processedDocumentHeaders &&
        SenSEO.Panel.processedDomainAge &&
        SenSEO.Panel.processedRobotsFile &&
        SenSEO.Panel.processedSitemapFile &&
        SenSEO.Panel.processedValidationResult)) {
      
      return true;
      
    }
    
    return false;
    
  },

  showInspectResultPre: function() {
  
    // always show senseo grade
    
    SenSEO.Panel.analyzeForKeyword();
  
    SenSEO.Panel.showSenSEOGrade();
  
    if (SenSEO.Panel.inspectButtonIsWaiting) {
    
      SenSEO.Panel.inspectButtonIsWaiting = false;
    
      SenSEO.Panel.showInspectResult();

    }
    
  },

  resetUI: function() {
  
    // asynch data needs longer (is set to true by getResponseText port)
    
    SenSEO.Panel.resetAsyncProcess();
    
    try {
    
      self.postMessage({
      
        command: 'highlight-element',
        
        highlightInfo: 'remove-highlight-element none'
        
      });
    
    } catch (e) {}
    
    SenSEO.Panel.hideSpeechBubble();
    
    // show / hide specific containers
    
    $('#inspect-related').addClass('hidden');
    
    $('#inspect-results').addClass('hidden');

    $('#crawl-sitemap-found').html('<img src="img/roller.gif">');
  
    $('#crawl-instructions').addClass('hidden');
      
    SenSEO.Panel.inspectResultOngoing();
  
  },
  
  inspectResultOngoing: function() {
  
    SenSEO.Panel.inspectOngoing = true;
  
    // show active loading indicator
  
    $('#inspect-result-ongoing').removeClass('hidden');
    
    $('#inspect-result-ready').addClass('hidden');
  
  },
    
  inspectResultReady: function() {
  
    SenSEO.Panel.inspectOngoing = false;
  
    // show inspect result
  
    $('#inspect-result-ongoing').addClass('hidden');
  
    $('#inspect-result-ready').removeClass('hidden');
  
  },
    
  resetAsyncProcess: function() {
  
    SenSEO.Panel.processedDocumentHeaders = false;
    SenSEO.Panel.processedDomainAge = false;
    SenSEO.Panel.processedRobotsFile = false;
    SenSEO.Panel.processedSitemapFile = false;
    SenSEO.Panel.processedValidationResult = false;
    SenSEO.Panel.processedRelatedKeywords = false;
    
    SenSEO.Panel.forceAsyncDataIsReady = false;
    
  },

  processRobotsFile: function(data) {
  
    var url = data.url,
        status = data.status,
        robotsData,
        robotsDataKey, robotsDataValue,
        robotsDataMap = [],
        sitemapLocation,
        i;
  
    if (status === 200) {
  
      SenSEO.Panel.activeDocumentComponents['robots-file'].data = 'found';
        
      SenSEO.Panel.activeDocumentComponents['robots-file'].markup = '<a href="' + encodeURIComponent(url) + '" target="blank">show</a><span id="robots-file" class="container"></span>';
      
      // update components table
      
      $('#robots-file').parent().empty().append(SenSEO.Panel.activeDocumentComponents['robots-file'].data);

      robotsData = data.text.split('\n');
      
      for (i = 0; i < robotsData.length; i += 1) {
      
        robotsDataKey = $.trim(robotsData[i].substring(0, robotsData[i].indexOf(':')).toLowerCase());
      
        robotsDataValue = $.trim(robotsData[i].substring(robotsData[i].indexOf(':') + 1, robotsData[i].length));
      
        if (robotsDataKey !== '' && robotsDataKey[0] !== '#' && robotsDataValue !== '') {
      
          robotsDataMap[robotsDataKey] = robotsDataValue;
        
        }
        
      }
    
    }
  
    if (robotsDataMap.sitemap && robotsDataMap.sitemap !== '') {
    
      SenSEO.Panel.activeDocumentComponents['robots-sitemap-location'].data = robotsDataMap.sitemap;
                
      sitemapLocation = SenSEO.Panel.activeDocumentComponents['robots-sitemap-location'].data;
    
      // update components table
      
      $('#robots-sitemap-location').parent().empty().append(sitemapLocation);
    
    } else {
    
      // location-protocol and location-hostname are unset when document is opend with file:
    
      if (SenSEO.Panel.activeDocumentComponents['location-protocol'] && SenSEO.Panel.activeDocumentComponents['location-hostname']) {
    
        sitemapLocation = SenSEO.Panel.activeDocumentComponents['location-protocol'].data + '//' + SenSEO.Panel.activeDocumentComponents['location-hostname'].data + SenSEO.Panel.activeDocumentComponents['location-port'].data + '/sitemap.xml';
        
      }
    
    }
  
    // check sitemap now
  
    if (sitemapLocation) {
  
      self.port.emit('getResponseText', 'sitemap-file', sitemapLocation);
      
    }
    
  },
  
  processSitemapFile: function(data) {
  
    var url = data.url,
        status = data.status,
        text = data.text;
  
    if (status === 200) {
  
      SenSEO.Panel.activeDocumentComponents['sitemap-file'].data = 'found';
        
      SenSEO.Panel.activeDocumentComponents['sitemap-file'].markup = '<a href="' + encodeURIComponent(url) + '" target="blank">show</a><span id="sitemap-file" class="container"></span>';
      
      $('#sitemap-file').parent().empty().text(SenSEO.Panel.activeDocumentComponents['sitemap-file'].data);
      $('#sitemap-file').parent().empty().append(SenSEO.Panel.activeDocumentComponents['sitemap-file'].markup);

      SenSEO.Panel.activeDocumentComponents['sitemap-file'].pages = [];
      
      $(text).find('loc').each(function() {
      
        SenSEO.Panel.activeDocumentComponents['sitemap-file'].pages.push($(this).text());
        
      });
      
      // trigger crawl tab actions
      
      $('#crawl-sitemap-found').empty().html('<span class="found">found</span>');
    
      $('#crawl-instructions').removeClass('hidden');
    
      $('#crawl-instructions .found').removeClass('hidden');
    
      $('#crawl-instructions .not-found').addClass('hidden');
    
      $('#crawl-container .crawl-sitemap-pages').text(SenSEO.Panel.activeDocumentComponents['sitemap-file'].pages.length);
      
    } else {
  
      // trigger crawl tab actions
      
      $('#crawl-sitemap-found').empty().html('<span class="not-found">n/a</span>');
      
      $('#crawl-instructions').removeClass('hidden');
    
      $('#crawl-instructions .found').addClass('hidden');
    
      $('#crawl-instructions .not-found').removeClass('hidden');
    
    }
    
  },
  
  processDocumentHeaders: function(data) {
  
    var headers = data.headers;
    
    if (headers) {
    
      // update components table
      
      if (headers['Content-Type']) {
      
        SenSEO.Panel.activeDocumentComponents['content-type'].data = headers['Content-Type'];
      
        $('#content-type').parent().empty().text(SenSEO.Panel.activeDocumentComponents['content-type'].data);
      
      }
      
      // update components table
      
      if (headers['Last-Modified']) {

        SenSEO.Panel.activeDocumentComponents['last-modified'].data = headers['Last-Modified'];
      
        $('#last-modified').parent().empty().text(SenSEO.Panel.activeDocumentComponents['last-modified'].data);
      
      }
      
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
      
      SenSEO.Panel.activeDocumentComponents['domain-age'].data = domainAge;
      SenSEO.Panel.activeDocumentComponents['domain-age'].markup = '<a href="' + encodeURIComponent(url) + '" target="blank">show</a> <span id="domain-age" class="container"></span>';
      
      $('#domain-age').parent().empty()
                      .text(SenSEO.Panel.activeDocumentComponents['domain-age'].data )
                      .append(SenSEO.Panel.activeDocumentComponents['domain-age'].markup);
      
    }
    
  },
  
  processValidationResult: function(data) {
  
    var url = data.url,
        status = data.status,
        responseText = data.text,
        validatorW3orgDOM, validResult, invalidResult;
  
    if (status === 200) {
  
      // TODO: refactore this!
      // https://developer.mozilla.org/en/XUL_School/DOM_Building_and_HTML_Insertion
  
      validatorW3orgDOM = $('<div>')
                        .append(responseText).clone();
                              
      // get validation result
      
      validResult = $(validatorW3orgDOM).find('table.header td.valid').text();
    
      invalidResult = $(validatorW3orgDOM).find('table.header td.invalid').text();
      
      // set new data value (result with link to W3C validator)
      
      if (validResult) {
      
        SenSEO.Panel.activeDocumentComponents['validation-result'].data = 'valid: ' + $.trim(validResult);
        SenSEO.Panel.activeDocumentComponents['validation-result'].markup = '<a href="' + encodeURIComponent(url) + '" target="blank">show</a><span id="validation-result" class="container"></span>';

      }
    
      if (invalidResult) {
      
        SenSEO.Panel.activeDocumentComponents['validation-result'].data = 'invalid: ' + $.trim(invalidResult);
        SenSEO.Panel.activeDocumentComponents['validation-result'].markup = '<a href="' + encodeURIComponent(url) + '" target="blank">show</a><span id="validation-result" class="container"></span>';
    
      }
      
      $('#validation-result').parent().empty()
                             .text(SenSEO.Panel.activeDocumentComponents['validation-result'].data )
                             .append(SenSEO.Panel.activeDocumentComponents['validation-result'].markup);

    }
  
  },
  
  getRelatedKeywords: function() {
  
    var url;
  
    if (SenSEO.Panel.keywordsString !== '' && SenSEO.Panel.keywordsString !== SenSEO.Panel.requestKeyword) {
      
      SenSEO.Panel.requestKeyword = SenSEO.Panel.keywordsString;
      
      url = 'http://us.api.semrush.com/?action=report&type=phrase_related&key=89a72d6e1c56ce52a7eaf077907304e8&display_limit=10&export=api&export_columns=Ph&phrase=' + encodeURIComponent(SenSEO.Panel.keywordsString);

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

    $('#intro-enter-keywords').html(SenSEO.StrBundle.getString('intro.EnterSomeKeywords'));
    $('#intro-click-inspect').html(SenSEO.StrBundle.getString('intro.ClickInspectSEOCriteria'));

    $('#intro-container').removeClass('hidden');
    
  },
  
  initInputsAndButtons: function() {
  
    $('#inspect-button').html(SenSEO.StrBundle.getString('console.InspectSeoCriteria'));
    $('#components-button').html(SenSEO.StrBundle.getString('console.ShowComponents'));
    $('#crawl-button').html(SenSEO.StrBundle.getString('console.Crawl'));
    $('#printview-button').html(SenSEO.StrBundle.getString('console.Printview'));

    $('#keyword-input').blur(function() {
      
      SenSEO.Panel.hideSpeechBubble();
    
      $('#keyword-input').removeClass('required');
    
      SenSEO.Panel.getKeywordValue();
  
      SenSEO.Panel.getKeywordMatches();
  
      SenSEO.Panel.getKeywordDensity();
        
    });
    
    $('#keyword-input').keypress(function(e) {
      
      // if user presses enter, inspect document
      
      if (e.keyCode === 13) {
      
        e.target.blur();
      
        SenSEO.Panel.handleInspectButton();
      
      }
      
    });
  
    $('#inspect-button').click(function(e) {
        
      e.preventDefault();
      
      SenSEO.Panel.handleInspectButton();
      
    });
  
    $('#components-button').click(function(e) {
        
      e.preventDefault();
      
      SenSEO.Panel.handleComponentsButton();
  
    });
  
    $('#crawl-button').click(function(e) {
        
      e.preventDefault();
      
      SenSEO.Panel.handleCrawlButton();
  
    });
  
    $('#crawl-now-button').click(function(e) {
        
      e.preventDefault();
      
      SenSEO.Panel.handleCrawlNowButton();
  
    });
  
    $('#printview-button').click(function(e) {
        
      e.preventDefault();
      
      SenSEO.Panel.handlePrintviewButton();
  
    });
  
    $('#help-button').click(function(e) {
        
      e.preventDefault();
      
      SenSEO.Panel.handleHelpButton();
  
    });
  
    $('#bug-button').click(function() {
      
      SenSEO.Panel.handleBugButton();
  
    });
  
    $('#settings-button').click(function(e) {
        
      e.preventDefault();
      
      SenSEO.Panel.handleSettingsButton();
  
    });
    
    $('#save-result').click(function() {
    
      SenSEO.Panel.handleSaveResult();
    
    });
    
    $('#compare-result').click(function() {
    
      SenSEO.Panel.handleCompareResult();
    
    });
    
  },
  
  // this is not working / propably an addon sdk bug
  
  // keep an eye on: https://bugzilla.mozilla.org/show_bug.cgi?id=723502

  /*
  
  readData: function(dataKey, callback) {
  
    SenSEO.Panel.callback[dataKey] = callback;
  
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
  
    SenSEO.Panel.keywordsString = $.trim($('#keyword-input').val());
    
    if (SenSEO.Panel.keywordsString !== '') {
    
      SenSEO.Panel.keywords = SenSEO.Panel.keywordsString.split(" ");
      
    } else {
    
      SenSEO.Panel.keywords = false;
    
    }
    
  },
  
  setKeywordValue: function(keyword) {
  
    if (keyword && keyword !== 'n/a') {
  
      $('#keyword-input').val(keyword);
      
    }
    
  },
  
  handleInspectButton: function() {
  
    if (SenSEO.Panel.keywordsString !== '') {
  
      SenSEO.Panel.setActiveTab('inspect');
      
      SenSEO.Panel.getRelatedKeywords();
      
      SenSEO.Panel.inspectButtonIsWaiting = true;
      
      // wait until async data is ready
      
      // if asyncDataIsReady is false, getResponseText message will show inspect result later
      
      if (SenSEO.Panel.asyncDataIsReady()) {
      
        SenSEO.Panel.showInspectResultPre();
        
      } else {
      
        SenSEO.Panel.inspectResultOngoing();
      
      }
      
    } else {
    
      $('#keyword-input').addClass('required');
      
      $('#keyword-input').focus();
    
      SenSEO.Panel.showSpeechBubble({top: 34, left: 5}, 'keyword(s) required');
    
    }
  
  },
  
  handleComponentsButton: function() {
  
    SenSEO.Panel.setActiveTab('components');
    
    if (SenSEO.Panel.keywordsString !== '') {
  
      if (SenSEO.Panel.asyncDataIsReady()) {
      
        SenSEO.Panel.showInspectResultPre();
        
      }
      
    }

    // only if senseo grade bar is completely hidden, show busy indicator
  
    if ($('#inspect-result-ongoing').hasClass('hidden') && $('#inspect-result-ready').hasClass('hidden')) {
  
      SenSEO.Panel.inspectResultOngoing();
    
    }
    
    SenSEO.Panel.renderComponentsTable('components-table', SenSEO.Panel.activeDocumentComponents);
  
  },
  
  handleCrawlButton: function() {
  
    SenSEO.Panel.setActiveTab('crawl');
    
    // only if senseo grade bar is completely hidden, show busy indicator
  
    if ($('#inspect-result-ongoing').hasClass('hidden') && $('#inspect-result-ready').hasClass('hidden')) {
  
      SenSEO.Panel.inspectResultOngoing();
    
    }
    
    // check for sitemap
    
  },
  
  handleCrawlNowButton: function() {
  
    if (SenSEO.Panel.activeDocumentComponents['sitemap-file'].pages) {
    
      self.port.emit('crawlPages', SenSEO.Panel.activeDocumentComponents['sitemap-file'].pages);
    
    }
  
  },
  
  handlePrintviewButton: function() {
  
  },
  
  handleHelpButton: function() {
  
    
  
  },
  
  handleBugButton: function() {
  
  },
  
  handleSettingsButton: function() {
  
    SenSEO.Panel.setActiveTab('settings');
  
    $('#settings-toolbar-icon').html(String(SenSEO.Panel.setting['toolbar-icon']));
  
    $('#settings-prefill-keyword').html(String(SenSEO.Panel.setting['prefill-keyword']));
  
    $('#settings-color-blind').html(String(SenSEO.Panel.setting['color-blind']));
  
  },
  
  handleSaveResult: function() {
  
    var bubbleLeft, bubbleTop, key;
  
    // save result by cloning status and grade
    // see: http://my.opera.com/GreyWyvern/blog/show.dml/1725165
    
    for (key in SenSEO.Panel.status) {
    
      if (SenSEO.Panel.status.hasOwnProperty(key)) {
      
        SenSEO.Panel.savedStatus[key] = SenSEO.Panel.status[key];

      }
      
    }

    for (key in SenSEO.Panel.grade) {
    
      if (SenSEO.Panel.grade.hasOwnProperty(key)) {
      
        SenSEO.Panel.savedGrade[key] = SenSEO.Panel.grade[key];

      }
      
    }
    
    // what next?
    
    bubbleLeft = $('#save-result').offset().left - 24;

    bubbleTop = $('#save-result').offset().top + 24;

    SenSEO.Panel.showSpeechBubble({top: bubbleTop, left: bubbleLeft}, 
                                    '<ul><li><span class="bold">1.</span> Save result. (done)</li>' +
                                    '<li><span class="bold">2.</span> Go to a second page.</li>' +
                                    '<li><span class="bold">3.</span> Click <img src="img/lightbulb-active.png"> icon to compare results.</li></ul>');
                                                        
    // remember which URL has been saved
    
    SenSEO.Panel.savedURL = SenSEO.Panel.activeDocumentComponents['location-hostname'].data + SenSEO.Panel.activeDocumentComponents['path-name'].data + SenSEO.Panel.activeDocumentComponents['url-params'].data;

  },
  
  handleCompareResult: function() {
  
    var compareURL = SenSEO.Panel.activeDocumentComponents['location-hostname'].data + SenSEO.Panel.activeDocumentComponents['path-name'].data + SenSEO.Panel.activeDocumentComponents['url-params'].data,
                     bubbleLeft, bubbleTop;

    if (SenSEO.Panel.savedURL === compareURL) {

      // same URL? => show hint
      
      bubbleLeft = $('#compare-result').offset().left - 24;

      bubbleTop = $('#compare-result').offset().top + 24;

      SenSEO.Panel.showSpeechBubble({top: bubbleTop, left: bubbleLeft},
                                      '<ul><li>You can\'t compare same pages.</li>' +
                                      '<li><span class="bold">1.</span> Go to a second page.</li>' +
                                      '<li><span class="bold">2.</span> Click <img src="img/lightbulb-active.png"> again.</li></ul>');
  
    } else {
  
      if (SenSEO.Panel.savedGrade && SenSEO.Panel.savedStatus) {
    
        // get comparison html
        
        $('#inspect-results .saved-mode-true').html(
    
            '<img id="close-comparison" class="visible" src="img/cancel.png">' + 
    
            SenSEO.Panel.generateInspectResultsContainerMarkup(SenSEO.Panel.savedGrade, SenSEO.Panel.savedStatus)
          
        );
        
        // do animation
        
        $('#inspect-results .saved-mode-false').addClass('compare');
        
        $('#close-comparison').click(function(e) {
            
          e.preventDefault();
          
          SenSEO.Panel.handleCloseComparison();
          
        });
      
      }
      
    }

  },
  
  handleCloseComparison: function() {
  
    $('#close-comparison').removeClass('visible');
    
    $('#inspect-results .saved-mode-false').removeClass('compare');
  
  },
  
  setActiveTab: function(tab) {
  
    var i;
  
    SenSEO.Panel.hideSpeechBubble();
  
    $('#inspect-result').removeClass('hidden');
    
    for (i = 0; i < SenSEO.Panel.tabs.length; i += 1) {
    
      if (SenSEO.Panel.tabs[i] === tab) {
      
        $('#' + SenSEO.Panel.tabs[i] + '-container').removeClass('hidden');
      
      } else {
      
        $('#' + SenSEO.Panel.tabs[i] + '-container').addClass('hidden');
      
      }
    
    }
  
  },
  
  getKeywordInput: function() {
  
    return $('#keyword-input').attr('value');
  
  },
  
  showSpeechBubble: function(offset, markup) {
  
    var speechBubble = $('#speech-bubble');
    
    speechBubble.find('p').html(markup);
    
    speechBubble.removeClass('hidden');
  
    speechBubble.offset(offset);
    
  },
  
  hideSpeechBubble: function() {
  
    $('#speech-bubble').addClass('hidden');
  
  },
  
  highlightDataRow: function() {
  
    if (SenSEO.Panel.highlightedDataRow) {
    
      $(SenSEO.Panel.highlightedDataRow).removeClass('clicked');
      
    }
  
    $(this).addClass('clicked');
    
    SenSEO.Panel.highlightedDataRow = this;
  
  },
  
  renderComponentsTable: function(componentsTable, components) {
    
    var key, i, markup,
        componentsTableBody = $('#' + componentsTable + ' tbody'),
        formattedOutput;
    
    // remove outdated table content
  
    componentsTableBody.empty();
  
    for (key in components) {
    
      if (components.hasOwnProperty(key)) {
      
        if (key === 'body-text') {
        
          components[key].data = SenSEO.Panel.encodeMarkup(components[key].data);
          
        }

        if (typeof components[key].head === 'object') {
        
          // multible datasets
          
          for (i = 0; i < components[key].head.length; i += 1) {

            markup = $('<tr>')
                     .append($('<th>')
                     .text(components[key].head[i]));
            
            formattedOutput = SenSEO.Panel.formatOutput(components[key].data[i], components[key].markup[i]);
            
            markup.append(formattedOutput);
              
            componentsTableBody.append(markup);
            
          }

        } else {
        
          // one dataset
          
          markup = $('<tr>')
                   .append($('<th>')
                           .text(components[key].head));
                       
          formattedOutput = SenSEO.Panel.formatOutput(components[key].data, components[key].markup);
          
          markup.append(formattedOutput);
            
          componentsTableBody.append(markup);
            
        }
        
      }
      
    }
    
    SenSEO.Panel.createDataRowEvents(componentsTableBody);
    
    SenSEO.Panel.createHighlightEvents(componentsTable);
  
  },
  
  createDataRowEvents: function(componentsTableBody) {
  
    $(componentsTableBody).find('tr').click(SenSEO.Panel.highlightDataRow);
  
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
  
        $(allHighlightElements[i]).click(SenSEO.Panel.highlightElementCommand);

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

    var bodyData = SenSEO.Panel.activeDocumentComponents['body-text'].data,
        matches = 0,
        rx,
        i;
    
    if (bodyData && SenSEO.Panel.keywords.length) {
    
      for (i = 0; i < SenSEO.Panel.keywords.length; i += 1) {
      
        if (SenSEO.Panel.keywords[i] !== '') {
      
          rx = new RegExp(SenSEO.Panel.keywords[i], 'gi');
          
          if (bodyData && bodyData.match && bodyData.match(rx)) {
          
            matches = matches + bodyData.match(rx).length;
            
          }
          
        }
        
      }
      
    }
    
    SenSEO.Panel.activeDocumentComponents['keyword-matches'] = {
      
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
  
    if (SenSEO.Panel.activeDocumentComponents['keyword-matches']) {
  
      keywordDensity = Math.round(SenSEO.Panel.activeDocumentComponents['keyword-matches'].data / SenSEO.Panel.activeDocumentComponents['number-words'].data * 100 * 100) / 100;
      
      SenSEO.Panel.activeDocumentComponents['keyword-density'] = {
        
        head: 'keyword density',
        
        data: keywordDensity
        
      };
      
    }
  
  },

  formatOutput: function(text, markup) {
  
    var start, startTemp, nextKeyword, end, i, output,
        index;
  
    if (text.toString) {
  
      text = text.toString();
      
    } else {
    
      text = '';
    
    }
  
    output = $('<td>');
  
    if (text === 'n/a') {
    
      output.append($('<span class="info">')
              .text(text)
            );
              
    } else {
  
      // mark keywords in text
      
      if (SenSEO.Panel.keywords && SenSEO.Panel.keywords.length) {
      
        index = 0;
        
        // do this until there is no next keyword (break)
        
        while (true) {
        
          start = text.length;
          
          nextKeyword = false;
          
          // find closest next matching keyword
          
          for (i = 0; i < SenSEO.Panel.keywords.length; i += 1) {
          
            if (SenSEO.Panel.keywords[i] !== '') {
          
              startTemp = text.toLowerCase().indexOf(SenSEO.Panel.keywords[i].toLowerCase(), index);
              
              if (startTemp !== -1 && startTemp < start) {
              
                nextKeyword = i;
                
                start = startTemp;
              
              }
              
            }
            
          }
          
          // if there is a next keyword
          
          if (nextKeyword !== false) {

            // mark keyword and correct index
          
            end = start + SenSEO.Panel.keywords[nextKeyword].length;
            
            output.append($('<span>')
                    .text(text.substring(index, start))
                    .append($('<span class="match">')
                      .text(text.substring(start, end))
                    )
                  );
            
            index = end;
          
          } else {
          
            output.append($('<span>')
                    .text(text.substring(index, text.length))
                  );
          
            break;
            
          }
          
        }
      
      } else {
      
        output.append($('<span>')
                .text(text)
              );
      
      }
      
    }
    
    if (markup) {
      
      output.append(markup);
    
    }
    
    return output;
    
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
      
        rx = new RegExp(SenSEO.Panel.trimWhitespace(keywords[i].replace(/^\W/g, ' ').replace(/\W$/g, ' ')), 'i');
        
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
      
        rx = new RegExp(SenSEO.Panel.trimWhitespace(keywords[i].replace(/^\W/g, ' ').replace(/\W$/g, ' ')), 'i');
        
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
        
      }
      
      if (percent >= 80) {
      
        return ['B', percent];
        
      }
      
      if (percent >= 70) {
      
        return ['C', percent];
        
      }
      
      if (percent >= 60) {
      
        return ['D', percent];
        
      }
      
      if (percent >= 50) {
      
        return ['E', percent];
        
      }
      
      return ['F', percent];
      
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
        
      }
      
      if (percent > 80) {
      
        return ['B', percent];
        
      }
      
      if (percent > 70) {
      
        return ['C', percent];
        
      }
      
      if (percent > 60) {
      
        return ['D', percent];
        
      }
      
      if (percent > 50) {
      
        return ['E', percent];
        
      }
      
      return ['F', percent];
      
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
  
    keywords = SenSEO.Panel.keywords;

    titleData = SenSEO.Panel.activeDocumentComponents['title-found'].data;
    
    titleCount = SenSEO.Panel.activeDocumentComponents['title-found'].count;
    
    SenSEO.Panel.found.title = titleData === 'n/a' ? false : true;
    
    if (SenSEO.Panel.found.title && titleCount && titleCount === 1) {
    
      SenSEO.Panel.status['title-onetime'] = 'pass';
      
    } else {
    
      SenSEO.Panel.status['title-onetime'] = 'fail';
      
    }
    
    if (SenSEO.Panel.found.title && titleData && SenSEO.Panel.includesAllKeywords(titleData, keywords)) {
    
      SenSEO.Panel.status['title-includes'] = 'pass';
      
    } else if (SenSEO.Panel.found.title && titleData && SenSEO.Panel.includesSomeKeywords(titleData, keywords)) {
    
      SenSEO.Panel.status['title-includes'] = 'warning';
      
    } else {
    
      SenSEO.Panel.status['title-includes'] = 'fail';
      
    }
    
    if (SenSEO.Panel.found.title && titleData && titleData.length <= 65) {
    
      SenSEO.Panel.status['title-length'] = 'pass';
      
    } else if (SenSEO.Panel.found.title && titleData && titleData.length <= 75) {
    
      SenSEO.Panel.status['title-length'] = 'warning';
      
    } else {
    
      SenSEO.Panel.status['title-length'] = 'fail';
      
    }
    
    if (SenSEO.Panel.found.title && titleData && titleData.split(" ").length <= 15) {
    
      SenSEO.Panel.status['title-words'] = 'pass';
      
    } else if (SenSEO.Panel.found.title && titleData && titleData.split(" ").length <= 18) {
    
      SenSEO.Panel.status['title-words'] = 'warning';
      
    } else {
    
      SenSEO.Panel.status['title-words'] = 'fail';
      
    }
    
    SenSEO.Panel.grade.title = SenSEO.Panel.calculateGrade([SenSEO.Panel.status['title-onetime'], SenSEO.Panel.status['title-includes'], SenSEO.Panel.status['title-length'], SenSEO.Panel.status['title-words']]);
    
    descriptionData = SenSEO.Panel.activeDocumentComponents['meta-description'].data;
    
    SenSEO.Panel.found.description = descriptionData === 'n/a' ? false : true;
    
    if (SenSEO.Panel.found.description && SenSEO.Panel.activeDocumentComponents['meta-description'].count === 1) {
    
      SenSEO.Panel.status['description-onetime'] = 'pass';
      
    } else {
    
      SenSEO.Panel.status['description-onetime'] = 'fail';
      
    }
    
    if (SenSEO.Panel.found.description && SenSEO.Panel.includesAllKeywords(descriptionData, keywords)) {
    
      SenSEO.Panel.status['description-includes'] = 'pass';
      
    } else if (SenSEO.Panel.found.description && descriptionData && SenSEO.Panel.includesSomeKeywords(descriptionData, keywords)) {
    
      SenSEO.Panel.status['description-includes'] = 'warning';
      
    } else {
    
      SenSEO.Panel.status['description-includes'] = 'fail';
      
    }
    
    if (SenSEO.Panel.found.description && descriptionData && descriptionData.length <= 150) {
    
      SenSEO.Panel.status['description-length'] = 'pass';
      
    } else if (SenSEO.Panel.found.description && descriptionData && descriptionData.length <= 170) {
    
      SenSEO.Panel.status['description-length'] = 'warning';
      
    } else {
    
      SenSEO.Panel.status['description-length'] = 'fail';
      
    }
    
    if (SenSEO.Panel.found.description && descriptionData && descriptionData.split(" ").length <= 30) {
    
      SenSEO.Panel.status['description-words'] = 'pass';
      
    } else if (SenSEO.Panel.found.description && descriptionData && descriptionData.split(" ").length <= 35) {
    
      SenSEO.Panel.status['description-words'] = 'warning';
      
    } else {
    
      SenSEO.Panel.status['description-words'] = 'fail';
      
    }
    
    SenSEO.Panel.grade.description = SenSEO.Panel.calculateGrade([SenSEO.Panel.status['description-onetime'], SenSEO.Panel.status['description-includes'], SenSEO.Panel.status['description-length'], SenSEO.Panel.status['description-words']]);
    
    robotsData = SenSEO.Panel.activeDocumentComponents['meta-robots'];
    
    robotsFile = SenSEO.Panel.activeDocumentComponents['robots-file'];
    
    if ((robotsData && robotsData.data !== '') || (robotsFile && robotsFile.data.indexOf('>n/a<') < 0)) {
    
      SenSEO.Panel.status['robots-exists'] = 'pass';
      
    } else {
    
      SenSEO.Panel.status['robots-exists'] = 'fail';
      
    }
    
    SenSEO.Panel.found.robots = SenSEO.Panel.status['robots-exists'] === 'pass' ? true : false;
    
    SenSEO.Panel.grade.robots = SenSEO.Panel.calculateGrade([SenSEO.Panel.status['robots-exists']]);
    
    sitemapFile = SenSEO.Panel.activeDocumentComponents['sitemap-file'];
    
    if (sitemapFile && sitemapFile.data.indexOf('>n/a<') < 0) {
    
      SenSEO.Panel.status['sitemap-exists'] = 'pass';
      
    } else {
    
      SenSEO.Panel.status['sitemap-exists'] = 'fail';
      
    }
    
    SenSEO.Panel.found.sitemap = SenSEO.Panel.status['sitemap-exists'] === 'pass' ? true : false;
    
    SenSEO.Panel.grade.sitemap = SenSEO.Panel.calculateGrade([SenSEO.Panel.status['sitemap-exists']]);
    
    h1Data = SenSEO.Panel.activeDocumentComponents['headline-1'];
    h2Data = SenSEO.Panel.activeDocumentComponents['headline-2'];
    h3Data = SenSEO.Panel.activeDocumentComponents['headline-3'];
    h4Data = SenSEO.Panel.activeDocumentComponents['headline-4'];
    h5Data = SenSEO.Panel.activeDocumentComponents['headline-5'];
    h6Data = SenSEO.Panel.activeDocumentComponents['headline-6'];
    
    SenSEO.Panel.found.headlines = h1Data || h2Data || h3Data || h4Data || h5Data || h6Data ? true : false;
    
    if (h1Data.missing && h2Data.missing && h3Data.missing && h4Data.missing && h5Data.missing && h6Data.missing) {
    
      SenSEO.Panel.status['headlines-structure'] = 'fail';
      
    } else {
    
      SenSEO.Panel.status['headlines-structure'] = 'pass';
      
    }

    if (!h1Data.missing && h1Data.data.length === 1) {
    
      SenSEO.Panel.status['headlines-onetime'] = 'pass';
      
    } else {
    
      SenSEO.Panel.status['headlines-onetime'] = 'fail';
      
    }

    if (!h1Data.missing && SenSEO.Panel.includesAllKeywords(h1Data.data[0], keywords)) {
    
      SenSEO.Panel.status['headlines-includes'] = 'pass';
      
    } else if (!h1Data.missing && SenSEO.Panel.includesSomeKeywords(h1Data.data[0], keywords)) {
    
      SenSEO.Panel.status['headlines-includes'] = 'warning';
      
    } else {
    
      SenSEO.Panel.status['headlines-includes'] = 'fail';
      
    }
    
    if (!h2Data.missing && !h3Data.missing && h2Data.data.length >= 1 && h3Data.data.length >= 1) {
    
      SenSEO.Panel.status['headlines-other'] = 'pass';
      
    } else if ((!h2Data.missing && h2Data.data.length >= 1) || (!h3Data.missing && h3Data.data.length >= 1)) {
    
      SenSEO.Panel.status['headlines-other'] = 'warning';
      
    } else {
    
      SenSEO.Panel.status['headlines-other'] = 'fail';
      
    }

    SenSEO.Panel.grade.headlines = SenSEO.Panel.calculateGrade([SenSEO.Panel.status['headlines-structure'], SenSEO.Panel.status['headlines-onetime'], SenSEO.Panel.status['headlines-includes'], SenSEO.Panel.status['headlines-other']]);

    SenSEO.Panel.found.content = SenSEO.Panel.activeDocumentComponents['body-text'] && SenSEO.Panel.activeDocumentComponents['body-text'] !== '' ? true : false;
    
    if (SenSEO.Panel.activeDocumentComponents['last-modified'].data.indexOf('>n/a<') < 0) {
    
      SenSEO.Panel.status['content-last-modified'] = 'pass';
      
    } else {
    
      SenSEO.Panel.status['content-last-modified'] = 'fail';
    
    }
    
    if (SenSEO.Panel.activeDocumentComponents['img-without-alt'].data === 0) {
    
      altImagesGrade = 100;
      
    } else {
    
      altImagesGrade = SenSEO.Panel.activeDocumentComponents['img-without-alt'].data / SenSEO.Panel.activeDocumentComponents['img-alt'].data.length * 100;
    
    }
    
    if (altImagesGrade > 90) {
    
      SenSEO.Panel.status['content-alt'] = 'pass';
      
    } else if (altImagesGrade > 80) {
    
      SenSEO.Panel.status['content-alt'] = 'warning';
      
    } else {
    
      SenSEO.Panel.status['content-alt'] = 'fail';
      
    }
    
    if (SenSEO.Panel.activeDocumentComponents['facebook-like-button'].data !== 'n/a' && SenSEO.Panel.activeDocumentComponents['plus-one-button'].data !== 'n/a' && SenSEO.Panel.activeDocumentComponents['twitter-button'].data !== 'n/a') {
    
      SenSEO.Panel.status['content-social-media'] = 'pass';
      
    } else {
    
      if (SenSEO.Panel.activeDocumentComponents['facebook-like-button'].data !== 'n/a' || SenSEO.Panel.activeDocumentComponents['plus-one-button'].data !== 'n/a' || SenSEO.Panel.activeDocumentComponents['twitter-button'].data !== 'n/a') {
    
        SenSEO.Panel.status['content-social-media'] = 'warning';
      
      } else {
      
        SenSEO.Panel.status['content-social-media'] = 'fail';
        
      }
    
    }
    
    if (SenSEO.Panel.activeDocumentComponents['keyword-matches'].data >= 2 && SenSEO.Panel.activeDocumentComponents['keyword-matches'].data <= 50) {
    
      SenSEO.Panel.status['content-keywords'] = 'pass';
      
    } else {
    
      if (SenSEO.Panel.activeDocumentComponents['keyword-matches'].data === 1 || SenSEO.Panel.activeDocumentComponents['keyword-matches'] > 50) {
    
        SenSEO.Panel.status['content-keywords'] = 'warning';
      
      } else {
      
        SenSEO.Panel.status['content-keywords'] = 'fail';
        
      }
    
    }
    
    if (SenSEO.Panel.activeDocumentComponents['number-links'].data < 80) {
    
      SenSEO.Panel.status['content-links'] = 'pass';
      
    } else if (SenSEO.Panel.activeDocumentComponents['number-links'].data < 100) {
    
      SenSEO.Panel.status['content-links'] = 'warning';
      
    } else {
    
      SenSEO.Panel.status['content-links'] = 'fail';
      
    }

    pageLoadTime = parseInt(SenSEO.Panel.activeDocumentComponents['page-load-time'], 10);
    
    if (!pageLoadTime || pageLoadTime <= 0) {
    
      SenSEO.Panel.status['content-load-time'] = 'neutral';
      
    } else if (pageLoadTime < 2000) {
    
      SenSEO.Panel.status['content-load-time'] = 'pass';
      
    } else if (pageLoadTime < 3000) {
    
      SenSEO.Panel.status['content-load-time'] = 'warning';
      
    } else {
    
      SenSEO.Panel.status['content-load-time'] = 'fail';
      
    }
    
    if (SenSEO.Panel.activeDocumentComponents['microdata-found'].data !== 'n/a') {
    
      SenSEO.Panel.status['content-microdata'] = 'pass';
      
    } else {
    
      SenSEO.Panel.status['content-microdata'] = 'fail';
      
    }
    
    if (SenSEO.Panel.activeDocumentComponents['validation-result'].data.toLowerCase().indexOf('passed') >= 0) {
    
      // result starts with valid
    
      SenSEO.Panel.status['content-validation'] = 'pass';
      
    } else if (SenSEO.Panel.activeDocumentComponents['validation-result'].data.toLowerCase().indexOf('0 errors') >= 0) {
    
      // result contains no errors but is invalid
    
      SenSEO.Panel.status['content-validation'] = 'warning';
      
    } else {
    
      // result contains errors and is invalid
    
      SenSEO.Panel.status['content-validation'] = 'fail';
      
    }
    
    SenSEO.Panel.grade.content = SenSEO.Panel.calculateGrade([SenSEO.Panel.status['content-last-modified'], SenSEO.Panel.status['content-alt'], SenSEO.Panel.status['content-social-media'], SenSEO.Panel.status['content-keywords'], SenSEO.Panel.status['content-links'], SenSEO.Panel.status['content-load-time'], SenSEO.Panel.status['content-validation'], SenSEO.Panel.status['content-microdata']]);
    
    SenSEO.Panel.found.host = SenSEO.Panel.activeDocumentComponents['location-hostname'].data ? true : false;
    
    hostData = SenSEO.Panel.activeDocumentComponents['location-hostname'].data;
    
    domainAge = parseInt((new Date()).getFullYear(), 10) - parseInt(SenSEO.Panel.activeDocumentComponents['domain-age'].data.split(' ')[2], 10);
    
    domainKeywords = keywords;
    
    if (hostData && SenSEO.Panel.includesAllKeywords(hostData, domainKeywords)) {
    
      SenSEO.Panel.status['host-includes'] = 'pass';
      
    } else if (hostData && SenSEO.Panel.includesSomeKeywords(hostData, domainKeywords)) {
    
      SenSEO.Panel.status['host-includes'] = 'warning';
      
    } else {
    
      SenSEO.Panel.status['host-includes'] = 'fail';
      
    }
    
    if (hostData.match(/xn--/)) {
    
      SenSEO.Panel.status['host-idn'] = 'fail';
      
    } else {
    
      SenSEO.Panel.status['host-idn'] = 'pass';
      
    }
    
    if (hostData.match(/_/)) {
    
      SenSEO.Panel.status['host-hyphen'] = 'fail';
      
    } else {
    
      SenSEO.Panel.status['host-hyphen'] = 'pass';
      
    }
    
    if (domainAge >= 2) {
    
      SenSEO.Panel.status['host-age'] = 'pass';
      
    } else if (domainAge >= 1) {
    
      SenSEO.Panel.status['host-age'] = 'warning';
      
    } else {
    
      SenSEO.Panel.status['host-age'] = 'fail';
      
    }
    
    SenSEO.Panel.grade.host = SenSEO.Panel.calculateGrade([SenSEO.Panel.status['host-includes'], SenSEO.Panel.status['host-idn'], SenSEO.Panel.status['host-hyphen'], SenSEO.Panel.status['host-age']]);
    
    SenSEO.Panel.found.path = SenSEO.Panel.activeDocumentComponents['path-name'].data ? true : false;
    
    pathData = SenSEO.Panel.activeDocumentComponents['path-name'].data;
    
    if (pathData && pathData.length <= 65) {
    
      SenSEO.Panel.status['path-length'] = 'pass';
      
    } else if (pathData && pathData.length <= 75) {
    
      SenSEO.Panel.status['path-length'] = 'warning';
      
    } else {
    
      SenSEO.Panel.status['path-length'] = 'fail';
      
    }

    if (SenSEO.Panel.activeDocumentComponents['url-params'].data && SenSEO.Panel.activeDocumentComponents['url-params'].data !== 'n/a') {
    
      SenSEO.Panel.status['path-dynparam'] = 'fail';
      
    } else {
    
      SenSEO.Panel.status['path-dynparam'] = 'pass';
      
    }
            
    if (pathData.match(/_/)) {
    
      SenSEO.Panel.status['path-hyphen'] = 'fail';
      
    } else {
    
      SenSEO.Panel.status['path-hyphen'] = 'pass';
      
    }
    
    if (pathData.toLowerCase() === pathData) {
    
      SenSEO.Panel.status['path-lowercase'] = 'pass';
      
    } else {
    
      SenSEO.Panel.status['path-lowercase'] = 'fail';
      
    }
    
    levels = 2;
    
    if (pathData.match(/^\//)) {
    
      levels += 1;
      
    }
    
    if (pathData.match(/\/$/)) {
    
      levels += 1;
      
    }
    
    if (pathData && pathData.match(/\//g).length > levels) {
    
      SenSEO.Panel.status['path-levels'] = 'fail';
      
    } else {
    
      SenSEO.Panel.status['path-levels'] = 'pass';
      
    }
    
    SenSEO.Panel.grade.path = SenSEO.Panel.calculateGrade([SenSEO.Panel.status['path-length'], SenSEO.Panel.status['path-dynparam'], SenSEO.Panel.status['path-hyphen'], SenSEO.Panel.status['path-lowercase'], SenSEO.Panel.status['path-levels']]);
    
    SenSEO.Panel.grade.weighted = SenSEO.Panel.calculateWeightedGrade([[SenSEO.Panel.grade.title[1], 3], [SenSEO.Panel.grade.description[1], 2], [SenSEO.Panel.grade.robots[1], 1], [SenSEO.Panel.grade.sitemap[1], 1], [SenSEO.Panel.grade.headlines[1], 2], [SenSEO.Panel.grade.content[1], 2], [SenSEO.Panel.grade.host[1], 2], [SenSEO.Panel.grade.path[1], 1]]);
    
  },
  
  generateInspectResultMarkup: function(id, grade, titleStrBundleKey, infoUrl, found, data, savedMode) {
  
    var notFound, key, html,
        criteriaList = '';
    
    notFound = found ? '' : $('<div>')
                            .append($('<span>')
                            .attr('class', 'error')
                            .text(' (' + SenSEO.StrBundle.getString('al.tt.NotFound') + ')').clone()).html();
    
    
    for (key in data) {
    
      if (data.hasOwnProperty(key)) {
      
        if (savedMode) {
      
          // no text for compare result
      
          criteriaList = criteriaList + $('<div>')
                                        .append($('<li>')
                                        .attr('class', data[key].status).clone()).html();
          
        } else {
      
          criteriaList = criteriaList + $('<div>')
                                        .append($('<li>')
                                        .attr('class', data[key].status)
                                        .text(SenSEO.StrBundle.getString(data[key].strBundleKey)).clone()).html();
          
        }
      
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
               .append(savedMode ? '<img src="img/floppy-disk.png">' : SenSEO.StrBundle.getString(titleStrBundleKey) + ' [' + SenSEO.StrBundle.getString('al.tt.MoreInfo') + ']')
               .append(notFound))
               .append($('<ul>')
               .append(criteriaList))).clone()).html();
           
    return html;
  
  },
  
  showSenSEOGrade: function() {

    if (SenSEO.Panel.grade.weighted) {
    
      SenSEO.Panel.inspectResultReady();
    
      $('#searchpug-grade').html(SenSEO.StrBundle.getString('al.tt.SenSEOGrade'));
    
      $('#inspect-keyword').html(SenSEO.Panel.keywordsString);
      
      $('#inspect-grade').html(SenSEO.Panel.grade.weighted[0] + ' (' + SenSEO.Panel.grade.weighted[1] + '/100)');
      
      // update twitter area
      
      $('#twitter-grade').html(SenSEO.Panel.grade.weighted[0]);
      
      $('#tweet-this').attr('href', 'http://twitter.com/home?status=' + encodeURIComponent('I got grade ' + SenSEO.Panel.grade.weighted[0] + ' (' + SenSEO.Panel.grade.weighted[1] + '/100) for optimizing my website with SenSEO Firefox extension http://goo.gl/d7dp'));
  
    } else {
    
      $('#inspect-result').addClass('hidden');
    
    }
    
  },
  
  showInspectResult: function() {
  
    $('#inspect-related').removeClass('hidden');
      
    var inspectResultsContainer = $('#inspect-results');
  
    inspectResultsContainer.removeClass('hidden');
  
    if (SenSEO.Panel.setting['color-blind']) {
    
      inspectResultsContainer.addClass('color-blind-friendly');
    
    } else {
    
      inspectResultsContainer.removeClass('color-blind-friendly');
    
    }
  
    inspectResultsContainer.find('.saved-mode-false').html(
  
        SenSEO.Panel.generateInspectResultsContainerMarkup() + $('<div>').append($('<div>')
                                                                .attr('class', 'legend')
                                                              .append($('<span>')
                                                                .attr('class', 'legend pass')
                                                                .text(SenSEO.StrBundle.getString('al.lg.Pass')))
                                                              .append($('<span>')
                                                                .attr('class', 'legend warning')
                                                                .text(SenSEO.StrBundle.getString('al.lg.Warning')))
                                                              .append($('<span>')
                                                                .attr('class', 'legend fail')
                                                                .text(SenSEO.StrBundle.getString('al.lg.Fail')))
                                                              .append($('<span>')
                                                                .attr('class', 'legend neutral')
                                                                .text(SenSEO.StrBundle.getString('al.lg.NotChecked'))).clone()).html()
                                                              
                              );
      
  },
  
  generateInspectResultsContainerMarkup: function(savedGrade, savedStatus) {
  
    var grade = savedGrade || SenSEO.Panel.grade,
        status = savedStatus || SenSEO.Panel.status,
        savedMode = savedGrade && savedStatus ? true : false;

    return SenSEO.Panel.generateInspectResultMarkup('title-found', grade.title[0], 'al.tt.UseTitleTag', 'http://sensational-seo.com/on-page-criteria.html#title', SenSEO.Panel.found.title, {
    
      1: {
        status: status['title-onetime'],
        strBundleKey: 'al.st.TitleOnetime'
      },
       
      2: {
        status: status['title-includes'],
        strBundleKey: 'al.st.TitleIncludes'
      },
       
      3: {
        status: status['title-length'],
        strBundleKey: 'al.st.TitleLength'
      },
       
      4: {
        status: status['title-words'],
        strBundleKey: 'al.st.TitleWords'
      }

    }, savedMode) +
    
    SenSEO.Panel.generateInspectResultMarkup('description', grade.description[0], 'al.tt.UseMetaDescription', 'http://sensational-seo.com/on-page-criteria.html#metadescription', SenSEO.Panel.found.description, {
    
      1: {
        status: status['description-onetime'],
        strBundleKey: 'al.st.DescriptionOnetime'
      },
       
      2: {
        status: status['description-includes'],
        strBundleKey: 'al.st.DescriptionIncludes'
      },
       
      3: {
        status: status['description-length'],
        strBundleKey: 'al.st.DescriptionLength'
      },
       
      4: {
        status: status['description-words'],
        strBundleKey: 'al.st.DescriptionWords'
      }

    }, savedMode) +
    
    SenSEO.Panel.generateInspectResultMarkup('robots', grade.robots[0], 'al.tt.UseMetaRobots', 'http://sensational-seo.com/on-page-criteria.html#robots', SenSEO.Panel.found.robots, {
    
      1: {
        status: status['robots-exists'],
        strBundleKey: 'al.st.MetaRobots'
      }
      
    }, savedMode) +
       
    SenSEO.Panel.generateInspectResultMarkup('sitemap', grade.sitemap[0], 'al.tt.UseSitemap', 'http://sensational-seo.com/on-page-criteria.html#robots', SenSEO.Panel.found.sitemap, {
    
      1: {
        status: status['sitemap-exists'],
        strBundleKey: 'al.st.Sitemap'
      }
      
    }, savedMode) +
    
    SenSEO.Panel.generateInspectResultMarkup('headlines', grade.headlines[0], 'al.tt.HeadlineTags', 'http://sensational-seo.com/on-page-criteria.html#headline', SenSEO.Panel.found.headlines, {
    
      1: {
        status: status['headlines-structure'],
        strBundleKey: 'al.st.HeadlinesStructure'
      },
       
      2: {
        status: status['headlines-onetime'],
        strBundleKey: 'al.st.HeadlinesOnetime'
      },
       
      3: {
        status: status['headlines-includes'],
        strBundleKey: 'al.st.HeadlinesInclude'
      },
       
      4: {
        status: status['headlines-other'],
        strBundleKey: 'al.st.HeadlinesOther'
      }

    }, savedMode) +
    
    SenSEO.Panel.generateInspectResultMarkup('content', grade.content[0], 'al.tt.PageContent', 'http://sensational-seo.com/on-page-criteria.html#pagecontent', SenSEO.Panel.found.content, {
    
      1: {
        status: 'neutral',
        strBundleKey: 'al.st.ContentUnique'
      },
       
      2: {
        status: 'neutral',
        strBundleKey: 'al.st.ContentDuplicate'
      },
      
      3: {
        status: status['content-last-modified'],
        strBundleKey: 'al.st.LastModifiedHeader'
      },
       
      4: {
        status: 'neutral',
        strBundleKey: 'al.st.ContentStyle'
      },
       
      5: {
        status: status['content-alt'],
        strBundleKey: 'al.st.ContentAlt'
      },
      
      6: {
        status: 'neutral',
        strBundleKey: 'al.st.ContentPictureQuality'
      },
      
      7: {
        status: 'neutral',
        strBundleKey: 'al.st.ContentForImages'
      },
      
      8: {
        status: status['content-social-media'],
        strBundleKey: 'al.st.ContentSocialMedia'
      },
       
      9: {
        status: status['content-keywords'],
        strBundleKey: 'al.st.ContentKeywords'
      },
       
      10: {
        status: status['content-links'],
        strBundleKey: 'al.st.ContentLinks'
      },
       
      11: {
        status: status['content-validation'],
        strBundleKey: 'al.st.CodeSemanticValid'
      },
       
      12: {
        status: status['content-load-time'],
        strBundleKey: 'al.st.FastPageLoad'
      },
       
      13: {
        status: status['content-microdata'],
        strBundleKey: 'al.st.Microdata'
      },
       
      14: {
        status: 'neutral',
        strBundleKey: 'al.st.CrossBrowser'
      }

    }, savedMode) +
    
    SenSEO.Panel.generateInspectResultMarkup('host', grade.host[0], 'al.tt.Domain', 'http://sensational-seo.com/on-page-criteria.html#domain', SenSEO.Panel.found.host, {
    
      1: {
        status: status['host-includes'],
        strBundleKey: 'al.st.HostIncludes'
      },
       
      2: {
        status: status['host-idn'],
        strBundleKey: 'al.st.HostIdn'
      },
       
      3: {
        status: status['host-hyphen'],
        strBundleKey: 'al.st.HostHyphen'
      },
       
      4: {
        status: status['host-age'],
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

    }, savedMode) +
    
    SenSEO.Panel.generateInspectResultMarkup('path', grade.path[0], 'al.tt.Path', 'http://sensational-seo.com/on-page-criteria.html#path', SenSEO.Panel.found.path, {
    
      1: {
        status: status['path-length'],
        strBundleKey: 'al.st.PathLength'
      },
       
      2: {
        status: status['path-dynparam'],
        strBundleKey: 'al.st.PathDynparam'
      },
       
      3: {
        status: status['path-hyphen'],
        strBundleKey: 'al.st.PathHyphen'
      },
       
      4: {
        status: status['path-lowercase'],
        strBundleKey: 'al.st.PathLowercase'
      },
       
      5: {
        status: status['path-levels'],
        strBundleKey: 'al.st.PathLevels'
      }

    }, savedMode);

  }
  
};

SenSEO.Panel.init();