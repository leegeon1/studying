$(function(){
    var btn = $('.btn');
    var ag = $('.artGroup');
    var pg = $('.paging');
    var ind = 0;

    
    
    function right(){
        ag.animate({
            marginLeft : '-200%'
        },500,function(){
            ag.find('article:eq(0)').appendTo(ag);
            ag.css({
                marginLeft : -100+'%'
            });
            ind = ag.find('article:eq(1)').attr('data-num');
            pg.find('li').removeClass('show');
            pg.find('li').eq(ind).addClass('show');
        });
    };
    
    function left(){
        ag.animate({
            marginLeft : 0+'%'
        },500,function(){
            ag.find('article:last').prependTo(ag);
            ag.css({
                marginLeft : -100+'%'
            });
            ind = ag.find('article:eq(1)').attr('data-num');
            pg.find('li').removeClass('show');
            pg.find('li').eq(ind).addClass('show');
        });
    };
    
    // 기초세팅
    ag.css({marginLeft : -100+'%'});

    // 작동
    btn.first().click(left);
    btn.last().click(right);
    
    // 이벤트
    pg.find('li').click(function(){
        var now = $(this).index();
        if(ind < now){
            for (var i = ind; i < now; i++){
                console.log(i);
                console.log(now);
                right();
            }
        }else{
            for (var i = now; i < ind; i++){
                console.log(i);
                console.log(ind);
                left();
            }
        }   
    });


        // 오른쪽버튼

        // i++;
        // i = i%at.length;
        // ag.css({
        //     marginLeft : i * -100+'%'
        // });
        // ag.animate({
        //     marginLeft : -200+'%'
        // },500,function(){
        //     ag.find('article:eq(0)').appendTo(ag);
        //     ag.css({
        //         marginLeft : -100+'%'
        //     });
        // });
        // ind = ag.find('article:eq(1)').attr('data-num');
        // pg.find('li').removeClass('show');
        // pg.find('li').eq(ind).addClass('show');




        // 왼쪽버튼


        // i++;
        // i = (at.length+i)%at.length;
        // ag.css({
        //     marginLeft : i * -100+'%'
        // });
        // pg.find('li').removeClass('show');
        // pg.find('li').eq(i).addClass('show');
    //     ag.animate({
    //         marginLeft : 0+'%'
    //     },500,function(){
    //         ag.find('article:last').prependTo(ag);
    //         ag.css({
    //             marginLeft : -100+'%'
    //         });
    //     });
    //     ind = ag.find('article:eq(1)').attr('data-num');
    //     pg.find('li').removeClass('show');
    //     pg.find('li').eq(ind).addClass('show');
    // });
    // pg.find('li').click(function(){
    //     pg.find('li').removeClass('show');
    //     $(this).addClass('show');
    //     var ind = $(this).index();
    //     ag.css({
    //         marginLeft : ind * -100+'%'
    //     });
    //     i = ind;
    // });
});