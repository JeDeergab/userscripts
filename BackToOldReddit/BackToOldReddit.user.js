// ==UserScript==
// @author      PotcFdk
// @name        BackToOldReddit
// @namespace   https://github.com/PotcFdk
// @description Ensures that you stay on old.reddit.com.
// @match       *://www.reddit.com/*
// @version     0.0.1
// @grant       none
// @icon        https://www.redditstatic.com/icon.png
// @homepageURL https://github.com/PotcFdk/userscripts/tree/master/BackToOldReddit
// @supportURL  https://github.com/PotcFdk/userscripts/issues
// @downloadURL https://raw.githubusercontent.com/PotcFdk/userscripts/master/BackToOldReddit/BackToOldReddit.user.js
// @updateURL   https://raw.githubusercontent.com/PotcFdk/userscripts/master/BackToOldReddit/BackToOldReddit.meta.js
// @run-at      document-start
// ==/UserScript==

const currentURL = window.document.location.toString();

if (currentURL.includes ("//www"))
	window.document.location.replace (currentURL.replace ("//www","//old"));