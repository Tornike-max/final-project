/* burger*/

let navbarLinks = document.getElementById('navBarlinks');
let toggleButton = document.getElementById('burgerBar');

toggleButton.addEventListener('click', function()  {

navbarLinks.classList.toggle('active');

})