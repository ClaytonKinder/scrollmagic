var controller = new ScrollMagic.Controller();
var vph = $(window).height();
var tween = TweenMax.to(".chart-bg", 1, {y: "-100%"});

console.log(vph);

$(function () { // wait for document ready
		// build scene
		var scene = new ScrollMagic.Scene({triggerElement: "header"})
		.setPin("header")
    .triggerHook(0)
		.addIndicators({name: "2 (duration: 0)"}) // add indicators (requires plugin)
		.addTo(controller);

    var scene2 = new ScrollMagic.Scene({triggerElement: "header", duration: (vph + 100)})
    .removeClassToggle(true)
		.setClassToggle(".header-block1", "active")
    .triggerHook(0)
		.addIndicators({name: "2 (duration: 0)"}) // add indicators (requires plugin)
		.addTo(controller);

    var scene3 = new ScrollMagic.Scene({triggerElement: ".page-block3", duration: "100%"})
    .removeClassToggle(true)
		.setClassToggle(".header-block2", "active")
    .triggerHook(0)
		.addIndicators({name: "2 (duration: 0)"}) // add indicators (requires plugin)
		.addTo(controller);

    var scene4 = new ScrollMagic.Scene({triggerElement: ".page-block4", duration: "100%"})
    .removeClassToggle(true)
		.setClassToggle(".header-block3", "active")
    .triggerHook(0)
		.addIndicators({name: "2 (duration: 0)"}) // add indicators (requires plugin)
		.addTo(controller);

    var scene5 = new ScrollMagic.Scene({triggerElement: ".page-block5", duration: "100%"})
    .removeClassToggle(true)
		.setClassToggle(".header-block4", "active")
    .triggerHook(0)
		.addIndicators({name: "2 (duration: 0)"}) // add indicators (requires plugin)
		.addTo(controller);

    // var scene6 = new ScrollMagic.Scene({triggerElement: ".chart-block", duration: 200})
		// 			.addTo(controller)
		// 			.addIndicators() // add indicators (requires plugin)
		// 			.on("progress", function (e) {
    //         $('.chart-bg').css('top', (e.progress + "%"));
		// 			});

		var scene6 = new ScrollMagic.Scene({triggerElement: ".chart-block", duration: 350})
						.setTween(tween)
						.addIndicators() // add indicators (requires plugin)
						.addTo(controller);

});
