import _ from 'lodash';
import '../css/font.css';
import css from '../css/chapter5.css';

import '../css/swiper.min.css';
import Swiper from './../js/plugin/swiper.min.js';
var $ = require("jquery");

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

$("#open-trail").on("click", function() {
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

$(document).keydown(function(event) {
  if (event.keyCode == 27) {
    $('.popup').css('display','none');
  }
});
