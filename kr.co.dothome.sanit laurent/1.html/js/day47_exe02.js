$(function(){
    var btn = $('.btns')
    var ag = $('.artGroup');
    ag.find('.article:last').prependTo(ag);
    ag.css({
        marginLeft : '-100%'
    })
    btn.find('button').last().click(function(){
        ag.stop().animate({
            marginLeft : '0'
        },1000,function(){
            ag.find('.article:last').prependTo(ag);
            ag.css({
                marginLeft : '-100%'
            });
        });
    });
    btn.find('button').first().click(function(){
        ag.stop().animate({
            marginLeft : '-200%'
        },1000,function(){
            ag.find('.article:first').appendTo(ag);
            ag.css({
                marginLeft : '-100%'
            });
        });
    });
});