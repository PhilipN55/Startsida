window.addEventListener("DOMContentLoaded", () => {
    const   bild1 = document.getElementById("slide1");
    const   bild2 = document.getElementById("slide2");
    const   p1 = document.getElementById("p1")
    const   p2 = document.getElementById("p2")
    const   t1 = document.getElementById("t1")
    const   t2 = document.getElementById("t2")
    const   h1 = document.getElementById("h1")
    const   RBtn = document.getElementById("rightB");
    const   Vbtn = document.getElementById("leftB");



    RBtn.addEventListener("click", () => {
        if(bild1.classList.contains("in1") || bild1.classList.length === 0) {
        bild1.classList.remove("in1")
        bild1.classList.add("out1");
        bild2.classList.remove("out2")
        bild2.classList.add("in2");
        p1.style.display = "none";
        p2.style.display = "block";
        t1.style.display = "none";
        t2.style.display = "block";
        h1.textContent = "SCP-914"
        } 
    });

    Vbtn.addEventListener("click", () => {
        if(bild2.classList.contains("in2") || bild2.classList.length === 0) {
        bild2.classList.remove("in2")
        bild2.classList.add("out2");
        bild1.classList.remove("out1")
        bild1.classList.add("in1");
        p2.style.display = "none";
        p1.style.display = "block";
        t2.style.display = "none";
        t1.style.display = "block";
        h1.textContent = "SCP-049"
        } 
    });



});