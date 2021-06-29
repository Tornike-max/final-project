let navbarlinks = document.getElementById('navBarLinks');
let togglebutton = Document.getElementById('burgerBar');

togglebutton.addEventListener('click', function(){
    navbarlinks.classlist.toggle('active');
})