const switchEl = document.querySelector("#checkbox");
const price1 = document.querySelector("#price1");
const price2 = document.querySelector("#price2");
const price3 = document.querySelector("#price3");
let switchState = 1;

switchEl.addEventListener("change", function() {
    if(switchState === 1) {
        
        price1.innerHTML = "<span class='dollar' >&dollar;</span> 19.99";
        price2.innerHTML = "<span class='dollar' >&dollar;</span> 24.99";
        price3.innerHTML = "<span class='dollar' >&dollar;</span> 39.99";
        switchState = 2;
    }else {
        
        price1.innerHTML = "<span class='dollar' >&dollar;</span> 199.99";
        price2.innerHTML = "<span class='dollar' >&dollar;</span> 249.99";
        price3.innerHTML = "<span class='dollar' >&dollar;</span> 399.99";
        switchState = 1;

    }

    
})