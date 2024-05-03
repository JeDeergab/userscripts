// ==UserScript==
// @name BackToOldReddit
// @namespace Reddit Junk
// @match *://www.reddit.com/*
// @grant none
// @run-at document-start
// ==/UserScript==
var currentURL = window.document.location.toString();
if (currentURL.includes("//www.reddit.com/login")) {
  // Do nothing if it's the login page
} else if (currentURL.includes("//www")) {
  var newURL = currentURL.replace("//www", "//old");
  window.document.location.replace(newURL);
}
