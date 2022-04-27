$(function(){
    var i = 0;
    var btn = $('button');
    var atc = $('.article');
    var pag = $('.paging');

    btn.last().click(function(){
        i++;
        if(i>=5){
            i = 5;
        }
        atc.css({
            marginLeft : i * -100+'%'
        })
        $('li').removeClass('show');
        $('li').eq(i).addClass('show');
    });


    btn.first().click(function(){
        i--;
        if(i<=0){
            i = 0;
        }
        atc.css({
            marginLeft : i * -100+'%'
        })
        $('li').removeClass('show');
        $('li').eq(i).addClass('show');
    });


    pag.find('li').click(function(){
        $('li').removeClass('show');
        $(this).addClass('show');

        var ind = $(this).index();

        atc.css('margin-left',ind * -100+'%');
        i = ind;
        
    });
});