import _ from 'lodash';
import '../css/font.css';
import css from '../css/chapter.css';
var $ = require("jquery");


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
