import _ from 'lodash';
import css from '../css/view.css';
import '../css/animsition.min.css';
import './../js/plugin/animsition.min.js';

var $ = require("jquery");

let menu = "<div id=burger-icon><span></span><span></span><span></span><span></span></div><ul class=menu><a href=index.html><li>Home</li></a><a href=><li>Smuggling Routes</li></a><li>All chapters<ul class=menu-chapter><a href=chapter-1.html><li>Chapter 1 : The Middleman</li></a><a href=chapter-2.html><li>Chapter 2 : The Boatman</li></a><a href=chapter-3.html><li>Chapter 3 : The Smuggler</li></a><a href=chapter-4.html><li>Chapter 4 : The Policeman</li></a><a href=chapter-5.html><li>Chapter 5 : Follow The Trail Of A Smuggled Pangolin in Malaysia</li></a><a href=chapter-6.html><li>Chapter 6 : The Waiting Wife</li></a><a href=chapter-7.html><li>Chapter 7 : The Towkay</li></a><a href=chapter-8.html><li>Chapter 8 : The Secret Pangolin Smuggling Routes Around The World</li></a><a href=chapter-9.html><li>Chapter 9 : The Social Media Star</li></a><a href=chapter-10.html><li>Chapter 10 : The Authorities</li></a><a href=hapter-11.html><li>Chapter 11 : The Two Doctors</li></a><a href=chapter-12.html><li>Chapter 12 : The No-Pangolin Recipes</li></a><a href=chapter-13.html><li>Chapter 13 : The Hunters</li></a><a href=chapter-14.html><li>Chapter 14 : Rainie’s Song</li></a></ul></li><a href=quiz.html><li>Quiz: Which Pangolin Protector Are You?</li></a><a href=https://www.rage.com.my/><li>About this project</li></a><a href=https://www.rage.com.my/><li>The Pangolin Reports: Trafficked to Extenction</li></a><a href=https://www.rage.com.my/><li>Credits</li></a><li>Share<ul class=menu-share><a href=https://www.rage.com.my/ target=_blank><li><i class=ion-logo-facebook></i></li></a><a href=https://www.rage.com.my/ target=_blank><li><i class=ion-logo-twitter></i></li></a><a href=https://www.rage.com.my/ target=_blank><li><i class=ion-md-link></i></li></a></ul></li><li><ul class=menu-footer><a href=https://www.rage.com.my/ target=_blank><li>R.AGE</li></a><li>© 2019 R.AGE</li><a href=http://facebook.com target=_blank><li><i class=ion-logo-facebook></i></li></a><a href=http://twitter.com target=_blank><li><i class=ion-logo-twitter></i></li></a><a href=http://instagram.com target=_blank><li><i class=ion-logo-instagram></i></li></a></ul></li></ul>";

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
