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
  <td><a href=index.html><img src=/menu/home@3x.png></a></td>
  <td><a href=about-pangolin.html><img src=/menu/aboutpangolin@3x.png></a></td>
  <td><a href=chapter-1.html><img src=/menu/middleman@3x.png></a></td>
  <td><a href=chapter-2.html><img src=/menu/boatman@3x.png></a></td>
  <td><a href=chapter-3.html><img src=/menu/smuggler@3x.png></a></td>
</tr>
<tr>
  <td><a href=chapter-4.html><img src=/menu/policeman@3x.png></a></td>
  <td><a href=chapter-5.html><img src=/menu/followtrail@3x.png></a></td>
  <td><a href=chapter-6.html><img src=/menu/waitingwife@3x.png></a></td>
  <td><a href=chapter-8.html><img src=/menu/routesmap@3x.png></a></td>
  <td><a href=chapter-9.html><img src=/menu/socialmedia@3x.png></a></td>
</tr>
<tr>
  <td><a href=chapter-10.html><img src=/menu/authorities@3x.png></a></td>
  <td><a href=chapter-11.html><img src=/menu/twodoctors@3x.png></a></td>
  <td><a href=chapter-12.html><img src=/menu/recipe@3x.png></a></td>
  <td><a href=chapter-13.html><img src=/menu/hunters@3x.png></a></td>
  <td><a href=chapter-14.html><img src=/menu/rainies@3x.png></a></td>
</tr>
<tr>
  <td><a href=chapter-15.html><img src=/menu/forest@3x.png></a></td>
  <td><a href=about-project.html><img src=/menu/aboutproject@3x.png></a></td>
  <td><a href=quiz.html><img src=/menu/quiz@3x.png></a></td>
  <td><a href=https://globalstory.pangolinreports.com/><img src=/menu/globalstory@3x.png></a></td>
  <td><img src=/menu/share@3x.png></td>
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
