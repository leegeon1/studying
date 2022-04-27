$(function(){
    var btn = $('.btns>.btn');
    var atg = $('.artGroup');
    var txg = $('.textGroup');
    var pag = $('.paging>li');
    var pt = $('.section>h5')
    var ps = -100;
    var i = 0;
    
    var auto = setInterval(rightbtn,1000);

    pt.first().click(function(){
        clearInterval(auto);
        console.log(auto);
        pt.last().find('i').css({
            display : 'block'
        });
        pt.first().find('i').css({
            display : 'none'
        });
    });
    pt.last().click(function(){
        auto = setInterval(rightbtn,1000);
        console.log(auto);
        pt.first().find('i').css({
            display : 'block'
        });
        pt.last().find('i').css({
            display : 'none'
        });
    });
    btn.eq(1).click(leftbtn);
    btn.last().click(rightbtn);
    pag.click(indbtn);




    function leftbtn(){
        i--;
        if(i<=0){
            i = (5+i)%5;
        }
        atg.css({
            marginLeft : i * ps+'%'
        });
        txg.css({
            marginLeft : i * ps+'%'
        });
        $('.paging>li').removeClass('show');
        $('.paging>li').eq(i).addClass('show');
    };
    function rightbtn(){
        i++;
        if(i>=5){
            i = i%5;
        }
        atg.css({
            marginLeft : i * ps+'%'
        });
        txg.css({
            marginLeft : i * ps+'%'
        });
        $('.paging>li').removeClass('show');
        $('.paging>li').eq(i).addClass('show');
    };
    function indbtn(){
        var ind = $(this).index();
        $('.paging>li').removeClass('show');
        $(this).addClass('show');

        atg.css({
            marginLeft : ind * ps+'%'
        });
        txg.css({
            marginLeft : ind * ps+'%'
        });
        i = ind;
    };
});