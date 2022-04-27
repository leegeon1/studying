$(function(){
    var i=0;
    $('button:first').click(function(){
        // $('.article').first().fadeIn(1000);
        $('.article').first().appendTo($('.artGroup'));
    });
    $('button:last').click(function(){
        // $('.article').fadeOut(1000);
        $('.article').last().prependTo('.artGroup');
    });
});