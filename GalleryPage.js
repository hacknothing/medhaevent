var arr=["medha_thumba.jpeg","galleryImage2.jpeg","galleryImage3.jpeg","galleryImage4.jpg","medha-inner.jpg","galleryImage1.jpeg"]
var index = 1;
function slideRight()
{
    document.getElementById("gallery").style.backgroundImage = "url('"+arr[index]+"')";
    index= (index+1)%arr.length;
}

function slideLeft()
{
    index--;
    if(index < 0)
        {
            index = arr.length-1;
        }
    document.getElementById("gallery").style.backgroundImage = "url('"+arr[index]+"')";    
}


setInterval(slideRight,2000);
