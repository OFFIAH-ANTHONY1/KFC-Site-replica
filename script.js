const menu = document.getElementById("menu");

function displayMenuBar(){
    const menuBar = document.getElementById("menubar");
    menuBar.style.display="block";
}


menu.addEventListener("click", displayMenuBar);