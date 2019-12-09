import _ from 'lodash';
import '../css/font.css';
import css from '../css/aboutpangolin.css';
var $ = require("jquery");

import '../css/swiper.min.css';
import Swiper from './../js/plugin/swiper.min.js';


// plain text button toggle

// $(".plain-text").on("click", function(e) {
//   $('.landscape').addClass('hide');
//   $('.full-orientation').removeClass('active');
//   $('.full-orientation').addClass('hide');
//   $('.portrait').addClass('active');
//   $('.portrait').removeClass('hide');
// });
//
// $(window).on("orientationchange", function(){
//   $('.landscape').removeClass('hide');
//   $('.landscape').addClass('active');
//   $('.portrait').removeClass('active');
//   $('.portrait').addClass('hide');
//   $('.full-orientation').removeClass('hide');
//   $('.full-orientation').addClass('active');
//
// });

//appends an "active" class to .popup and .popup-content when the "Open" button is clicked
$("#orangasli-btn").on("click", function() {
  $("#orangasli-popup").css('display','block');
  var swiper = new Swiper('.s1', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    mousewheel: true,
    keyboard: {
      enabled: true
    },
    });

});

//removes the "active" class to .popup and .popup-content when the "Close" button is clicked
$(".close").on("click", function() {
  $("#orangasli-popup").css('display','none');
});

$(document).keydown(function(event) {
  if (event.keyCode == 27) {
    $('#orangasli-popup').css('display','none');
  }
});


//appends an "active" class to .popup and .popup-content when the "Open" button is clicked
$("#expert-btn").on("click", function() {
  $("#expert-popup").css('display','block');
  var swiper = new Swiper('.s2', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    mousewheel: true,
    keyboard: {
      enabled: true
    },
    });

});

//removes the "active" class to .popup and .popup-content when the "Close" button is clicked
$(".close").on("click", function() {
  $("#expert-popup").css('display','none');
});

$(document).keydown(function(event) {
  if (event.keyCode == 27) {
    $('#expert-popup').css('display','none');
  }
});
