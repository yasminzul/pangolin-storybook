import _ from 'lodash';
import '../css/font.css';
import css from '../css/chapter2.css';
import '../css/chapter.css';
import '../css/swiper.min.css';
import Swiper from './../js/plugin/swiper.min.js';
var $ = require("jquery");

// $(document).ready(function(){
//
//   if(window.orientation == 0)
//     {
//       console.log('portrait');
//         $('.full-orientation').removeClass('active');
//         $('.full-orientation').addClass('hide');
//         $('.portrait').addClass('active');
//         $('.portrait').removeClass('hide');
//     }
//     else
//     {
//       console.log('landscape');
//       $('.landscape').removeClass('hide');
//       $('.landscape').addClass('active');
//       $('.portrait').removeClass('active');
//       $('.portrait').addClass('hide');
//       $('.full-orientation').removeClass('hide');
//       $('.full-orientation').addClass('active');
//     }
// });

var swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
 });


// plain text button toggle

// $(".plain-text").on("click", function(e) {
//   $('.landscape').addClass('hide');
//   $('.full-orientation').removeClass('active');
//   $('.full-orientation').addClass('hide');
//   $('.portrait').addClass('active');
//   $('.portrait').removeClass('hide');
// });

// $(window).on("orientationchange", function(){
//   $('.landscape').removeClass('hide');
//   $('.landscape').addClass('active');
//   $('.portrait').removeClass('active');
//   $('.portrait').addClass('hide');
//   $('.full-orientation').removeClass('hide');
//   $('.full-orientation').addClass('active');

// if(window.orientation == 0)
//     {
//       console.log('portrait');
//         $('.full-orientation').removeClass('active');
//         $('.full-orientation').addClass('hide');
//         $('.portrait').addClass('active');
//         $('.portrait').removeClass('hide');
//     }
// else
//     {
//       console.log('landscape');
//       $('.landscape').removeClass('hide');
//       $('.landscape').addClass('active');
//       $('.portrait').removeClass('active');
//       $('.portrait').addClass('hide');
//       $('.full-orientation').removeClass('hide');
//       $('.full-orientation').addClass('active');
//     }

// });



  // $(window).on("orientationchange",function(){
  //   if(window.orientation == 0)
  //   {
  //     console.log('portrait');
  //       $('.full-orientation').addClass('hide');
  //   }
  //   else
  //   {
  //     console.log('landscape');
  //     $('.landscape').removeClass('hide');
  //     $('.landscape').addClass('active');
  //     $('.portrait').removeClass('active');
  //     $('.portrait').addClass('hide');
  //     $('.full-orientation').removeClass('hide');
  //     $('.full-orientation').addClass('active');
  //   }
  // });
