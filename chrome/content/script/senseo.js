// init global SENSEO namespace
var SENSEO = SENSEO || {};

SENSEO = {

  getPrefValue: function(name) {

    const PrefService = Components.classes["@mozilla.org/preferences-service;1"];
    const nsIPrefBranch = Components.interfaces.nsIPrefBranch;
    const nsIPrefBranch2 = Components.interfaces.nsIPrefBranch2;
  	const prefs = PrefService.getService(nsIPrefBranch2);
  	const prefDomain = "extensions.senseo";

  	var prefName;
    
  	if ( name.indexOf("extensions.") !== -1 || name.indexOf("browser.") !== -1) {
    
  		prefName = name;
      
  	} else {
    
  		prefName = prefDomain + "." + name;
      
    }

  	var type = prefs.getPrefType(prefName);
    
  	if (type == nsIPrefBranch.PREF_STRING) {
  		return prefs.getCharPref(prefName);
  	} else if (type == nsIPrefBranch.PREF_INT) {
  		return prefs.getIntPref(prefName);
  	} else if (type == nsIPrefBranch.PREF_BOOL) {
  		return prefs.getBoolPref(prefName);
  	}
    
  },

  getPref: function(name) {

    var val = SENSEO.getPrefValue(name);
    
    return val;
      
  },

  setPref: function(name, value) {
  
    var nsIPrefBranch = Components.interfaces.nsIPrefBranch;
    var nsIPrefBranch2 = Components.interfaces.nsIPrefBranch2;
    var prefs = Components.classes["@mozilla.org/preferences-service;1"].getService(nsIPrefBranch2);

    var prefName;
    
    if ( name.indexOf("extensions.") !== -1) {
    
        prefName = name;
        
    } else {
    
        prefName = this.prefDomain + "." + name;
        
    }

    if (typeof value == "string") {
        prefs.setCharPref(prefName, value);
    } else if (typeof value == "number") {
        prefs.setIntPref(prefName, value);
    } else if (typeof value == "boolean") {
        prefs.setBoolPref(prefName, value);
    } else {
        prefs.setCharPref(prefName, value.toString());
    }
    
  }
  
};

