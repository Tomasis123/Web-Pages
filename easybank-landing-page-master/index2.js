const navToggle = document.querySelector(".nav-toggle");
const ul = document.querySelector("ul.close")

navToggle.addEventListener("click", function() {
    if(ul.classList.contains("close")) {
        ul.classList = "open"
    }else if(ul.classList.contains("open")) {
        ul.classList = "close"
    }

    console.log(ul.classList);
})