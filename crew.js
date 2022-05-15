var rad=document.querySelectorAll(".radcrew");
var des=document.querySelector("#designation");
var about=document.querySelector("#about");
var im=document.querySelector("#img img");
rad.forEach(ra=>{
    ra.addEventListener("click",function(){
        if(ra.value=="c1"){
            im.src="assets/crew/image-douglas-hurley.png";
            des.innerHTML=`<p id="des">Commander</p><p id="name">Douglas Hurley</p>`;
            about.innerText="Douglas Gerald Hurley is an American engineer, former Marine Corps pilot  and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.";
        }
        else if(ra.value=="c2"){
            im.src="assets/crew/image-mark-shuttleworth.png";
            des.innerHTML=`<p id="des">Mission Specialist</p><p id="name">Mark Shuttleworth</p>`;
            about.innerText="Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.";
        }
        else if(ra.value=="c3"){
            im.src="assets/crew/image-victor-glover.png";
            des.innerHTML=`<p id="des">PILOT</p><p id="name">VICTOR GLOVER</p>`;
            about.innerText="Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.";
        }
        else{
            im.src="assets/crew/image-anousheh-ansari.png";
            des.innerHTML=`<p id="des">FLIGHT ENGINEER</p><p id="name">ANOUSHEH ANSARI</p>`;
            about.innerText="Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.";
        }
    })
})