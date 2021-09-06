let temp = true;
$('.burger').click(function(){
    
   temp = !temp;
    $('.mob-menu').toggle('300');
    if(!temp){
        $('#burg').removeClass('fa-bars');
        $('#burg').addClass('fa-close');
      

    } else{
        $('#burg').addClass('fa-bars');
        $('#burg').removeClass('fa-close');



    }
});


if($(window).innerWidth() >= 1100) {
    window.onscroll = function (){
        if(window.pageYOffset >= 800 && window.pageYOffset<=2500){
          $('.map-settings').addClass('fixid');
          $('.main-container').addClass('other-container')
    
        }
        else{
          $('.map-settings').removeClass('fixid');
          $('.main-container').removeClass('other-container')

        }
    }
}else{
    $('.map-settings').removeClass('fixid');
    $('.main-container').css("justify-content", "center");
    $('.main-container').css("margin-left", "0px");
}


$('#register').click(function(){
    $('#id01').show();
});
$('#plc-order').click(function(){
    $('#id05').show();
});
$('#cansle').click(function(){
    $('#id06').show();
});
$('#adpro').click(function(){
    $('#id02').show();
});
$('#comadd').click(function(){
    $('#id04').show();
});
$('#nxmore').click(function(){

    $('#log-1').hide();
    $('#log-2').show();

});
$('#goin').click(function(){

    $('#goacc').hide();
    $('#gocode').show();

});
$('#nxl').click(function(){

    $('#log-2').hide();
    $('#log-3').show();

});
$('#login').click(function(){
    $('#id03').show();
});
$('.customer').click(function(){

    $('#mod-1').hide();
    $('#mod-2').show();

})
$('#email').click(function(){
    $('#mod-2').hide();
    $('#mod-3').show();

})
$('#add-account').click(function(){
    $('#mod-3').hide();
    $('#mod-4').show();

});
$('#nxt').click(function(){
    $('#mod-4').hide();
    $('#mod-5').show();

});
$('#send-part').click(function(){
    $('#mod-5').hide();
    $('#mod-6').show();

})
$('#confirm').click(function(){
    $('#mod-6').hide();
    $('#mod-7').show();

})
$('#cl-cod').click(function(){
    $('#mod-7').hide();
    $('#mod-8').show();

});
$('#chg').click(function(){
    $('#mod-8').hide();
    $('#mod-9').show();

})
$('.cat-box').click(function(){
    $(this).next().toggle(300);
    $(this).children('span').toggleClass('rotate')
});
$('#button').click(function () {
    $("input[type='file']").trigger('click');
});

$("input[type='file']").change(function () {
    $('#val').text(this.value.replace(/C:\\fakepath\\/i, ''))
})

;
$('#atch').click(function () {
    $("input[type='file']").trigger('click');
});
$("input[type='file']").change(function () {
    $('#file-val').text(this.value.replace(/C:\\fakepath\\/i, ''))
});
$('.tl-box').click(function(){
    $('.tool-down').toggle();
});
$('.dy').click(function(){
    $('.dy-box').toggle();
});

var mySwiper = new Swiper ('.slider-main', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay:false,
      slidesPerView: 4,
  
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        // when window width is <= 499px
        310: {
            slidesPerView: 1,
          
        },
        // when window width is <= 999px
        999: {
            slidesPerView: 4,
        }
    }
  });
