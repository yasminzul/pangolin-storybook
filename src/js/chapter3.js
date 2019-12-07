import _ from 'lodash';
import '../css/font.css';
import '../css/swiper.min.css';
import css from '../css/chapter3.css';
import '../css/soundcite.min.css';
import '../css/chapter.css';
import Swiper from './../js/plugin/swiper.min.js';
import './../js/plugin/soundcite.min.js';

var $ = require("jquery");


var swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
 });

// plain text button toggle

$(".plain-text").on("click", function(e) {
  $('.landscape').addClass('hide');
  $('.full-orientation').removeClass('active');
  $('.full-orientation').addClass('hide');
  $('.portrait').addClass('active');
  $('.portrait').removeClass('hide');
});

$(window).on("orientationchange", function(){
  $('.landscape').removeClass('hide');
  $('.landscape').addClass('active');
  $('.portrait').removeClass('active');
  $('.portrait').addClass('hide');
  $('.full-orientation').removeClass('hide');
  $('.full-orientation').addClass('active');
  
});