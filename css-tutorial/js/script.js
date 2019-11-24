document.addEventListener("DOMContentLoaded", function (event) {

  // Indicator for job carousel
  document
    .getElementById("job-active-left-arrow")
    .addEventListener("click", function (event) {
      event.preventDefault();
      setupJobIndicator(position);
      setupJobCarouselItem(position);
    });

  document
    .getElementById("job-active-right-arrow")
    .addEventListener("click", function (event) {
      event.preventDefault();
      setupJobIndicator(position);
      setupJobCarouselItem(position);
    });

  // Indicator for quote carousel
  document
    .getElementById("quote-active-left-arrow")
    .addEventListener("click", function (event) {
      event.preventDefault();
      setupJobIndicator(position);
      setupQuoteCarouselItem(position);
    });

  document
    .getElementById("quote-active-right-arrow")
    .addEventListener("click", function (event) {
      event.preventDefault();
      setupJobIndicator(position);
      setupQuoteCarouselItem(position);
    });


  // Set up layout for chosen one
  document
    .getElementById("job-active-right-arrow")
    .addEventListener("click", function (event) {
      event.preventDefault();
      setupChooseCarousel(1);
    });

  document
    .getElementById("job-active-right-arrow")
    .addEventListener("click", function (event) {
      event.preventDefault();
      setupChooseCarousel(2);
    });

  document
    .getElementById("quote-active-left-arrow")
    .addEventListener("click", function (event) {
      event.preventDefault();
      setupChooseCarousel(3);
    });

  document
    .getElementById("quote-active-right-arrow")
    .addEventListener("click", function (event) {
      event.preventDefault();
      setupChooseCarousel(4);
    });
});

function setupNavigation() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function setupChooseCarousel(position) {

  switch (position) {
    case 1:

      break;
    case 2:

      break;
    case 3:

      break;
    case 4:

      break;
    default:

  }
}

function setupJobIndicator(position) {
  if (position == "left") {
    document.getElementById("job-active-left-arrow").style.display = "none";
    document.getElementById("job-inactive-left-arrow").style.display = "block";
    document.getElementById("job-active-right-arrow").style.display = "block";
    document.getElementById("job-inactive-right-arrow").style.display = "none";
  } else {
    document.getElementById("job-active-left-arrow").style.display = "block";
    document.getElementById("job-inactive-left-arrow").style.display = "none";
    document.getElementById("job-active-right-arrow").style.display = "none";
    document.getElementById("job-inactive-right-arrow").style.display = "block";
  }
}

function setupJobCarouselItem(position) {
  if (position == "left") {
    document.getElementById("first-job-carousel").style.display = "block";
    document.getElementById("last-job-carousel").style.display = "none";
  } else {
    document.getElementById("first-job-carousel").style.display = "none";
    document.getElementById("last-job-carousel").style.display = "block";
  }
}

function setupQuoteCarouselItem(position) {
  if (position == "left") {
    document.getElementById("first-job-carousel").style.display = "block";
    document.getElementById("last-job-carousel").style.display = "none";
  } else {
    document.getElementById("first-job-carousel").style.display = "none";
    document.getElementById("last-job-carousel").style.display = "block";
  }
}

function isVisible(elem) {
  return !!(
    elem.offsetWidth ||
    elem.offsetHeight ||
    elem.getClientRects().length
  );
}
