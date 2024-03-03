const wrapper = document.querySelector('.wrapper');
const facebookLink = document.querySelector('.facebook-login');
const googleLink = document.querySelector('.google-login');

google-login.addEventListener('click', () => {
    wrapper.classList.add('active');
});
facebook-login.addEventListener('click', () => {
    wrapper.classList.remove('active ');
});



