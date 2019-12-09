import _ from 'lodash';
import '../css/font.css';
import css from '../css/chapter6.css';
import '../css/chapter.css';
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
    $(".ww-text").removeClass("active-w");
    $('#text-1').addClass("active-w");
});

$("#_2").click(function () {
    $(".ww-text").removeClass("active-w");
    $('#text-2').addClass("active-w");
});

$("#_3").click(function () {
    $(".ww-text").removeClass("active-w");
    $('#text-3').addClass("active-w");
});

$("#_4").click(function () {
    $(".ww-text").removeClass("active-w");
    $('#text-4').addClass("active-w");
});

$("#_5").click(function () {
    $(".ww-text").removeClass("active-w");
    $('#text-5').addClass("active-w");
});

$("#_6").click(function () {
    $(".ww-text").removeClass("active-w");
    $('#text-6').addClass("active-w");
});

$("#_7").click(function () {
    $(".ww-text").removeClass("active-w");
    $('#text-7').addClass("active-w");
});


// mobile popup

$("#one").click(function () {
    console.log('click');
    $(".ww-text").removeClass("active-w");
    $('#text-1').addClass("active-w");
    $('#_1').addClass("active-w");
    $('#_1-bg').addClass("active-w");
});

$("#two").click(function () {
    $(".ww-text").removeClass("active-w");
    $('#text-2').addClass("active-w");
    $('#_2').addClass("active-w");
    $('#_2-bg').addClass("active-w");
});

$("#three").click(function () {
    $(".ww-text").removeClass("active-w");
    $('#text-3').addClass("active-w");
    $('#_3').addClass("active-w");
    $('#_3-bg').addClass("active-w");
});

$("#four").click(function () {
    $(".ww-text").removeClass("active-w");
    $('#text-4').addClass("active-w");
    $('#_4').addClass("active-w");
    $('#_4-bg').addClass("active-w");
});

$("#five").click(function () {
    $(".ww-text").removeClass("active-w");
    $('#text-5').addClass("active-w");
    $('#_5').addClass("active-w");
    $('#_5-bg').addClass("active-w");
});

$("#six").click(function () {
    $(".ww-text").removeClass("active-w");
    $('#text-6').addClass("active-w");
    $('#_6').addClass("active-w");
    $('#_6-bg').addClass("active-w");
});

$("#seven").click(function () {
    $(".ww-text").removeClass("active-w");
    $('#text-7').addClass("active-w");
    $('#_7').addClass("active-w");
    $('#_7-bg').addClass("active-w");
});
