//namnger bild o kapp och väntar på att de ska ladda innan namn
window.addEventListener("DOMContentLoaded", () => {
    const   T = document.getElementById("Tillbaka"); 
    const   PK = document.getElementById("Projekt");
    const   OK = document.getElementById("Ovningar");
    const   P = document.querySelectorAll(".a2");
    const   O = document.querySelectorAll(".a3");

    PK.addEventListener("click", () => {
        if(T.style.visibility === "hidden" || T.style.display === "") {   // Om bilden är dold visa den
        PK.style.display = "none";
        OK.style.display = "none";
        T.style.visibility = "visible";
        P.forEach(el => {
          el.style.display = "flex";
        });
        } 
      });
    OK.addEventListener("click", () => {
        if(T.style.visibility === "hidden" || T.style.display === "") {
        PK.style.display = "none";
        OK.style.display = "none";
        T.style.visibility = "visible";

        O.forEach(el => {
          el.style.display = "flex";
        });
      }
    });
    T.addEventListener("click", () => {
        if(T.style.visibility === "visible"){
        PK.style.display = "flex";
        OK.style.display = "flex";
        T.style.visibility = "hidden";

        P.forEach(el => {
          el.style.display = "none";
        })
        O.forEach(el => {
          el.style.display = "none";
        })
        }
    
    });
});