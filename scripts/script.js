const menu = document.getElementById('menu');
const total = document.getElementById('total');
const Bar = document.getElementsByTagName('nav')[0];
const openBtn = document.getElementById('openBtn');
console.log(Bar);
const rooms = {
    "Standard Queen Room" : 150,
    "Deluxe King Room" : 250,
    "Ocean View Room" : 275,
    "Garden View Room" : 300,
    "Presidential Suite" : 500
};
console.log(menu);
function displayMenu() {
  menu.style.display = 'flex';
  menu.style.flexDirection = 'column';
  menu.style.justifyContent = 'center';
  menu.style.alignItems = 'center';
  total.textContent = 'Total: $0.00';
}
function reserve(roomType , numPersons){
if(numPersons < 0){
  window.alert("Now we owe you some bucks creep ☠")
  menu.style.display = "none";
}
else if (numPersons == 0)
{
  window.alert("No guests HUH! you gonna pay anyway ☠")
  menu.style.display = "none";
  total.textContent = `Total: $${rooms[roomType]}.00`;
}
else
{
  total.textContent = `Total: $${rooms[roomType] * numPersons}.00`;
  setTimeout(() => {
      window.alert(`You have reserved ${numPersons} ${roomType} rooms. Your total is $${rooms[roomType] * numPersons}.00`);
      window.alert('we gotta learn backend 😩');
      menu.style.display = "none";
  }, 1000);
}

}
function displayBar(){
Bar.style.display = "flex";}
document.addEventListener('click' , function(event){
  if (!menu.contains(event.target) && ! openBtn.contains(event.target)) {
    // Your code to execute when clicking outside the menu
    menu.style.display = "none";
  }
})