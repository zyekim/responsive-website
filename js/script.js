'use strict';

$(function(){

    //메인비쥬얼
    $('.slickSlider').slick();

    //상단메뉴 고정
    let header = $('#header');
    $(window).scroll(function(){
        if($(this).scrollTop()>0){
            header.addClass('sticky');
        }else{
            header.removeClass('sticky');
        }
    });


});//script

