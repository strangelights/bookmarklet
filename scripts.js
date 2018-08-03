//javascript: 


var x = document.head.innerHTML;
var y = x.match(/mcjs/);   // Connected Sites script
console.log(y);  // what does it look like

if (y == "mcjs") {
	var csAlert = ("Connected Sites script: YES");
} 
else if (y == null) {
	var csAlert = ("Connected Sites script: NO");
}

alert(csAlert);

//-----------Returning UID------------

var getMCJS = document.getElementById('mcjs');
console.log(getMCJS);
var mcjsTextContent = getMCJS.textContent;
console.log(mcjsTextContent);
var splitMCJS = mcjsTextContent.split("/");
console.log(splitMCJS);
alert("Hashed UID: " + splitMCJS[6]);


//-----------Embedded Script-----------

var a = document.body.innerHTML;
console.log(a); // is it pulling the whole body element

var b = a.match(/mc-embed/); // MC Embedded Form script
console.log(b);  //did it find the script

if (b == 'mc-embed') {
	var embedAlert = ("MC Embedded Form: YES");
}
else if (b == null) {
	var embedAlert = ("MC Embedded Form: NO");
}

alert(embedAlert);

//----------Popup Script------------

var c = document.body.innerHTML;
var d = c.match(/signup-forms\/popup\/embed.js/); // MC Pop Up Form code
console.log(d); // check on that boi

if (d == "signup-forms/popup/embed.js"){
	var popupAlert = ("MC Popup Form: YES");
}
else if (d == null){
	var popupAlert = ("MC Popup Form: NO");
}

alert(popupAlert);

//---------Clear Cookies-------------


var clear = window.confirm("Would you like to clear cookies for current page?"); 

if (clear == true){
	//function(){
	    	var cookies=document.cookie.split(";");
	    for(var i=0;i<cookies.length;i++){
	        var e=cookies[i].indexOf("=");
	        var n=e>-1?cookies[i].substr(0,e):cookies[i];
	        document.cookie=n+"=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
	    console.log("Cookies have been cleared.");
	      
	   	 }
		alert("Cookies have been cleared. Refresh page to trigger pop up form again.");  
	}

else if (clear == false){
	console.log("Cookies have NOT been cleared.");
}//-------MCJS Script---------------




