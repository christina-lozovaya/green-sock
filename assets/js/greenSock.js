(function($) {
    var header = $('header'),
        h1 = $('header h1'),
        h2 = $('header h2'),
        i = 0,
        intro = $('.intro'),
        img = $('header img'),
        listItem = $('header ul li'),
        tl = new TimelineLite(),
        tl = new TimelineLite(),  //paused timeLine for preloader
        buttons = $('header .buttons button'),
        loader = $('.preloader'),
        loaderDot = $('.preloader .dot');

    // var4 with trigger buttons
    tl
        .from(h1, 0.5, {y: -15, autoAlpha:0, ease:Power1.easeInOut})
        .from(intro, 0.5, {y: -15, autoAlpha:0, ease:Power1.easeInOut}, '-=0.15')
        .from(img, 0.5, {y: -15, autoAlpha:0, ease:Power1.easeInOut}, '-=0.15')
        .from(h2, 0.5, {y: -15, autoAlpha:0, ease:Power1.easeInOut}, '-=0.15')
        .from(listItem, 0.5, {y: -15, autoAlpha:0, ease:Power1.easeInOut}, '-=0.15')
        .staggerFromTo(buttons, 0.2,   //buttons appeared each by one
            {autoAlpha: 0, x: 10 },
            {x: -20, autoAlpha: 1 ,ease:Power1.easeOut},
            0.1);


    function contentInFunc() {
        tl.play()
    }

    $('#btnPlay').on('click', function () {
        tl.play();
    });
    $('#btnPause').on('click', function () {
        tl.pause();
    });
    $('#btnResume').on('click', function () {
        tl.resume();
    });
    $('#btnReverse').on('click', function () {
        tl.reverse();
    });
    $('#btnSpeedUp').on('click', function () {
        tl.timeScale(8); //speeds up 8 times
    });
    $('#btnSlowDown').on('click', function () {
        tl.timeScale(0.5); //reduce speed on 50% of original speed
    });
    $('#btnSeek').on('click', function () {
        tl.seek(1);
    });
    $('#btnProgress').on('click', function () {
        tl.progress(0.5);
    });
    $('#btnRestart').on('click', function () {
        tl.restart();
    });

})(jQuery);