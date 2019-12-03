import _ from 'lodash';
import '../css/font.css';
import css from '../css/chapter8.css';
var $ = require("jquery");

import '../css/swiper.min.css';
import Swiper from './../js/plugin/swiper.min.js';


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
    $('#b').removeClass('active');
    $('#a').addClass('active');
  });

$('#bm-img').click(function(){
	$(".before-text").html("240,558");
	$(".before-label span").html("Pangolin seized jan 2017 - aug 2019");
    // $('#b').attr('src', '3be0acde17e949987fc0644502669eda.jpg');
  });


$('#b-img').click(function(){
	$(".before-text").html("101,166");
	$(".before-label span").html("Pangolin seized jan 2009 - dec 2016");
    $('#a').removeClass('active');
    $('#b').addClass('active');
  });

$('#am-img').click(function(){
	$(".before-text").html("101,166");
	$(".before-label span").html("Pangolin seized jan 2009 - dec 2016");
    // $('#b').attr('src', 'f8318dc26b1c01dd6e9afa8cf9fbacd7.jpg');
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

$('#red-giantground_Image').on('click', function (){
	$('.route-legend span').text("Giant Ground Pangolin (extinct)");
});

$('#violet-indian_Image').on('click', function (){
	$('.route-legend span').text("Indian Pangolin (endangered)");
});

$('#orange-chinese_Image').on('click', function (){
	$('.route-legend span').text("Chinese Pangolin (critically endangered)");
});

$('#pink-philippine_Image').on('click', function (){
	$('.route-legend span').text("Philippine Pangolin (endangered)");
});

$('#green-sunda_Image').on('click', function (){
	$('.route-legend span').text("Sunda Pangolin (critically endangered)");
});
