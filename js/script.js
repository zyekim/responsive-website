'use strict';

$(function(){

    //메인비쥬얼
    $('.slickSlider').slick({
        dots: true,
        autoplay:true,
    });

    $('.pause').on('click',function(){
        $(this).css('display','none');
        $('.play').css('display','block');
        $('.slickSlider').slick('slickPause');
    });
    
    $('.play').on('click',function(){
        $(this).css('display','none');
        $('.pause').css('display','block');
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

