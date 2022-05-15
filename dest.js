var data=[
    {
        img:"assets/destination/image-moon.png",
        h1:"MOON",
        p:"See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        dist:"384400KM",
        days:"3 DAYS"
    },
    {
        img:"assets/destination/image-mars.png",
        h1:"MARS",
        p:"Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        dist:"225 MIL. KM",
        days: "9 MONTHS"
    },
    {
        img:"assets/destination/image-europa.png",
        h1:"EUROPA",
        p:"The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        dist:"628 MIL. KM",
        days:"3 YEARS"
    },
    {
        img:"assets/destination/image-titan.png",
        h1:"TITAN",
        p:"The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        dist:"1.6 BIL. KM",
        days:"7 YEARS"
    }
]
var btns=document.querySelectorAll("button");
var text=document.querySelector("#text");
var img=document.querySelector("#img");
var h1=document.querySelector("#text h1");
var p=document.querySelector("#text p");
var p1=document.querySelector("#destp1 .p12");
var p2=document.querySelector("#destp2 .p12");
var i;
btns.forEach(btn=>{
    btn.addEventListener("click",function(){
        btns.forEach(btn=>{
            btn.className="inact";
        })
        btn.className="active";
        if(btns[0]==btn){i=0;}
        else if(btns[1]==btn){i=1;}
        else if(btns[2]==btn){i=2;}
        else{
            i=3;
        }
        img.src=data[i].img;
        h1.innerText=data[i].h1;
        p.innerText=data[i].p;
        p1.innerText=data[i].dist;
        p2.innerText=data[i].days;
    })
})