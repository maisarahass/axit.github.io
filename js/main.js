$(document).ready(function(){

  'use strict';
    
    $(window).scroll(function() {
    var navbar = $('.navbar');
   
        if($(window).scrollTop() >= navbar.height() )
            {
                navbar.addClass('changestyle');
            }
        else
            {
                navbar.removeClass('changestyle');
            }
    });
    
    $('.tab-switch li').click(function(){
        $(this).addClass('selected').siblings().removeClass('selected');
        $('.tabs-section .tabs-contant > div').hide();
        $($(this).data('class')).show();
        
    });
});
    
