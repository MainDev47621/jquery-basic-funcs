$(document).ready(() => {

    // Click events for th show(), hide(), and toggle() function buttons
    $('.show-btn').on('click', () => {
        $('.image-one').show();
    });

    $('.hide-btn').on('click', () => {
        $('.image-one').hide();
    });

    $('.toggle-btn').on('click', () => {
        $('.image-one').toggle();
    });

    // Click events the fadeIn(), fadeOut(), and fadeToggle() function buttons
    $('.fade-in-btn').on('click', () => {
        $('.image-two').fadeIn();
    });

    $('.fade-out-btn').on('click', () => {
        $('.image-two').fadeOut();
    });

    $('.fade-toggle-btn').on('click', () => {
        $('.image-two').fadeToggle();
    });

    // Click events for the slideDown(), slideUp(), and slideToggle() function buttons
    $('.slide-down-btn').on('click', () => {
        $('.image-three').slideDown();
    });

    $('.slide-up-btn').on('click', () => {
        $('.image-three').slideUp();
    });

    $('.slide-toggle-btn').on('click', () => {
        $('.image-three').slideToggle();
    });
});