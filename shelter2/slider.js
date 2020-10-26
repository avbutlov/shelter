if (window.matchMedia('(min-width: 1280px)').matches) {

    function start_slick() {
        $(".pet-slider").slick({
            arrows: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
        });
    }
    setTimeout(start_slick, 1000);

}


if (window.matchMedia('(max-width: 768px)').matches) {
    function start_slick3() {
        $(".pet-slider").slick({
            arrows: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
        });
    }
    setTimeout(start_slick3, 1000)

}


if (window.matchMedia('(max-width: 1279px)').matches) {
    function start_slick2() {
        $(".pet-slider").slick({
            arrows: true,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 2,
        });
    }
    setTimeout(start_slick2, 1000)

}




window.addEventListener('resize', function() {
    document.location.reload()

})