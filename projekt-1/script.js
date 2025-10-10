window.addEventListener("DOMContentLoaded", () => {
    const   bild1 = document.getElementById("slide1");
    const   bild2 = document.getElementById("slide2");
    const   bild3 = document.getElementById("slide3")
    const   p1 = document.getElementById("p1")
    const   p2 = document.getElementById("p2")
    const   p3 = document.getElementById("p3")
    const   t1 = document.getElementById("t1")
    const   t2 = document.getElementById("t2")
    const   h1 = document.getElementById("h1")
    const   RBtn = document.getElementById("rightB");
    const   Vbtn = document.getElementById("leftB");


    RBtn.addEventListener("click", () => {
        if(bild1.classList.contains("in1") || bild1.classList.length === 0) {
        bild1.classList.add("out11");
        bild3.classList.remove("out31")
        bild3.classList.add("in3");
        bild2.classList.add("out2")
        bild2.classList.add("out22");
        p1.style.display = "none";
        p3.style.display = "block";
        t1.style.display = "none";
        t3.style.display = "block";
        h1.textContent = "SCP - 6448";
        } 

    });




    Vbtn.addEventListener("click", () => {
        if(bild3.classList.contains("in3") || bild3.classList.length === 0) {
            bild3.classList.remove("in3")
            bild3.classList.add("out31")
            bild1.classList.remove("out11")
            bild1.classList.add("in1")
            bild2.classList.remove("out22")
            bild2.classList.add("out2")
            p3.style.display = "none";
            p1.style.display = "block";
            t3.style.display = "none";
            t1.style.display = "block";
            h1.textContent = "SCP - 049";
            console.log("condition1")
            }
        
        else{
                if(bild1.classList.contains("in1") || bild1.classList.length === 0) {
                bild1.classList.remove("in1")
                bild1.classList.add("out1");
                bild2.classList.remove("out2")
                bild2.classList.add("in2");
                bild3.classList.remove("out31")
                bild3.classList.add("out32")
                p1.style.display = "none";
                p2.style.display = "block";
                t1.style.display = "none";
                t2.style.display = "block";
                h1.textContent = "SCP - 914";
                console.log("condition2")}    
        }});


    RBtn.addEventListener("click", () => {
        if(bild2.classList.contains("in2") || bild2.classList.length === 0) {
        bild2.classList.remove("in2")
        bild2.classList.add("out2");
        bild1.classList.remove("out1")
        bild1.classList.add("in1");
        bild3.classList.remove("out32")
        bild3.classList.add("out31")
        p2.style.display = "none";
        p1.style.display = "block";
        t2.style.display = "none";
        t1.style.display = "block";
        h1.textContent = "SCP - 049";
        } 
    });



});