$(document).ready(function() {
    $('#mycarousel').carousel({interval: 2000})
    $('#carouselButton').click(function() {
        if ($('#carouselButton').children('span').hasClass('fa-pause')) {
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        }
        else if ($('#carouselButton').children('span').hasClass('fa-play')) {
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
    });
    $(document).ready(function (){
        $('#mycarousel').carousel({
            pause: "hover"
        })
    });

    // modal codes

    $('#reservebutton').click(function (){
        $('#reserveModal').modal('toggle')
    });

    $('#cancelReservation').click(function (){
        $('#reserveModal').modal('hide')
    });

    //login modal

    $('#loginButton').click(function (){
        $('#loginModal').modal('toggle')
    });

    $('#cancelLogin').click(function (){
        $('#loginModal').modal('hide')
    });

    $('.close').click(function (){
        $('#loginModal, #reserveModal').modal('hide')
    });
});
