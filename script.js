//outside block variables
const menu = document.getElementById("menu");
const searchIcon = document.getElementById("search-icon");
const backIcon = document.getElementById("back-icon");

//display menu bar
function displayMenuBar(){
    const menuBar = document.getElementById("menubar");
    menuBar.style.display="block";
}

menu.addEventListener("click", displayMenuBar);

//hide menu bar
function hideMenuBar(){
    const menuBar = document.getElementById("menubar");
    menuBar.style.display="none";
}

backIcon.addEventListener("click", hideMenuBar);

//display search input

function displaySearchInput(){
    const search = document.getElementById("search");
    search.style.display="block";
}

searchIcon.addEventListener("click", displaySearchInput);