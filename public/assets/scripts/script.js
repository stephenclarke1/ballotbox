// toggle 'dropdown-visible' class for dropdown content
function myFunction(a) {
    a.parentNode.getElementsByClassName("dropdown-submenu")[0].classList.toggle("dropdown-visible");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropdown-button')) { 
      var dropdowns = document.getElementsByClassName("dropdown-submenu");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('dropdown-visible')) {
          openDropdown.classList.remove('dropdown-visible');
        }
      }
    }
  }

// mobile menu toggle
// when button clicked, add class 'menu-toggle-open'
// add class 'mobile-menu-open' to primary-nav

function menuToggle () {
  const menuButton = document.getElementById("menuButton");
  const navMenu = document.getElementById("primaryNav");
  menuButton.classList.toggle("menu-toggle-open");
  if (menuButton.classList.contains("menu-toggle-open")) {
    navMenu.classList.toggle("mobile-menu-open");
  } else {
    navMenu.classList.toggle("mobile-menu-open");
  }
}