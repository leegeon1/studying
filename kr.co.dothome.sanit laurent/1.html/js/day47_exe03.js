$(function(){
    var btn = $('.btns');
    var ag = $('.artGroup')
    ag.find('.article').last().prependTo(ag);
    ag.css('marginTop','-500px');

    btn.find('button').first().click(function(){
        ag.animate({
            marginTop : '-1000px'
        },500,function(){
        ag.find('.article').first().appendTo(ag);
        ag.css('marginTop','-500px');
        });
    });

    btn.find('button').last().click(function(){
        ag.animate({
            marginTop : '0px'
        },500,function(){
        ag.find('.article').last().prependTo(ag);
        ag.css('marginTop','-500px');
        });
    });
});