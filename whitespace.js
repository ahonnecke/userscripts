// ==UserScript==
// @name         Whitespace be gone
// @namespace    pixelstub
// @version      0.1
// @description  ignore whitepsace in github
// @author       Ashton Honnecke
// @match        https://github.com/havenly/havenly-2.0/pull/*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

try {
    var url = document.location.toString();
    var updateUrl = updateQueryStringParameter(url, 'w', 'true');
    console.log(updateUrl);
    console.log(url != updateUrl);
    if (url != updateUrl) {
        document.location = updateUrl;
    }
} catch (e) {}

function updateQueryStringParameter(uri, key, value) {
    var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
    var separator = uri.indexOf('?') !== -1 ? "&" : "?";
    if (uri.match(re)) {
        return uri.replace(re, '$1' + key + "=" + value + '$2');
    } else {
        return uri + separator + key + "=" + value;
    }
}
