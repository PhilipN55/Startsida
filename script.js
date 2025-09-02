//namnger bild o kapp och väntar på att de ska ladda innan namn
window.addEventListener("DOMContentLoaded", () => {
    const   bild = document.getElementById("img2"); 
    const   SBtn = document.getElementById("show");

    SBtn.addEventListener("click", () => {
        if(bild.style.display === "none" || bild.style.display === "") {   // Om bilden är dold → visa den
        bild.style.display = "flex";
        SBtn.textContent = "X"; // ändra knapptext
  } 
        else {     // Om bilden visas → göm den
        bild.style.display = "none";
        SBtn.textContent = "övningsprojekt";
    }
    
  });



});