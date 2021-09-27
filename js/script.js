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

$('.opnumb').click(function(){
    $(this).hide();
$(this).next('.allnumber').show();
});

$('.dt').click(function(){
    $('.dt').removeClass('red ') ;
    $('.dt').find('img').removeClass('rotate');

    $(this).addClass('red');
    $(this).find('img').addClass('rotate');

});


$('.msg-close').click(function(){
    $('.task').hide();
});
$('.otkl').click(function(){
    $('.task').show();

});

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

});
$('.catdrop').click(function(){
    $(this).next().toggle(300);
    $(this).children('span').toggleClass('rotate')
});
$('#butt').click(function () {
    $("input[type='file']").trigger('click');
});

$("input[type='file']").change(function () {
    $('#val2').text(this.value.replace(/C:\\fakepath\\/i, ''))
})

;
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
$('#otmenit').click(function(){
    $('#id10').show()
});
$('.change_img').click(function(){
    $('#photo-ch').show();
});
$('.parametrs-link ').on('click', function () {

  
    $('.parametrs-link ').removeClass('active ') ;
   $(this).addClass('active')

  
});
$('.active-div ').on('click', function () {

  
    $('.active-div ').removeClass('active ') ;
   $(this).addClass('active')

  
});
$('#customer').click(function(){
    $('#customer-data').show();
    $('#myorder-data').hide();
    $('#chat-data').hide();
    $('#myresponse-data').hide();
    $('#mailcontainer').hide();
    $('#favorite-data').hide();

});
$('#chat').click(function(){
    $('#chat-data').show();
    $('#myorder-data').hide();

    $('#customer-data').hide();
    $('#myresponse-data').hide();
    $('#mailcontainer').hide();
    $('#favorite-data').hide();
    $('#perf-done').hide();
});
$('#my-order').click(function(){
    $('#customer-data').hide();

    $('#chat-data').hide();
    $('#myorder-data').show();
    $('#myresponse-data').hide();
    $('#mailcontainer').hide();
    $('#favorite-data').hide();


});
$('#my-response').click(function(){
    $('#customer-data').hide();

    $('#chat-data').hide();
    $('#myorder-data').hide();
    $('#mailcontainer').hide();

 $('#myresponse-data').show();
 $('#favorite-data').hide();
$('#work-container').hide();
$('#perf-done').hide();
});
$('#my-mailings').click(function(){
    $('#customer-data').hide();

    $('#chat-data').hide();
    $('#myorder-data').hide();
 $('#myresponse-data').hide();
 $('#favorite-data').hide();

$('#mailcontainer').show();
});
$('#favoirites').click(function(){
    $('#customer-data').hide();

    $('#chat-data').hide();
    $('#myorder-data').hide();
 $('#myresponse-data').hide();
$('#mailcontainer').hide();
$('#favorite-data').show();
});
$('#custperform').click(function(){
    $('#perf-done').show();
    $('#work-container').hide();

    $('#chat-data').hide();
 $('#myresponse-data').hide();

});
$('#mywork').click(function(){
    $('#perf-done').hide();

    $('#chat-data').hide();
    $('#work-container').show();
 $('#myresponse-data').hide();

});
$('#ordertek').click(function(){
    $('.tech-2').hide();
    $('.tech-1').show();

});
$('#vip').click(function(){
    $('#worktek').hide();
    $('#workvip').show();
    $('#workphoto').hide();
});
$('#tek').click(function(){
    $('#worktek').show();
    $('#workvip').hide();
    $('#workphoto').hide();

});
$('#ph').click(function(){
    $('#worktek').hide();
    $('#workvip').hide();
    $('#workphoto').show();

});
$('#myorder').click(function(){
    $('.tech-1').hide();
    $('.tech-2').show();

});
$(function() {
    $("#sortableImgThumbnailPreview").sortable({
     connectWith: ".RearangeBox",
    
        
      start: function( event, ui ) { 
           $(ui.item).addClass("dragElemThumbnail");
           ui.placeholder.height(ui.item.height());
   
       },
        stop:function( event, ui ) { 
           $(ui.item).removeClass("dragElemThumbnail");
       }
    });
    $("#sortableImgThumbnailPreview").disableSelection();
});




document.getElementById('files').addEventListener('change', handleFileSelect, false);

function handleFileSelect(evt) {

var files = evt.target.files; 
var output = document.getElementById("sortableImgThumbnailPreview");

// Loop through the FileList and render image files as thumbnails.
for (var i = 0, f; f = files[i]; i++) {

// Only process image files.
if (!f.type.match('image.*')) {
continue;
}

var reader = new FileReader();

// Closure to capture the file information.
reader.onload = (function(theFile) {
return function(e) {
  // Render thumbnail.
   var imgThumbnailElem = "<div class='RearangeBox imgThumbContainer'><i class='material-icons imgRemoveBtn' onclick='removeThumbnailIMG(this)'>X</i><div class='IMGthumbnail' ><img  src='" + e.target.result + "'" + "title='"+ theFile.name + "'/></div><div class='imgName'>"+ theFile.name +"</div></div>";
            
            output.innerHTML = output.innerHTML + imgThumbnailElem; 
  
};
})(f);

// Read in the image file as a data URL.
reader.readAsDataURL(f);
}
}

function removeThumbnailIMG(elm){
elm.parentNode.outerHTML='';
}


var mySwiper = new Swiper ('.mySwiper', {
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
