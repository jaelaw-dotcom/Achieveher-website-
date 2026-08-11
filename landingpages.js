// MOBILE NAVIGATION

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


// CLOSE MENU WHEN A LINK IS CLICKED

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});


// PROGRESS BUTTON

const achievementBtn = document.getElementById("achievementBtn");

achievementBtn.addEventListener("click", () => {
    alert(
        "Your progress dashboard is coming soon! Keep achieving 🌟"
    );
});


// SIMPLE SCROLL REVEAL

const cards = document.querySelectorAll(
    ".about-card, .feature-box, .journey-card"
);

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }
        });
    },
    {
        threshold: 0.15
    }
);


cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(25px)";
    card.style.transition = "opacity .6s ease, transform .6s ease";

    observer.observe(card);

});