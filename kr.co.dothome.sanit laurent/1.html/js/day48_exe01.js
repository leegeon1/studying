$(function(){
    var btn = $('.btns');
    var ag = $('.artGroup');
    var pg = $('.paging');
    var i = 0;
    var events = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';
    var onOff = false;
    
    btn.find('button').last().click(function(){
        if(!onOff){
            i++;
            i = i%6;
            onOff = true;
        }
        ag.find('.article').css({width:'0'});
        ag.find('.article').eq(i).css({width: 'calc(100% / 6)'});
        pg.find('li').removeClass('show');
        pg.find('li').eq(i).addClass('show');
    });
    
    
    btn.find('button').first().click(function(){
        if(!onOff){
            i--;
            i = (6+i)%6;
            onOff = true;
        }
        ag.find('.article').css({width:'0'});
        ag.find('.article').eq(i).css({width: 'calc(100% / 6)'});
        pg.find('li').removeClass('show');
        pg.find('li').eq(i).addClass('show');
    });
    
    ag.find('.article').on(events,function(){
        onOff = false;
    });

    pg.find('li').click(function(){


        var ind = $(this).index();
        ag.find('.article').css({width:'0'});
        ag.find('.article').eq(ind).css({width: 'calc(100% / 6)'});


        pg.find('li').removeClass('show');
        $(this).addClass('show');


        i=ind;
        
    });
    
});