let themeButton = document.querySelector("#darkmode-button");
let body = document.querySelector("body");

themeButton.addEventListener('click', toggleTheme);
function toggleTheme() {

    let currentTheme = body.getAttribute("data-theme");

        if (currentTheme === "dark") {
            body.removeAttribute("data-theme");
        } else {
            body.setAttribute("data-theme", "dark");
        }
        console.log(currentTheme);
}


// Parallax: Der Hintergrund bewegt sich nur halb so schnell wie die Seite
let hintergrund = document.querySelector(".hintergrund");

window.addEventListener('scroll', parallax);
function parallax() {
    let verschiebung = window.scrollY * -0.5;   // halbe Scroll-Distanz, nach oben
    hintergrund.style.transform = "translateY(" + verschiebung + "px)";
}
