
function DownloadFile(fileName) {
	//Set the File URL.
	var url = "./assets/" + fileName;

	//Create XMLHTTP Request.
	var req = new XMLHttpRequest();
	req.open("GET", url, true);
	req.responseType = "blob";
	req.onload = function () {
		//Convert the Byte Data to BLOB object.
		var blob = new Blob([req.response], { type: "application/octetstream" });

		//Check the Browser type and download the File.
		var isIE = false || !!document.documentMode;
		if (isIE) {
			window.navigator.msSaveBlob(blob, fileName);
		} else {
			var url = window.URL || window.webkitURL;
			link = url.createObjectURL(blob);
			var a = document.createElement("a");
			a.setAttribute("download", fileName);
			a.setAttribute("href", link);
			document.body.appendChild(a);
			a.click();
			document.body.removeChild(a);
		}
	};
	req.send();
};
var filterSelection = (filterType)=>{
	switch(filterType) {
		case "experience":
			var elems = document.getElementsByClassName('experience');
			for (var i=0;i<elems.length;i+=1){
				  elems[i].style.display = 'block';
				}
			var elems2= document.getElementsByClassName("projects");
			for (var i=0;i<elems.length;i+=1){
				elems2[i].style.display = 'none';
				  }
		  break;
		case "projects":
			var elems = document.getElementsByClassName('projects');
				for (var i=0;i<elems.length;i+=1){
					  elems[i].style.display = 'block';
					 
					}
			var elems2= document.getElementsByClassName("experience");
				for (var i=0;i<elems.length;i+=1){
					elems2[i].style.display = 'none';
			  		}
		  break;
		default:
			document.getElementsByClassName("experience").style.display="block";
			
	  }
}
