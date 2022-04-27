$(function(){
    $('.artRight>.texts>h5').click(function(){
        $('.artRight>.texts>h5').removeClass('show');
        $(this).addClass('show');
    })
    $('.artBtm .image').click(function(){
        var img = $(this).css('background-image');
        $('.artTop').css('background-image',img);
    });
});