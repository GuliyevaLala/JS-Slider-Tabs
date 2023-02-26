let headers = document.querySelectorAll(".headers .item");
let icon = document.querySelectorAll(".headers i");

let contents = document.querySelectorAll(".contents .item")


headers.forEach(tab => {
    tab.addEventListener("click", function(){
        document.querySelector(".active-menu").classList.remove("active-menu");
        this.classList.add("active-menu");
        document.querySelector(".active").classList.remove("active");
        this.classList.add("active");


        contents.forEach(content => {
            if (this.getAttribute("data-id") == content.getAttribute("data-id")) {
                content.classList.remove("d-none");
            }
            else{
                content.classList.add("d-none");
            }
            
        });
    })
    
});


leftIcon = document.querySelector(".slider .left");
rightIcon = document.querySelector(".slider .right")


function rightSlider(){
    let activeImage = document.querySelector(".active-img");
    activeImage.classList.remove("active-img");
    if (activeImage.nextElementSibling != null) {
        activeImage.nextElementSibling.classList.add("active-img");
        
    }else{
        activeImage.parentNode.firstElementChild.classList.add("active-img");
    }
}

function leftSlider(){
    let activeImage = document.querySelector(".active-img");
    activeImage.classList.remove("active-img");
    if (activeImage.previousElementSibling != null) {
        activeImage.previousElementSibling.classList.add("active-img");
        
    }else{
        activeImage.parentNode.lastElementChild.classList.add("active-img");
    }
}



setInterval(rightSlider , 1000);


leftIcon.addEventListener("click", leftSlider);
rightIcon.addEventListener("click", rightSlider);