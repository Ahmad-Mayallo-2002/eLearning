// Start Go To Up
const go = document.querySelector(".go");
window.addEventListener("scroll", () => {
    if (window.scrollY >= 500) {
        go.classList.add("opacity-100");
    } else {
        go.classList.remove("opacity-100");
    }
});
go.onclick = () => {
    window.scrollTo({top: 0,behavior: "smooth"})
}
// End Go To Up
// Start Header
const toggle = document.querySelector(".toggle");
const ul = document.querySelector("ul");
toggle.onclick = () => { ul.classList.toggle("ul-active") };
// Start Landing
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const iconsIndicators = document.querySelectorAll(".indicators i");
const articles = document.querySelectorAll(".slider article");

let counter = 0;

function goToNext() {
    articles[counter].style.animation = "next1 1s forwards";
    if (counter >= articles.length - 1) {
        counter = 0;
    } else {
        counter++;
    }
    articles[counter].style.animation = "next2 1s forwards";
}

function goToPrev() {
    articles[counter].style.animation = "prev1 1s forwards";
    if (counter == 0) {
        counter = articles.length - 1;
    } else {
        counter--;
    }
    articles[counter].style.animation = "prev2 1s forwards";
}

next.onclick = () => { goToNext() };

prev.onclick = () => { goToPrev() };

function play() {
    const autoPlay = setInterval(() => {goToNext()}, 3000);
    window.autoPlay = autoPlay;
};

play();

iconsIndicators.forEach(
    icon => {
        icon.addEventListener("mouseover", () => {
            clearInterval(autoPlay);
        })
        icon.addEventListener("mouseout", play);
    }
);
// Start Features
const features = document.querySelector(".features");
const cols = document.querySelectorAll(".features .col");
const featuresTop = features.getBoundingClientRect().top;
cols.forEach(
    (col, index) => {
        col.style.transition = 
        `color .5s,background-color .5s,opacity .5s ${index * .2}s,transform .5s ${index * .2}s`;
    }
);

window.addEventListener("scroll", () => {
    if (window.scrollY >= featuresTop - 200) {
        cols.forEach(col => col.classList.add("load-active"));
    }
})

// Start About
const about = document.querySelector(".about")
const aboutFigure = document.querySelector(".about figure");
const aboutArticle = document.querySelector(".about article");
const aboutTop = about.getBoundingClientRect().top;

window.addEventListener("scroll", () => {
    if (window.scrollY >= aboutTop - 200) {
        aboutFigure.classList.add("load-active");
        aboutArticle.classList.add("load-active")
    }
})
// End About
// Start Categories
const categories = document.querySelector(".categories");
const categoriesFigures = document.querySelectorAll(".categories figure");
const categoriesTop = categories.getBoundingClientRect().top;

categoriesFigures.forEach((figure, index) => figure.style.transitionDelay = `${index * .2}s`);

window.addEventListener("scroll", () => {
    if (window.scrollY >= categoriesTop - 200) {
        categoriesFigures.forEach(figure => figure.classList.add("categories-active"));
    }
})

// End Categories
// Start Popular
const popular = document.querySelector(".popular");
const popularCourses = document.querySelectorAll(".popular .course");
const popularTop = popular.getBoundingClientRect().top;

popularCourses.forEach((course, index) => course.style.transitionDelay = `${index * .2}s`);

window.addEventListener("scroll", () => {
    if (window.scrollY >= popularTop - 200) {
        popularCourses.forEach(course => course.classList.add("load-active"));
    }
});
// End Popular
// Start Instructors
const instructors = document.querySelector(".instructors");
const instructorsFigures = document.querySelectorAll(".instructors figure");
const instructorsTop = instructors.getBoundingClientRect().top;

instructorsFigures.forEach((figure, index) => figure.style.transitionDelay = `${index * .2}s`);

window.addEventListener("scroll", () => {
    if (window.scrollY >= instructorsTop - 200) {
        instructorsFigures.forEach(figure => figure.classList.add("load-active"));
    }
});
// End Instructors
// Start Testimonials
const testimonials = document.querySelector(".testimonials");
const testimonialsTop = testimonials.getBoundingClientRect().top;
const carousel = document.querySelector(".carousel");

window.addEventListener( "scroll", () => { if (window.scrollY >= testimonialsTop - 200) { carousel.classList.add("load-active") } } );
// End Testimonials
// Start Footer
const form = document.querySelector("footer form");
const emailInput = document.querySelector("footer form input[type='text']");
const formSpan = document.querySelector("footer .error-message");

form.onsubmit = (e) => {
    if (emailInput.value == "") {
        e.preventDefault();
        formSpan.classList.remove("opacity-0");
    } else if (!/\w+@(gmail|yahoo)\.com/.test(emailInput.value)) {
        e.preventDefault();
        formSpan.classList.remove("opacity-0");
    } else {
        formSpan.classList.add("opacity-0");
    }
}
emailInput.oninput = () => {
    formSpan.classList.add("opacity-0");
}
// End Footer

/*

#fff (White) -> #000 (Black)
#0dcaf0 (Cyan) -> #00adb5 (Dark Cyan)
#06bbcc (Turquoise) -> #05a9b6 (Dark Turquoise)
#888 (Gray) -> #ddd (Light Gray)
#dc3545 (Red) -> #ff4d5a (Dark Red)
#6c757d (Slate Gray) -> #b4bdc2 (Light Slate Gray)
#212529 (Black) -> #f8f9fa (White)
#181d38 (Dark Blue) -> #e6e9ef (Light Blue)
#000 (Black) -> #fff (White)

*/