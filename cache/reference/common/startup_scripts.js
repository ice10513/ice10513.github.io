function isCompatible(){if(navigator.appVersion.indexOf('MSIE')!==-1&&parseFloat(navigator.appVersion.split('MSIE')[1])<6){return false;}return true;}var startUp=function(){mw.config=new mw.Map(true);mw.loader.addSource({"local":{"loadScript":"/mwiki/load.php","apiScript":"/mwiki/api.php"}});mw.loader.register([["site","1582119223",[],"site"],["noscript","1522275499",[],"noscript"],["startup","1582385763",[],"startup"],["filepage","1522275499"],["user.groups","1522275499",[],"user"],["user","1522275499",[],"user"],["user.cssprefs","1522275499",["mediawiki.user"],"private"],["user.options","1522275499",[],"private"],["user.tokens","1522275499",[],"private"],["mediawiki.language.data","1582385763",["mediawiki.language.init"]],["skins.chick","1522275499"],["skins.cologneblue","1522275499"],["skins.modern","1522275499"],["skins.monobook","1522275499"],["skins.nostalgia","1522275499"],["skins.simple","1522275499"],["skins.standard","1522275499"],["skins.vector","1522275499"],[
"skins.vector.js","1522275499"],["jquery","1522275499"],["jquery.appear","1522275499"],["jquery.arrowSteps","1522275499"],["jquery.async","1522275499"],["jquery.autoEllipsis","1522275499",["jquery.highlightText"]],["jquery.badge","1522275499",["mediawiki.language"]],["jquery.byteLength","1522275499"],["jquery.byteLimit","1522275499",["jquery.byteLength"]],["jquery.checkboxShiftClick","1522275499"],["jquery.client","1522275499"],["jquery.color","1522275499",["jquery.colorUtil"]],["jquery.colorUtil","1522275499"],["jquery.cookie","1522275499"],["jquery.delayedBind","1522275499"],["jquery.expandableField","1522275499",["jquery.delayedBind"]],["jquery.farbtastic","1522275499",["jquery.colorUtil"]],["jquery.footHovzer","1522275499"],["jquery.form","1522275499"],["jquery.getAttrs","1522275499"],["jquery.hidpi","1522275499"],["jquery.highlightText","1522275499",["jquery.mwExtension"]],["jquery.hoverIntent","1522275499"],["jquery.json","1522275499"],["jquery.localize","1522275499"],[
"jquery.makeCollapsible","1581666073"],["jquery.mockjax","1522275499"],["jquery.mw-jump","1522275499"],["jquery.mwExtension","1522275499"],["jquery.placeholder","1522275499"],["jquery.qunit","1522275499"],["jquery.qunit.completenessTest","1522275499",["jquery.qunit"]],["jquery.spinner","1522275499"],["jquery.jStorage","1522275499",["jquery.json"]],["jquery.suggestions","1522275499",["jquery.autoEllipsis"]],["jquery.tabIndex","1522275499"],["jquery.tablesorter","1581667839",["jquery.mwExtension"]],["jquery.textSelection","1522275499",["jquery.client"]],["jquery.validate","1522275499"],["jquery.xmldom","1522275499"],["jquery.tipsy","1522275499"],["jquery.ui.core","1522275499",["jquery"],"jquery.ui"],["jquery.ui.widget","1522275499",[],"jquery.ui"],["jquery.ui.mouse","1522275499",["jquery.ui.widget"],"jquery.ui"],["jquery.ui.position","1522275499",[],"jquery.ui"],["jquery.ui.draggable","1522275499",["jquery.ui.core","jquery.ui.mouse","jquery.ui.widget"],"jquery.ui"],["jquery.ui.droppable"
,"1522275499",["jquery.ui.core","jquery.ui.mouse","jquery.ui.widget","jquery.ui.draggable"],"jquery.ui"],["jquery.ui.resizable","1522275499",["jquery.ui.core","jquery.ui.widget","jquery.ui.mouse"],"jquery.ui"],["jquery.ui.selectable","1522275499",["jquery.ui.core","jquery.ui.widget","jquery.ui.mouse"],"jquery.ui"],["jquery.ui.sortable","1522275499",["jquery.ui.core","jquery.ui.widget","jquery.ui.mouse"],"jquery.ui"],["jquery.ui.accordion","1522275499",["jquery.ui.core","jquery.ui.widget"],"jquery.ui"],["jquery.ui.autocomplete","1522275499",["jquery.ui.core","jquery.ui.widget","jquery.ui.position"],"jquery.ui"],["jquery.ui.button","1522275499",["jquery.ui.core","jquery.ui.widget"],"jquery.ui"],["jquery.ui.datepicker","1522275499",["jquery.ui.core"],"jquery.ui"],["jquery.ui.dialog","1522275499",["jquery.ui.core","jquery.ui.widget","jquery.ui.button","jquery.ui.draggable","jquery.ui.mouse","jquery.ui.position","jquery.ui.resizable"],"jquery.ui"],["jquery.ui.progressbar","1522275499",[
"jquery.ui.core","jquery.ui.widget"],"jquery.ui"],["jquery.ui.slider","1522275499",["jquery.ui.core","jquery.ui.widget","jquery.ui.mouse"],"jquery.ui"],["jquery.ui.tabs","1522275499",["jquery.ui.core","jquery.ui.widget"],"jquery.ui"],["jquery.effects.core","1522275499",["jquery"],"jquery.ui"],["jquery.effects.blind","1522275499",["jquery.effects.core"],"jquery.ui"],["jquery.effects.bounce","1522275499",["jquery.effects.core"],"jquery.ui"],["jquery.effects.clip","1522275499",["jquery.effects.core"],"jquery.ui"],["jquery.effects.drop","1522275499",["jquery.effects.core"],"jquery.ui"],["jquery.effects.explode","1522275499",["jquery.effects.core"],"jquery.ui"],["jquery.effects.fade","1522275499",["jquery.effects.core"],"jquery.ui"],["jquery.effects.fold","1522275499",["jquery.effects.core"],"jquery.ui"],["jquery.effects.highlight","1522275499",["jquery.effects.core"],"jquery.ui"],["jquery.effects.pulsate","1522275499",["jquery.effects.core"],"jquery.ui"],["jquery.effects.scale",
"1522275499",["jquery.effects.core"],"jquery.ui"],["jquery.effects.shake","1522275499",["jquery.effects.core"],"jquery.ui"],["jquery.effects.slide","1522275499",["jquery.effects.core"],"jquery.ui"],["jquery.effects.transfer","1522275499",["jquery.effects.core"],"jquery.ui"],["mediawiki","1522275499"],["mediawiki.api","1522275499",["mediawiki.util"]],["mediawiki.api.category","1522275499",["mediawiki.api","mediawiki.Title"]],["mediawiki.api.edit","1522275499",["mediawiki.api","mediawiki.Title"]],["mediawiki.api.parse","1522275499",["mediawiki.api"]],["mediawiki.api.watch","1522275499",["mediawiki.api","user.tokens"]],["mediawiki.debug","1522275499",["jquery.footHovzer"]],["mediawiki.debug.init","1522275499",["mediawiki.debug"]],["mediawiki.feedback","1522275499",["mediawiki.api.edit","mediawiki.Title","mediawiki.jqueryMsg","jquery.ui.dialog"]],["mediawiki.hidpi","1522275499",["jquery.hidpi"]],["mediawiki.htmlform","1522275499"],["mediawiki.notification","1522275499",[
"mediawiki.page.startup"]],["mediawiki.notify","1522275499"],["mediawiki.searchSuggest","1581666073",["jquery.autoEllipsis","jquery.client","jquery.placeholder","jquery.suggestions"]],["mediawiki.Title","1522275499",["mediawiki.util"]],["mediawiki.Uri","1522275499"],["mediawiki.user","1522275499",["jquery.cookie","mediawiki.api","user.options","user.tokens"]],["mediawiki.util","1581666073",["jquery.client","jquery.cookie","jquery.mwExtension","mediawiki.notify"]],["mediawiki.action.edit","1522275499",["jquery.textSelection","jquery.byteLimit"]],["mediawiki.action.edit.preview","1522275499",["jquery.form","jquery.spinner"]],["mediawiki.action.history","1522275499",[],"mediawiki.action.history"],["mediawiki.action.history.diff","1522275499",[],"mediawiki.action.history"],["mediawiki.action.view.dblClickEdit","1522275499",["mediawiki.util","mediawiki.page.startup"]],["mediawiki.action.view.metadata","1581668208"],["mediawiki.action.view.postEdit","1522275499",["jquery.cookie"]],[
"mediawiki.action.view.rightClickEdit","1522275499"],["mediawiki.action.watch.ajax","1522275499",["mediawiki.page.watch.ajax"]],["mediawiki.language","1522275499",["mediawiki.language.data","mediawiki.cldr"]],["mediawiki.cldr","1522275499",["mediawiki.libs.pluralruleparser"]],["mediawiki.libs.pluralruleparser","1522275499"],["mediawiki.language.init","1522275499"],["mediawiki.jqueryMsg","1522275499",["mediawiki.util","mediawiki.language"]],["mediawiki.libs.jpegmeta","1522275499"],["mediawiki.page.ready","1522275499",["jquery.checkboxShiftClick","jquery.makeCollapsible","jquery.placeholder","jquery.mw-jump","mediawiki.util"]],["mediawiki.page.startup","1522275499",["jquery.client","mediawiki.util"]],["mediawiki.page.patrol.ajax","1582151743",["mediawiki.page.startup","mediawiki.api","mediawiki.util","mediawiki.Title","mediawiki.notify","jquery.spinner","user.tokens"]],["mediawiki.page.watch.ajax","1581666238",["mediawiki.page.startup","mediawiki.api.watch","mediawiki.util",
"mediawiki.notify","jquery.mwExtension"]],["mediawiki.special","1522275499"],["mediawiki.special.block","1522275499",["mediawiki.util"]],["mediawiki.special.changeemail","1522275499",["mediawiki.util"]],["mediawiki.special.changeslist","1522275499",["jquery.makeCollapsible"]],["mediawiki.special.movePage","1522275499",["jquery.byteLimit"]],["mediawiki.special.preferences","1522275499"],["mediawiki.special.recentchanges","1522275499",["mediawiki.special"]],["mediawiki.special.search","1522275499"],["mediawiki.special.undelete","1522275499"],["mediawiki.special.upload","1522275499",["mediawiki.libs.jpegmeta","mediawiki.util"]],["mediawiki.special.userlogin.signup","1522275499"],["mediawiki.special.javaScriptTest","1522275499",["jquery.qunit"]],["mediawiki.tests.qunit.testrunner","1522275499",["jquery.getAttrs","jquery.qunit","jquery.qunit.completenessTest","mediawiki.page.startup","mediawiki.page.ready"]],["mediawiki.legacy.ajax","1522275499",["mediawiki.util","mediawiki.legacy.wikibits"
]],["mediawiki.legacy.commonPrint","1522275499"],["mediawiki.legacy.config","1522275499",["mediawiki.legacy.wikibits"]],["mediawiki.legacy.IEFixes","1522275499",["mediawiki.legacy.wikibits"]],["mediawiki.legacy.protect","1522275499",["mediawiki.legacy.wikibits","jquery.byteLimit"]],["mediawiki.legacy.shared","1522275499"],["mediawiki.legacy.oldshared","1522275499"],["mediawiki.legacy.upload","1522275499",["mediawiki.legacy.wikibits","mediawiki.util"]],["mediawiki.legacy.wikibits","1522275499",["mediawiki.util"]],["mediawiki.legacy.wikiprintable","1522275499"],["ext.gadget.ShowEditLinks","1522275499"],["ext.gadget.ColiruCompiler","1566183962"],["ext.gadget.StandardRevisions","1522275499"],["ext.gadget.ScrollableTable","1522275499",["jquery"]],["ext.gadget.MathJax","1522275499",["jquery"]],["ext.cite","1522275499",["jquery.tooltip"]],["jquery.tooltip","1522275499"],["ext.rtlcite","1522275499"],["ext.interwiki.specialpage","1522275499",["jquery.makeCollapsible"]],[
"mediawiki.api.titleblacklist","1522275499",["mediawiki.api"]],["skins.cppreference","1522275499"],["skins.cppreference2","1522275499"],["ext.CppSearch","1522275499"]]);mw.config.set({"wgLoadScript":"/mwiki/load.php","debug":false,"skin":"cppreference2","stylepath":"/mwiki/skins","wgUrlProtocols":"http\\:\\/\\/|https\\:\\/\\/|ftp\\:\\/\\/|irc\\:\\/\\/|ircs\\:\\/\\/|gopher\\:\\/\\/|telnet\\:\\/\\/|nntp\\:\\/\\/|worldwind\\:\\/\\/|mailto\\:|news\\:|svn\\:\\/\\/|git\\:\\/\\/|mms\\:\\/\\/|\\/\\/","wgArticlePath":"/w/$1","wgScriptPath":"/mwiki","wgScriptExtension":".php","wgScript":"/mwiki/index.php","wgVariantArticlePath":false,"wgActionPaths":{},"wgServer":"https://en.cppreference.com","wgUserLanguage":"en","wgContentLanguage":"en","wgVersion":"1.21.2","wgEnableAPI":true,"wgEnableWriteAPI":true,"wgMainPageTitle":"Main Page","wgFormattedNamespaces":{"-2":"Media","-1":"Special","0":"","1":"Talk","2":"User","3":"User talk","4":"Cppreference","5":"Cppreference talk","6":"File","7":"File talk"
,"8":"MediaWiki","9":"MediaWiki talk","10":"Template","11":"Template talk","12":"Help","13":"Help talk","14":"Category","15":"Category talk"},"wgNamespaceIds":{"media":-2,"special":-1,"":0,"talk":1,"user":2,"user_talk":3,"cppreference":4,"cppreference_talk":5,"file":6,"file_talk":7,"mediawiki":8,"mediawiki_talk":9,"template":10,"template_talk":11,"help":12,"help_talk":13,"category":14,"category_talk":15,"image":6,"image_talk":7,"project":4,"project_talk":5},"wgSiteName":"cppreference.com","wgFileExtensions":["png","gif","jpg","jpeg","pdf","svg","zip","gz","tar.gz","bz2","tar.xz","xz"],"wgDBname":"mwiki1","wgFileCanRotate":true,"wgAvailableSkins":{"nostalgia":"Nostalgia","myskin":"MySkin","simple":"Simple","cppreference":"Cppreference","monobook":"MonoBook","chick":"Chick","cologneblue":"CologneBlue","vector":"Vector","standard":"Standard","modern":"Modern","cppreference2":"Cppreference2"},"wgExtensionAssetsPath":"/mwiki/extensions","wgCookiePrefix":"mwiki1_mwiki_en_",
"wgResourceLoaderMaxQueryLength":-1,"wgCaseSensitiveNamespaces":[0,-2,1,4,5,6,7,10,11,12,13,14,15]});};if(isCompatible()){}delete isCompatible;
/* cache key: mwiki1-mwiki_en_:resourceloader:filter:minify-js:7:bacf7f8fa2466674b0398e8b7dec4552 */
/* Cached 20200222153603 */