import _ from 'lodash';
import '../css/font.css';
import css from '../css/chapter9.css';
import '../css/chapter.css';
var $ = require("jquery");


$(document).ready(function(){
    $('input[type="radio"]').click(function(){
    	console.log('click');
        var inputValue = $(this).attr("value");
        var targetBox = $("." + inputValue);
        $(".caption").not(targetBox).hide();
        $(targetBox).show();
    });
});
