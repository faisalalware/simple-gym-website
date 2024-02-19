# Simple Gym Website

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

This is a simple single page website built with HTML, CSS & JavaScript. This website is based on a gym which represents information about the gym in 5 sections such, home, about, programs, trainers & contact.

### Screenshot

![screenshot](./images/screenshot-1.png)
![screenshot](./images/screenshot-2.png)

### Links

- Live Site URL: [https://faisalalware.github.io/simple-gym-website/](https://faisalalware.github.io/simple-gym-website/)

## My process

### Built with

- HTML
- CSS
- JavaScript
- Bootstrap
- Mobile-first workflow

### What I learned

This project helped me to refresh my HTML, CSS & Bootstrap skills. I've learned active links on page scroll in JS.

To checkout how i learned, see below code:

```js
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
```

### Useful resources

- [W3Schools](https://www.w3schools.com/) - This is an amazing article which helped me finally understand frontend concepts. I'd recommend it to anyone still learning this concept.

## Author

- LinkedIn - [Faisal Alware](https://www.linkedin.com/in/faisal-alware-048763b8/)
- Github - [@faisalalware](https://github.com/faisalalware)