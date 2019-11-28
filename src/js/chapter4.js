import _ from 'lodash';
import '../css/font.css';
import css from '../css/chapter4.css';
import '../css/chapter.css';
import './../js/plugin/soundcite.min.js'; 
var $ = require("jquery");

import '../css/swiper.min.css';
import Swiper from './../js/plugin/swiper.min.js';


$("#open-slider").on("click", function() {
  $('.popup').css('display','block');
   // $('.close').css('display', 'block');
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
