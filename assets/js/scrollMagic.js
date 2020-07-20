$(document).ready(function() {
    // Init  ScrollMagic
    console.log(ScrollMagic)
    var controller = new ScrollMagic.Controller();

    /* individual animation
    *  // build a scene
    var ourScene = new ScrollMagic.Scene({
        triggerElement: '.section-anim1 img', //when we target the image of section --> animation started
        // duration: '98%', //animation duration = 100% of view port height
        triggerHook: 0.9, //if we want to start animation when top of block = top of view port (use triggerHook: 0), bottom: 1
        // reverse: false,  //animation will happen only once if (reverse: false)
    })
        .setClassToggle('.section-anim1', 'fade-in') //add class to section-anim1
        .addIndicators({
            name: 'fade scene',
            colorTrigger: 'black',
            colorStart: '#75C695',
            colorEnd: 'pink'
        })  //this requires a plugin
        .addTo(controller);

    var ourScene2 = new ScrollMagic.Scene({
        triggerElement: '.section-anim2 img', //when we target the image of section --> animation started
        // duration: '98%', //animation duration = 100% of view port height
        triggerHook: 0.9, //if we want to start animation when top of block = top of view port (use triggerHook: 0), bottom: 1
    })
        .setClassToggle('.section-anim2', 'fade-in') //add class to section-anim1
        .addIndicators({
            name: 'fade scene 2',
            colorTrigger: 'black',
            colorStart: '#75C695',
            colorEnd: 'pink'
        })  //this requires a plugin
        .addTo(controller);

    var ourScene3 = new ScrollMagic.Scene({
        triggerElement: '.section-anim3 img', //when we target the image of section --> animation started
        // duration: '98%', //animation duration = 100% of view port height
        triggerHook: 0.9, //if we want to start animation when top of block = top of view port (use triggerHook: 0), bottom: 1
    })
        .setClassToggle('.section-anim3', 'fade-in') //add class to section-anim1
        .addIndicators({
            name: 'fade scene 3',
            colorTrigger: 'black',
            colorStart: '#75C695',
            colorEnd: 'pink'
        })  //this requires a plugin
        .addTo(controller);
    *  */

    //pin the intro
    var pinIntroScene = new ScrollMagic.Scene({
        triggerElement: '.intro',
        triggerHook: 0, //top of the page
        duration: '30%'
    })
        .setPin('.intro', {pushFollowers: false})
        .addTo(controller)

    var pinIntroScene2 = new ScrollMagic.Scene({
        triggerElement: '.section-anim1',
        triggerHook: 0.4, //top of the page
    })
        .setPin('.intro', {pushFollowers: false})
        .addTo(controller);

    // parallax scene
    var parallaxTl = new TimelineMax();
    parallaxTl
        .from('.bcg__content', 0.4, {autoAlpha: 0, ease:Power0.easeNone}, 0.4)
        .from('.bcg', 2, {y: '-45%', ease:Power0.easeNone}, 0);

    var slideParallaxScene = new ScrollMagic.Scene({
        triggerElement: '.bcg-parallax',
        triggerHook: 1,
        duration: '100%'
    })
        .setTween(parallaxTl)  //set paralaxTLine, which has 2 tweens
        .addTo(controller);

    //loop through each section with animation
    $('.section-anim').each(function() {
        // build a scene
        var ourScene = new ScrollMagic.Scene({
            triggerElement: this.children[0], //when we target the image of section --> animation started
            // duration: '98%', //animation duration = 100% of view port height
            triggerHook: 1, //if we want to start animation when top of block = top of view port (use triggerHook: 0), bottom: 1
            // reverse: false,  //animation will happen only once if (reverse: false)
        })
            .setClassToggle(this, 'fade-in') //add class to section-anim1
            .addIndicators({
                name: 'fade scene',
                colorTrigger: 'black',
                colorStart: '#75C695',
                colorEnd: 'pink'
            })  //this requires a plugin
            .addTo(controller);
    })
});