import { gsap } from '../node_modules/gsap/index.js'

const COLORS = {
    BLUE: '#08A',
    RED: '#d21',
    GREEN: '#08A045',
    VIOLET: '#8000AA'
}

const randomColor = () => {
    const colorsLen = Object.keys(COLORS).length
    const color = Math.floor(Math.random() * colorsLen)
    return COLORS[
        Object.keys(COLORS)[color]
    ]
}


gsap.to('.circle', {
    y: 100,
    backgroundColor: () => randomColor(),
    // opacity: 0,

    duration: 2,
    stagger: .25,
    ease: 'elastic',
    repeat: Infinity,
    yoyo: true
})