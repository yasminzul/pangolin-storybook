import _ from 'lodash';
import '../css/font.css';
import css from '../css/chapter13.css';
import '../css/chapter.css';
import '../css/swiper.min.css';
import Swiper from './../js/plugin/swiper.min.js';
var $ = require("jquery");


var swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
 });

 $(document).ready(function () {
   $('.landscape').removeClass('hide');
   $('.landscape').addClass('active');
   $('.portrait').removeClass('active');
   $('.portrait').addClass('hide');
 });

   $(window).on("orientationchange", function(){
     if ($('.landscape').hasClass('active')) {
       $('.landscape').addClass('hide');
       $('.landscape').removeClass('active');
       $('.portrait').addClass('active');
       $('.portrait').removeClass('hide');
       $('.full-orientation').removeClass('active');
       $('.full-orientation').addClass('hide');
     }
     else if ($('.landscape').hasClass('hide')) {
       $('.landscape').removeClass('hide');
       $('.landscape').addClass('active');
       $('.portrait').removeClass('active');
       $('.portrait').addClass('hide');
       $('.full-orientation').removeClass('active');
       $('.full-orientation').addClass('hide');
     }
   });
