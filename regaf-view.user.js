// ==UserScript==
// @id             84518291-2ed8-4387-b45d-12e28b4cfbcf@hr
// @name           re:GAF
// @version        3.0
// @namespace      hateradio)))
// @author         hateradio
// @description    re:GAF
// @include        http://*.neogaf.*/forum*
// ==/UserScript==

// Edit the CSS link (href) and username below.

(function () {
	'use strict';
	var l = document.createElement('link'),
			s = document.getElementsByTagName('style')[0],
			username = 'hateradio'; // put your username

	l.rel = 'stylesheet';
	l.href = 'http://localhost:4567/username/' + encodeURIComponent(username) + '?v=' + (+new Date());
	s.parentNode.insertBefore(l, s);
}());
