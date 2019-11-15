import _ from 'lodash';
import css from '../css/chapter12.css';
var $ = require("jquery");

import '../css/swiper.min.css';
import Swiper from './../js/plugin/swiper.min.js';




// //appends an "active" class to .popup and .popup-content when the "Open" button is clicked
// $("#lactation-btn").on("click", function() {
//   $("#lactation-popup").css('display','block');
//   var swiper = new Swiper('.swiper-container', {
//       navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },
//     });

// });

// //removes the "active" class to .popup and .popup-content when the "Close" button is clicked
// $(".close").on("click", function() {
//   $("#lactation-popup").css('display','none');
// });


     var b1 = $("#lactation-btn");
     var b2 = $("#btn2");
     var b3 = $("#btn3");
     
    var btnClick = function(e){
          $(".popup").css('display','block');
	  		var swiper = new Swiper('.swiper-container', {
	     	navigation: {
	        nextEl: '.swiper-button-next',
	        prevEl: '.swiper-button-prev',
      		},
    	});
    }
    
    var btnClassClick = function(e){
        alert("Button clicked from class: "+e.currentTarget.id);
    }
        
    b1.on('click', btnClick);
    b2.on('click', btnClick);
    b3.on('click', btnClick);

    $('.btn-click-action').on('click', btnClassClick);



  // var swiper = new Swiper('.swiper-container', {
  //     navigation: {
  //       nextEl: '.swiper-button-next',
  //       prevEl: '.swiper-button-prev',
  //     },
  //   });


// $("#lactation-btn").on("click", function() {
//   $("#lactation-popup").css('display','block');
// });

// $("#lactation-close").on("click", function() {
//   $("#lactation-popup").css('display','none');
// });

// $("#furuncle-btn").on("click", function() {
//   $("#furuncle-popup").css('display','block');
// });

// $("#furuncle-close").on("click", function() {
//   $("#furuncle-popup").css('display','none');
// });

// $("#arthritis-btn").on("click", function() {
//   $("#arthritis-popup").css('display','block');
// });

// $("#arthritis-close").on("click", function() {
//   $("#arthritis-popup").css('display','none');
// });

// $("#detox-btn").on("click", function() {
//   $("#detox-popup").css('display','block');
// });

// $("#detox-close").on("click", function() {
//   $("#detox-popup").css('display','none');
// });


// lactation 

// $("#lactation-btn").on("click", function() {
//   $("#lactation-popup").addClass("active");
// });

// $("#lactation-close").on("click", function() {
//   $("#lactation-popup").removeClass("active");
// });

// // furuncle

// $("#furuncle-btn").on("click", function() {
//   $("#furuncle-popup").addClass("active");
// });


// $("#furuncle-close").on("click", function() {
//   $("#furuncle-popup").removeClass("active");
// });

// // arthritis

// $("#arthritis-btn").on("click", function() {
//   $("#arthritis-popup").addClass("active");
// });


// $("#arthritis-close").on("click", function() {
//   $("#arthritis-popup").removeClass("active");
// });

// // detox

// $("#detox-btn").on("click", function() {
//   $("#detox-popup").addClass("active");
// });

// $("#detox-close").on("click", function() {
//   $("#detox-popup").removeClass("active");
// });


