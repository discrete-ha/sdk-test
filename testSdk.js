var testSdk = function(e){
	"use strict";
	
	document.addEventListener("DOMContentLoaded", function () {
		var btns = document.getElementsByClassName('spacely-sdk-test-button');
		for (var i = 0; i < btns.length; i++) {
			btns[i].onclick = function(){
				alert("request for" + this.dataset.projectId);
			}
		}
	}, false);
}({});
