import _ from 'lodash';
import '../css/font.css';
import '../css/chapter.css';
import css from '../css/chapter4.css';
import '../css/soundcite.min.css';
import './../js/plugin/soundcite.min.js';
var $ = require("jquery");

import '../css/swiper.min.css';
import Swiper from './../js/plugin/swiper.min.js';

$(document).ready(function () {
  $('.landscape').removeClass('hide');
  $('.landscape').addClass('active');
  $('.portrait').removeClass('active');
  $('.portrait').addClass('hide');
});

  $(window).on("orientationchange", function(){
    if ($('.landscape').hasClass('active')) {
      $('.landscape').addClass('hide');
      $('.landscape').removeClass('active');
      $('.portrait').addClass('active');
      $('.portrait').removeClass('hide');
      $('.full-orientation').removeClass('active');
      $('.full-orientation').addClass('hide');
    }
    else if ($('.landscape').hasClass('hide')) {
      $('.landscape').removeClass('hide');
      $('.landscape').addClass('active');
      $('.portrait').removeClass('active');
      $('.portrait').addClass('hide');
      $('.full-orientation').removeClass('active');
      $('.full-orientation').addClass('hide');
    }
  });


$("#open-slider").on("click", function() {
  $('.popup').css('display','block');
   $('.close').css('display', 'block');
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


// desktop popup

$("#_1").click(function () {
    $(".p-text").removeClass("active-p");
    $('#text-1').addClass("active-p");
});

$("#_2").click(function () {
    $(".p-text").removeClass("active-p");
    $('#text-2').addClass("active-p");
});

$("#_3").click(function () {
    $(".p-text").removeClass("active-p");
    $('#text-3').addClass("active-p");
});

$("#_4").click(function () {
    $(".p-text").removeClass("active-p");
    $('#text-4').addClass("active-p");
});

$("#_5").click(function () {
    $(".p-text").removeClass("active-p");
    $('#text-5').addClass("active-p");
});


// mobile popup

$("#one").click(function () {
    console.log('click');
    $(".p-text").removeClass("active-p");
    $('#text-1').addClass("active-p");
    $('#_1').addClass("active-p");
    $('#_1-bg').addClass("active-p");
});

$("#two").click(function () {
    $(".p-text").removeClass("active-p");
    $('#text-2').addClass("active-p");
    $('#_2').addClass("active-p");
    $('#_2-bg').addClass("active-p");
});

$("#three").click(function () {
    $(".p-text").removeClass("active-p");
    $('#text-3').addClass("active-p");
    $('#_3').addClass("active-p");
    $('#_3-bg').addClass("active-p");
});

$("#four").click(function () {
    $(".p-text").removeClass("active-p");
    $('#text-4').addClass("active-p");
    $('#_4').addClass("active-p");
    $('#_4-bg').addClass("active-p");
});

$("#five").click(function () {
    $(".p-text").removeClass("active-p");
    $('#text-5').addClass("active-p");
    $('#_5').addClass("active-p");
    $('#_5-bg').addClass("active-p");
});
