//handle navbar active links on page scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

let currentSection = 'banner';

window.addEventListener('scroll', function () {
    sections.forEach(sections => {
        if (window.scrollY >= (sections.offsetTop - 200)) {
            currentSection = sections.id;
        }
    });

    navLinks.forEach(navLinks => {
        if (navLinks.href.includes(currentSection)) {
            document.querySelector('.active').classList.remove('active');
            navLinks.classList.add('active');
        }
    });
});


//handle banner text change
const text = document.querySelector('.banner-highlight');

function textLoad() {
    setTimeout(() => {
        text.textContent = "gym";
    }, 0);

    setTimeout(() => {
        text.textContent = "programs";
    }, 4000);

    setTimeout(() => {
        text.textContent = "trainers";
    }, 8000);
}

textLoad();
setInterval(textLoad, 12000);


//handle empty contact form submitting
const form = document.querySelector("#contact-form");

form.addEventListener('submit', function (e) {
    e.preventDefault();
});


//handle back to top button
var button = document.getElementById("top-button");

window.addEventListener('scroll', function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
});

button.addEventListener('click', function () {
    document.documentElement.scrollTop = 0;
});