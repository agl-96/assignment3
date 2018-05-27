

$(document).ready(function(){
    $('#anchorTag').click(function(){
       
        var caption=prompt("enter caption");       
        var captiona=prompt("enter author name");       
        var captionb=prompt("enter main image");
        var captionc=prompt("enter user image");
         
        var cloned=$('#confirmatione').clone(true);
        
       cloned.find('#confirmation').text(caption);
       cloned.find('#confirmationa').text(captiona);
       cloned.find('#confirmationb').attr('src',captionb);
       cloned.find('#confirmationc').css('background-image','url('+captionc+')');

        $('#confirmationd').append(cloned);
        
        
    });
          });


