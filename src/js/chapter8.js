import _ from 'lodash';
import '../css/font.css';
import css from '../css/chapter8.css';
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
$("#open-slider").on("click", function() {
  $('.popup').css('display','block');
  var swiper = new Swiper('.swiper-container', {
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


$(document).keydown(function(event) { 
  if (event.keyCode == 27) { 
    $('.popup').css('display','none');
  }
});

//removes the "active" class to .popup and .popup-content when the "Close" button is clicked
$(".close").on("click", function(e) {
  $(this).closest('.popup').css('display','none');
});


//removes the "active" class to .popup and .popup-content when the "Close" button is clicked
// $(".close").on("click", function() {
//   $(this).closest('.popup').css('display','none');
// });

$('#a-img').click(function(){
	$(".before-text").html("240,558");
	$(".before-label span").html("Pangolin seized jan 2017 - aug 2019");
    $('#b').removeClass('active-m');
    $('#a').addClass('active-m');
  });

$('#am-img').click(function(){
	$(".before-text").html("240,558");
	$(".before-label span").html("Pangolin seized jan 2017 - aug 2019");
    $('#cm').css('display','none');
    $('#bm').removeClass('active-m');
    $('#am').addClass('active-m');
  });


$('#b-img').click(function(){
	$(".before-text").html("101,166");
	$(".before-label span").html("Pangolin seized jan 2009 - dec 2016");
    $('#a').removeClass('active-m');
    $('#b').addClass('active-m');
  });

$('#bm-img').click(function(){
	$(".before-text").html("101,166");
	$(".before-label span").html("Pangolin seized jan 2009 - dec 2016");
    $('#cm').css('display','none');
    $('#am').removeClass('active-m');
    $('#bm').addClass('active-m');
  });

// tap to find legend

$('#purple-temminck_Image').on('click', function (){
	$('.route-legend span').text("Temminck's Ground Pangolin (vulnerable)");
});

$('#green-whitebellied_Image').on('click', function (){
	$('.route-legend span').text("White-bellied Pangolin/Tree Pangolin (vulnerable)");
});

$('#yellow-giantground_Image').on('click', function (){
	$('.route-legend span').text("Giant Ground Pangolin (vulnerable)");
});

$('#blue-blackbellied_Image').on('click', function (){
	$('.route-legend span').text("Black-bellied Pangolin/Long-tailed Pangolin (vulnerable)");
});

// $('#red-giantground_Image').on('click', function (){
// 	$('.route-legend span').text("Giant Ground Pangolin (extinct)");
// });

$('#violet-indian_Image').on('click', function (){
	$('.route-legend span').text("Indian Pangolin (endangered)");
});

$('#orange-chinese_Image').on('click', function (){
	$('.route-legend span').text("Chinese Pangolin (critically endangered)");
});

$('#pink-philippine_Image').on('click', function (){
	$('.route-legend span').text("Sunda Pangolin (critically endangered)");
});

$('#green-sunda_Image').on('click', function (){
	$('.route-legend span').text("Philippine Pangolin (endangered)");
});
