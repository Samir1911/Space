var menu=document.querySelector("#menu");
var aside=document.querySelector("aside");
menu.addEventListener("click",function(){
    aside.style.marginLeft="121px";
    aside.style.transition="1s";
    aside.style.display="flex";
})
var close=document.querySelector("#close");
close.addEventListener("click",function(){
    aside.style.marginLeft="430px";
    aside.style.transition="1s";
    aside.style.display="none";
})
