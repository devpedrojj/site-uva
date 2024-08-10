$('.menu-mobile').toggle()
$('.menuz').click(function () {
    $(this).addClass('animate-icon')
    if ($(this).html() == '☰') {
        $(this).animate({
            opacity: 0
        }, 200, function () {
            $(this).html('✖').animate({
                opacity: 1
            }, 200)
        })
    } else {
        $(this).animate({
            opacity: 0
        }, 200, function () {
            $(this).html('☰').animate({
                opacity: 1
            }, 200)
        })
    }
    $('.menu-mobile').slideToggle('slow')
})

