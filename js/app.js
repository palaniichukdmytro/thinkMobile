$(document).foundation();
$(document).ready(function() {
    $("#owl-carousel").owlCarousel({
        navigation: true,

        items: 4,
        itemsCustom: false,
        itemsDesktop: [1000, 4],
        itemsDesktopSmall: [969, 2],
        itemsTablet: [749, 1],
        singleItem: false,
        itemsScaleUp: false,
        navigationText: [
            "<li class='slider-arrow-left'></li>",
            "<li class='slider-arrow-right'></li>"
        ]
    });
})
