$(function(){
    var i = 0;
    var thumbImg =  $('.thumb>li');
    var thumbView = $('.thumbView');
    var acoLi = $('.aco>li');
    var btn = $('.btn');
    thumbImg.click(function(){
        var ind = $(this).index()
        var img = $(this).css('background-image');
        thumbView.css('background-image',img);
        console.log(ind)
        dat=ind;
    });
    
    acoLi.even().click(function(){
        var dat = $(this).attr('data-num');
        acoLi.removeClass('show');
        $(this).addClass('show');
        var img = $('.thumb>li').eq(dat).css('background-image');
        thumbView.css('background-image',img);
        console.log(dat);
        ind=dat;

        acoLi.even().find('span:eq(0)').text('+');
        $(this).find('span:eq(0)').text('-'); 
    });
    btn.eq(0).click(function(){
        var txt = $(this).text();
        acoLi.even().find('span:eq(1)').text(txt);
    });
    btn.eq(1).click(function(){
        var txt = $(this).text();
        acoLi.even().find('span:eq(1)').text(txt);
    });
    // find 는 하위요소를 찾는 애<
});