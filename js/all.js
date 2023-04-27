$(document).ready(function(){

    function showBtnCondition(){
        if ($(this).scrollTop() > 800) {
            $('.gotopicon').fadeIn();
        }   else {
                $('.gotopicon').fadeOut();
            }
    };
    $(window).scroll(showBtnCondition);

    $('.gotopicon').click(function(e){
        e.preventDefault();
        $('html,body').animate({scrollTop:0},1000);
    });

});