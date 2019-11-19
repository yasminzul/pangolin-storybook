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

