import _ from 'lodash';
import '../css/font.css';
import css from '../css/chapter9.css';

import '../css/swiper.min.css';
import Swiper from './../js/plugin/swiper.min.js';
var $ = require("jquery");


  var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
