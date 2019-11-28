document.addEventListener("DOMContentLoaded", function(event) {
  // Indicator for job carousel
  document
    .getElementById("job-active-left-arrow")
    .addEventListener("click", function(event) {
      event.preventDefault();
      setupJobIndicator();
      setupJobCarouselItem("left");
    });

  document
    .getElementById("job-active-right-arrow")
    .addEventListener("click", function(event) {
      event.preventDefault();
      setupJobIndicator();
      setupJobCarouselItem("right");
    });

  // Indicator for quote carousel
  document
    .getElementById("quote-active-left-arrow")
    .addEventListener("click", function(event) {
      event.preventDefault();
      setupJobIndicator(position);
      setupQuoteCarouselItem(position);
    });

  document
    .getElementById("quote-active-right-arrow")
    .addEventListener("click", function(event) {
      event.preventDefault();
      setupJobIndicator(position);
      setupQuoteCarouselItem(position);
    });

  // Set up layout for chosen one
  document
    .getElementById("first-job-carousel")
    .addEventListener("click", function(event) {
      event.preventDefault();
      setupChooseCarousel(1);
    });

  document
    .getElementById("second-job-carousel")
    .addEventListener("click", function(event) {
      event.preventDefault();
      setupChooseCarousel(2);
    });

  document
    .getElementById("third-job-carousel")
    .addEventListener("click", function(event) {
      event.preventDefault();
      setupChooseCarousel(3);
    });

  document
    .getElementById("last-job-carousel")
    .addEventListener("click", function(event) {
      event.preventDefault();
      setupChooseCarousel(4);
    });

  // Set up size for image's profile
  // setUpImageProfileSize();
});

function setupNavigation() {
  var nav = document.getElementById("myTopnav");
  if (nav.className === "topnav") {
    nav.className += " responsive";
  } else {
    nav.className = "topnav";
  }
}

function setupChooseCarousel(position) {
  switch (position) {
    case 1:
      var nav = document.getElementById("first-job-carousel");
      if (nav.className === "flex-container carousel-card first-job") {
        nav.className += " carousel-card-active";
        document.getElementById("first-job-carousel-image").src =
          "images/web-developer/web-developer-color.svg";
      } else {
        nav.className = "flex-container carousel-card first-job";
        document.getElementById("first-job-carousel-image").src =
          "images/web-developer/web-developer.svg";
      }
      break;
    case 2:
      var nav = document.getElementById("second-job-carousel");
      if (nav.className === "flex-container carousel-card second-job") {
        nav.className += " carousel-card-active";
        document.getElementById("second-job-carousel-image").src =
          "images/graphic-design/graphic-design-color.svg";
      } else {
        nav.className = "flex-container carousel-card second-job";
        document.getElementById("second-job-carousel-image").src =
          "images/graphic-design/graphic-design.svg";
      }
      break;
    case 3:
      var nav = document.getElementById("third-job-carousel");
      if (nav.className === "flex-container carousel-card third-job") {
        nav.className += " carousel-card-active";
        document.getElementById("third-job-carousel-image").src =
          "images/digital-marketing/digital-marketing-color.svg";
      } else {
        nav.className = "flex-container carousel-card third-job";
        document.getElementById("third-job-carousel-image").src =
          "images/digital-marketing/digital-marketing.svg";
      }
      break;
    case 4:
      var nav = document.getElementById("last-job-carousel");
      if (nav.className === "flex-container carousel-card last-job") {
        nav.className += " carousel-card-active";
        document.getElementById("last-job-carousel-image").src =
          "images/web-developer/web-developer-color.svg";
      } else {
        nav.className = "flex-container carousel-card last-job";
        document.getElementById("last-job-carousel-image").src =
          "images/graphic-design/graphic-design.svg";
      }
      break;
    default:
  }
}

function setupJobIndicator() {
  var firstCarousel = document.getElementById("first-job-carousel");
  var lastCarousel = document.getElementById("last-job-carousel");

  if (isVisible(firstCarousel)) {
    document.getElementById("job-active-left-arrow").style.display = "none";
    document.getElementById("job-inactive-left-arrow").style.display = "block";
  } else {
    document.getElementById("job-active-left-arrow").style.display = "block";
    document.getElementById("job-inactive-left-arrow").style.display = "none";
  }

  if (isVisible(lastCarousel)) {
    console.log('Right arrow: ' + isVisible(lastCarousel));
    document.getElementById("job-active-right-arrow").style.display = "none";
    document.getElementById("job-inactive-right-arrow").style.display = "block";
  } else {
    document.getElementById("job-active-right-arrow").style.display = "block";
    document.getElementById("job-inactive-right-arrow").style.display = "none";
  }
}

function setupJobCarouselItem(position) {
  var listJobs = document.getElementsByClassName("carousel-card");
  var visibleList = new Array();

  for (var i = 0, max = listJobs.length; i < max; i++) {
    if (!isHidden(listJobs[i])) {
      visibleList.push(i);
    } 
  }

  if (position === "right") {

    if (visibleList[0] > 0) {
      listJobs[0].style.display = "block";
    }
    else {
      listJobs[3].style.display = "block";
    }
    
    if (visibleList[visibleList[length - 1]] < 3) {
    
    }
    else {
      
    }
    
  } else {

    
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

function setUpImageProfileSize() {
  // var blurDivWidth = document.getElementsByClassName("blur-profile-list")
  //   .offsetWidth;
  // console.log("Current div: " + blurDivWidth);
  // if (blurDivWidth) {
  //   document.getElementsByClassName("profile-image-item").offsetWidth =
  //     0.9 * blurDivWidth;
  //   document.getElementsByClassName("profile-image-item").offsetHeight =
  //     0.9 * blurDivWidth;
  // }
}

function isVisible(elem) {
  return !!(
    elem.offsetWidth ||
    elem.offsetHeight ||
    elem.getClientRects().length
  );
}

function isHidden(el) {
  var style = window.getComputedStyle(el);
  return style.display === "none" || style.visibility === "hidden";
}
