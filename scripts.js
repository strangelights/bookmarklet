//javascript: alert("Hello World");

//var scriptTest = document.scripts;
//console.log(scriptTest);

//console.log("test");

var x = document.body.innerHTML;
var y = x.match(/mcjs/g);   // Connected Sites script
//var z = x.match(/mc-embed/g); // Embeded form code


console.log(y);

if (y == 'mcjs') {
	var csAlert = ("Connected Sites script: YES");


} 
else if (y == null) {
	var csAlert = ("Connected Sites script: NO");

}


/*


if (z == 'mc-embed') {
	var EmbedAlert = ("MC Embedded Form: YES");
}
else if (z == null) {
	var EmbedAlert = ("MC Embedded Form: NO");
}

*/

alert(csAlert);
