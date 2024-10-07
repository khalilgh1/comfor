const Bar = document.getElementsByTagName('nav')[0];
console.log(Bar);
function displayBar() {
    Bar.style.display = "flex";
    Bar.style.animation = "slide-right 1s";
}