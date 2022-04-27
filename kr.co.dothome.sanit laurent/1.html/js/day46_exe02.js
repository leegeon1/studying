$(function(){
    var btn = $('.btns>.btn');
    var i = 0;
    var attr = $('.artpre>.image');
    $('h5').find('span:eq(1)').text(attr.length);
    btn.eq(1).click(function(){
        i++;
        i = i%attr.length;
        $('.artpre').find('.image:last').fadeOut(500,function(){
            $(this).prependTo('.artpre');
            $(this).fadeIn(500);
            $('h5').find('span:eq(0)').text(i+1);
        });
    });
    btn.eq(0).click(function(){
        i--;
        i = (attr.length+i)%attr.length;
        $('.artpre').find('.image:first').fadeOut(500,function(){
            $(this).appendTo('.artpre');
            $(this).fadeIn(500);
            $('h5').find('span:eq(0)').text(i+1);
        });
    });
    btn.eq(1).click(function(){
        $('.artap').find('.article:last').fadeOut(500,function(){
            $(this).prependTo('.artap');
            $(this).fadeIn(500);
        });
    });
    btn.eq(0).click(function(){
        $('.artap').find('.article:first').fadeOut(500,function(){
            $(this).appendTo('.artap');
            $(this).fadeIn(500);
        });
    });
});