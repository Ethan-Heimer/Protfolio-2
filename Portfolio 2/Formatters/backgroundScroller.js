window.onscroll = onScroll;

var pastScroll = 0
function onScroll(){
    var scrollDelta = pastScroll - window.scrollY;
   
    const backgrounds = document.getElementsByClassName("background");
    for(var i = 0; i < backgrounds.length; i++){
        backgrounds[i].style.transform = `translateY(${-scrollDelta*.5}px)`;
    }
   
}