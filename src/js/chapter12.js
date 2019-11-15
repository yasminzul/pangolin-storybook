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

// lactation 

$("#lactation-btn").on("click", function() {
  $("#lactation-popup").addClass("active");
});

$("#lactation-close").on("click", function() {
  $("#lactation-popup").removeClass("active");
});

// furuncle

$("#furuncle-btn").on("click", function() {
  $("#furuncle-popup").addClass("active");
});


$("#furuncle-close").on("click", function() {
  $("#furuncle-popup").removeClass("active");
});

// arthritis

$("#arthritis-btn").on("click", function() {
  $("#arthritis-popup").addClass("active");
});


$("#arthritis-close").on("click", function() {
  $("#arthritis-popup").removeClass("active");
});

// detox

$("#detox-btn").on("click", function() {
  $("#detox-popup").addClass("active");
});

$("#detox-close").on("click", function() {
  $("#detox-popup").removeClass("active");
});