var featured_1 = document.querySelector("#featured_1");
function hideTitle() {
  document
    .getElementById("chair__clair")
    .addEventListener("mouseover", function(e) {
      featured_1.hidden = true;
    });

  document
    .getElementById("chair__clair")
    .addEventListener("mouseout", function(e) {
      featured_1.hidden = false;
    });
  document
    .getElementById("chair__margarita")
    .addEventListener("mouseover", function(e) {
      featured_2.hidden = true;
    });
  document
    .getElementById("chair__margarita")
    .addEventListener("mouseout", function(e) {
      featured_2.hidden = false;
    });
}
hideTitle();

var dropdown = document.querySelector(".header__submenu");
var dropdown2 = document.querySelector(".header__submenu__2");
var dropdown3 = document.querySelector(".header__submenu__3");
var dropdownDecor = document.querySelector(".submenu__arrow");
var dropdownDecor2 = document.querySelector(".submenu__arrow__2");
var dropdownDecor3 = document.querySelector(".submenu__arrow__3");
var navItem = document.querySelector(".header__nav-item");
var navItem2 = document.querySelector(".header__nav-item__2");
var navItem3 = document.querySelector(".header__nav-item__3");

function showDropdown() {
  navItem.addEventListener("mouseover", function(e) {
    dropdown.style.display = "block";
  });
  navItem.addEventListener("mouseout", function(e) {
    dropdown.style.display = "none";
  });
  navItem.addEventListener("mouseover", function(e) {
    dropdownDecor.style.display = "block";
  });
  navItem.addEventListener("mouseout", function(e) {
    dropdownDecor.style.display = "none";
  });
  navItem2.addEventListener("mouseover", function(e) {
    dropdown2.style.display = "block";
  });
  navItem2.addEventListener("mouseout", function(e) {
    dropdown2.style.display = "none";
  });
  navItem2.addEventListener("mouseover", function(e) {
    dropdownDecor2.style.display = "block";
  });
  navItem2.addEventListener("mouseout", function(e) {
    dropdownDecor2.style.display = "none";
  });
  navItem3.addEventListener("mouseover", function(e) {
    dropdown3.style.display = "block";
  });
  navItem3.addEventListener("mouseout", function(e) {
    dropdown3.style.display = "none";
  });
  navItem3.addEventListener("mouseover", function(e) {
    dropdownDecor3.style.display = "block";
  });
  navItem3.addEventListener("mouseout", function(e) {
    dropdownDecor3.style.display = "none";
  });
}
showDropdown();

var prev = document.querySelector(".prev");
var next = document.querySelector(".next");
var images = document.querySelectorAll(".intro__img ul li");

var index = 0;

images[index].style.display = "initial";

prev.addEventListener("click", function() {
  images[index].style.display = "none";
  index--;
  if (index < 0) {
    index = images.length - 1;
  }
  images[index].style.display = "initial";
});

next.addEventListener("click", function() {
  images[index].style.display = "none";
  index++;
  if (index >= images.length) {
    index = 0;
  }
  images[index].style.display = "initial";
});

var checkbox = document.querySelector(".contact__send-checkbox");
var checkboxIcon = document.querySelector(".checkbox-icon");

function check() {
  checkboxIcon.addEventListener("click", function() {
    if (checkboxIcon.style.backgroundImage == "none") {
      checkboxIcon.style.backgroundImage = "url(css/images/form_ok.jpg)";
    } else checkboxIcon.style.backgroundImage = "none";
  });
}

check();

function highlight() {
  navItem.addEventListener("mouseover", function() {
    dropdown.style.color = "#ffffff";
    this.style.color = "#24ba9e";
    this.addEventListener("mouseout", function() {
      this.style.color = "#ffffff";
    });
  });
  navItem2.addEventListener("mouseover", function() {
    dropdown2.style.color = "#ffffff";
    this.style.color = "#24ba9e";
    this.addEventListener("mouseout", function() {
      this.style.color = "#ffffff";
    });
  });
  navItem3.addEventListener("mouseover", function() {
    dropdown3.style.color = "#ffffff";
    this.style.color = "#24ba9e";
    this.addEventListener("mouseout", function() {
      this.style.color = "#ffffff";
    });
  });
}

highlight();

var seeMore = document.querySelector(".button1");

function shade() {
  seeMore.addEventListener("mouseover", function() {
    this.style.boxShadow = "5px 5px 61px -5px rgba(0,0,0,0.33)";
    this.addEventListener("mouseout", function() {
      this.style.boxShadow = "none";
    });
  });
}

shade();
