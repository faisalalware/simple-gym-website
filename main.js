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