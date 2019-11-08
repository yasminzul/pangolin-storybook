import _ from 'lodash';
import css from './css/chapter.css';
var $ = require("jquery");

import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
import TweenMax from 'gsap/src/uncompressed/TweenMax';
import TimelineMax from 'gsap/src/uncompressed/TimelineMax';

// init controller
const controller = new ScrollMagic.Controller();

// build scene
const scene = new ScrollMagic.Scene({
          triggerElement: "main.content", duration: 300, offset: -100
        })
        .setTween(".post-title", 0.5, {scale: 2.5}) // trigger a TweenMax.to tween
        .addIndicators({name: "2 (duration: 300)"}) // add indicators (requires plugin)
        .addTo(controller);