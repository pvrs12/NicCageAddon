var nicCount = 20;

function getNic(){
	int nicNum = Math.random()*nicCount;
	return "images/"+nicNum+".jpg";
}

document.body.addEventListener("load",function(e){
	var images = document.getElementByClass("img");
	for(image in images){
		image.src=getNic();
		console.log(image.src);
	}
});
