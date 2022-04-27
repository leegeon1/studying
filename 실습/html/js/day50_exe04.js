$(function(){
    var btn = $('.artView .btn');
    var ag = $('.artGroup');
    var atc = $('.artGroup>.article');
    var i = 0;
    var mv = -16.6;
    var onOff = false;
    var events = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';
    
    
    
    $(window).scroll(function(){
        var now = $(this).scrollTop();
        console.log(now);
        if(now>=1){
            $('.hdrWrap').addClass('fix');
        }else{
            $('.hdrWrap').removeClass('fix');
        };
    });
    
    
    
    btn.last().click(function(){
        if(!onOff){
            ag.animate({
                marginLeft : '-16.6%'
            },500,function(){
                ag.find('.article:first').appendTo(ag);
                ag.css({marginLeft : '0%'});
            });
            onOff = true;
        };
    });
    ag.find('.article').on(events,function(){
        onOff = false;
    });
});