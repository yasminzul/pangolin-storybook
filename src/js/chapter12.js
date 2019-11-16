import _ from 'lodash';
import css from '../css/chapter12.css';
var $ = require("jquery");

import '../css/swiper.min.css';
import Swiper from './../js/plugin/swiper.min.js';


// //appends an "active" class to .popup and .popup-content when the "Open" button is clicked
$("#lactation-btn, #furuncle-btn, #arthritis-btn, #detox-btn").on("click", function() {
  $(this).next().css('display','block');
  var swiper = new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

});

//removes the "active" class to .popup and .popup-content when the "Close" button is clicked
$(".close").on("click", function() {
  $(this).closest('.popup').css('display','none');
});

