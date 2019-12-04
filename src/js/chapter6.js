import _ from 'lodash';
import '../css/font.css';
import css from '../css/chapter6.css';
import '../css/chapter.css';
var $ = require("jquery");
import '../css/swiper.min.css';
import Swiper from './../js/plugin/swiper.min.js';


$("#open-slider").on("click", function() {
  $('.popup').css('display','block');
  $('.close').css('display', 'block');
});

//removes the "active" class to .popup and .popup-content when the "Close" button is clicked

$(".close").on("click", function(e) {
  $(this).closest('.popup').css('display','none');
});


// desktop popup

$("#_1").click(function () {
    $(".ww-text").removeClass("active");
    $('#text-1').addClass("active");   
});

$("#_2").click(function () {
    $(".ww-text").removeClass("active");
    $('#text-2').addClass("active");   
});

$("#_3").click(function () {
    $(".ww-text").removeClass("active");
    $('#text-3').addClass("active");   
});

$("#_4").click(function () {
    $(".ww-text").removeClass("active");
    $('#text-4').addClass("active");   
});

$("#_5").click(function () {
    $(".ww-text").removeClass("active");
    $('#text-5').addClass("active");   
});

$("#_6").click(function () {
    $(".ww-text").removeClass("active");
    $('#text-6').addClass("active");   
});

$("#_7").click(function () {
    $(".ww-text").removeClass("active");
    $('#text-7').addClass("active");   
});


// mobile popup

$("#one").click(function () {
    console.log('click');
    $(".ww-text").removeClass("active");
    $('#text-1').addClass("active");   
    $('#_1').addClass("active"); 
    $('#_1-bg').addClass("active"); 
});

$("#two").click(function () {
    $(".ww-text").removeClass("active");
    $('#text-2').addClass("active");
    $('#_2').addClass("active"); 
    $('#_2-bg').addClass("active");    
});

$("#three").click(function () {
    $(".ww-text").removeClass("active");
    $('#text-3').addClass("active");
    $('#_3').addClass("active"); 
    $('#_3-bg').addClass("active");    
});

$("#four").click(function () {
    $(".ww-text").removeClass("active");
    $('#text-4').addClass("active");
    $('#_4').addClass("active"); 
    $('#_4-bg').addClass("active");    
});

$("#five").click(function () {
    $(".ww-text").removeClass("active");
    $('#text-5').addClass("active"); 
    $('#_5').addClass("active"); 
    $('#_5-bg').addClass("active");   
});

$("#six").click(function () {
    $(".ww-text").removeClass("active");
    $('#text-6').addClass("active"); 
    $('#_6').addClass("active"); 
    $('#_6-bg').addClass("active");   
});

$("#seven").click(function () {
    $(".ww-text").removeClass("active");
    $('#text-7').addClass("active"); 
    $('#_7').addClass("active"); 
    $('#_7-bg').addClass("active");   
});

