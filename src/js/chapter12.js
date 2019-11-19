import _ from 'lodash';
import css from '../css/chapter12.css';
var $ = require("jquery");

import '../css/swiper.min.css';
import Swiper from './../js/plugin/swiper.min.js';

var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

// //appends an "active" class to .popup and .popup-content when the "Open" button is clicked
$("#lactation-btn").on("click", function() {
  $("#lactation-popup").css('display','block');
  var swiper = new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

});

$("#furuncle-btn").on("click", function() {
  $("#furuncle-popup").css('display','block');
  var swiper = new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
});

$("#arthritis-btn").on("click", function() {
  $("#arthritis-popup").css('display','block');
  var swiper = new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

});

$("#detox-btn").on("click", function() {
  $("#detox-popup").css('display','block');
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
