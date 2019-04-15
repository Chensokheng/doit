const nav_content = document.querySelector(".nav-content");
const bar = document.querySelector(".fa-bars");
const closeBtn = document.querySelector(".fa-times");

bar.addEventListener("click", () => {
    nav_content.style.width = '100%';
});
closeBtn.addEventListener("click", () => {
    nav_content.style.width = '0%';

})