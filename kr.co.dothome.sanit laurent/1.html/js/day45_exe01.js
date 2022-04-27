$(function(){
    var i = 0;
    var btn1 = $('.sildeView>.btns>.btn');
    var txtLi = $('.texts>li');
    var sgsd = $('.sildeGroup>.silde');
    // $('.sildenum').find('span:eq(1)').text(sgsd.length);
    btn1.eq(1).click(function(){
        // i++;
        // i = i%sgsd.length;
        // console.log(i);
        // if(i>=5){
        //     i=5;
        // }
        // $('.sildeGroup').css('marginLeft', i * -100+'%');
        // i 값과 1을 더해주면 즉 i가 함수적용 할 때마다 +1 되니까 1씩 더 증가함
        // var sp1 = $('span:eq(0)').find('span:eq(0)').text();
        // $('.sildenum').find('span:eq(0)').text(i+1+sp1);
        // $('.sildenum').find('span:eq(0)').text(i+1);
        // sildenum의 하위요소 중 스판의 첫번째 형제를 선택해서 그 첫번째 형제의 +1씩 해준다
        // $('.sildeGroup').find('.silde:first').fadeIn(500,function(){
        //     // alert('사라졌다!');
        //     $(this).appendTo($('.sildeGroup'));
        // });
        $('.sildeGroup').find('.silde:first').fadeOut(0,function(){
            // alert('사라졌다!');
            $(this).appendTo($('.sildeGroup'));
            $(this).fadeIn(500);
        });
    });
    btn1.eq(0).click(function(){
        // i--;
        // i = (sgsd.length+i)%sgsd.length;
        // console.log(i)
        // $('.sildeGroup').css('marginLeft', i * -100+'%');
        // $('.sildenum').find('span:eq(0)').text(i+1);
        $('.sildeGroup').find('.silde:last').fadeOut(500,function(){
            // alert('사라졌다!');
            $(this).prependTo($('.sildeGroup'));
            $(this).fadeIn(500);
        });
    });

    txtLi.even().click(function(){
        txtLi.removeClass('show');
        $(this).addClass('show');
    });

});