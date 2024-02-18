import { gsap } from "../node_modules/gsap/index.js";


const text = document.getElementsByClassName('text')[0].innerText

console.log(text)

const splitText = (txt, father) => {
    father.innerText = ''
    txt
        .split('')
        .forEach(char => {
            const charElement = document.createElement('span')
            charElement.className = `char`
            charElement.innerText = char
            father.appendChild(charElement)
        })
}

splitText(text, document.getElementById('title-father'))

gsap.from('.char',{
    y:50,
    backgroundColor: '#FF980f',

    stagger: .05,
    
    repeat: Infinity,
    yoyo: true,
    duration: 2,
    ease: 'elastic'
})

