$(function(){

// 로드 안에 ''사용하고 폴더 경로는 자동완성안되니 잘 입력해주면 됨
// 가상서버 꼭 필요한 작업 - 모듈화
$('.hdr').load('../inc/header.html', function(){

    // 헤더에서 발생할 이벤트
    var loc = [];
    var ind = 0;


    for(var i = 0; i < $('body>div').length; i++){
        loc[i] = $('body>div').eq(i).offset().top;
        console.log(loc);
    }
    $('.mnTopWrap .mnTop .Left nav h4').click(function(){
        ind = $(this).index();
        $('html').animate({scrollTop:loc[ind]},500);
    });

    
});

$('.ftr').load('../inc/footer.html');

    // 헤더에서 발생할 이벤트

});

