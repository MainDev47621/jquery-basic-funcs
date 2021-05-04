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



    // Click event for page mask and code modals

    // Page mask
    $('#page-mask').on('click', () => {
        $('#page-mask').fadeOut('fast');
        $('.code-modal').hide();
        $('body').css('overflow', 'visible');
    });

    $('.code-modal').on('click', () => {
        $('#page-mask').fadeOut('fast');
        $('.code-modal').hide();
        $('body').css('overflow', 'visible');
    });

    // Show/hide/toggle modal
    $('.view-code-btn-1').on('click', () => {
        $('#page-mask').fadeIn('fast');
        $('body').css('overflow', 'visible');
        $('.toggle-modal').css('display', 'flex');
    });

    // Fade modal
    $('.view-code-btn-2').on('click', () => {
        $('#page-mask').fadeIn('fast');
        $('body').css('overflow', 'visible');
        $('.fade-modal').css('display', 'flex');
    });

    // Slide modal
    $('.view-code-btn-3').on('click', () => {
        $('#page-mask').fadeIn('fast');
        $('body').css('overflow', 'visible');
        $('.slide-modal').css('display', 'flex');
    });
});