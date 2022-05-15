btns=document.querySelectorAll(".ctech");
h3=document.querySelector("h3");
text=document.querySelector("#text");
img=document.querySelector("#img");
grid=document.querySelector("#gridy");
btns.forEach(btn=>{
    btn.addEventListener("click",function(){
        if(btn==btns[0]){
            text.innerText="A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall it's quite an awe-inspiring sight on the launch pad!";
            h3.innerText="LAUNCH VEHICLE";
            if(grid.style.display=="grid"){
                img.src="assets/technology/image-launch-vehicle-portrait.jpg"
            }
            else{
                img.src="assets/technology/image-launch-vehicle-landscape.jpg";
            }
            
        }
        if(btn==btns[1]){
            h3.innerText="SPACEPORT";
            text.innerText="A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.";
            if(grid.style.display="grid"){
                img.src="assets/technology/image-spaceport-portrait.jpg";
            }
            else{
                img.src="assets/technology/image-spaceport-landscape.jpg";
            }
        }
        if(btn==btns[2]){
            h3.innerText="SPACE CAPSULE";
            text.innerText="A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";
            if(grid.style.display=="grid"){
                img.src="assets/technology/image-space-capsule-portrait.jpg";
            }
            else{
                img.src="assets/technology/image-space-capsule-landscape.jpg";
            }
            
        }
    })
})
