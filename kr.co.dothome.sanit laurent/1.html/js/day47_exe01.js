$(function(){
    var btn = $('.btns');
    var ag = $('.artGroup');
    // 초기설정
    ag.find('.article:last').prependTo(ag);
    ag.css({marginLeft : '-100%'});

    btn.find('button').first().click(function(){
        ag.animate({
            // 여기엔 css가 들어옴
            marginLeft: '0%'

        },500,function(){
            ag.find('.article:last').prependTo(ag);
            ag.css({
                marginLeft : '-100%'
            });
        });
    });
    btn.find('button').last().click(function(){
        ag.animate({
            marginLeft: '-200%',

        },500,function(){
            ag.find('.article:first').appendTo(ag);
            ag.css({
                marginLeft : '-100%'
            });
        });
    });
});