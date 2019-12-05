import _ from 'lodash';
import '../css/font.css';
import css from '../css/chapter5.css';

import '../css/swiper.min.css';
import Swiper from './../js/plugin/swiper.min.js';
var $ = require("jquery");


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
