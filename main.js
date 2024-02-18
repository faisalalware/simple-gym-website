//prevent contact form from submitting
const form = document.querySelector("#contact-form");

form.addEventListener('submit', function (e) {
    e.preventDefault();
});

//back to top button code
var button = document.getElementById("topButton");

window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

button.addEventListener('click', function () {
    document.documentElement.scrollTop = 0;
})

//active links on page scroll code
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

let currentSection = 'banner';

window.addEventListener('scroll', () => {
    sections.forEach(sections => {
        if (window.scrollY >= (sections.offsetTop - 200)) {
            currentSection = sections.id;
        }
    })

    navLinks.forEach(navLinks => {
        if (navLinks.href.includes(currentSection)) {
            document.querySelector('.active').classList.remove('active');
            navLinks.classList.add('active');
        }
    })
})