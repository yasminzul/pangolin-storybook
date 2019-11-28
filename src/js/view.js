import _ from 'lodash';
import css from '../css/view.css';
import '../css/animsition.min.css';
import '../css/swiper.min.css';
import './../js/plugin/animsition.min.js';
import './../js/plugin/swiper.min.js';

var $ = require("jquery");

let menu = `<div id=burger-icon><span></span><span></span><span></span><span></span></div>
<div class=menu>
<table>
<tr>
  <a href=index.html><td><img src=../gfx/menu/home@3x.png></td></a>
  <a href=about-pangolin.html><td><img src=../gfx/menu/aboutpangolin@3x.png></td></a>
  <a href=chapter-1.html><td><img src=../gfx/menu/middleman@3x.png></td></a>
  <a href=chapter-2.html><td><img src=../gfx/menu/boatman@3x.png></td></a>
  <a href=chapter-3.html><td><img src=../gfx/menu/smuggler@3x.png></td></a>
</tr>
<tr>
  <a href=chapter-4.html><td><img src=../gfx/menu/policeman@3x.png></td></a>
  <a href=chapter-5.html><td><img src=../gfx/menu/followtrail@3x.png></td></a>
  <a href=chapter-6.html><td><img src=../gfx/menu/waitingwife@3x.png></td></a>
  <a href=chapter-8.html><td><img src=../gfx/menu/routesmap@3x.png></td></a>
  <a href=chapter-9.html><td><img src=../gfx/menu/socialmedia@3x.png></td></a>
</tr>
<tr>
  <a href=chapter-10.html><td></td></a>
  <a href=chapter-11.html><td></td></a>
  <a href=chapter-12.html><td></td></a>
  <a href=chapter-13.html><td></td></a>
  <a href=chapter-14.html><td></td></a>
</tr>
<tr>
  <a href=chapter-15.html><td></td></a>
  <a href=quiz.html><td></td></a>
  <a href=about-project.html><td></td></a>
  <a href=https://www.rage.com.my/><td></td></a>
  <td></td>
</tr>
</table>
  <ul class=menu-footer><a href=https://www.rage.com.my/ target=_blank><li>R.AGE</li></a><li>© 2019 R.AGE</li><a href=http://facebook.com target=_blank><li><i class=ion-logo-facebook></i></li></a><a href=http://twitter.com target=_blank><li><i class=ion-logo-twitter></i></li></a><a href=http://instagram.com target=_blank><li><i class=ion-logo-instagram></i></li></a></ul></li>
</div>`;


let orientation = "<div class=full-orientation></div>";

$( window ).on( "load", function() {
  $('body').append(menu);
  $('body').append(orientation);

  $('#burger-icon').on('click', function(e){
    $(this).toggleClass('open-icon');
    $('.menu').toggleClass('open-menu');
  });

})

$(".animsition").animsition({
  inClass: 'fade-in-up',
  outClass: 'fade-out-up',
  inDuration: 1500,
  outDuration: 800,
  loading: true,
  loadingParentElement: 'body', //animsition wrapper element
  loadingClass: 'animsition-loading',
  loadingInner: '', // e.g '<img src="loading.svg" />'
  timeout: false,
  timeoutCountdown: 5000,
  onLoadEvent: true,
  browser: [ 'animation-duration', '-webkit-animation-duration'],
  // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
  // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
  overlay : false,
  overlayClass : 'animsition-overlay-slide',
  overlayParentElement : 'body',
  transition: function(url){ window.location.href = url; }
});
