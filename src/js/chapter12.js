import _ from 'lodash';
import '../css/font.css';
import css from '../css/chapter12.css';
var $ = require("jquery");

import '../css/swiper.min.css';
import Swiper from './../js/plugin/swiper.min.js';


// plain text button toggle

$(".plain-text").on("click", function(e) {
  $('.landscape').addClass('hide');
  $('.full-orientation').removeClass('active');
  $('.full-orientation').addClass('hide');
  $('.portrait').addClass('active');
  $('.portrait').removeClass('hide');
});

$(window).on("orientationchange", function(){
  $('.landscape').removeClass('hide');
  $('.landscape').addClass('active');
  $('.portrait').removeClass('active');
  $('.portrait').addClass('hide');
  $('.full-orientation').removeClass('hide');
  $('.full-orientation').addClass('active');
  
});


// //appends an "active" class to .popup and .popup-content when the "Open" button is clicked
$("#lactation-btn").on("click", function() {
  $("#lactation-popup").css('display','block');
  var s1 = new Swiper('.s1', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

});

$("#furuncle-btn").on("click", function() {
  $("#furuncle-popup").css('display','block');
  var s2 = new Swiper('.s2', {
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

$("#arthritis-btn").on("click", function() {
  $("#arthritis-popup").css('display','block');
  var s3 = new Swiper('.s3', {
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

$("#detox-btn").on("click", function() {
  $("#detox-popup").css('display','block');
  var s4 = new Swiper('.s4', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

});

//removes the "active" class to .popup and .popup-content when the "Close" button is clicked
$(".close").on("click", function(e) {
  $(this).closest('.popup').css('display','none');
});

$(document).keydown(function(event) { 
  if (event.keyCode == 27) { 
    $('.popup').css('display','none');
  }
});
