const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.login-btn');
const close = document.querySelector('.close')


registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});


loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});


btnPopup.addEventListener('click', () => {
    wrapper.classList.toggle('active-popup');
});

close.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});
