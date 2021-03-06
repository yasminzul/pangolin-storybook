import _ from 'lodash';
import '../css/font.css';
import css from '../css/chapter5.css';

import '../css/swiper.min.css';
import Swiper from './../js/plugin/swiper.min.js';
var $ = require("jquery");

var winHeight = $(window).height();

$('body').css({
  'height' : winHeight,
});

$(window).resize(function (){
  $('body').css({
    'height' : winHeight,
  });
});

$("#open-trail").on("click", function() {
  $('.popup').css('display','block');
  var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      mousewheel: true,
      keyboard: {
        enabled: true
      },
    });
});

//removes the "active" class to .popup and .popup-content when the "Close" button is clicked
$(".close").on("click", function(e) {
  $(this).closest('.popup').css('display','none');
});

$(document).keydown(function(event) {
  if (event.keyCode == 27) {
    $('.popup').css('display','none');
  }
});


const mq = window.matchMedia( "(orientation: portrait)" );

if (mq.matches) {

  $(document).ready(function () {
    $('.landscape').addClass('hide');
    $('.landscape').removeClass('active');
    $('.portrait').addClass('active');
    $('.portrait').removeClass('hide');
  });

} else {
    $(document).ready(function () {
      $('.landscape').removeClass('hide');
      $('.landscape').addClass('active');
      $('.portrait').removeClass('active');
      $('.portrait').addClass('hide');
    });
}

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
