import { gsap } from '../node_modules/gsap/index.js'

gsap.to('.box', {
    //props
    x : 100,
    rotation : 45,
    scale: .75, 
    duration: .75,
    borderRadius: 50,
    
    repeat: 1,
    yoyo: true,
})
