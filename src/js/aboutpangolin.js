import _ from 'lodash';
import css from '../css/aboutpangolin.css';
var $ = require("jquery");

import '../css/swiper.min.css';
import Swiper from './../js/plugin/swiper.min.js';


//appends an "active" class to .popup and .popup-content when the "Open" button is clicked
$("#orangasli-btn").on("click", function() {
  $("#orangasli-popup").css('display','block');
  var swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    });

});

//removes the "active" class to .popup and .popup-content when the "Close" button is clicked
$(".close").on("click", function() {
  $("#orangasli-popup").css('display','none');
});


//appends an "active" class to .popup and .popup-content when the "Open" button is clicked
$("#expert-btn").on("click", function() {
  $("#expert-popup").css('display','block');
  var swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    });

});

//removes the "active" class to .popup and .popup-content when the "Close" button is clicked
$(".close").on("click", function() {
  $("#expert-popup").css('display','none');
});
