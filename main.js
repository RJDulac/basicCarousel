var imagePlace = 0;
var images = ["1","2","3","4","5","6","7"];
var imagesColor = ["111","222","242","534","043","435", "345"];
//load when page loads and go through images continuously
onload = function startImage() {
    setInterval(swapImage, 1000);
}
swapImage();
function swapImage(){
    
    if(imagePlace === images.length) {
        imagePlace = 0;
    }
    var myImage = document.getElementById("myImage");
    myImage.src = "https://via.placeholder.com/350x150/" +imagesColor[imagePlace] + "/fff?text=image" + images[imagePlace];
    imagePlace++; 
}