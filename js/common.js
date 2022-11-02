;(function (win, $) {
    'use strict';

    var gsapPage = function() {
        const timeLine = gsap.timeline();

        timeLine
            .fromTo(
                'header', {
                    y: -20, 
                    opacity: 0,
                },
                {
                    opacity: 1, y: 0,
                    duration: 0.5,
                    ease: 'powerl.out',
                    stagger: 0.2
                }
            )
            .from(
                '.sec_head', {
                    opacity: 0,
                    duration: 1.7,
                    ease: 'none',
                    delay: 0.4,
                }
            )
            .fromTo(
                '.lst_main_color .parent_color', {
                    opacity: 0,
                    x: -20,
                },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.6,
                    ease: "power2.inOut",
                    stagger: 0.2,
                    delay: 0.5
                }
            )
            .from(
                '.lst_main_color .childrens_color li', {
                    opacity: 0,
                    duration: 1,
                    ease: "power2.inOut",
                    stagger: 0.2,
                }
            )
            .fromTo(
                '.lst_grey_color li', {
                    opacity: 0,
                    y: 50,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.5,
                    ease: "back.out(3)",
                    stagger: 0.2,
                }
            )
            .from(
                '.lst_gradient_color .color', {
                    opacity: 0,
                    y: -300,
                    duration: 1.2,
                    ease: "circ.out",
                    stagger: 0.2,
                }
            )
    };

    $(win).on('load', function () {
        gsapPage();
	});
})(window, window.jQuery);