var xmlns = "http://www.w3.org/2000/svg",
    xlinkns = "http://www.w3.org/1999/xlink",
    select = function(s) {
        return document.querySelector(s);
    },
    selectAll = function(s) {
        return document.querySelectorAll(s);
    },
    sushiSVG = select('.sushiSVG'),
    hit = select('.hit'),
    sushiShadowEnd = "M843.5,583c0,18.26,2,94.51-.7,113.64C837.94,731,808.27,755.12,774.26,756c-10.49.27-26.39,2.4-108.61,0-41.25-1.2-72.27-43.66-99.88-71.27-19.42-19.42-247.08-257.08-266.5-276.5-2.41-2.41-4.77-4.91-7.25-7.25,25.14,24.88,60.9,20,93.12,20,44.49,0,28.12.21,60.44,0,20.47-.13,39.53-6.41,53.93-21.58,15.76-16.61,19-37,19-58.79v-72c0-25.44-.64-49.51-20-69.1,22.74,24.16,267.67,277.67,291.25,301.25C813,524,843.5,547.24,843.5,583Z"


TweenMax.set('svg', {
    visibility: 'visible'
})

var tl = new TimelineMax({ paused: true }).timeScale(4);
tl.to('.seaweed', 1, {
        attr: {
            width: 239

        },
        x: 89,
        ease: Power2.easeIn
    })
    .to('.seaweed', 1, {
        attr: {
            width: 417

        },
        x: 0,
        ease: Power2.easeOut
    })
    .to('.shadow', 1, {
        morphSVG: sushiShadowEnd,
        ease: Power2.easeIn,
        repeat: 1,
        yoyo: true
    }, '-=2')

.staggerTo(['.rice', '.salmon'], 2, {
    x: 178,
    ease: Power2.easeInOut
}, 0.05, '-=2')

.staggerTo('.salmonLines line', 2, {
        x: 10,
        cycle: {
            y: [-80, -20, 0, -20, -100],
            rotation: [0, 0, 0, 45, 45]
        },
        strokeWidth: 4,
        transformOrigin: '50% 50%',
        stroke: '#75B78C',
        ease: Power2.easeInOut
    }, 0, '-=2')
    .to('.salmonBase', 2, {
        fill: '#57A773',
        ease: Power2.easeInOut
    }, '-=2')
    .to('.salmonEdge', 2, {
        strokeWidth: 6,
        ease: Power2.easeInOut
    }, '-=2')
    .to(['.salmonEdge', '.salmonMask', '.salmonBase'], 2, {
        attr: {
            rx: 60,
            ry: 60
        },
        ease: Power2.easeInOut
    }, '-=2')


.addPause()


.to('.seaweed', 1, {
    attr: {
        width: 239

    },
    x: 89,
    ease: Power2.easeIn
})

.to('.seaweed', 1, {
        attr: {
            width: 417

        },
        x: 0,
        ease: Power2.easeOut
    })
    .to('.shadow', 1, {
        morphSVG: sushiShadowEnd,
        ease: Power2.easeIn,
        repeat: 1,
        yoyo: true
    }, '-=2')
    .staggerTo(['.rice', '.salmon'], 2, {
        x: 0,
        ease: Power2.easeInOut
    }, 0.05, '-=2')
    .staggerTo('.salmonLines line', 2, {
        x: 0,
        cycle: {
            y: [0],
            rotation: [0]
        },
        strokeWidth: 4,
        transformOrigin: '50% 50%',
        stroke: '#ffa1a2',
        ease: Power2.easeInOut
    }, 0, '-=2')
    .to('.salmonBase', 2, {
        fill: '#ff6b6c',
        ease: Power2.easeInOut
    }, '-=2')
    .to('.salmonEdge', 2, {
        strokeWidth: 0,
        ease: Power2.easeInOut
    }, '-=2')
    .to(['.salmonEdge', '.salmonMask', '.salmonBase'], 2, {
        attr: {
            rx: 20,
            ry: 20
        },
        ease: Power2.easeInOut
    }, '-=2')



hit.onclick = function(e) {
    if (tl.progress() == 1) {
        tl.play(0)
    } else {
        tl.play()
    }
}