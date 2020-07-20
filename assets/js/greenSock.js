(function($) {
    var header = $('header'),
        h1 = $('h1'),
        h2 = $('h2'),
        i = 0,
        intro = $('.intro'),
        img = $('header img'),
        listItem = $('ul li'),
        tl = new TimelineLite({paused: true}),  //paused timeLine for preloader
        buttons = $('.buttons button'),
        loader = $('.preloader'),
        loaderDot = $('.preloader .dot'),
        tlLoader = new TimelineMax({repeat: 2, onComplete: loadContentFunc}); //{repeat: -1} --> repeat infinitely
    // TweenLite.to(elem, duration, {vars})
    // TweenLite.fromTo(img, 2, {x:-200}, {x: 200})

    // //callback functions
    // TweenLite.from(img, 1, {
    //     x:-200,
    //     ease:Power0.easeNone,  //Power0.easeNone --> linear
    //     onStart: onStartFunc,
    //     onUpdate: onUpdateFunc,
    //     onComplete: onCompleteFunc
    // });
    // function onStartFunc() {
    //     console.log('animation started')
    // }
    // function onUpdateFunc() {
    //     h2.text(i++)
    // }
    // function onCompleteFunc() {
    //     console.log('animation completed')
    // }

    //multiple fade-in var1
    // TweenLite.from(h1, 0.3, {y: -15, autoAlpha:0, ease:Power1.easeInOut, delay: 0.2});
    // TweenLite.from(intro, 0.3, {y: -15, autoAlpha:0, ease:Power1.easeInOut, delay: 0.4});
    // TweenLite.from(img, 0.3, {y: -15, autoAlpha:0, ease:Power1.easeInOut, delay: 0.6});
    // TweenLite.from(h2, 0.3, {y: -15, autoAlpha:0, ease:Power1.easeInOut, delay: 0.8});
    // TweenLite.from(listItem, 0.3, {y: -15, autoAlpha:0, ease:Power1.easeInOut, delay: 1});

    // // var2
    // tl  //we don't need more delay, because tl animations come after each other
    //     .from(h1, 0.3, {y: -15, autoAlpha:0, ease:Power1.easeInOut})
    //     .from(intro, 0.3, {y: -15, autoAlpha:0, ease:Power1.easeInOut}, '-=0.15') //'-=0.15' --> starts tween earlier on -0.15s on prev for smoother effect
    //     .from(img, 0.3, {y: -15, autoAlpha:0, ease:Power1.easeInOut}, '-=0.15')
    //     .from(h2, 0.3, {y: -15, autoAlpha:0, ease:Power1.easeInOut}, '-=0.15')
    //     .from(listItem, 0.3, {y: -15, autoAlpha:0, ease:Power1.easeInOut}, '-=0.15');

    // //var3
    // tl
    //     .from(h1, 0.3, {y: -15, autoAlpha:0, ease:Power1.easeInOut})
    //     .add('intro')  //add label intro to timeLine
    //     .from(intro, 0.3, {y: -15, autoAlpha:0, ease:Power1.easeInOut}) //'-=0.15' --> starts tween earlier on -0.15s on prev for smoother effect
    //     .from(img, 0.3, {y: -15, autoAlpha:0, ease:Power1.easeInOut}, 'intro+=1.5')
    //     .from(h2, 0.3, {y: -15, autoAlpha:0, ease:Power1.easeInOut}, 'intro')  //appeared when 'intro' APPEARED
    //     .from(listItem, 0.3, {y: -15, autoAlpha:0, ease:Power1.easeInOut});

    // var4 with trigger buttons
    tl
        .from(h1, 1, {y: -15, autoAlpha:0, ease:Power1.easeInOut})
        .from(intro, 1, {y: -15, autoAlpha:0, ease:Power1.easeInOut}, '-=0.15')
        .from(img, 1, {y: -15, autoAlpha:0, ease:Power1.easeInOut}, '-=0.15')
        .from(h2, 1, {y: -15, autoAlpha:0, ease:Power1.easeInOut}, '-=0.15')
        .from(listItem, 1, {y: -15, autoAlpha:0, ease:Power1.easeInOut}, '-=0.15')
        .staggerFromTo(buttons, 0.2,   //buttons appeared each by one
            {autoAlpha: 0, x: 10 },
            {x: -20, autoAlpha: 1 ,ease:Power1.easeOut},
            0.1);

    //loader TimeLine
    tlLoader
        .staggerFromTo(loaderDot, 0.3,
            {y: 0, autoAlpha: 0},
            {y: 20, autoAlpha: 1, ease:Back.easeInOut},
            0.05
        )
        .fromTo(loader, 0.3,
            {autoAlpha: 1, scale: 1.3},
            {autoAlpha: 0, scale: 1, ease:Power0.easeNone},
            0.9
            );

    function loadContentFunc() {
        
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