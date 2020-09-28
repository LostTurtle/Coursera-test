$(document).ready(function() {
    $('#mycarousel').carousel({interval: 1000})
});
$('#carousel-pause').click(function() {
    $('#mycarousel').carousel('pause')
});
$('#carousel-play').click(function() {
    $('#mycarousel').carousel('play')
});
$(document).ready(function (){
    $('#mycarousel').carousel({
        pause: "hover"
    })
});