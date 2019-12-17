import _ from 'lodash';
import css from '../css/view.css';
import '../css/swiper.min.css';
import './../js/plugin/swiper.min.js';
import ClipboardJS from './../js/plugin/clipboard.min.js';

var $ = require("jquery");

var clipboard = new ClipboardJS('.btn-link');

clipboard.on('success', function(e) {

  alert("Link copied");

  e.clearSelection();
});

let menu = `<div id=burger-icon><span></span><span></span><span></span><span></span></div>
<a href=index.html><div id=home-btn><i class="icon ion-md-home"></i></div></a>
<div class=menu>
<table>
<tr>
  <td><a href=index.html><img src=menu/home@3x.png></a></td>
  <td><a href=rainie.html><img src=menu/aboutpangolin@3x.png></a></td>
  <td><a href=middleman.html><img src=menu/middleman@3x.png></a></td>
  <td><a href=boatman.html><img src=menu/boatman@3x.png></a></td>
  <td><a href=smuggler.html><img src=menu/smuggler@3x.png></a></td>
</tr>
<tr>
  <td><a href=trail-malaysia.html><img src=menu/followtrail@3x.png></a></td>
  <td><a href=policeman.html><img src=menu/policeman@3x.png></a></td>
  <td><a href=waitingwife.html><img src=menu/waitingwife@3x.png></a></td>
  <td><a href=routes.html><img src=menu/routesmap@3x.png></a></td>
  <td><a href=socialmedia-star.html><img src=menu/socialmedia@3x.png></a></td>
</tr>
<tr>
  <td><a href=authorities.html><img src=menu/authorities@3x.png></a></td>
  <td><a href=doctors.html><img src=menu/twodoctors@3x.png></a></td>
  <td><a href=recipes.html><img src=menu/recipe@3x.png></a></td>
  <td><a href=hunters.html><img src=menu/hunters@3x.png></a></td>
  <td><a href=forest.html><img src=menu/forest@3x.png></a></td>
</tr>
<tr>
  <td><a href=rainies-song.html><img src=menu/rainies@3x.png></a></td>
  <td><a href=quiz.html><img src=menu/quiz.jpg></a></td>
  <td><a href=about.html><img src=menu/aboutproject@3x.png></a></td>
  <td><a id="modal-btn"><img src=menu/share@3x.png></a></td>
  <td><a href=`+'https://www.youtube.com/playlist?list=PLbewG9OWqkEkepA5Cadc112nD7e8FpcRo'+` target=_blank><img src=menu/videos.png></a></td>
</tr>
</table>
<ul>
<a href=index.html><li>Home</li></a>
<a href=rainie.html><li>About The Pangolins</li></a>
<li>
  <ul class=menu-chapter>
    <a href=middleman.html><li>Chapter 1 : The Middleman</li></a>
    <a href=boatman.html><li>Chapter 2 : The Boatman</li></a>
    <a href=smuggler.html><li>Chapter 3 : The Smuggler</li></a>
    <a href=trail-malaysia.html><li>Chapter 4 : Follow The Trail Of A Smuggled Pangolin in Malaysia</li></a>
    <a href=policeman.html><li>Chapter 5 : The Policeman</li></a>
    <a href=waitingwife.html><li>Chapter 6 : The Waiting Wife</li></a>
    <a href=routes.html><li>Chapter 7 : The Secret Pangolin Smuggling Routes Around The World</li></a>
    <a href=socialmedia-star.html><li>Chapter 8 : The Social Media Star</li></a>
    <a href=authorities.html><li>Chapter 9 : The Authorities</li></a>
    <a href=doctors.html><li>Chapter 10 : The Two Doctors</li></a>
    <a href=recipes.html><li>Chapter 11 : The No-Pangolin Recipes</li></a>
    <a href=hunters.html><li>Chapter 12 : The Hunters</li></a>
    <a href=forest.html><li>Chapter 13 : The Forest</li></a>
    <a href=rainies-song.html><li>Rainie’s Song</li></a>
  </ul>
</li>
  <a href=quiz.html><li>Quiz: Which Pangolin Protector Are You?</li></a>
  <a href=about.html><li>About this project</li></a>
  <a href=`+'https://www.youtube.com/playlist?list=PLbewG9OWqkEkepA5Cadc112nD7e8FpcRo'+` target=_blank><li>Watch the videos</li></a>
</ul>
</div>`;

let modalBox = `
<div id="myModal" class="modal">

  <div class="modal-content">
    <span class="close">&times;</span>
    <p>SHARE</p>
    <a href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Frage.com.my%2Fpangolin" target="_blank"><i class="icon ion-logo-facebook"></i></i></a>
    <a href="http://twitter.com/share?url=http%3A%2F%2Frage.com.my%2Fpangolin" target="_blank"><i class="icon ion-logo-twitter"></i></a>
    <a onclick class="btn-link" data-clipboard-text="http://www.rage.com.my/pangolin"><i class="icon ion-md-link"></i></i></a>
  </div>

</div>`

// let orientation = `<div class="full-orientation"><img src=/menu/rotate.gif><button class="plain-text">OR READ PLAIN-TEXT VIEW</button></div>`;
// let loader = `<div class="loader"><img src=/menu/rainie-sleeping.png></div>`;

$( window ).on('load',function() {
  $(".loader").fadeOut("slow");
  $('body').append(menu);
  $('body').append(modalBox);
  // $('body').append(orientation);

  $('#burger-icon').on('click', function(e){
    $(this).toggleClass('open-icon');
    $('.menu').toggleClass('open-menu');
  });

  $("#modal-btn").on('click', function (){
      $('#myModal').css('display', 'block');
  });

  $('.close').on('click', function(){
    $('#myModal').css('display','none');
  });

});
