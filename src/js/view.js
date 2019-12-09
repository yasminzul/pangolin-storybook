import _ from 'lodash';
import css from '../css/view.css';
import '../css/swiper.min.css';
import './../js/plugin/swiper.min.js';

var $ = require("jquery");

function setCookie(cookieName,cookieValue)
    {
      var date = new Date();
      date.setTime(date.getTime()+(24*60*60*1000));
      document.cookie = cookieName + "=" + cookieValue + ";path=/;" + "SameSite=None; Secure";
    }
function getCookie(cookieName)
    {
      var name = cookieName + "=";
      var allCookieArray = document.cookie.split(';');
      for(var i=0; i<allCookieArray.length; i++)
      {
        var temp = allCookieArray[i].trim();
        if (temp.indexOf(name)==0)
        return temp.substring(name.length,temp.length);
      }
      return "";
    }

function checkCookie() {
  var choice = getCookie("chosen");
  console.log(choice);
  if (choice != "true" || choice != "" || choice != null) {
    $('.landscape').removeClass('hide');
    $('.landscape').addClass('active');
    $('.portrait').removeClass('active');
    $('.portrait').addClass('hide');
    $('.full-orientation').removeClass('hide');
    $('.full-orientation').addClass('active');

    $(".plain-text").on("click", function(e) {
      $('.landscape').removeClass('active');
      $('.landscape').addClass('hide');
      $('.full-orientation').removeClass('active');
      $('.full-orientation').addClass('hide');
      $('.portrait').addClass('active');
      $('.portrait').removeClass('hide');
        setCookie("chosen", "true");
    });
  }
    else if (choice == "true") {
      $('.landscape').removeClass('active');
      $('.landscape').addClass('hide');
      $('.full-orientation').removeClass('active');
      $('.full-orientation').addClass('hide');
      $('.portrait').addClass('active');
      $('.portrait').removeClass('hide');
        setCookie("chosen", "false");
    }

      $(window).on("orientationchange", function(){
        $('.landscape').removeClass('hide');
        $('.landscape').addClass('active');
        $('.portrait').removeClass('active');
        $('.portrait').addClass('hide');
        $('.full-orientation').removeClass('hide');
        $('.full-orientation').addClass('active');
      });

}

let menu = `<div id=burger-icon><span></span><span></span><span></span><span></span></div>
<a href=index.html><div id=home-btn><i class="icon ion-md-home"></i></div></a>
<div class=menu>
<table>
<tr>
  <td><a href=index.html><img src=menu/home@3x.png></a></td>
  <td><a href=about-pangolin.html><img src=menu/aboutpangolin@3x.png></a></td>
  <td><a href=chapter-1.html><img src=menu/middleman@3x.png></a></td>
  <td><a href=chapter-2.html><img src=menu/boatman@3x.png></a></td>
  <td><a href=chapter-3.html><img src=menu/smuggler@3x.png></a></td>
</tr>
<tr>
  <td><a href=chapter-5.html><img src=menu/followtrail@3x.png></a></td>
  <td><a href=chapter-4.html><img src=menu/policeman@3x.png></a></td>
  <td><a href=chapter-6.html><img src=menu/waitingwife@3x.png></a></td>
  <td><a href=chapter-8.html><img src=menu/routesmap@3x.png></a></td>
  <td><a href=chapter-9.html><img src=menu/socialmedia@3x.png></a></td>
</tr>
<tr>
  <td><a href=chapter-10.html><img src=menu/authorities@3x.png></a></td>
  <td><a href=chapter-11.html><img src=menu/twodoctors@3x.png></a></td>
  <td><a href=chapter-12.html><img src=menu/recipe@3x.png></a></td>
  <td><a href=chapter-13.html><img src=menu/hunters@3x.png></a></td>
  <td><a href=chapter-15.html><img src=menu/forest@3x.png></a></td>
</tr>
<tr>
  <td><a href=chapter-14.html><img src=menu/rainies@3x.png></a></td>
  <td><img src=menu/quiz@3x.png></td>
  <td><a href=about-project.html><img src=menu/aboutproject@3x.png></a></td>
  <td><a href=`+'https://globalstory.pangolinreports.com/'+` target=_blank><img src=menu/globalstory@3x.png></a></td>
  <td><img src=menu/share@3x.png></td>
</tr>
</table>
<ul>
<a href=index.html><li>Home</li></a>
<a href=about-pangolin.html><li>About The Pangolins</li></a>
<li>
  <ul class=menu-chapter>
    <a href=chapter-1.html><li>Chapter 1 : The Middleman</li></a>
    <a href=chapter-2.html><li>Chapter 2 : The Boatman</li></a>
    <a href=chapter-3.html><li>Chapter 3 : The Smuggler</li></a>
    <a href=chapter-5.html><li>Chapter 4 : Follow The Trail Of A Smuggled Pangolin in Malaysia</li></a>
    <a href=chapter-4.html><li>Chapter 5 : The Policeman</li></a>
    <a href=chapter-6.html><li>Chapter 6 : The Waiting Wife</li></a>
    <a href=chapter-8.html><li>Chapter 7 : The Secret Pangolin Smuggling Routes Around The World</li></a>
    <a href=chapter-9.html><li>Chapter 8 : The Social Media Star</li></a>
    <a href=chapter-10.html><li>Chapter 9 : The Authorities</li></a>
    <a href=chapter-11.html><li>Chapter 10 : The Two Doctors</li></a>
    <a href=chapter-12.html><li>Chapter 11 : The No-Pangolin Recipes</li></a>
    <a href=chapter-13.html><li>Chapter 12 : The Hunters</li></a>
    <a href=chapter-15.html><li>Chapter 13 : The Forest</li></a>
    <a href=chapter-14.html><li>Rainie’s Song</li></a>
  </ul>
</li>
  <li>Quiz: Which Pangolin Protector Are You?</li>
  <a href=about-project.html><li>About this project</li></a>
  <a href=`+'https://globalstory.pangolinreports.com/'+` target=_blank><li>The Pangolin Reports: Trafficked to Extinction</li></a>
</ul>
</div>`;


$( window ).on('load',function() {
  $(".loader").fadeOut("slow");
  checkCookie();
  $('body').append(menu);

  $('#burger-icon').on('click', function(e){
    $(this).toggleClass('open-icon');
    $('.menu').toggleClass('open-menu');
  });

});
