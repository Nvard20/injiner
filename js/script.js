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

// $('.quest').click(function(){
//     temp = !temp;
//     if(!temp){
//     $(this).children('.box-info').show();
// }else{
//     $(this).children('.box-info').hide();

// }

// });
if($(window).innerWidth() >= 1100) {
    window.onscroll = function (){
        if(window.pageYOffset >= 800 && window.pageYOffset<=2410){
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


//onclick="document.getElementById('id01').style.display='block'"
$('#register').click(function(){
    $('#id01').show();
});
$('#adpro').click(function(){
    $('#id02').show();
});
$('#nxmore').click(function(){

    $('#log-1').hide();
    $('#log-2').show();

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