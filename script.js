let navbar = document.querySelector('.navbar');
let login = document.querySelector('.login');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    login.classList.remove('active');
}

document.querySelector('#login-btn').onclick = () => {
    login.classList.toggle('active');
    navbar.classList.remove('active');
}