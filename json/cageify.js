var nicPrefix = "nic";
var nicCount = 20;

function getNic(){
	var nicNum = Math.floor(Math.random()*nicCount);
	return "images/"+nicPrefix+nicNum+".jpg";
}

function replaceImages(){
	Array.prototype.map.call(document.images,function(img){
		//don't re-nic images
		if(img.className.indexOf('nicced')>-1){
			return;
		}
		img.classList.add('nicced');
		//retain the original dimensions
		var width = img.width;
		var height = img.height;
		img.style.width = width+'px';
		img.style.height = height+'px';

		var loc = chrome.extension.getURL(getNic());
		img.src = loc;
		if(img.srcset){
			img.srcset = loc;
		}
	});
}

window.setTimeout(replaceImages,1000);
document.body.addEventListener('click',function(){
	replaceImages();
});
