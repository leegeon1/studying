$(function(){
    var i = 0;

    // 인덱스슬라이드
    $('.paging>li').click(function(){
        $('.paging>li').removeClass('show');
        $(this).addClass('show');

        var ind = $(this).index();
        $('.artView').css('margin-top',ind * -500+'px');
        console.log(ind)
        i = ind;
    });  
        
    $('.section>button').eq(0).click(function(){
        i--;
        if(i<=0){
            i=0;
        }
        $('.paging>li').removeClass('show');
        $('.paging>li').eq(i).addClass('show');
        $('.artView').css('margin-top',i * -500+'px');
    });
    $('.section>button').eq(1).click(function(){
        i++;
        if(i>=4){
            i=4;
        }
        $('.paging>li').removeClass('show');
        $('.paging>li').eq(i).addClass('show');
        $('.artView').css('margin-top',i * -500+'px')
    });


    // 슬라이드

    $('.indSilde>button').eq(0).click(function(){
        i--;
        if(i<=0){
            i=0;
        }
        console.log(i)
        // var ind = (this).index()
        $('.sildeView').css('margin-left',i * -100+'%')
    });
    $('.indSilde>button').eq(1).click(function(){
        i++;
        if(i>=4){
            i=4;
        }
        console.log(i)
        // var ind = (this).index()
        $('.sildeView').css('margin-left',i * -100+'%')
    });

    // 썸네일 제작
    $('.thumbnails>.article').click(function(){
        var img = $(this).css('background-image');
        $('.thumbView').css('background-image',img);
        
    });
    // 썸네일 슬라이드
    $('.thumbArtnails>.article').click(function(){
        var ind = $(this).index();
        $('.thumbArtView').css('margin-left',ind * -100+'%',)
    });
});