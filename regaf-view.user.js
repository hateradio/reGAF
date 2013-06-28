// ==UserScript==
// @id             84518291-2ed8-4387-b45d-12e28b4cfbcf@hr
// @name           re:GAF
// @version        3.0
// @namespace      hateradio)))
// @author         hateradio
// @description    re:GAF
// @include        http://*.neogaf.*/forum*
// ==/UserScript==

// If needed, edit the CSS link (href) below.

(function () {
	'use strict';
	var l = document.createElement('link'), s = document.getElementsByTagName('style')[0];
	l.rel = 'stylesheet';
	l.href = 'http://localhost:4567/css/regaf.css?v=' + (+new Date());
	s.parentNode.insertBefore(l, s);
}());