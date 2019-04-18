const signUp_btn = document.querySelector(".signUp");
const signIn_btn = document.querySelector(".signIn");
const signUp_form = document.querySelector(".signUp_form");
const signIn_form = document.querySelector(".signIn_form");

signIn_btn.addEventListener('click', () => {
    signUp_btn.classList.remove('registerToggler');
    signIn_btn.classList.add("registerToggler");
    signUp_form.style.display = 'none';
    signIn_form.style.display = 'block';
});

signUp_btn.addEventListener('click', () => {
    signIn_btn.classList.remove('registerToggler');
    signUp_btn.classList.add("registerToggler");
    signIn_form.style.display = 'none';
    signUp_form.style.display = 'block';
});