import _ from 'lodash';
import css from '../css/chapter8.css';
var $ = require("jquery");

import '../css/swiper.min.css';
import Swiper from './../js/plugin/swiper.min.js';


// //appends an "active" class to .popup and .popup-content when the "Open" button is clicked
$("#open-slider").on("click", function() {
  $('.popup').css('display','block');
  var swiper = new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
});



//removes the "active" class to .popup and .popup-content when the "Close" button is clicked
// $(".close").on("click", function() {
//   $(this).closest('.popup').css('display','none');
// });



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
