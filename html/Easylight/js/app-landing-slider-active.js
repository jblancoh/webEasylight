(function ($) {
    'use strict';

    $('#slidea').slidea({
      // se modifica el slider automatico
        autoplay: false,
        layout: "fluid",
        layoutSettings: {
            anchor: 'center',
            size: 'fluid'
        },
        contentScaling: {
            enabled: true, // Default: false
            mode: 'responsive', // Modes: responsive, native
            factor: {
                xs: 1,
                sm: 1,
                md: 1,
                lg: 1,
                xlg: 1
            }
        },
        duration: 6000,
        overlap: 0,
        progress: {
            enabled: false
        },
        controls: {
            enabled: true,
            thumbnail: false
        },
        canvas_parallax: true,
        content_parallax: true,
        content_scaling: true,
        slide: {
            '#app_landing_slide_one': {
                object: {
                    '#title-one': {
                        start: 1500,
                        initial: "opacity 0, x 50, easing easeOutQuad, duration 500",
                        out: "opacity 0, x 50, easing easeOutQuad, duration 500"
                    },
                    '#description-one': {
                        start: 1750,
                        initial: 'opacity 0, x 50, easing easeOutQuad, duration 500',
                        out: 'opacity 0, x 50, easing easeOutQuad, duration 500'
                    },
                    '#btn-one-1': {
                        start: 2000,
                        initial: 'opacity 0, x 100, easing easeOutQuad, duration 250',
                        out: 'opacity 0, x 100, easing easeOutQuad, duration 250'
                    },
                    '#btn-one-2': {
                        start: 2250,
                        initial: 'opacity 0, x 100, easing easeOutQuad, duration 250',
                        out: 'opacity 0, x 100, easing easeOutQuad, duration 250'
                    }
                },
                layer: {
                    '#app-one-1': {
                        start: 500,
                        initial: "opacity 0, y 20%, easing easeOutQuad, duration 1000",
                        out: "opacity 0, y -20%, easing easeOutQuad, duration 1000",
                        width: 405,
                        bottom: 80,
                        left: 400
                    }
                }
            },
            '#app_landing_slide_two': {
                object: {
                    '#title-two': {
                        start: 1500,
                        initial: "opacity 0, x 50, easing easeOutQuad, duration 500",
                        out: "opacity 0, x 50, easing easeOutQuad, duration 500"
                    },
                    '#description-two': {
                        start: 1750,
                        initial: 'opacity 0, x 50, easing easeOutQuad, duration 500',
                        out: 'opacity 0, x 50, easing easeOutQuad, duration 500'
                    },
                    '#btn-two-1': {
                        start: 2000,
                        initial: 'opacity 0, x 100, easing easeOutQuad, duration 250',
                        out: 'opacity 0, x 100, easing easeOutQuad, duration 250'
                    },
                    '#btn-two-2': {
                        start: 2250,
                        initial: 'opacity 0, x 100, easing easeOutQuad, duration 250',
                        out: 'opacity 0, x 100, easing easeOutQuad, duration 250'
                    }
                },
                layer: {
                    '#app-two-1': {
                        start: 500,
                        initial: "opacity 0, y 20%, easing easeOutQuad, duration 1000",
                        out: "opacity 0, y -20%, easing easeOutQuad, duration 1000",
                        width: 550,
                        bottom: 400,
                        left: 400
                    }
                }
            },
            '#app_landing_slide_three': {
                object: {
                    '#title-three': {
                        start: 1500,
                        initial: "opacity 0, x 50, easing easeOutQuad, duration 500",
                        out: "opacity 0, x 50, easing easeOutQuad, duration 500"
                    },
                    '#description-three': {
                        start: 1750,
                        initial: 'opacity 0, x 50, easing easeOutQuad, duration 500',
                        out: 'opacity 0, x 50, easing easeOutQuad, duration 500'
                    },
                    '#btn-three-1': {
                        start: 2000,
                        initial: 'opacity 0, x 100, easing easeOutQuad, duration 250',
                        out: 'opacity 0, x 100, easing easeOutQuad, duration 250'
                    },
                    '#btn-three-2': {
                        start: 2250,
                        initial: 'opacity 0, x 100, easing easeOutQuad, duration 250',
                        out: 'opacity 0, x 100, easing easeOutQuad, duration 250'
                    }
                },
                layer: {
                    '#app-three-1': {
                        start: 500,
                        initial: "opacity 0, y 20%, easing easeOutQuad, duration 1000",
                        out: "opacity 0, y -20%, easing easeOutQuad, duration 1000",
                        width: 405,
                        bottom: 80,
                        left: 400
                    }
                }
            }
        }
    });

})(jQuery);
