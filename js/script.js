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

$('.quest').click(function(){
    temp = !temp;
    if(!temp){
    $(this).children('.box-info').show();
}else{
    $(this).children('.box-info').hide();

}

});
if($(window).innerWidth() >= 1100) {
    window.onscroll = function (){
        if(window.pageYOffset >= 800 && window.pageYOffset<=2410){
          $('.map-settings').addClass('fixid')
          $('.main-container').css("justify-content", "start");
          $('.main-container').css("margin-left", "110px");
    
        }
        else{
          $('.map-settings').removeClass('fixid');
          $('.main-container').css("justify-content", "center");
          $('.main-container').css("margin-left", "0px");
        }
    }
}else{
    $('.map-settings').removeClass('fixid');
    $('.main-container').css("justify-content", "center");
    $('.main-container').css("margin-left", "0px");
}
let text = document.getElementById('txt');
$("#search").keyup(function() {
text.innerHTML =$(this).val();
  });
