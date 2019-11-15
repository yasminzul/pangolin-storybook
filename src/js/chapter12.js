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


$("#lactation-btn").on("click", function() {
  $("#lactation-popup").addClass("active");
  console.log('adding active');
});


$("#lactation-close").on("click", function() {
  $("#lactation-popup").removeClass("active");
  console.log('remove class');
});