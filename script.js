var dropdownBtn = document.getElementById('dropdown')
var navList = document.getElementById('nav-list')
function toggleButton() {
    navList.classList.toggle('show')
    console.log("You clicked it")
   
    
}
dropdownBtn.addEventListener('click', toggleButton)
