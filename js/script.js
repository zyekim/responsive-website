'use strict';

$(function(){

    //메인비쥬얼
    $('.slickSlider').slick({
        dots: true,
        autoplay:true,
    });

    $('.play').on('click',function(){
        $(this).addClass('on');
        $('.slickSlider').slick('slickPause');
    });
    $('.play.on').on('click',function(){
        $(this).removeClass('on');
        $('.slickSlider').slick('slickPlay');
    });

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

