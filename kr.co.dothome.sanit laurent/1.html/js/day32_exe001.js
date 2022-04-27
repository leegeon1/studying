$(function(){
    var ag = $('.artGroup');
    var btn = $('.content.cnt04 .section .btn');
    var pert = $('.per .pert');
    var i = 0;

    ag.css({marginLeft:'-30%'})

    btn.click(function(){
        i++;
        pert.css({width : '25%'});
        
        ag.animate({
            marginLeft : '0%'
        },500,function(){
            ag.find('.article:last').prependTo(ag);
            ag.css({marginLeft : '-30%'});
        });
        if(i > 4){
            i = 0;
        }
        pert.css({width : i * 25+'%'});
    });
});
