(function($) {
    var h2 = $('.timelineLite .h2'),
        leadText = $('.timelineLite .lead'),
        contentImg = $('.timelineLite .content img'),
        contentText = $('.timelineLite .content .text'),
        listIcons = $('.timelineLite ul img'),
        buttonNormalSpeed = $('.timelineLite .playNormal'),
        buttonSlowerSpeed = $('.timelineLite .playSlower'),
        buttonNFasterSpeed = $('.timelineLite .playFaster'),
        tlTimelineLiteSection = new TimelineLite();
    var controller = new ScrollMagic.Controller();

    tlTimelineLiteSection.from(h2, 1.5, {x:100, autoAlpha:0})
        .from(leadText, 0.5, {x: -100, autoAlpha:0}, '-=0.50') // position let this animation will start 0.5ms before  prev tween end
        .from(contentImg, 0.5, {scale:0.5, autoAlpha:0}, 'content') //add the same label "name" for tweens, that should start on the same time
        .from(contentText, 0.5, {x:100, autoAlpha:0}, 'content')
        .staggerFrom(listIcons, 0.5, {scale:0, rotation:-180, autoAlpha:0}, 0.2);

    //buttons
    $('.timelineLite .play').on('click', function() {
        tlTimelineLiteSection.play()
    });
    $('.timelineLite .pause').on('click', function() {
        tlTimelineLiteSection.pause()
    });
    $('.timelineLite .speedSlower').on('click', function() {
        tlTimelineLiteSection.timeScale(0.5)
    });
    $('.timelineLite .speedFaster').on('click', function() {
        tlTimelineLiteSection.timeScale(2)
    });
    $('.timelineLite .reverse').on('click', function() {
        tlTimelineLiteSection.reverse()
    });
    $('.timelineLite .resume').on('click', function() {
        tlTimelineLiteSection.resume()
    });
    $('.timelineLite .restart').on('click', function() {
        tlTimelineLiteSection.restart()
    });

    //scene with tl
    var sceneWithTimeLine = new ScrollMagic.Scene({
        triggerElement: ".timelineLite"
    })
        // animate color and top border in relation to scroll position
        .setTween(tlTimelineLiteSection)
        .addTo(controller);

})(jQuery);