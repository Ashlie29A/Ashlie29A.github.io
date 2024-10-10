//Javascript document for L5
alert("Welcome!");

// Button to prompt writing user's name on the homepage
function buttonClick(){
    var userName = prompt("What's Your Name?");
    var nameChange = document.getElementById("Greeting").textContent = "Hello " + userName + "! Welcome to my page.";
}

// Expanding Image upon user click
function imageClick(){
    var image = document.getElementById("self-image"); 
    if (image.style.width === "302px") { 
        image.style.width = "604px"; // New width upon click
        image.style.height = "806px"; // New height upon click
    } else {
        image.style.width = "302px"; // Original Width upon re-click
        image.style.height = "403px"; // Original Height upon re-click
    }
}

function mouseOver(navItem) {
    navItem.style.backgroundColor = "lightblue";
}

function mouseOut(navItem) {
    navItem.style.backgroundColor = "";
}

function ProjectDropdown()
{
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
    }
}
}

