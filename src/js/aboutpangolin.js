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


//appends an "active" class to .popup and .popup-content when the "Open" button is clicked
$("#orangasli-btn").on("click", function() {
  $("#orangasli-popup").addClass("active");
  console.log('adding active');
});