FBL.ns(function() { with (FBL) {

  var panelName = 'senseo';
  
  Firebug.SenSEOModule = extend(Firebug.Module, {
  
    strbundle: document.getElementById('senseostrings'),
  
    showPanel: function(browser, panel) {
    
      // checks if SenSEO panel is active
      var isSenSEOPanel = panel && panel.name == panelName;
      
      // gets SenSEO buttons container
      var fbSenseoButtons = browser.chrome.$('fbSenseoButtons');
      
      // shows/hides SenSEO buttons (Inspect etc.) when SenSEO panel is active/inactive
      collapse(fbSenseoButtons, !isSenSEOPanel);
        
    },
    
    onClickLabel: function(event, ele) {
    
      if (event.button != 0) {
      
        return;
        
      } else {
      
        Firebug.toggleBar();
		
		var fbCtx = typeof FirebugContext !== 'undefined' ? FirebugContext : Firebug.currentContext;

        fbCtx.getPanel('senseo');
				
      }
      
    },
    
    getContributionHtml: function() {
    
      var cHtml = '';
    
      cHtml += '<div class="container">';
      cHtml += '<h2>Make a Contribution</h2>';
      cHtml += '<p>';
      cHtml += 'Are you satisfied with SenSEO? Are you using it regularely and want to help support its development?';
      cHtml += '</p>';
      cHtml += '<p>';
      cHtml += 'Take a minute and make a contribution.';
      cHtml += '</p>';
      cHtml += '<p class="contribute">';
      cHtml += '<a href="http://www.sensational-seo.com/contribute/9403?source=addon-detail&amp;type=suggested" target="_blank">Contribute $4.99</a> (Suggested)<br>';
      cHtml += '<a href="http://www.sensational-seo.com/contribute/9403?source=addon-detail" target="_blank">Contribute a Different Amount</a>';
      cHtml += '</p>';
      cHtml += '</div>';
      
      return cHtml;
      
    },
    
    getAnalyseHtml: function(senseoTextBoxValue) {
    
      var keywords = senseoTextBoxValue.split(" ");

      var status_title_onetime;
      var status_title_includes;
      var status_title_length;
      var status_title_words;
      
      var titleData = SENSEO.Utils.getTitleData(content.document);
      
      if (titleData.length != 1) {
        status_title_onetime = 'fail';
      } else {
        status_title_onetime = 'pass';
      }
      
      if (titleData[0] && SENSEO.Utils.includesAllKeywords(titleData[0], keywords)) {
        status_title_includes = 'pass';
      } else if (titleData[0] && SENSEO.Utils.includesSomeKeywords(titleData[0], keywords)) {
        status_title_includes = 'warning';
      } else {
        status_title_includes = 'fail';
      }
      
      if (titleData[0] && titleData[0].length <= 65) {
        status_title_length = 'pass';
      } else if (titleData[0] && titleData[0].length <= 75) {
        status_title_length = 'warning';
      } else {
        status_title_length = 'fail';
      }
      
      if (titleData[0] && titleData[0].split(" ").length <= 15) {
        status_title_words = 'pass';
      } else if (titleData[0] && titleData[0].split(" ").length <= 18) {
        status_title_words = 'warning';
      } else {
        status_title_words = 'fail';
      }
      
      var grade_title = SENSEO.Utils.calculateGrade([status_title_onetime, status_title_includes, status_title_length, status_title_words]);
      
      var status_description_onetime;
      var status_description_includes;
      var status_description_length;
      var status_description_words;
      
      var descriptionData = SENSEO.Utils.getMetaDescriptionData(content.document);
      
      if (descriptionData.length != 1) {
        status_description_onetime = 'fail';
      } else {
        status_description_onetime = 'pass';
      }
      
      if (descriptionData[0] && SENSEO.Utils.includesAllKeywords(descriptionData[0], keywords)) {
        status_description_includes = 'pass';
      } else if (descriptionData[0] && SENSEO.Utils.includesSomeKeywords(descriptionData[0], keywords)) {
        status_description_includes = 'warning';
      } else {
        status_description_includes = 'fail';
      }
      
      if (descriptionData[0] && descriptionData[0].length <= 150) {
        status_description_length = 'pass';
      } else if (descriptionData[0] && descriptionData[0].length <= 170) {
        status_description_length = 'warning';
      } else {
        status_description_length = 'fail';
      }
      
      if (descriptionData[0] && descriptionData[0].split(" ").length <= 30) {
        status_description_words = 'pass';
      } else if (descriptionData[0] && descriptionData[0].split(" ").length <= 35) {
        status_description_words = 'warning';
      } else {
        status_description_words = 'fail';
      }
      
      var grade_description = SENSEO.Utils.calculateGrade([status_description_onetime, status_description_includes, status_description_length, status_description_words]);
      
      var status_robots, status_sitemap;
      
      var robotsData = SENSEO.Utils.getMetaRobotsData(content.document);
      
      if ((robotsData[0] && robotsData[0] != '') || SENSEO.Utils.robotsTxtContent) {
        status_robots = 'pass';
      } else {
        status_robots = 'fail';
      }
      
      if (SENSEO.Utils.sitemapContent) {
        status_sitemap = 'pass';
      } else {
        status_sitemap = 'fail';
      }
      
      var grade_robots = SENSEO.Utils.calculateGrade([status_robots, status_sitemap]);
      
      var status_headlines_structure;
      var status_headlines_onetime;
      var status_headlines_include;
      var status_headlines_other;

      var h1Data = SENSEO.Utils.getHeadlineData(content.document, 1);
      var h2Data = SENSEO.Utils.getHeadlineData(content.document, 2);
      var h3Data = SENSEO.Utils.getHeadlineData(content.document, 3);
      var h4Data = SENSEO.Utils.getHeadlineData(content.document, 4);
      var h5Data = SENSEO.Utils.getHeadlineData(content.document, 5);
      var h6Data = SENSEO.Utils.getHeadlineData(content.document, 6);
      
      if (h1Data.length >= 1 || h2Data.length >= 1 || h3Data.length >= 1 || h4Data.length >= 1 || h5Data.length >= 1 || h6Data.length >= 1) {
        status_headlines_structure = 'pass';
      } else {
        status_headlines_structure = 'fail';
      }

      if (h1Data.length == 1) {
        status_headlines_onetime = 'pass';
      } else {
        status_headlines_onetime = 'fail';
      }

      if (h1Data[0] && SENSEO.Utils.includesAllKeywords(h1Data[0], keywords)) {
        status_headlines_include = 'pass';
      } else if (h1Data[0] && SENSEO.Utils.includesSomeKeywords(h1Data[0], keywords)) {
        status_headlines_include = 'warning';
      } else {
        status_headlines_include = 'fail';
      }
      
      if (h2Data.length >= 1 && h3Data.length >= 1) {
        status_headlines_other = 'pass';
      } else if (h2Data.length >= 1 || h3Data.length >= 1) {
        status_headlines_other = 'warning';
      } else {
        status_headlines_other = 'fail';
      }

      var grade_headlines = SENSEO.Utils.calculateGrade([status_headlines_structure, status_headlines_onetime, status_headlines_include, status_headlines_other]);

      var status_content_alt;
      var status_content_amount;
      var status_content_links;

      if (SENSEO.Utils.altImagesGrade(content.document) > 90 || SENSEO.Utils.altImagesGrade(content.document) == 0) {
        status_content_alt = 'pass';
      } else if (SENSEO.Utils.altImagesGrade(content.document) > 80) {
        status_content_alt = 'warning';
      } else {
        status_content_alt = 'fail';
      }
      
      var bodyData = SENSEO.Utils.getBodyData(content.document);
      
      if (SENSEO.Utils.getKeywordMatches(bodyData, keywords) >= 2 && SENSEO.Utils.getKeywordMatches(bodyData, keywords) <= 50) {
        status_content_amount = 'pass';
      } else if (SENSEO.Utils.getKeywordMatches(bodyData, keywords) == 1 || SENSEO.Utils.getKeywordMatches(bodyData, keywords) > 50) {
        status_content_amount = 'warning';
      } else {
        status_content_amount = 'fail';
      }
      
      if (SENSEO.Utils.numberOfLinks(content.document) < 80) {
        status_content_links = 'pass';
      } else if (SENSEO.Utils.numberOfLinks(content.document) < 100) {
        status_content_links = 'warning';
      } else {
        status_content_links = 'fail';
      }
      
      var grade_content = SENSEO.Utils.calculateGrade([status_content_alt, status_content_amount, status_content_links]);
      
      var status_host_includes;
      var status_host_idn;
      var status_host_hyphen;

      var hostData = SENSEO.Utils.getHostData();
      
      if (hostData && SENSEO.Utils.includesAllKeywords(hostData, keywords)) {
        status_host_includes = 'pass';
      } else if (hostData && SENSEO.Utils.includesSomeKeywords(hostData, keywords)) {
        status_host_includes = 'warning';
      } else {
        status_host_includes = 'fail';
      }
      
      if (hostData.match(/xn--/)) {
        status_host_idn = 'fail';
      } else {
        status_host_idn = 'pass';
      }
      
      if (hostData.match(/_/)) {
        status_host_hyphen = 'fail';
      } else {
        status_host_hyphen = 'pass';
      }
      
      var grade_host = SENSEO.Utils.calculateGrade([status_host_includes, status_host_idn, status_host_hyphen]);
      
      var status_path_length;
      var status_path_dynparam;
      var status_host_hyphen;
      var status_host_lowercase;
      var status_host_levels;

      var pathData = SENSEO.Utils.getPathData();
      
      if (pathData && pathData.length <= 65) {
        status_path_length = 'pass';
      } else if (pathData && pathData.length <= 75) {
        status_path_length = 'warning';
      } else {
        status_path_length = 'fail';
      }

      if (content.window.location.search && content.window.location.search != '') {
        status_path_dynparam = 'fail';
      } else {
        status_path_dynparam = 'pass';
      }
              
      if (pathData.match(/_/)) {
        status_path_hyphen = 'fail';
      } else {
        status_path_hyphen = 'pass';
      }
      
      if (pathData.toLowerCase() == pathData) {
        status_path_lowercase = 'pass';
      } else {
        status_path_lowercase = 'fail';
      }
      
      var levels = 2;
      
      if (pathData.match(/^\//)) {
        levels++;
      }
      
      if (pathData.match(/\/$/)) {
        levels++;
      }
      
      if (pathData && pathData.match(/\//g).length > levels) {
        status_path_levels = 'fail';
      } else {
        status_path_levels = 'pass';
      }
      
      var grade_path = SENSEO.Utils.calculateGrade([status_path_length, status_path_dynparam, status_path_hyphen, status_path_lowercase, status_path_levels]);
      
      var grade_weighted = SENSEO.Utils.calculateWeightedGrade([[grade_title[1], 3], [grade_description[1], 2], [grade_robots[1], 1], [grade_headlines[1], 2], [grade_content[1], 2], [grade_host[1], 2], [grade_path[1], 1]]);

      SENSEO.grade = grade_weighted[1];
      
      var sHtml = '<h1 class="inspect"><span id="grade-container">' + this.strbundle.getString('al.tt.SenseoGrade') + ' \'' + senseoTextBoxValue + '\': <strong id="senseo-grade">' + grade_weighted[0] + ' (' + grade_weighted[1] + '/100)</strong></span> <span id="twitter-container"><img src="chrome://senseo/content/img/twitter-icon.png" class="icon"> <span id="twitter-grade-a">I got grade A (<span id="twitter-grade"></span>/100) for optimizing my site with SenSEO Firefox extension http://goo.gl/d7dp</span> <a href="http://twitter.com/home" target="_blank" id="tweet-this">Tweet this!</a></span><span id="flattr-container"><a href="https://flattr.com/thing/131532/SenSEO-Firefox-Extension" target="_blank"><img src="chrome://senseo/content/img/flattr-badge.png" alt="Click to flattr"></a></span></h1>' + 
                  '<span class="related-keywords">' +
                  this.strbundle.getString('rk.RelatedKeywords') + ': <span id="related-keywords"><img src="chrome://senseo/content/img/roller.gif"></span>' +
                  '</span>';

      sHtml += '<div class="result grade-' + grade_title[0].toLowerCase() + '">';
      sHtml += '<h2>' + grade_title[0] + '</h2>';
      sHtml += '<div class="right">';
      sHtml += '<h3><a href="http://sensational-seo.com/on-page-criteria.html#title" target="blank">' + this.strbundle.getString('al.tt.UseTitleTag') + ' <span class="moreinfo">[' + this.strbundle.getString('al.tt.MoreInfo') + ']</span></a>';
      if (typeof titleData[0] == 'undefined') { sHtml += '<span class="error">(' + this.strbundle.getString('al.tt.NotFound') + ')</span>'; }
      sHtml += '</h3><ul>';
      sHtml += '<li class="' + status_title_onetime + '">' + this.strbundle.getString('al.st.TitleOnetime') + '</li>';
      sHtml += '<li class="' + status_title_includes + '">' + this.strbundle.getString('al.st.TitleIncludes') + '</li>';
      sHtml += '<li class="' + status_title_length + '">' + this.strbundle.getString('al.st.TitleLength') + '</li>';
      sHtml += '<li class="' + status_title_words + '">' + this.strbundle.getString('al.st.TitleWords') + '</li>';
      sHtml += '</ul>';
      sHtml += '</div>';
      sHtml += '</div>';
      sHtml += '<div class="result grade-' + grade_description[0].toLowerCase() + '">';
      sHtml += '<h2>' + grade_description[0] + '</h2>';
      sHtml += '<div class="right">';
      sHtml += '<h3><a href="http://sensational-seo.com/on-page-criteria.html#metadescription" target="blank">' + this.strbundle.getString('al.tt.UseMetaDescription') + ' <span class="moreinfo">[' + this.strbundle.getString('al.tt.MoreInfo') + ']</span></a>';
      if (typeof descriptionData[0] == 'undefined') { sHtml += '<span class="error">(' + this.strbundle.getString('al.tt.NotFound') + ')</span>'; }
      sHtml += '</h3><ul>';
      sHtml += '<li class="' + status_description_onetime + '">' + this.strbundle.getString('al.st.DescriptionOnetime') + '</li>';
      sHtml += '<li class="' + status_description_includes + '">' + this.strbundle.getString('al.st.DescriptionIncludes') + '</li>';
      sHtml += '<li class="' + status_description_length + '">' + this.strbundle.getString('al.st.DescriptionLength') + '</li>';
      sHtml += '<li class="' + status_description_words + '">' + this.strbundle.getString('al.st.DescriptionWords') + '</li>';
      sHtml += '</ul>';
      sHtml += '</div>';
      sHtml += '</div>';
      sHtml += '<div class="result grade-' + grade_robots[0].toLowerCase() + '">';
      sHtml += '<h2>' + grade_robots[0] + '</h2>';
      sHtml += '<div class="right">';
      sHtml += '<h3><a href="http://sensational-seo.com/on-page-criteria.html#robots" target="blank">' + this.strbundle.getString('al.tt.UseMetaRobots') + ' <span class="moreinfo">[' + this.strbundle.getString('al.tt.MoreInfo') + ']</span></a>';
      if (typeof robotsData[0] == 'undefined') { sHtml += '<span class="error">(' + this.strbundle.getString('al.tt.NotFound') + ')</span>'; }
      sHtml += '</h3><ul>';
      sHtml += '<li class="' + status_robots + '">' + this.strbundle.getString('al.st.MetaRobots') + '</li>';
      sHtml += '<li class="' + status_sitemap + '">' + this.strbundle.getString('al.st.Sitemap') + '</li>';
      sHtml += '</ul>';
      sHtml += '</div>';
      sHtml += '</div>';
      sHtml += '<div class="result grade-' + grade_headlines[0].toLowerCase() + '">';
      sHtml += '<h2>' + grade_headlines[0] + '</h2>';
      sHtml += '<div class="right">';
      sHtml += '<h3><a href="http://sensational-seo.com/on-page-criteria.html#headline" target="blank">' + this.strbundle.getString('al.tt.HeadlineTags') + ' <span class="moreinfo">[' + this.strbundle.getString('al.tt.MoreInfo') + ']</span></a></h3>';
      sHtml += '<ul>';
      sHtml += '<li class="' + status_headlines_structure + '">' + this.strbundle.getString('al.st.HeadlinesStructure') + '</li>';
      sHtml += '<li class="' + status_headlines_onetime + '">' + this.strbundle.getString('al.st.HeadlinesOnetime') + '</li>';
      sHtml += '<li class="' + status_headlines_include + '">' + this.strbundle.getString('al.st.HeadlinesInclude') + '</li>';
      sHtml += '<li class="' + status_headlines_other + '">' + this.strbundle.getString('al.st.HeadlinesOther') + '</li>';
      sHtml += '</ul>';
      sHtml += '</div>';
      sHtml += '</div>';
      sHtml += '<div class="result grade-' + grade_content[0].toLowerCase() + '">';
      sHtml += '<h2>' + grade_content[0] + '</h2>';
      sHtml += '<div class="right">';
      sHtml += '<h3><a href="http://sensational-seo.com/on-page-criteria.html#pagecontent" target="blank">' + this.strbundle.getString('al.tt.PageContent') + ' <span class="moreinfo">[' + this.strbundle.getString('al.tt.MoreInfo') + ']</span></a></h3>';
      sHtml += '<ul>';
      sHtml += '<li class="neutral">' + this.strbundle.getString('al.st.ContentUnique') + '</li>';
      sHtml += '<li class="neutral">' + this.strbundle.getString('al.st.ContentDuplicate') + '</li>';
      sHtml += '<li class="neutral">' + this.strbundle.getString('al.st.ContentStyle') + '</li>';
      sHtml += '<li class="' + status_content_alt + '">' + this.strbundle.getString('al.st.ContentAlt') + '</li>';
      sHtml += '<li class="' + status_content_amount + '">' + this.strbundle.getString('al.st.ContentKeywords') + '</li>';
      sHtml += '<li class="' + status_content_links + '">' + this.strbundle.getString('al.st.ContentLinks') + '</li>';
      sHtml += '<li class="neutral">' + this.strbundle.getString('al.tt.CodeSemanticValid') + '</li>';
      sHtml += '<li class="neutral">' + this.strbundle.getString('al.tt.FastPageLoad') + '</li>';
      sHtml += '<li class="neutral">' + this.strbundle.getString('al.tt.Microformats') + '</li>';
      sHtml += '</ul>';
      sHtml += '</div>';
      sHtml += '</div>';
      sHtml += '<div class="result grade-' + grade_host[0].toLowerCase() + '">';
      sHtml += '<h2>' + grade_host[0] + '</h2>';
      sHtml += '<div class="right">';
      sHtml += '<h3><a href="http://sensational-seo.com/on-page-criteria.html#domain" target="blank">' + this.strbundle.getString('al.tt.Domain') + ' (' + hostData + ') <span class="moreinfo">[' + this.strbundle.getString('al.tt.MoreInfo') + ']</span></a></h3>';
      sHtml += '<ul>';
      sHtml += '<li class="' + status_host_includes + '">' + this.strbundle.getString('al.st.HostIncludes') + '</li>';
      sHtml += '<li class="' + status_host_idn + '">' + this.strbundle.getString('al.st.HostIdn') + '</li>';
      sHtml += '<li class="' + status_host_hyphen + '">' + this.strbundle.getString('al.st.HostHyphen') + '</li>';
      sHtml += '<li class="neutral">' + this.strbundle.getString('al.st.Host2Years') + '</li>';
      sHtml += '<li class="neutral">' + this.strbundle.getString('al.st.HostSelf') + '</li>';
      sHtml += '</ul>';
      sHtml += '</div>';
      sHtml += '</div>';
      sHtml += '<div class="result grade-' + grade_path[0].toLowerCase() + '">';
      sHtml += '<h2>' + grade_path[0] + '</h2>';
      sHtml += '<div class="right">';
      sHtml += '<h3><a href="http://sensational-seo.com/on-page-criteria.html#path" target="blank">' + this.strbundle.getString('al.tt.Path') + ' (' + pathData + ') <span class="moreinfo">[' + this.strbundle.getString('al.tt.MoreInfo') + ']</span></a></h3>';
      sHtml += '<ul>';
      sHtml += '<li class="' + status_path_length + '">' + this.strbundle.getString('al.st.PathLength') + '</li>';
      sHtml += '<li class="' + status_path_dynparam + '">' + this.strbundle.getString('al.st.PathDynparam') + '</li>';
      sHtml += '<li class="' + status_path_hyphen + '">' + this.strbundle.getString('al.st.PathHyphen') + '</li>';
      sHtml += '<li class="' + status_path_lowercase + '">' + this.strbundle.getString('al.st.PathLowercase') + '</li>';
      sHtml += '<li class="' + status_path_levels + '">' + this.strbundle.getString('al.st.PathLevels') + '</li>';
      sHtml += '</ul>';
      sHtml += '</div>';
      sHtml += '</div>';
      sHtml += '<div class="legend">';
      sHtml += '<span class="legend pass">' + this.strbundle.getString('al.lg.Pass') + '</span>';
      sHtml += '<span class="legend warning">' + this.strbundle.getString('al.lg.Warning') + '</span>';
      sHtml += '<span class="legend fail">' + this.strbundle.getString('al.lg.Fail') + '</span>';
      sHtml += '<span class="legend neutral">' + this.strbundle.getString('al.lg.NotChecked') + '</span>';
      sHtml += '</div>';
      
      return sHtml;
      
    },
        
    getComponentsHtml: function(senseoTextBoxValue) {
    
      var keywords = senseoTextBoxValue.split(" ");
      var sHtml = '<table border="0" cellpadding="0" cellspacing="0">';
      sHtml += '<tbody>';

      var titleData = SENSEO.Utils.getTitleData(content.document);
      
      if (!titleData[0]) {
        sHtml += '<tr><th>' + this.strbundle.getString('sc.Title') + '</th><td><span class="failed">n/a</span></td></tr>';
      } else {
        for (var i = 0; i < titleData.length; i++) {
          sHtml += '<tr><th>' + this.strbundle.getString('sc.Title') + '</th><td>' + SENSEO.Utils.markKeywordMatches(titleData[i], keywords) + '</td></tr>';
        }
      }
      
      var metaDescriptionData = SENSEO.Utils.getMetaDescriptionData(content.document);
      
      if (!metaDescriptionData.length) {
        sHtml += '<tr><th>' + this.strbundle.getString('sc.MetaDescription') + '</th><td><span class="failed">n/a</span></td></tr>';
      } else {
        for (var i = 0; i < metaDescriptionData.length; i++) {
          sHtml += '<tr><th>' + this.strbundle.getString('sc.MetaDescription') + '</th><td>' + SENSEO.Utils.markKeywordMatches(metaDescriptionData[i], keywords) + '</td></tr>';
        }
      }
      
      var metaKeywordsData = SENSEO.Utils.getMetaKeywordsData(content.document);
      
      if (!metaKeywordsData.length) {
        sHtml += '<tr><th>' + this.strbundle.getString('sc.MetaKeywords') + '</th><td><span class="failed">n/a</span></td></tr>';
      } else {
        for (var i = 0; i < metaKeywordsData.length; i++) {
          sHtml += '<tr><th>' + this.strbundle.getString('sc.MetaKeywords') + '</th><td>' + SENSEO.Utils.markKeywordMatches(metaKeywordsData[i], keywords) + '</td></tr>';
        }
      }

      var metaRobotsData = SENSEO.Utils.getMetaRobotsData(content.document);
      
      if (!metaRobotsData.length) {
        sHtml += '<tr><th>' + this.strbundle.getString('sc.MetaRobots') + '</th><td><span class="failed">n/a</span></td></tr>';
      } else {
        for (var i = 0; i < metaRobotsData.length; i++) {
          sHtml += '<tr><th>' + this.strbundle.getString('sc.MetaRobots') + '</th><td>' + SENSEO.Utils.encodeMarkup(metaRobotsData[i]) + '</td></tr>';
        }
      }

      if (!SENSEO.Utils.robotsTxtContent) {
        sHtml += '<tr><th>' + this.strbundle.getString('sc.RobotsTxt') + '</th><td><span class="failed">n/a</span></td></tr>';
      } else {
        sHtml += '<tr><th>' + this.strbundle.getString('sc.RobotsTxt') + '</th><td>' + SENSEO.Utils.encodeMarkup(SENSEO.Utils.robotsTxtContent) + '</td></tr>';
      }

      if (!SENSEO.Utils.sitemapContent) {
        sHtml += '<tr><th>' + this.strbundle.getString('sc.SitemapXml') + '</th><td><span class="failed">n/a</span></td></tr>';
      } else {
        sHtml += '<tr><th>' + this.strbundle.getString('sc.SitemapXml') + '</th><td><span class="match">found</span></td></td></tr>';
      }

      for (var i = 0; i <= 6; i++) {
        var headlineData = SENSEO.Utils.getHeadlineData(content.document, i);
      
        for (var j = 0; j < headlineData.length; j++) {
          sHtml += '<tr><th>' + i + '. ' + this.strbundle.getString('sc.LevelHeadline') + '</th><td>' + SENSEO.Utils.markKeywordMatches(headlineData[j], keywords) + '</td></tr>';
        }
      }
      
      var imageAltData = SENSEO.Utils.getImageAltData(content.document, keywords);

      for (var i = 0; i < imageAltData.length; i++) {
        var imageName = imageAltData[i][0];
        if (imageName.length > 25) { imageName = imageName.substring(0, 25) + '...'; }
        sHtml += '<tr><th>' + this.strbundle.getString('sc.Image') + ' (' + imageName + ')</th><td>' + imageAltData[i][1] + '</td></tr>';
      }

      var numberOfLinks = SENSEO.Utils.numberOfLinks(content.document);
      
      sHtml += '<tr><th>' + this.strbundle.getString('sc.NumberOfLinks') + '</th><td>' + numberOfLinks + '</td></tr>';

      var hostData = SENSEO.Utils.getHostData();
      
      if (!hostData) {
        sHtml += '<tr><th>' + this.strbundle.getString('sc.LocationHost') + '</th><td><span class="failed">n/a</span></td></tr>';
      } else {
        sHtml += '<tr><th>' + this.strbundle.getString('sc.LocationHost') + '</th><td>' + SENSEO.Utils.markKeywordMatches(hostData, keywords) + '</td></tr>';
      }
      
      var pathData = SENSEO.Utils.getPathData();
      
      sHtml += '<tr><th>' + this.strbundle.getString('sc.LocationPath') + '</th><td>' + SENSEO.Utils.markKeywordMatches(pathData, keywords) + '</td></tr>';

      var bodyData = SENSEO.Utils.getBodyData(content.document);
      
      sHtml += '<tr><th>' + this.strbundle.getString('sc.VisibleContent') + '</th><td>' + SENSEO.Utils.markKeywordMatches(bodyData, keywords) + '</td></tr>';

      var textLength = SENSEO.Utils.getTextLength(bodyData);
      var keywordMatches = SENSEO.Utils.getKeywordMatches(bodyData, keywords);
      var keywordDensity = SENSEO.Utils.getKeywordDensity(bodyData, keywords);
	  
  	  var numberOfElements = SENSEO.Utils.numberOfElements(content.document);
  	  
  	  var elementsTextRatio = SENSEO.Utils.getElementWordRatio(textLength, numberOfElements);

      sHtml += '<tr><th>' + this.strbundle.getString('sc.TextLength') + '</th><td>' + textLength + '</td></tr>';

      sHtml += '<tr><th>' + this.strbundle.getString('sc.KeywordMatches') + '</th><td>' + keywordMatches + '</td></tr>';

      sHtml += '<tr><th>' + this.strbundle.getString('sc.KeywordDensity') + '</th><td>' + keywordDensity + '%</td></tr>';

      sHtml += '<tr><th>' + this.strbundle.getString('sc.NumberOfElements') + '</th><td>' + numberOfElements + '</td></tr>';

      sHtml += '<tr><th>' + this.strbundle.getString('sc.ElementsTextRation') + '</th><td>' + elementsTextRatio + '%</td></tr>';

      sHtml += '</tbody></table>';
      
      return sHtml;
      
    },
    
    checkForKeywords: function() {
    
      var senseoTextBox = Firebug.chrome.$("senseoTextBox");
      
      if (senseoTextBox.value == '') {
        
        document.getElementById('senseoTextBox').focus();
        
      }
      
    },

    showKeywordSuggestions: function(keywords) {
    
      if (SENSEO.Utils.trim(keywords) == this.precheckedKeywords && this.precheckedKeywordsArray) {
      
        this.updateRelatedKeywords(this.precheckedKeywordsArray);
      
      } else {
      
        this.precheckedKeywords = SENSEO.Utils.trim(keywords);
        
        var req = new XMLHttpRequest();
        
        req.open('GET', 'http://www.semrush.com/search.php?q=' + escape(SENSEO.Utils.trim(keywords)) + '+(related)&key=89a72d6e1c56ce52a7eaf077907304e8&attachment=false&db=' + this.strbundle.getString('rk.Language') + '&uip=12345', true);
        
        req.onreadystatechange = function(scope) {
        
          return function(aEvt) {
          
            if (req.readyState == 4) {
            
              if (req.status == 200) {
              
                var relatedKeywordsCSV = req.responseText;
              
                var relatedKeywordsArray = relatedKeywordsCSV.split('\n');
              
                scope.precheckedKeywordsArray = relatedKeywordsArray;
              
                scope.updateRelatedKeywords(relatedKeywordsArray);
              
              }
              
            }
            
          }
            
        }(this);
        
        req.send(null);
        
      }
      
    },
    
    updateRelatedKeywords: function(relatedKeywordsArray) {
    
      var relatedKeywordsBox = SENSEO.Panel.panelDocument.getElementById('related-keywords');

      if (relatedKeywordsBox) {
      
        var rHtml = '';
        
        for (var i = 1; i < relatedKeywordsArray.length - 1; i++) {
        
          var relatedKeyword = relatedKeywordsArray[i].split(';')[0];
      
          if (relatedKeyword) {
      
            rHtml += '<em>' + relatedKeyword + '</em> ';
            
          }

        }
        
        if (!relatedKeywordsArray || relatedKeywordsArray.length == 1) {
        
          rHtml += '<em>' + this.strbundle.getString('rk.NoKeywordMatches') + '</em> ';
        
        }
        
        rHtml += '<em><a href="http://semrush.com/?ref=127854755" target="blank">' + this.strbundle.getString('rk.GetMoreSuggestions') + '</a></em>';
        
        relatedKeywordsBox.innerHTML = rHtml;

      }
      
    },

    goToSemrush: function() {
    
      var newTabBrowser = gBrowser.getBrowserForTab(gBrowser.addTab('http://semrush.com/?ref=127854755'));
      
    },

    onToggleOption: function(menuitem) {
    
      var option = menuitem.getAttribute('option');
      var checked = menuitem.getAttribute('checked') == 'true';
      
      SENSEO.setPref('extensions.' + option, checked);
      
      if (option == 'senseo.hidestatusbar') {
      
        document.getElementById('senseo-panel').hidden = checked;
        
      }
      
      if (option == 'senseo.highcontrastview') {
      
        if (checked) {
        
          SENSEO.Panel.panelDocument.getElementById('senseo-inspect').className = 'highcontrast';
          
        } else {
        
          SENSEO.Panel.panelDocument.getElementById('senseo-inspect').className = '';
        
        }
        
      }
      
    },
  
    toggleStatusBar: function(hide) {
    
      document.getElementById('senseo-panel').hidden = hide;
      
    },

    toggleContrastView: function(hc) {
    
        if (hc) {

          SENSEO.Panel.panelDocument.getElementById('senseo-inspect').className = 'highcontrast';
          
        } else {
        
          SENSEO.Panel.panelDocument.getElementById('senseo-inspect').className = '';
        
        }
      
    },

    inspectRelatedKeyword: function(relatedKeyword) {
      
      var senseoTextBox = Firebug.chrome.$("senseoTextBox");
      
      senseoTextBox.value = relatedKeyword;
      
      this.inspect();
    
    },
    
    inspectDocument: function() {

      var senseoTextBox = Firebug.chrome.$("senseoTextBox");
      
      if (senseoTextBox.value != '') {
      
        var sHtml = this.getAnalyseHtml(senseoTextBox.value);
        var cHtml = this.getContributionHtml();
        
        SENSEO.Panel.renderPanel( 'senseo-inspect', 
                                  sHtml + 
                                  '<div class="contribution">' + 
                                  cHtml + 
                                  '</div>'
                                 );
        
        this.toggleContrastView(SENSEO.getPref('extensions.senseo.highcontrastview'));
  
        this.showKeywordSuggestions(senseoTextBox.value);

        if (SENSEO.grade && SENSEO.grade > 90) {
        
          SENSEO.Panel.panelDocument.getElementById('twitter-container').style.display = 'inline-block';
          
          SENSEO.Panel.panelDocument.getElementById('twitter-grade').innerHTML = SENSEO.grade;
          
          SENSEO.Panel.panelDocument.getElementById('tweet-this').href = 'http://twitter.com/home?status=' + encodeURI('I got grade A (' + SENSEO.grade + '/100) for optimizing my website with SenSEO Firefox extension http://goo.gl/d7dp');
      
          // google shortener service is unstable (Labs status)
          // SENSEO.Utils.getShortURL(SENSEO.grade);
        
        } else {
        
          SENSEO.Panel.panelDocument.getElementById('twitter-container').style.display = 'none';
      
        }
        
      }
      
    },

    // handles Inspect button
    inspect: function() {
    
      var fbCtx = typeof FirebugContext !== 'undefined' ? FirebugContext : Firebug.currentContext;

      fbCtx.getPanel('senseo');
      
      /* this is the normal behaviour */
      this.checkForKeywords();
      this.inspectDocument();
      
      /* if user presses the button before document is ready content is checked again */
      if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', function(scope) {
          return function(e) {
            document.removeEventListener('DOMContentLoaded', arguments.callee, false);
            scope.inspectDocument();
          }
        }(this), false);
      }
      
    },

    crawlDocument: function() {

      var senseoTextBox = Firebug.chrome.$("senseoTextBox");
      
      if (senseoTextBox.value != '') {
      
        mse.Crawler.init(this, content.window.location.href, senseoTextBox.value);
        
      }
        
    },
        
    crawl: function() {
    
      var fbCtx = typeof FirebugContext !== 'undefined' ? FirebugContext : Firebug.currentContext;

      fbCtx.getPanel('senseo');
      
      this.checkForKeywords();
      this.crawlDocument();
      
    },
    
    updateCrawlingInfo: function(internalLinkList, numberOfCrawledLinks, maxCrawlResults) {
    
      var crawlPanelElement = SENSEO.Panel.getPanelElement('senseo-crawl');
    
      if (!crawlPanelElement) {
    
         crawlPanelElement = SENSEO.Panel.renderPanel('senseo-crawl');
         
      }
      
      var numberOfInternalLinks = internalLinkList.length;
      
      var maxWidth = 300;
      
      var numberOfLinks = numberOfInternalLinks + numberOfCrawledLinks;
      
      var widthStep = maxWidth / numberOfLinks;
      
      var internalWidth = parseInt(widthStep * numberOfInternalLinks);
      
      var crawledWidth = parseInt(widthStep * numberOfCrawledLinks);
      
      crawlPanelElement.innerHTML = '<ul id="crawlstatus">' + 
                                    '<li class="internalLinks" style="width: ' + internalWidth + 'px;">' + numberOfInternalLinks + '</li>' +
                                    '<li class="crawledLinks" style="width: ' + crawledWidth + 'px;">' + numberOfCrawledLinks + '</li>' +
                                    '</ul>' +
                                    '<ul><li>URL crawled right now: ' + internalLinkList[0] + '</li><li>A maximum of ' + maxCrawlResults + ' links will be crawled.</li></ul>';
                      
    },

    crawlingDone: function(sHtml) {

      var cHtml = this.getContributionHtml();
      
      var crawlPanelElement = SENSEO.Panel.getPanelElement('senseo-crawl');
    
      if (!crawlPanelElement) {
    
         crawlPanelElement = SENSEO.Panel.renderPanel('senseo-crawl');
         
      }
      
      crawlPanelElement.innerHTML =
        sHtml + 
        '<div class="contribution">' + 
        cHtml + 
        '</div>';
      
    },
    
    // handles Show Components button
    components: function() {
    
      var fbCtx = typeof FirebugContext !== 'undefined' ? FirebugContext : Firebug.currentContext;

      fbCtx.getPanel('senseo');
				
      var senseoTextBox = Firebug.chrome.$("senseoTextBox");

      var sHtml = this.getComponentsHtml(senseoTextBox.value);
      var cHtml = this.getContributionHtml();
      
      SENSEO.Panel.renderPanel('senseo-components', sHtml + '<div class="contribution">' + cHtml + '</div>');
      
    },

    // handles Printview button
    printview: function() {
    
      var senseoTextBox = Firebug.chrome.$("senseoTextBox");

      var sHtmlAnalyse, sHtmlComponents;
      
      if (senseoTextBox.value != '') {
        sHtmlAnalyse = this.getAnalyseHtml(senseoTextBox.value);
      } else {
        sHtmlAnalyse = 'No keyword selected!';
      }
      
      sHtmlComponents = this.getComponentsHtml(senseoTextBox.value);
    
      sHtml = '<h1>' + this.strbundle.getString('pv.DocumentCheckedBySenseo') + ': ' + content.window.location.href + '</h1><div class="inspect"><h2>' + this.strbundle.getString('pv.AnalysisHeadline') + '</h2>' + sHtmlAnalyse + '</div><h2>' + this.strbundle.getString('pv.ComponentsHeadline') + '</h2><div class="components">' + sHtmlComponents + '</div>';
      sHtml += '<div id="footer">' + this.strbundle.getString('pv.MoreInformation') + ' <strong>http://www.sensational-seo.com</strong></div>';
    
      var newTabBrowser = gBrowser.getBrowserForTab(gBrowser.addTab('chrome://senseo/content/html/blank.html'));
      
      var printViewInterval = window.setInterval( function() {
      
        if (newTabBrowser.contentDocument.body) {
      
          newTabBrowser.contentDocument.body.innerHTML = sHtml;
          
          window.clearInterval(printViewInterval);
          
        }
      
      }, 300);

    },
/*
    getSnippetCode: function() {

      var req = new XMLHttpRequest();
  
      req.open('GET', "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%22http%3A%2F%2Fwww.google.com%2Fwebmasters%2Ftools%2Frichsnippets%3Furl%3D" + encodeURIComponent(content.window.location) + "%22%20and%20xpath%3D'%2F%2Fdiv%5B%40class%3D%22onebox%22%5D'", true);
      
      req.onreadystatechange = function(scope) {
      
        return function(aEvt) {
        
          if (req.readyState == 4) {
          
            if (req.status == 200) {
            
              var xmlDoc = req.responseXML;
            
              var nsResolver = xmlDoc.createNSResolver( xmlDoc.ownerDocument == null ? xmlDoc.documentElement : xmlDoc.ownerDocument.documentElement);  
                 
              var nodesSnapshot = xmlDoc.evaluate('/query/results/node()', xmlDoc, nsResolver, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null );

              if (nodesSnapshot.snapshotItem(0)) {
              
                var xmlString = (new XMLSerializer()).serializeToString(nodesSnapshot.snapshotItem(0));

                SENSEO.Panel.panelDocument.getElementById('snippet-container').innerHTML = xmlString + '<br/><p>Note that there is no guarantee that a Rich Snippet will be shown for this page on actual search results.</p>';
                
              } else {
              
                SENSEO.Panel.panelDocument.getElementById('snippet-container').innerHTML = '<p>' + scope.strbundle.getString('pv.insufficientData') + '</p>';
              
              }
              
              SENSEO.Panel.panelDocument.getElementById('snippet-container').innerHTML += '<p style="margin-top: 10px;"><a href="http://www.google.com/webmasters/tools/richsnippets" target="_blank">' + scope.strbundle.getString('pv.MoreInformation') + ' Google Webmaster Tools</a></p>';
              
            }
            
          }
          
        }
          
      }(this);
      
      req.send(null);
      
    },
    
    */
    goHome: function() {
      gBrowser.selectedTab = gBrowser.addTab("http://www.sensational-seo.com/");
    },

    addStyleSheet: function(doc) {
    
      // Make sure the stylesheet isn't appended twice.
      if ($('senseoStyles', doc)) {
        return;
      }
        
      var styleSheet = createStyleSheet(doc, 'chrome://senseo/content/css/senseo.css');
      
      styleSheet.setAttribute('id', 'senseoStyles');
      
      addStyleSheet(doc, styleSheet);
      
    },
    
    shutdown: function() {
    
      // do something when Firebug is closed
    
    }
    
  });

  function SenSEOPanel() {};

  SenSEOPanel.prototype = extend(Firebug.Panel, {

    name: panelName,
    
    title: 'SenSEO',
    
    strbundle: document.getElementById('senseostrings'),

    initialize: function() {
    
      Firebug.Panel.initialize.apply(this, arguments);
      Firebug.SenSEOModule.addStyleSheet(this.document);
      
      SENSEO.Panel.createContainer(this);
      
      this.showWelcomeText();
      
    },
    
    show: function() {

      SENSEO.Utils.checkForRobotsTxt();
      
      SENSEO.Utils.checkForSitemap();
      
    },
    
    showWelcomeText: function() {
    
      var sHtml;
      
      introHtml = '<div id="senseo-intro">' +
                  '<div class="box">' +
                  '<!-- Icon free for non-commercial use: http://www.veryicon.com/icons/system/vista-elements/search-magnifier-1.html -->' +
                  '<img src="chrome://senseo/content/img/magnifier.png" class="icon">' +
                  '<h2><em>SenSEO</em> <span>Firefox Extension</span></h2>' +
                  '<p class="additional">' +
                  'Created and maintained by <a href="http://www.nicosteiner.de/" target="blank">Nico Steiner</a> | <a href="http://www.sensational-seo.com/" target="blank">Official Website</a> | <a href="http://twitter.com/sensationalseo" target="blank">Twitter</a>' +
                  '</p>' +
                  '<ul>' +
                  '<li>' + this.strbundle.getString('intro.EnterSomeKeywords') + '</li>' +
                  '<li>' + this.strbundle.getString('intro.ClickInspectSEOCriteria') + '</li>' +
                  '</ul></div></div>';
    
      SENSEO.Panel.renderPanel('senseo-intro', introHtml);

    }
      
  });

  Firebug.registerModule(Firebug.SenSEOModule);
  
  Firebug.registerPanel(SenSEOPanel);

  Firebug.SenSEOModule.toggleStatusBar(SENSEO.getPref('extensions.senseo.hidestatusbar'));
  
}});