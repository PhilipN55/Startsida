window.addEventListener("DOMContentLoaded", () => {
    const   bild1 = document.getElementById("slide1");
    const   bild2 = document.getElementById("slide2"); 
    const   RBtn = document.getElementById("rightB");
    const   Vbtn = document.getElementById("leftB");



    RBtn.addEventListener("click", () => {
        if(bild1.classList.contains("in1") || bild1.classList.length === 0) {
        bild1.classList.remove("in1")
        bild1.classList.add("out1");
        bild2.classList.remove("out2")
        bild2.classList.add("in2");
        } 
    });

    Vbtn.addEventListener("click", () => {
        if(bild2.classList.contains("in2") || bild2.classList.length === 0) {
        bild2.classList.remove("in2")
        bild2.classList.add("out2");
        bild1.classList.remove("out1")
        bild1.classList.add("in1");
        console.log("funkar typ")
        } 
        else {
            console.log("funkar typ inte")
        }
    });



});