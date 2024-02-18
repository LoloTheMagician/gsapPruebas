
import { gsap } from '../node_modules/gsap/index.js'

let timeline = gsap.timeline({repeat: 1,})

timeline.to('.square', {
    x: 100,
    borderRadius: 50, 
})

timeline.to('.rectangle', {
    borderRadius: 100,
}, '+=.5') 

timeline.to('.circle', {
    y: 100,
    borderRadius: 0,
    ease: 'bounce',
    duration: 1
})



// const divs = ['rectangle', 'square']

// gsap.from(divs.map(div => '.' + div), {
//     y: 100,
//     x: 100,
//     rotation: 'random(0, 365)',
//     opacity : 0,
//     width: () => divs.map(div => {
//         const divDom = 
//         document.getElementsByClassName(div)
//         const divWidth = divDom[0].offsetWidth
//         return divWidth + 50
//     }).at(0),
//     height: () => divs.map(div => {
//         const divDom = 
//         document.getElementsByClassName(div)
//         const divWidth = divDom[0].offsetHeight
//         return divWidth + 50
//     }).at(0),

//     duration : 2,
// })

