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

    'al.st.TitleOnetime': 'Use this tag only one time.',
    'al.st.TitleIncludes': 'Title should include all keywords.',
    'al.st.TitleLength': 'Length should not be greater than 65 characters.',
    'al.st.TitleWords': 'Title should not contain more than 15 words.',

    'al.st.DescriptionOnetime': 'Use this tag only one time.',
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
    'al.st.HeadlinesOnetime': 'Use &lt;h1&gt; only one time.',
    'al.st.HeadlinesInclude': '&lt;h1&gt; should include all keywords.',
    'al.st.HeadlinesOther': 'Use &lt;h2&gt; and &lt;h3&gt; tags.',

    'al.st.ContentUnique': 'Offer unique content on your page.',
    'al.st.ContentDuplicate': 'Prevent duplicate content.',
    'al.st.ContentAlt': 'Images should always have alternative texts.',
    'al.st.ContentStyle': 'Write your content in a clear and natural style.',
    'al.st.ContentKeywords': 'Mention your keywords a few times.',
    'al.st.ContentLinks': 'Keep the links to a reasonable number (fewer than 100).',

    'al.st.HostIncludes': 'Domain should include all keywords.',
    'al.st.HostIdn': 'Don\'t use IDN domains (domains with special characters).',
    'al.st.HostHyphen': 'Use hyphens instead of underscores to seperate words.',
    'al.st.Host2Years': 'Your domain should be older than 2 years.',
    'al.st.HostSelf': 'Selfhost your domain to improve authority.',

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
  
  tabs: ['intro', 'inspect', 'components', 'settings'],
  
  keywordsString: '',
  
  keywords: '',

  requestKeyword: '',
  
  init: function() {

    self.on('message', function(activeDocumentComponents) {
    
      if (activeDocumentComponents.requestUrl) {
      
        WatchPug.Panel.updateRelatedKeywords(activeDocumentComponents.response);
      
      } else if (activeDocumentComponents.head === 'sitemap.xml') {

        WatchPug.Panel.activeDocumentComponents['sitemap-file'] = activeDocumentComponents;
      
      } else if (activeDocumentComponents.head === 'robots.txt') {
      
        WatchPug.Panel.activeDocumentComponents['robots-file'] = activeDocumentComponents;

      } else {

        // this should always be the first message when opening the panel
      
        WatchPug.Panel.activeDocumentComponents = activeDocumentComponents;
        
      }
      
      // got all data? => do keyword related actions
      
      if (WatchPug.Panel.activeDocumentComponents['sitemap-file'] && WatchPug.Panel.activeDocumentComponents['robots-file']) {
      
        WatchPug.Panel.getKeywordValue();
    
        WatchPug.Panel.getKeywordMatches();
    
        WatchPug.Panel.getKeywordDensity();
          
        // community wants last tab to be active when panel is reopened
        
        // check for updating active tab
        
        if (!$('#intro-container').hasClass('hidden')) {
        
          // at the moment do nothing when intro tab is active
        
        } else if (!$('#inspect-container').hasClass('hidden')) {
        
          WatchPug.Panel.handleInspectButton();
        
        } else if (!$('#components-container').hasClass('hidden')) {
        
          WatchPug.Panel.handleComponentsButton();
        
        } else if (!$('#settings-container').hasClass('hidden')) {
        
          WatchPug.Panel.handleSettingsButton();
        
        } else {

          // if all containers are hidden, panel is opened first time
        
          WatchPug.Panel.initPanel();
          
          WatchPug.Panel.initInputsAndButtons();
    
        }
        
      }
      
    });
  },
  
  getRelatedKeywords: function() {
  
    if (WatchPug.Panel.keywordsString !== '' && WatchPug.Panel.keywordsString !== WatchPug.Panel.requestKeyword) {
      
      WatchPug.Panel.requestKeyword = WatchPug.Panel.keywordsString;
      
      // show loading indicator until response is ready
      
      $('#related-keywords').html = '<img src="img/roller.gif">';
      
      self.postMessage({
      
        command: 'request-url',
        
        url: 'http://us.api.semrush.com/?action=report&type=phrase_related&key=89a72d6e1c56ce52a7eaf077907304e8&display_limit=10&export=api&export_columns=Ph&phrase=' + encodeURI(WatchPug.Panel.keywordsString)
        
      });
      
    }
      
  },

  updateRelatedKeywords: function(response) {
  
    var relatedKeywordsContainer = $('#related-keywords');

    if (relatedKeywordsContainer) {
    
      var relatedKeywordsArray = response.split('\n');
    
      var rHtml = '';
      
      for (var i = 1; i < relatedKeywordsArray.length - 1; i++) {
      
        var relatedKeyword = relatedKeywordsArray[i];
    
        if (relatedKeyword) {
    
          rHtml += '<em>' + relatedKeyword + '</em> ';
          
        }

      }
      
      if (!relatedKeywordsArray || relatedKeywordsArray.length == 1) {
      
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

    $('#keyword-input').blur(function(e) {
      
      WatchPug.Panel.hideSpeechBubble();
    
      $('#keyword-input').removeClass('required');
    
      WatchPug.Panel.getKeywordValue();
  
      WatchPug.Panel.getKeywordMatches();
  
      WatchPug.Panel.getKeywordDensity();
        
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
  
    $('#bug-button').click(function(e) {
        
      e.preventDefault();
      
      WatchPug.Panel.handleBugButton();
  
    });
  
    $('#settings-button').click(function(e) {
        
      e.preventDefault();
      
      WatchPug.Panel.handleSettingsButton();
  
    });
    
    $('#settings-colorblind').change(function(e) {
    
      WatchPug.Panel.handleColorBlindSettings(e.target.checked);
    
    });
  
  },
  
  getKeywordValue: function() {
  
    WatchPug.Panel.keywordsString = $('#keyword-input').val();
    
    WatchPug.Panel.keywords = WatchPug.Panel.keywordsString.split(" ");
    
  },
  
  handleInspectButton: function() {
  
    if (WatchPug.Panel.keywordsString !== '') {
  
      WatchPug.Panel.setActiveTab('inspect');
      
      WatchPug.Panel.getRelatedKeywords();
      
      WatchPug.Panel.analyzeForKeyword();
      
      WatchPug.Panel.showInspectResult();
  
    } else {
    
      $('#keyword-input').addClass('required');
      
      $('#keyword-input').focus();
    
      WatchPug.Panel.showSpeechBubble({top: 34, left: 5}, 'keyword(s) required');
    
    }
  
  },
  
  handleComponentsButton: function() {
  
    WatchPug.Panel.setActiveTab('components');
    
    WatchPug.Panel.renderComponentsTable('components-table', WatchPug.Panel.activeDocumentComponents);
  
  },
  
  handlePrintviewButton: function() {
  
    
  
  },
  
  handleHelpButton: function() {
  
    
  
  },
  
  handleBugButton: function() {
  
    self.postMessage({
    
      command: 'open-tab',
      
      url: 'http://getsatisfaction.com/senseo'
      
    });
  
  },
  
  handleSettingsButton: function() {
  
    WatchPug.Panel.setActiveTab('settings');
  
  },
  
  handleColorBlindSettings: function(checked) {
  
    WatchPug.Panel.setting['color-blind-friendly'] = checked;
  
    //WatchPug.Panel.saveSetting('color-blind-friendly', checked);
  
  },
  
  setActiveTab: function(tab) {
  
    var i;
  
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
  
  renderExtraInfo: function(container, info) {
  
    $('#' + container).html(info);
    
    alert(document.getElementById(container).innerHTML);
  
  },
  
  renderComponentsTable: function(componentsTable, components) {
    
    var i;
    
    var componentsTableBody = $('#' + componentsTable + ' tbody');
    
    // remove outdated table content
  
    componentsTableBody.empty();
  
    for (var key in components) {
    
      if (key === 'body-text') {
      
        components[key].data = WatchPug.Panel.encodeMarkup(components[key].data);
        
      }
    
      if (typeof(components[key].data) === 'string' || typeof(components[key].data) === 'number') {
      
        // one dataset
        
        componentsTableBody.append('<tr><th>' + components[key].head + '</th><td>' + components[key].data + '</td></tr>');
        
      } else {
      
        // multible datasets
        
        for (i = 0; i < components[key].head.length; i++) {
        
          componentsTableBody.append('<tr><th>' + components[key].head[i] + '</th><td>' + components[key].data[i] + '</td></tr>');
          
        }
      
      }
    
    }
    
    if ($('#go-to-testing-tool')) {
  
      $('#go-to-testing-tool').click(function(e) {
      
        e.preventDefault();
      
        self.postMessage({
        
          command: 'open-tab',
          
          url: e.target.href
          
        });
        
      });
    
    }
    
    if ($('#show-robots')) {
  
      $('#show-robots').click(function(e) {
      
        e.preventDefault();
      
        self.postMessage({
        
          command: 'open-tab',
          
          url: e.target.href
          
        });
        
      });
      
    }
  
    if ($('#show-sitemap')) {
  
      $('#show-sitemap').click(function(e) {
      
        self.postMessage({
        
          command: 'open-tab',
          
          url: e.target.href
          
        });
        
        e.preventDefault();
      
      });
      
    }
  
    var highlightHeadline = $('#' + componentsTable + ' tbody .highlight-headline');
  
    // later
    // var highlightMicroformats = $('#' + componentsTable + ' tbody .highlight');
  
    if (highlightHeadline.length) {
  
      var i;
      
      for (i = 0; i < highlightHeadline.length; i++) {
  
        $(highlightHeadline[i]).click(function(e) {
        
          // second class contains pointer to data object
        
          var targetClass = e.target.className;
          
          self.postMessage({
          
            command: 'highlight-element',
            
            highlightInfo: targetClass
            
          });
          
          e.preventDefault();
        
        });
        
      }
      
    }
  
    // later
    //var highlightMatches = $('#' + componentsTable + ' tbody .highlight-h1');
  
    var highlightImage = $('#' + componentsTable + ' tbody .highlight-image');

  },
  
  getKeywordMatches: function() {

    var bodyData = WatchPug.Panel.activeDocumentComponents['body-text'].data;
  
    var matches = 0;
    
    if (bodyData && WatchPug.Panel.keywords.length) {
    
      for (var i = 0; i < WatchPug.Panel.keywords.length; i++) {
      
        if (WatchPug.Panel.keywords[i] !== '') {
      
          var rx = new RegExp(WatchPug.Panel.keywords[i], 'gi');
          
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
  
      encodedMarkup.replace(/\</g, '&lt;').replace(/\>/g, '&gt;');
      
    }
    
    return encodedMarkup;
    
  },

  getKeywordDensity: function() {

    var bodyData = WatchPug.Panel.activeDocumentComponents['body-text'].data;
  
    if (WatchPug.Panel.activeDocumentComponents['keyword-matches']) {
  
      var keywordDensity = Math.round(WatchPug.Panel.activeDocumentComponents['keyword-matches'].data / WatchPug.Panel.activeDocumentComponents['number-words'].data * 100 * 100) / 100;
      
      WatchPug.Panel.activeDocumentComponents['keyword-density'] = {
        
        head: 'keyword density',
        
        data: keywordDensity
        
      };
      
    }
  
  },

  markKeywordMatches: function(text) {
  
    if (text && WatchPug.Panel.keywords.length) {
    
      for (var i = 0; i < WatchPug.Panel.keywords.length; i++) {
      
        if (WatchPug.Panel.keywords[i] !== '') {
      
          var rx = new RegExp(WatchPug.Panel.keywords[i], 'gi');
          
          if (text && text.replace && text.match(rx)) {
          
            text = text.replace(rx, '<span class="match">' + WatchPug.Panel.keywords[i] + '</span>');
            
          }
          
        }
        
      }
      
    }
    
    return text;
    
  },
  
  trimWhitespace: function(text) {

    text = text.replace(/^\s+/, '').replace(/\s+$/, '');
    
    return text;
    
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

  includesAllKeywords: function(text, keywords) {

    if (text && keywords) {
    
      for (var i = 0; i < keywords.length; i++) {
      
        var rx = new RegExp(WatchPug.Panel.trimWhitespace(keywords[i].replace(/^\W/g, ' ').replace(/\W$/g, ' ')), 'i');
        
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
      
        var rx = new RegExp(WatchPug.Panel.trimWhitespace(keywords[i].replace(/^\W/g, ' ').replace(/\W$/g, ' ')), 'i');
        
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
        
          index += 3;
          
        }
        
        if (grades[i] == 'warning') {
        
          index += 1;
          
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
  
  analyzeForKeyword: function() {
  
    var keywords = WatchPug.Panel.keywords;

    var titleData = WatchPug.Panel.activeDocumentComponents['title'].data;
    
    var titleCount = WatchPug.Panel.activeDocumentComponents['title'].count;
    
    WatchPug.Panel.found['title'] = titleData === 'n/a' ? false : true;
    
    if (titleCount && titleCount !== 1) {
    
      WatchPug.Panel.status['title-onetime'] = 'fail';
      
    } else {
    
      WatchPug.Panel.status['title-onetime'] = 'pass';
      
    }
    
    if (titleData && WatchPug.Panel.includesAllKeywords(titleData, keywords)) {
    
      WatchPug.Panel.status['title-includes'] = 'pass';
      
    } else if (titleData && WatchPug.Panel.includesSomeKeywords(titleData, keywords)) {
    
      WatchPug.Panel.status['title-includes'] = 'warning';
      
    } else {
    
      WatchPug.Panel.status['title-includes'] = 'fail';
      
    }
    
    if (titleData && titleData.length <= 65) {
    
      WatchPug.Panel.status['title-length'] = 'pass';
      
    } else if (titleData && titleData.length <= 75) {
    
      WatchPug.Panel.status['title-length'] = 'warning';
      
    } else {
    
      WatchPug.Panel.status['title-length'] = 'fail';
      
    }
    
    if (titleData && titleData.split(" ").length <= 15) {
    
      WatchPug.Panel.status['title-words'] = 'pass';
      
    } else if (titleData && titleData.split(" ").length <= 18) {
    
      WatchPug.Panel.status['title-words'] = 'warning';
      
    } else {
    
      WatchPug.Panel.status['title-words'] = 'fail';
      
    }
    
    WatchPug.Panel.grade['title'] = WatchPug.Panel.calculateGrade([WatchPug.Panel.status['title-onetime'], WatchPug.Panel.status['title-includes'], WatchPug.Panel.status['title-length'], WatchPug.Panel.status['title-words']]);
    
    var metaDescription = WatchPug.Panel.activeDocumentComponents['meta-description'];
    
    var descriptionData = WatchPug.Panel.activeDocumentComponents['meta-description'].data;
    
    WatchPug.Panel.found['description'] = descriptionData === 'n/a' ? false : true;
    
    if (metaDescription.count === 1) {
    
      WatchPug.Panel.status['description-onetime'] = 'pass';
      
    } else {
    
      WatchPug.Panel.status['description-onetime'] = 'fail';
      
    }
    
    if (metaDescription && WatchPug.Panel.includesAllKeywords(descriptionData, keywords)) {
    
      WatchPug.Panel.status['description-includes'] = 'pass';
      
    } else if (descriptionData && WatchPug.Panel.includesSomeKeywords(descriptionData, keywords)) {
    
      WatchPug.Panel.status['description-includes'] = 'warning';
      
    } else {
    
      WatchPug.Panel.status['description-includes'] = 'fail';
      
    }
    
    if (descriptionData && descriptionData.length <= 150) {
    
      WatchPug.Panel.status['description-length'] = 'pass';
      
    } else if (descriptionData && descriptionData.length <= 170) {
    
      WatchPug.Panel.status['description-length'] = 'warning';
      
    } else {
    
      WatchPug.Panel.status['description-length'] = 'fail';
      
    }
    
    if (descriptionData && descriptionData.split(" ").length <= 30) {
    
      WatchPug.Panel.status['description-words'] = 'pass';
      
    } else if (descriptionData && descriptionData.split(" ").length <= 35) {
    
      WatchPug.Panel.status['description-words'] = 'warning';
      
    } else {
    
      WatchPug.Panel.status['description-words'] = 'fail';
      
    }
    
    WatchPug.Panel.grade['description'] = WatchPug.Panel.calculateGrade([WatchPug.Panel.status['description-onetime'], WatchPug.Panel.status['description-includes'], WatchPug.Panel.status['description-length'], WatchPug.Panel.status['description-words']]);
    
    var robotsData = WatchPug.Panel.activeDocumentComponents['meta-robots'];
    
    var robotsFile = WatchPug.Panel.activeDocumentComponents['robots-file'];
    
    if ((robotsData && robotsData.data !== '') || (robotsFile && robotsFile.data !== 'n/a')) {
    
      WatchPug.Panel.status['robots'] = 'pass';
      
    } else {
    
      WatchPug.Panel.status['robots'] = 'fail';
      
    }
    
    WatchPug.Panel.found['robots'] = WatchPug.Panel.status['robots'] === 'pass' ? true : false;
    
    WatchPug.Panel.grade['robots'] = WatchPug.Panel.calculateGrade([WatchPug.Panel.status['robots']]);
    
    var sitemapFile = WatchPug.Panel.activeDocumentComponents['sitemap-file'];
    
    if (sitemapFile && sitemapFile.data !== 'n/a') {
    
      WatchPug.Panel.status['sitemap'] = 'pass';
      
    } else {
    
      WatchPug.Panel.status['sitemap'] = 'fail';
      
    }
    
    WatchPug.Panel.found['sitemap'] = WatchPug.Panel.status['sitemap'] === 'pass' ? true : false;
    
    WatchPug.Panel.grade['sitemap'] = WatchPug.Panel.calculateGrade([WatchPug.Panel.status['sitemap']]);
    
    var h1Data = WatchPug.Panel.activeDocumentComponents['headline-1'];
    var h2Data = WatchPug.Panel.activeDocumentComponents['headline-2'];
    var h3Data = WatchPug.Panel.activeDocumentComponents['headline-3'];
    var h4Data = WatchPug.Panel.activeDocumentComponents['headline-4'];
    var h5Data = WatchPug.Panel.activeDocumentComponents['headline-5'];
    var h6Data = WatchPug.Panel.activeDocumentComponents['headline-6'];
    
    WatchPug.Panel.found['headlines'] = h1Data || h2Data || h3Data || h4Data || h5Data || h6Data ? true : false;
    
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

    WatchPug.Panel.grade['headlines'] = WatchPug.Panel.calculateGrade([WatchPug.Panel.status['headlines-structure'], WatchPug.Panel.status['headlines-onetime'], WatchPug.Panel.status['headlines-includes'], WatchPug.Panel.status['headlines-other']]);

    WatchPug.Panel.found['content'] = WatchPug.Panel.activeDocumentComponents['body-text'] && WatchPug.Panel.activeDocumentComponents['body-text'] !== '' ? true : false;
    
    var altImagesGrade;
    
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
    
    if (WatchPug.Panel.activeDocumentComponents['page-load-time'].data < 2000) {
    
      WatchPug.Panel.status['content-load-time'] = 'pass';
      
    } else if (WatchPug.Panel.activeDocumentComponents['page-load-time'].data < 3000) {
    
      WatchPug.Panel.status['content-load-time'] = 'warning';
      
    } else {
    
      WatchPug.Panel.status['content-load-time'] = 'fail';
      
    }
    
    if (WatchPug.Panel.activeDocumentComponents['microdata'].data !== 'n/a') {
    
      WatchPug.Panel.status['content-microdata'] = 'pass';
      
    } else {
    
      WatchPug.Panel.status['content-microdata'] = 'fail';
      
    }
    
    WatchPug.Panel.grade['content'] = WatchPug.Panel.calculateGrade([WatchPug.Panel.status['content-alt'], WatchPug.Panel.status['content-keywords'], WatchPug.Panel.status['content-links'], WatchPug.Panel.status['content-load-time'], WatchPug.Panel.status['content-microdata']]);
    
    WatchPug.Panel.found['host'] = WatchPug.Panel.activeDocumentComponents['location-hostname'].data ? true : false;
    
    var hostData = WatchPug.Panel.activeDocumentComponents['location-hostname'].data;
    
    if (hostData && WatchPug.Panel.includesAllKeywords(hostData, keywords)) {
    
      WatchPug.Panel.status['host-includes'] = 'pass';
      
    } else if (hostData && WatchPug.Panel.includesSomeKeywords(hostData, keywords)) {
    
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
    
    WatchPug.Panel.grade['host'] = WatchPug.Panel.calculateGrade([WatchPug.Panel.status['host-includes'], WatchPug.Panel.status['host-idn'], WatchPug.Panel.status['host-hyphen']]);
    
    WatchPug.Panel.found['path'] = WatchPug.Panel.activeDocumentComponents['path-name'].data ? true : false;
    
    var pathData = WatchPug.Panel.activeDocumentComponents['path-name'].data;
    
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
    
    if (pathData.toLowerCase() == pathData) {
    
      WatchPug.Panel.status['path-lowercase'] = 'pass';
      
    } else {
    
      WatchPug.Panel.status['path-lowercase'] = 'fail';
      
    }
    
    var levels = 2;
    
    if (pathData.match(/^\//)) {
    
      levels++;
      
    }
    
    if (pathData.match(/\/$/)) {
    
      levels++;
      
    }
    
    if (pathData && pathData.match(/\//g).length > levels) {
    
      WatchPug.Panel.status['path-levels'] = 'fail';
      
    } else {
    
      WatchPug.Panel.status['path-levels'] = 'pass';
      
    }
    
    WatchPug.Panel.grade['path'] = WatchPug.Panel.calculateGrade([WatchPug.Panel.status['path-length'], WatchPug.Panel.status['path-dynparam'], WatchPug.Panel.status['path-hyphen'], WatchPug.Panel.status['path-lowercase'], WatchPug.Panel.status['path-levels']]);
    
    WatchPug.Panel.grade['weighted'] = WatchPug.Panel.calculateWeightedGrade([[WatchPug.Panel.grade['title'][1], 3], [WatchPug.Panel.grade['description'][1], 2], [WatchPug.Panel.grade['robots'][1], 1], [WatchPug.Panel.grade['sitemap'][1], 1], [WatchPug.Panel.grade['headlines'][1], 2], [WatchPug.Panel.grade['content'][1], 2], [WatchPug.Panel.grade['host'][1], 2], [WatchPug.Panel.grade['path'][1], 1]]);
    
  },
  
  generateInspectResultMarkup: function(id, grade, titleStrBundleKey, infoUrl, found, data) {
  
    var i;
  
    var notFound = found ? '' : '<span class="error"> (' + WatchPug.StrBundle.getString('al.tt.NotFound') + ')</span>';
  
    var criteriaList = '';
    
    for (var key in data) {
    
      criteriaList = criteriaList +
                     '<li class="' + data[key].status + '">' +
                     WatchPug.StrBundle.getString(data[key].strBundleKey) +
                     '</li>';
    
    }
  
    var html =
      '<article id="inspect-results-' + id + '">' + 
      ' <div class="grade ' + grade.toLowerCase() + '">' + 
        grade + 
      ' </div>' + 
      ' <div class="details">' + 
      '   <a href="' + infoUrl + '" target="blank">' + WatchPug.StrBundle.getString(titleStrBundleKey) + ' [' + WatchPug.StrBundle.getString('al.tt.MoreInfo') + ']</a>' +
        notFound +
      '   <ul>' + 
        criteriaList +
      '   </ul>' + 
      ' </div>' + 
      '</article>';
      
    return html;
  
  },
  
  showInspectResult: function() {
  
    if (WatchPug.Panel.grade['weighted']) {
    
      $('#inspect-result').removeClass('hidden');
  
      $('#searchpug-grade').html(WatchPug.StrBundle.getString('al.tt.WatchPugGrade'));
    
      $('#inspect-keyword').html(WatchPug.Panel.keywordsString);
      
      $('#inspect-grade').html(WatchPug.Panel.grade['weighted'][0] + ' (' + WatchPug.Panel.grade['weighted'][1] + '/100)');
      
      // update twitter area
      
      $('#twitter-grade').html(WatchPug.Panel.grade['weighted'][0]);
      
      $('#tweet-this').attr('href', 'http://twitter.com/home?status=' + encodeURI('I got grade ' + WatchPug.Panel.grade['weighted'][0] + ' (' + WatchPug.Panel.grade['weighted'][1] + '/100) for optimizing my website with SenSEO Firefox extension http://goo.gl/d7dp'));
      
    } else {
    
      $('#inspect-result').addClass('hidden');
    
    }
  
    var inspectResultsContainer = $('#inspect-results');
  
    if (WatchPug.Panel.setting['color-blind-friendly']) {
    
      inspectResultsContainer.addClass('color-blind-friendly');
    
    } else {
    
      inspectResultsContainer.removeClass('color-blind-friendly');
    
    }
  
    inspectResultsContainer.html(
  
      WatchPug.Panel.generateInspectResultMarkup('title', WatchPug.Panel.grade['title'][0], 'al.tt.UseTitleTag', 'http://sensational-seo.com/on-page-criteria.html#title', WatchPug.Panel.found['title'], {
      
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
      
      WatchPug.Panel.generateInspectResultMarkup('description', WatchPug.Panel.grade['description'][0], 'al.tt.UseMetaDescription', 'http://sensational-seo.com/on-page-criteria.html#metadescription', WatchPug.Panel.found['description'], {
      
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
      
      WatchPug.Panel.generateInspectResultMarkup('robots', WatchPug.Panel.grade['robots'][0], 'al.tt.UseMetaRobots', 'http://sensational-seo.com/on-page-criteria.html#robots', WatchPug.Panel.found['robots'], {
      
        1: {
          status: WatchPug.Panel.status['robots'],
          strBundleKey: 'al.st.MetaRobots'
        }
        
      }) +
         
      WatchPug.Panel.generateInspectResultMarkup('sitemap', WatchPug.Panel.grade['sitemap'][0], 'al.tt.UseSitemap', 'http://sensational-seo.com/on-page-criteria.html#robots', WatchPug.Panel.found['sitemap'], {
      
        1: {
          status: WatchPug.Panel.status['sitemap'],
          strBundleKey: 'al.st.Sitemap'
        }
         
      }) +
      
      WatchPug.Panel.generateInspectResultMarkup('headlines', WatchPug.Panel.grade['headlines'][0], 'al.tt.HeadlineTags', 'http://sensational-seo.com/on-page-criteria.html#headline', WatchPug.Panel.found['headlines'], {
      
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
      
      WatchPug.Panel.generateInspectResultMarkup('content', WatchPug.Panel.grade['content'][0], 'al.tt.PageContent', 'http://sensational-seo.com/on-page-criteria.html#pagecontent', WatchPug.Panel.found['content'], {
      
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
          status: WatchPug.Panel.status['content-keywords'],
          strBundleKey: 'al.st.ContentKeywords'
        },
         
        6: {
          status: WatchPug.Panel.status['content-links'],
          strBundleKey: 'al.st.ContentLinks'
        },
         
        7: {
          status: 'neutral',
          strBundleKey: 'al.st.CodeSemanticValid'
        },
         
        8: {
          status: WatchPug.Panel.status['content-load-time'],
          strBundleKey: 'al.st.FastPageLoad'
        },
         
        9: {
          status: WatchPug.Panel.status['content-microdata'],
          strBundleKey: 'al.st.Microdata'
        }

      }) +
      
      WatchPug.Panel.generateInspectResultMarkup('host', WatchPug.Panel.grade['host'][0], 'al.tt.Domain', 'http://sensational-seo.com/on-page-criteria.html#domain', WatchPug.Panel.found['host'], {
      
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
          status: 'neutral',
          strBundleKey: 'al.st.Host2Years'
        },
         
        5: {
          status: 'neutral',
          strBundleKey: 'al.st.HostSelf'
        }

      }) +
      
      WatchPug.Panel.generateInspectResultMarkup('path', WatchPug.Panel.grade['path'][0], 'al.tt.Path', 'http://sensational-seo.com/on-page-criteria.html#path', WatchPug.Panel.found['path'], {
      
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

      }) +
      
      '<div class="legend">' +
      '  <span class="legend pass">' + WatchPug.StrBundle.getString('al.lg.Pass') + '</span>' +
      '  <span class="legend warning">' + WatchPug.StrBundle.getString('al.lg.Warning') + '</span>' +
      '  <span class="legend fail">' + WatchPug.StrBundle.getString('al.lg.Fail') + '</span>' +
      '  <span class="legend neutral">' + WatchPug.StrBundle.getString('al.lg.NotChecked') + '</span>' +
      '</div>'
      
    );
    
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