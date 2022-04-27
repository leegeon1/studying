$(function(){
    var btn = $('.artView .btn');
    var ag = $('.artGroup');
    var mv = -16.6;
    var onNoff = false;
    var events = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';
    
    var i = 0;
    
    
    $(window).scroll(function(){
        var now = $(this).scrollTop();
        if(now>=1){
            $('.hdrWrap').addClass('fix');
        }else{
            $('.hdrWrap').removeClass('fix');
        };
    });
    
    
    btn.first().click(function(){
        if(!onNoff){
            ag.animate({
                marginLeft : mv+'%'
            },500,function(){
                ag.find('.article:last').prependTo(ag);
                ag.css({marginLeft : '0%'});
            });
            onNoff = true;
        };
    });
    btn.last().click(function(){
        if(!onNoff){
            ag.animate({
                marginLeft : mv+'%'
            },500,function(){
                ag.find('.article:first').appendTo(ag);
                ag.css({marginLeft : '0%'});
            });
            onNoff = true;
        };
    });
    ag.find('.article').on(events,function(){
        onNoff = false;
    });
});