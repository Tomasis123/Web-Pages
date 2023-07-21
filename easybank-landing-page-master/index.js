const navToggle = document.querySelector(".nav-toggle");
const navUl = document.querySelector("nav ul");

navToggle.addEventListener("click", function() {
    if(navUl.classList.contains("close")) {
        navUl.classList = "open"
    }else if(navUl.classList.contains("open")) {
        navUl.classList = "close"
    }

    console.log(navUl.classList);
})

