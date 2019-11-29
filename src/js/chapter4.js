import _ from 'lodash';
import '../css/font.css';
import css from '../css/chapter4.css';
import '../css/chapter.css';
import '../css/soundcite.min.css';
import './../js/plugin/soundcite.min.js';
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

$('#one').on('click', function (){
	$('.route-legend span').html("<strong>SEPT 2012:</strong><br> Police officer Mohammad Norazzuan Ahmad Zahari arrested at an unspecified location in Kedah, in possession of 18 live pangolins.");
});

$('#two').on('click', function (){
	$('.route-legend span').html("<strong>NOV 2014:</strong><br> Police officer Mohammad Norazzuan Ahmad Zahari arrested again at the Bukit Kayu Hitam border checkpoint; 43 live pangolins found in the boot of his car.");
});

$('#three').on('click', function (){
	$('.route-legend span').html("<strong>SEPT 2018:</strong><br> A police officer arrested with 81 live pangolins in a house rented under his name. The trial is ongoing.");
});

$('#four').on('click', function (){
	$('.route-legend span').html("<strong>FEB 2019:</strong><br> Police officer Ahmad Nasrul Hafifi Mohamad arrested at Sadao customs checkpoint with 47 pangolins in his car, after passing Malaysian border checks.");
});

$('#five').on('click', function (){
	$('.route-legend span').html("All three officers worked at the Kedah state police headquarters (IPK Kedah). Investigations suggest that there is a larger smuggling ring run by members of the police and officers from other enforcement agencies.");
});



// desktop popup

$("#_1").click(function () {
    $(".p-text").removeClass("active");
    $('#text-1').addClass("active");   
});

$("#_2").click(function () {
    $(".p-text").removeClass("active");
    $('#text-2').addClass("active");   
});

$("#_3").click(function () {
    $(".p-text").removeClass("active");
    $('#text-3').addClass("active");   
});

$("#_4").click(function () {
    $(".p-text").removeClass("active");
    $('#text-4').addClass("active");   
});

$("#_5").click(function () {
    $(".p-text").removeClass("active");
    $('#text-5').addClass("active");   
});

