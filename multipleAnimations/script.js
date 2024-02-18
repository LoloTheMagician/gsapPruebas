import { gsap } from '../node_modules/gsap/index.js'

gsap.from('.circle', {
    y: () => 'random(-200,200)',
    opacity: 0,
    stagger: .25,
    // repeat: Infinity,
    yoyo: true
})