import _ from 'lodash';
import '../css/font.css'
import css from '../css/chapter2.css';
import '../css/chapter.css'
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


// fadein
		var t = TweenLite.from(".row", 1,{
		  autoAlpha:1,
		  paused:true, ease:Linear.easeNone
		}),
		    scrollThreshold = {"start":0, "stop":600};

		$(window).on("scroll",function(e){
		  
		  var currentScroll = $(window).scrollTop(),
		      currentProgress = ( currentScroll - scrollThreshold.stop ) / ( scrollThreshold.stop - scrollThreshold.start );
		  
		  if(currentScroll > scrollThreshold.start && currentScroll < scrollThreshold.stop){
		    t.progress(currentProgress);
		  }else if( currentScroll > scrollThreshold.start ){
		    t.progress(0);
		  }else if( currentScroll > scrollThreshold.stop){
		    t.progress(1);
		  }
		  
		});

	});



// //Run Function when DOM is ready. 
// $(function() {
// 	//Initialize Controller
// 	var scrollMagicController = new ScrollMagic.Controller({loglevel: 3});

// 	//Create a fadein animation for 1.5s
// 	var fadein_tween = TweenMax.to('#fadein-trigger > div', 1.0, {
// 		opacity: 1
// 	});
// 	//Create a fadeout animation for 1.5s on the element with id = "fadein-trigger"
// 	var fadeout_tween = TweenMax.to('#fadein-trigger > div', 1.0, {
// 		opacity: 0
// 	});
// 	//Create a new ScrollMagic Scene
// 	var fadein_scene = new ScrollMagic.Scene({
// 		triggerElement: '#fadein-trigger',
// 		reverse: true
// 	})
// 	.setTween(fadein_tween)
// 	.addIndicators({name: "1 (duration: 1.0 seconds)"})
// 	.addTo(scrollMagicController);
// 	//Create a second ScrollMagic Scene
// 	var fadeout_scene = new ScrollMagic.Scene({
// 		triggerElement: '#fadeout-trigger',
// 		reverse: true
// 	})
// 	.setTween(fadeout_tween)
// 	.addIndicators({name: "2 (duration: 1.0 seconds)"})
// 	.addTo(scrollMagicController);

// 	//Add debug fixed indicators
// 	//fadein_scene.addIndicators();
//   //fadeout_scene.addIndicators();
// });


// text fadeout

// $(window).scroll(function(){
//     $(".row").css("opacity", 1 - $(window).scrollTop() / 250);
//   });