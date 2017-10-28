document.getElementById("dataForm").addEventListener("submit", createNewEntry);
/*var clipboardArray= [];*/

function createNewEntry(e){
	var siteName= document.getElementById("siteName").value;
	var siteUrl= document.getElementById("siteUrl").value;

	if(!isUrlValid(siteUrl) || siteName ==''){
		alert("Please enter a name with valid URL.");
		return false;
	}
    /*console.log("Data being added...");*/
    if(localStorage.getItem("urlList")===null){
        var clipboardArray = [];
        /*console.log('Empty localstorage item found...   ');*/
    }
    else {
        /*console.log("Data found in urlList");*/
        var clipboardArray = JSON.parse(localStorage.getItem("urlList"));
    } 
	clipboardArray.push({
		"name": siteName,
		"url": siteUrl
	});
    localStorage.setItem("urlList", JSON.stringify(clipboardArray));

	displayClipboard();
	document.getElementById("dataForm").reset();
	/*console.log(clipboardArray);*/

	e.preventDefault();
}

function displayClipboard(){
	document.getElementById("clipboardData").innerHTML= '';
    if(localStorage.getItem("urlList")===null)
        var clipboardArray = [];
    else {
        /*console.log("Data found in urlList");*/
        var clipboardArray = JSON.parse(localStorage.getItem("urlList"));
    } 
	for(var i=0; i<clipboardArray.length; i++){
        
		var name= clipboardArray[i].name;
		var url= clipboardArray[i].url;
		document.getElementById("clipboardData").innerHTML+= 
										 '<div class="well">'
										+'<h3>'+name
										+'<div class="pull-right">'
										+' <a class="btn btn-default" onclick="copyUrl(\''+url+'\')" name="copyBtn" id="copyBtn">Copy URL</a> '
										+' <a class="btn btn-danger" onclick="delUrl(\''+url+'\')" name="delBtn" id="delBtn">Delete</a>'
										+'</div>'
										+'</h3>'
										+'</div>';
	}
}

function isUrlValid(userInput) {
    var res = userInput.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    if(res == null)
        return false;
    else
        return true;
}

function copyUrl(url){
	/*console.log("Asked to copy "+url);*/
	window.prompt("Copy to clipboard: Ctrl+C, Enter", url);
}

function delUrl(url){
    var clipboardArray = JSON.parse(localStorage.getItem("urlList"));
	for(var i=0; i<clipboardArray.length; i++){
		if(clipboardArray[i].url == url){
			clipboardArray.splice(i, 1);
            localStorage.setItem("urlList", JSON.stringify(clipboardArray));
            break;
		}
	}
	displayClipboard();
}