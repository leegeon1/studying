$(function(){
    var i = 0;
    $('.accodian>li').click(function(){
        $('.accodian>li').removeClass('show');
        $(this).addClass('show');
    });
    // 2번문제
    $('button').eq(1).click(function(){
        i++;
        if(i>=9){
            i=9;
            $(this).css('opacity','0');
        }
        $('.sildeGroup').css('margin-left',i * -33.3+'%');
        $('button').eq(0).css('opacity','1');
    });
    $('button').eq(0).click(function(){
        i--;
        if(i<=0){
            i=0;
            $(this).css('opacity','0');
        }
        $('.sildeGroup').css('margin-left',i * -33.3+'%');
        $('button').eq(1).css('opacity','1');
    });
    // 3번 문제
    $('.paging>li').click(function(){
        $('.paging>li').removeClass('new');
        $(this).addClass('new');
        var num1 = $(this).index()
        $('.indSildeGroup').css('margin-left',num1 * -100+'%');
    });
    // 4번 문제
    $('.sircle>li').click(function(){
        $('.sircle>li').removeClass('on');
        $(this).addClass('on');
        var num1 = $(this).index()
        $('.SildeGroup').css('margin-top', num1 * -200+'px');
    });
});