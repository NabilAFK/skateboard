window.onload = function createSkate() {


    let skate = document.createElement('div')
    let wheel1 = document.createElement('div')
    let wheel2 = document.createElement('div')

    skate.classList.add('skate')
    skate.id = 'skate'

    wheel1.classList.add('wheel1')
    wheel2.classList.add('wheel2')
    
    document.querySelector('#legs').appendChild(skate)
    document.querySelector('#skate').appendChild(wheel1)
    document.querySelector('#skate').appendChild(wheel2)


}