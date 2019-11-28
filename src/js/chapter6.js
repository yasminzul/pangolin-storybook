import _ from 'lodash';
import '../css/font.css';
import css from '../css/chapter6.css';
import '../css/chapter.css';
var $ = require("jquery");
import '../css/swiper.min.css';
import Swiper from './../js/plugin/swiper.min.js';


$("#open-slider").on("click", function() {
  $('.popup').css('display','block');
  $('.close').css('display', 'block');
});

//removes the "active" class to .popup and .popup-content when the "Close" button is clicked

$(".close").on("click", function(e) {
  $(this).closest('.popup').css('display','none');
});


// tap to find legend

$('#one').on('click', function (){
	$('.route-legend span').html("<strong>Xiangzhou Port</strong><br>The smugglers embarked from this port on a wooden fishing vessel");
});

$('#two').on('click', function (){
	$('.route-legend span').html("<strong>First pick-up point</strong><br>The smugglers met with a trawler at this point. The crew transferred a batch of pangolins from the trawler to their boat");
});

$('#three').on('click', function (){
	$('.route-legend span').html("<strong>Second pick-up point</strong><br>Another batch of pangolins transferred from a trawler here. This time, the pangolins were in white plastic packages.");
});

$('#four').on('click', function (){
	$('.route-legend span').html("<strong>Off the coast of Zhuhai International Airport</strong><br>The final destination of the smugglers. Here they were arrested by customs officers, who received a tip-off about the shipment.");
});

$('#five').on('click', function (){
	$('.route-legend span').html("<strong>Feb 2019 seizure: Factory</strong><br>Location where pangolins were allegedly processed. One man was arrested at this location.");
});

$('#six').on('click', function (){
	$('.route-legend span').html("<strong>Feb 2019 seizure: WAREHOUSE</strong><br>Location where processed pangolins were found stored in large freezers.");
});

$('#seven').on('click', function (){
	$('.route-legend span').html("<strong>Sepanggar Bay Port</strong><br>Sabah’s only international sea port.");
});

