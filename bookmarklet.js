javascript: src= bookmarklet/scripts.jsff

//placeholder file for bookmarklet once fully externalized



//auto refresh page after clearing cookies
//figture out how to display hashed UID for MCJS & popup form
//check out ASTA box wikies

// buy domain - google vs hover
// Set up hosting - digtal ocean - credit via https://javascript-minifier.com/php
// set up email server & authenticate for mailchimp & mandrill


javascript:var x=document.head.innerHTML,y=x.match(/mcjs/);if(console.log(y),"mcjs"==y)var csAlert="Connected Sites script: YES";else if(null==y)csAlert="Connected Sites script: NO";alert(csAlert);var a=document.body.innerHTML;console.log(a);var b=a.match(/mc-embed/);if(console.log(b),"mc-embed"==b)var embedAlert="MC Embedded Form: YES";else if(null==b)embedAlert="MC Embedded Form: NO";alert(embedAlert);var c=document.body.innerHTML,d=c.match(/signup-forms\/popup\/embed.js/);if(console.log(d),"signup-forms/popup/embed.js"==d)var popupAlert="MC Popup Form: YES";else if(null==d)popupAlert="MC Popup Form: NO";alert(popupAlert);var clear=window.confirm("Would you like to clear cookies for current page?");if(1==clear){for(var cookies=document.cookie.split(";"),i=0;i<cookies.length;i++){var e=cookies[i].indexOf("="),n=e>-1?cookies[i].substr(0,e):cookies[i];document.cookie=n+"=;expires=Thu, 01 Jan 1970 00:00:00 GMT",console.log("Cookies have been cleared.")}alert("Cookies have been cleared. Refresh page to trigger pop up form again.")}else 0==clear&&console.log("Cookies have NOT been cleared.");