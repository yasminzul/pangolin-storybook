import _ from 'lodash';
import css from '../css/aboutpangolin.css';
var $ = require("jquery");

import '../css/swiper.min.css';
import Swiper from './../js/plugin/swiper.min.js';


  var swiper = new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });



$("#orangasli-btn").on("click", function() {
  $("#orangasli-popup").addClass("active");
  console.log('adding active');
});


$(".close").on("click", function() {
  $("#orangasli-popup").removeClass("active");
  console.log('remove class');
});