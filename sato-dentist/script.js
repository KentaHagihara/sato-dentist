$(function(){
    $(window).scroll(function(){
        $('.header-top').each(function(){
            var scroll = $(window).scrollTop();
            if(scroll > 5){
                $('.header-top-disappear').addClass('hide');
                $('.remain-left').addClass('to-right');
                $('.header-right').addClass('to-left');
                $('.header-top-remain').addClass('scroll');
                $('.first').addClass('hide');
                $('.second').removeClass('hide');
                $('.remain-right').css('margin-top','unset');
                $('.header-middle').css('margin','600px 0 0 100px');
                $('.header-middle').css('top','0');
            } else {
                $('.header-top-disappear').removeClass('hide');
                $('.remain-left').removeClass('to-right');
                $('.header-right').removeClass('to-left');
                $('.header-top-remain').removeClass('scroll');
                $('.first').removeClass('hide');
                $('.second').addClass('hide');
                $('.remain-right').css('margin-top','-100px');
                $('.header-middle').css('margin','250px 0 0 100px')               
            }
        })
    })

    
    $(function(){
        var positionHMR = $('.header-middle-right').offset();
        var scroll = $(window).scrollTop();
        if(scroll > positionHMR){
            $('.header-middle-right').addClass('header-middle-right-fix');
        }
    })
});
