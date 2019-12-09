import _ from 'lodash';
import '../css/font.css';
import css from '../css/chapter2.css';
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
