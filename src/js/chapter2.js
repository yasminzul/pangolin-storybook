import _ from 'lodash';
import '../css/font.css';
import css from '../css/chapter2.css';
import '../css/chapter.css';
import '../css/swiper.min.css';
import Swiper from './../js/plugin/swiper.min.js';
var $ = require("jquery");

$(document).ready(function(){
    $('input[type="radio"]').click(function(){
        var inputValue = $(this).attr("value");
        var targetBox = $("." + inputValue);
        $(".caption").not(targetBox).hide();
        $(targetBox).show();
    });
});

var swiper = new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
 });
