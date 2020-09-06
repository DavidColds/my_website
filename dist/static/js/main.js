// Sticky Header
$(window).scroll(function () {

  if ($(window).scrollTop() > 100) {
    $('.main_h').addClass('sticky');
  } else {
    $('.main_h').removeClass('sticky');
  }
});

// Mobile Navigation
$('.mobile-toggle').click(function () {
  if ($('.main_h').hasClass('open-nav')) {
    $('.main_h').removeClass('open-nav');
  } else {
    $('.main_h').addClass('open-nav');
  }
});

$('.main_h li a').click(function () {
  if ($('.main_h').hasClass('open-nav')) {
    $('.navigation').removeClass('open-nav');
    $('.main_h').removeClass('open-nav');
  }
});

// navigation scroll lijepo radi materem
$('nav a').click(function (event) {
  var id = $(this).attr("href");
  var offset = 70;
  var target = $(id).offset().top - offset;
  $('html, body').animate({
    scrollTop: target
  }, 500);
  event.preventDefault();
});


$(function () {
  var selectedClass = "";
  $(".filter").click(function () {
    selectedClass = $(this).attr("data-rel");
    $("#gallery").fadeTo(100, 0.1);
    $("#gallery div").not("." + selectedClass).fadeOut().removeClass('animation');
    setTimeout(function () {
      $("." + selectedClass).fadeIn().addClass('animation');
      $("#gallery").fadeTo(300, 1);
    }, 300);
  });
});


$(function () {
  var selectedClass = "";
  $(".filter").click(function () {
    selectedClass = $(this).attr("data-rel");
    $("#gallery").fadeTo(100, 0.1);
    $("#gallery div").not("." + selectedClass).fadeOut().removeClass('animation');
    setTimeout(function () {
      $("." + selectedClass).fadeIn().addClass('animation');
      $("#gallery").fadeTo(300, 1);
    }, 300);
  });
});

jQuery(document).ready(function ($) {
  "use strict";
  //  TESTIMONIALS CAROUSEL HOOK
  $('#customers-testimonials').owlCarousel({
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 350,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1170: {
        items: 3
      }
    }
  });
});

// VARIABLES
const magicalUnderlines = Array.from(document.querySelectorAll('.underline--magical'));

const gradientAPI = 'https://gist.githubusercontent.com/wking-io/3e116c0e5675c8bcad8b5a6dc6ca5344/raw/4e783ce3ad0bcd98811c6531e40256b8feeb8fc8/gradient.json';

// HELPER FUNCTIONS

// 1. Get random number in range. Used to get random index from array.
const randNumInRange = max => Math.floor(Math.random() * (max - 1));

// 2. Merge two separate array values at the same index to 
// be the same value in new array.
const mergeArrays = (arrOne, arrTwo) => arrOne.
map((item, i) => `${item} ${arrTwo[i]}`).
join(', ');

// 3. Curried function to add a background to array of elms
const addBackground = elms => color => {
  elms.forEach(el => {
    el.style.backgroundImage = color;
  });
};
// 4. Function to get data from API
const getData = async url => {
  const response = await fetch(url);
  const data = await response.json();
  return data.data;
};

// 5. Partial Application of addBackground to always apply 
// background to the magicalUnderlines constant
const addBackgroundToUnderlines = addBackground(magicalUnderlines);

// GRADIENT FUNCTIONS

// 1. Build CSS formatted linear-gradient from API data
const buildGradient = obj => `linear-gradient(${obj.direction}, ${mergeArrays(obj.colors, obj.positions)})`;

// 2. Get single gradient from data pulled in array and
// apply single gradient to a callback function
const applyGradient = async (url, callback) => {
  const data = await getData(url);
  const gradient = buildGradient(data[randNumInRange(data.length)]);
  callback(gradient);
};

// RESULT
applyGradient(gradientAPI, addBackgroundToUnderlines);

var ml12 = {};
ml12.opacityIn = [0, 1];
ml12.scaleIn = [0.2, 1];
ml12.scaleOut = 3;
ml12.durationIn = 800;
ml12.durationOut = 600;
ml12.delay = 500;

anime.timeline({
    loop: true
  })
  .add({
    targets: '.ml12 .letters-1',
    translateX: [40, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.ml12 .letters-1',
    translateX: [0, -30],
    opacity: [1, 0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i
  })
  .add({
    targets: '.ml12 .letters-2',
    translateX: [40, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.ml12 .letters-2',
    translateX: [0, -30],
    opacity: [1, 0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i
  })
  .add({
    targets: '.ml12 .letters-3',
    translateX: [40, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.ml12 .letters-3',
    translateX: [0, -30],
    opacity: [1, 0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i
  })
  .add({
    targets: '.ml12 .letters-4',
    translateX: [40, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.ml12 .letters-4',
    translateX: [0, -30],
    opacity: [1, 0],
    easing: "easeInExpo",
    duration: 1200,
    delay: (el, i) => 100 + 30 * i
  });
  jQuery(document).ready(function($) {
    "use strict";
    //  TESTIMONIALS CAROUSEL HOOK
    $('#customers-testimonials').owlCarousel({
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots:true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 2
          },
          1170: {
            items: 3
          }
        }
    });
  });