const menu_bar = document.querySelector(".fa-bars");
const closeBtn = document.querySelector(".fa-times");
const nav_content = document.querySelector(".nav-content");
const nav_content1 = document.querySelector(".nav-content span");
const nav_content2 = document.querySelector(".nav-content span span");


// open the menu
menu_bar.addEventListener("click", () => {
    nav_content.style.visibility = 'visible';
    nav_content1.style.transform = 'scale(1)';
    nav_content1.style.transitionDuration = '0.75s';
    nav_content2.style.opacity = '1';
});

// closing the menu
closeBtn.addEventListener("click", () => {
    nav_content.style.visibility = 'hidden';
    nav_content1.style.transform = 'scale(0)';

    nav_content2.style.opacity = '0';
})
