var i =0;
var images = [];
var time = 4000;

// Image List
images[0] = "image0.jpg";
images[1] = "image1.jpg";
images[2] = "image2.jpg";
images[3] = "image3.jpg";


// Change Image

function changeImg(){
    document.slide.src = images[i];

    if(i < images.length - 1){
        i++;
    }else{
        i = 0;
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg;




