function on_ng_ready(){
/*==============================================
    Transparent Navbar
    =============================================== */
    if($('.main-nav').is('.navbar-transparent')){
        if($(window).scrollTop() > 10){
                $('.main-nav').removeClass('navbar-transparent');
            }else{
                $('.main-nav').addClass('navbar-transparent');
            }
        $(window).scroll( function() {
            if($(window).scrollTop() > 10){
                $('.main-nav').removeClass('navbar-transparent');
            }else{
                $('.main-nav').addClass('navbar-transparent');
            }
        });
    }

    var $anim = $('.anim');
    $anim.waypoint(function(dirction) {
        console.log(dirction);
        if(dirction == "down")
            $anim.addClass("anim-show");
        else
            $anim.removeClass("anim-show")
    }, {offset: '100%'})

    var $whatido = $('.whatido');
    $whatido.waypoint(function(dirction) {
        console.log(dirction);
        if(dirction == "down")
            $whatido.addClass("anim-show");
        else
            $whatido.removeClass("anim-show")
    }, {offset: '100%'})
}
