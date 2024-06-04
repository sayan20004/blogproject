const aboutUsCross = document.querySelector(".cross");
const aboutUs = document.querySelector(".about-us-overlay");
const aboutUsOpen = document.querySelector("#aboutus")

const categoryCross = document.querySelector(".category-overlay .cross")
const category = document.querySelector(".category-overlay");
const categoryOpen = document.querySelector("#category")


function animetionHandleOne(){
    aboutUs.style.zIndex = 0
    aboutUs.style.display = "none"
}
function animetionHandleThree(){
    category.style.zIndex = 0
    category.style.display = "none"
}
function animetionHandleTwo(){
    aboutUs.style.height = "99vh"
    aboutUs.style.zIndex = 3
    aboutUs.style.opacity = 1

}
function animetionHandleFour(){
    category.style.height = "99vh"
    category.style.zIndex = 3
    category.style.opacity = 1
}
aboutUsOpen.addEventListener('click',function(){
    aboutUs.style.display = "block"
    
    setTimeout(animetionHandleTwo,100)
})
aboutUsCross.addEventListener('click',function(){
    aboutUs.style.height = "0vh"
    aboutUs.style.opacity = 0

    setTimeout(animetionHandleOne,1000)
})

categoryOpen.addEventListener('click',function(){
    category.style.display = "block"
    
    setTimeout(animetionHandleFour,100)
})
categoryCross.addEventListener('click',function(){
    category.style.height = "0vh"
    category.style.opacity = 0

    setTimeout(animetionHandleThree,1000)
})

const sublimeCross = document.querySelector(".sublime-overlay .cross");
const sublimeOverlay = document.querySelector(".sublime-overlay");
const sublimeOpen = document.querySelector("#sublimeOpen");

function animationHandleClose() {
    sublimeOverlay.style.zIndex = 0;
    sublimeOverlay.style.display = "none";
}

function animationHandleOpen() {
    sublimeOverlay.style.height = "99vh";
    sublimeOverlay.style.zIndex = 3;
    sublimeOverlay.style.opacity = 1;
}

sublimeOpen.addEventListener('click', function() {
    sublimeOverlay.style.display = "block";
    setTimeout(animationHandleOpen, 100);
});

sublimeCross.addEventListener('click', function() {
    sublimeOverlay.style.height = "0vh";
    sublimeOverlay.style.opacity = 0;
    setTimeout(animationHandleClose, 1000);
});





document.addEventListener("scroll", function() {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = scrollTop / scrollHeight;
    const progressCircle = document.querySelector('.progress-bar');
    const progressOffset = 94 - (94 * scrollPercentage); // 283 is the circumference of the circle
    progressCircle.style.strokeDashoffset = progressOffset;
});
