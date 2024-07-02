var images = Array.from(document.querySelectorAll("img"));
var whiteBox = document.querySelector("#white-box");
var boxImage = document.querySelector(".main-img");
var rightBtn = document.querySelector("#rightBtn");
var leftBtn = document.querySelector("#leftBtn");
var closeBtn = document.querySelector("#closeBtn");
var globalIndex ; 

for(var i=0 ; i<images.length; i++){
    images[i].addEventListener("click", function(e){
        whiteBox.classList.replace("d-none", "d-flex");
        var currentTarget = e.target.getAttribute("src");
        var clickedImage = e.target;
        var clickedIndex = images.indexOf(clickedImage)
        globalIndex = clickedIndex;
        boxImage.style.backgroundImage = `url(${currentTarget})`
    })
}

rightBtn.addEventListener("click", getNextSlide)
leftBtn.addEventListener("click", getPrevSlide)
closeBtn.addEventListener("click", closeSlider)

function getNextSlide(){
    globalIndex++;
    if(globalIndex > images.length-1){
        globalIndex = globalIndex- images.length;
    }
    var newImage = images[globalIndex].getAttribute("src");
    boxImage.style.backgroundImage = `url(${newImage})`
    
   
}

function getPrevSlide(){
    globalIndex--;
    if(globalIndex <0){
        globalIndex = globalIndex+ images.length;
    }
    var newImage = images[globalIndex].getAttribute("src");
    boxImage.style.backgroundImage = `url(${newImage})`
}

function closeSlider(){
    whiteBox.classList.replace("d-flex", "d-none");
}

document.addEventListener("click", function(e){
    if(e.target.id === "white-box"){
        closeSlider()
    }
})
document.addEventListener("keyup", function(e){
    if(e.key === "Escape"){
        closeSlider()
    }else if(e.key === "ArrowRight"){
        getPrevSlide()
    } else if(e.key === "ArrowLeft"){
        getNextSlide()
    }
   
   
})

