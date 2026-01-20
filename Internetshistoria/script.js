//lite ai kanske
/* Hämtar alla element som har klassen INFO1 */
const boxes = document.querySelectorAll('.INFO1');
/* Skapar en IntersectionObserver. Den känner av när ett element syns i webbläsaren */
const observer = new IntersectionObserver(entries => {
    /* Loopar igenom alla observerade element */
    entries.forEach(entry => {
        /* Om elementet är synligt på skärmen */
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
    /* threshold: 0.2 betyder att 20% av elementet måste synas innan animationen triggas */
}, {
    threshold: 0.2
});
/* Börjar observera varje INFO1-ruta */
boxes.forEach(box => {
    /* Kopplar observern till elementet */
    observer.observe(box);
});
