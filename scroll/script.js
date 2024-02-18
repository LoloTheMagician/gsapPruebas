import { gsap } from '../node_modules/gsap/index.js'
import { ScrollTrigger } from '../node_modules/gsap/ScrollTrigger.js'

gsap.registerPlugin(ScrollTrigger)

gsap.to('.a', {
    scrollTrigger : {
        trigger : '.a',
        toggleActions : 'play pause reverse stop'
    },
    x : 200,
    scale: 2,
    duration : 3,
    ease: 'bounce', 
})

gsap.to('.b', {
    y : 100,
    
})