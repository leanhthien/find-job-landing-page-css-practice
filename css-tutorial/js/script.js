document.addEventListener("DOMContentLoaded", function(event) {
//   document
//     .getElementById("responsive-icon")
//     .addEventListener("click", setupNavigation());
});

function setupNavigation() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
