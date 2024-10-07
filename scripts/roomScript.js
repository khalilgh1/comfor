const Bar = document.getElementsByTagName('nav')[0];
console.log(Bar);
function displayBar() {
    Bar.style.display = "flex";
    Bar.style.animation = "slide-right 1s";
}
const swiper = new Swiper('.swiper', {
    loop: true,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
