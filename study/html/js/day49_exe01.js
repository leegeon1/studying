$(function(){

    var btn = $('button');
    var atc = $('.article');
    var pag = $('.paging');
    var wd = $(window).width();
    
    var i = 0;
    var mv = 0;
    
    if(wd > 1024){       
        mv = -100;
    }else if(wd >= 420 && wd <= 1024){
        mv = -50;
    }else{
        mv = -100;
    }
    function leftSlide(){
        i--;
        if(i<=0){
            i = 0;
        }
        atc.css({
            marginLeft : i * mv+'%'
        })
        $('li').removeClass('show');
        $('li').eq(i).addClass('show');
    };
    function rightSlide(){
        i++;
        i = i%6;
        if(wd >= 420 && wd <= 1024){
            if(i>=4){
                i=4;
            }
        }
        if(i>=5){
            i = 5;
        }
        atc.css({
            marginLeft : i * mv+'%'
        })
        $('li').removeClass('show');
        $('li').eq(i).addClass('show');
    }
    function pagSlide(){
        $('li').removeClass('show');
        $(this).addClass('show');
        
        var ind = $(this).index();
        
        atc.css('margin-left',ind * mv+'%');
        i = ind;
    };
    btn.first().click(function(){
        clearInterval(auto);
    });
    
    btn.last().click(rightSlide);
    var auto = setInterval(rightSlide,2000);
    // setTimeout(rightSlide,500);

    pag.find('li').click(pagSlide);
});