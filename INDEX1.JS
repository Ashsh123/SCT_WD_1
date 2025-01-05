function toggleNavbar() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
      x.className += " responsive";
  } else {
      x.className = "topnav";
  }
}

// Separate scroll event listener
window.addEventListener('scroll', function() {
  var navbar = document.getElementById("myTopnav");
  if (window.pageYOffset > 50) {
      navbar.style.backgroundColor = '#555';
  } else {
      navbar.style.backgroundColor = '#333';
  }
});