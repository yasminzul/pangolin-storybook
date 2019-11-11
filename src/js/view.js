import _ from 'lodash';
import css from '../css/view.css';
var $ = require("jquery");




$('#burger-icon').on('click', function(e){
  $(this).toggleClass('open-icon');
  $('.menu').toggleClass('open-menu');
  console.log('toggling');
});
