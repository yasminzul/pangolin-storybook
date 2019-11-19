import _ from 'lodash';
import css from '../css/style.css';
var $ = require("jquery");

import TweenMax from 'TweenMax';
import TweenLite from 'TweenLite';
import TimelineMax from 'TimelineMax';
import TimelineLite from 'TimelineLite';

var tlPangolin = new TimelineMax({repeat:-1, repeatDelay:0.5});
tlPangolin.from("#pangolin_eye_Image", 0.2, {scale:0, ease:Power1.easeInOut})
          .to("#pangolin_eye_Image", 0.2, {scale:0, ease:Power1.easeInOut}, "+=3");


var eye = ["#redeye-01_Image", "#redeye-02_Image", "#redeye-03_Image", "#redeye-04_Image", "#redeye-05_Image",
"#redeye-06_Image", "#redeye-07_Image", "#redeye-08_Image", "#redeye-09_Image", "#redeye-10_Image"]

// var tlRed = new TimelineMax({repeat:-1});
// tlRed.from(eye, 0.1, {autoAlpha: 0, delay: 0.3})
//       .to (eye, 0.1, {autoAlpha: 1, delay: 3});

// var tlRed = new TimelineMax({repeat:-1});
// tlRed.staggerFrom(eye,0.2,{opacity:0, cycle:{}})

var tlLeaf1 = new TimelineMax({repeat:-1});
tlLeaf1.set("#leaves_01_Image", {rotation: 0, transformOrigin: "left bottom", visibility:"visible", drawSVG:"100%", opacity:1 });
tlLeaf1.to("#leaves_01_Image", 3, {drawSVG:true, yPercent: "0", rotation: 10, transformOrigin: "left bottom", smoothOrigin: true, opacity:0.75, ease: Power0.easeInOut})
      .to("#leaves_01_Image", 3, {yPercent: "0", rotation: 0, transformOrigin: "left bottom", smoothOrigin: true, ease: Power0.easeInOut, opacity: 1});

var tlLeaf2 = new TimelineMax({repeat:-1});
tlLeaf2.set("#leaves_04_Image", {rotation: 0, transformOrigin: "right bottom", visibility:"visible", drawSVG:"100%", opacity:1 });
tlLeaf2.to("#leaves_04_Image", 2.5, {drawSVG:true, yPercent: "0", rotation: 10, transformOrigin: "right bottom", smoothOrigin: true, opacity:0.5, ease: Power0.easeInOut})
      .to("#leaves_04_Image", 2.5, {yPercent: "0", rotation: 0, transformOrigin: "right bottom", smoothOrigin: true, ease: Power0.easeInOut, opacity: 1});
