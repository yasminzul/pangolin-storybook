import _ from 'lodash';
import css from '../css/chapter.css';
var $ = require("jquery");

import TweenMax from 'TweenMax';
import TimelineMax from 'TimelineMax';
import ScrollMagic from 'ScrollMagic';
import 'animation.gsap';
import 'debug.addIndicators';

$(function () {
		var controller = new ScrollMagic.Controller();
		var slides = new TimelineMax()

			// .to("#slideContainer", 0.5, {z: -150})
			.to("#slideContainer", 1,   {x: "-25%"})
			.to("#slideContainer", 0.5, {z: 0})

			// .to("#slideContainer", 0.5, {z: -150, delay: 1})
			.to("#slideContainer", 1,   {x: "-50%"})
			.to("#slideContainer", 0.5, {z: 0})

			// .to("#slideContainer", 0.5, {z: -150, delay: 1})
			.to("#slideContainer", 1,   {x: "-75%"})
			.to("#slideContainer", 0.5, {z: 0})


		var scene = new ScrollMagic.Scene({
				triggerElement: "#pinContainer",
				triggerHook: "onLeave",
				duration: "400%"
			})
			.setPin("#pinContainer")
			.setTween(slides)
			.addIndicators()
			.addTo(controller);

// fade-out test 

// var initialAnimation = new TimelineMax();

//   initialAnimation.from($('.row'), 1, {
//     autoAlpha: 0
//   });

//   var controller = new ScrollMagic.Controller();

//   var firstSection = new TimelineMax().add([
//     TweenMax.to('.row', 1, {
//       autoAlpha: 0
//     })
//   ]);

//   var firstSectionScroll = new ScrollMagic.Scene({
//       triggerElement: '.row',
//       triggerHook: 0,
//       duration: '100%'
//     })
//     .setTween(firstSection)
//     .setPin('.row', {
//       pushFollowers: false
//     })
//     .addTo(controller)
//     .addIndicators();

//   // second top section
//   var secondTopSection = new TimelineMax().add([
//     TweenMax.from('.row', 1, {
//       opacity: 0
//     })
//   ]);

//   var secondTopSectionScroll = new ScrollMagic.Scene({
//       triggerElement: '.row',
//       triggerHook: 0,
//       duration: '100%'
//     })
//     .setTween(secondTopSection)
//     .setPin('.row', {
//       pushFollowers: false
//     })
//     .addTo(controller)
//     .addIndicators();




// fadein
		// var t = TweenLite.from(".row", 1,{
		//   autoAlpha:1,
		//   paused:true, ease:Linear.easeNone
		// }),
		//     scrollThreshold = {"start":0, "stop":250};

		// $(window).on("scroll",function(e){
		  
		//   var currentScroll = $(window).scrollTop(),
		//       currentProgress = ( currentScroll - scrollThreshold.stop ) / ( scrollThreshold.stop - scrollThreshold.start );

		//       console.log(currentScroll);
		  
		//   if(currentScroll > scrollThreshold.start && currentScroll < scrollThreshold.stop){
		//     t.progress(currentProgress);
		//   }else if( currentScroll > scrollThreshold.start ){
		//     t.progress(0);
		//   }else if( currentScroll > scrollThreshold.stop){
		//     t.progress(1);
		//   }
		  
		// });

	});



