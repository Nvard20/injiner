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
})
$('.customer').click(function(){

    $('#mod-1').hide();
    $('#mod-2').show();

})
$('#email').click(function(){
    $('#mod-2').hide();
    $('#mod-3').show();

})
