import _ from 'lodash';
import '../css/font.css';
import css from '../css/chapter10.css';
import '../css/chapter.css';
var $ = require("jquery");


// plain text button toggle

// $(".plain-text").on("click", function(e) {
//   $('.landscape').addClass('hide');
//   $('.full-orientation').removeClass('active');
//   $('.full-orientation').addClass('hide');
//   $('.portrait').addClass('active');
//   $('.portrait').removeClass('hide');
// });
//
// $(window).on("orientationchange", function(){
//   $('.landscape').removeClass('hide');
//   $('.landscape').addClass('active');
//   $('.portrait').removeClass('active');
//   $('.portrait').addClass('hide');
//   $('.full-orientation').removeClass('hide');
//   $('.full-orientation').addClass('active');
//
// });

document.addEventListener("DOMContentLoaded",
        function() {
            var div, n,
                v = document.getElementsByClassName("youtube-player");
            for (n = 0; n < v.length; n++) {
                div = document.createElement("div");
                div.setAttribute("data-id", v[n].dataset.id);
                div.innerHTML = labnolThumb(v[n].dataset.id);
                div.onclick = labnolIframe;
                v[n].appendChild(div);
            }
        });

    function labnolThumb(id) {
        var thumb = '<img src="https://i.ytimg.com/vi/ID/hqdefault.jpg">',
            play = '<div class="play"></div>';
        return thumb.replace("ID", id) + play;
    }

    function labnolIframe() {
        var iframe = document.createElement("iframe");
        var embed = "https://www.youtube.com/embed/ID?autoplay=1";
        iframe.setAttribute("src", embed.replace("ID", this.dataset.id));
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("allowfullscreen", "1");
        this.parentNode.replaceChild(iframe, this);
    }
