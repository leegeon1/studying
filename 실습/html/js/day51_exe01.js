$(function(){
    $('.top').click(function(){
        $('html,body').animate({ scrollTop: 0},500);
        // html 과 바디는 항상 동시선택 해줘야함 다른컴퓨터에는 호환이
        // 안될 수도 잇음
    });
});