
function start(){

    let btn = document.querySelector("#btn-start")

    btn.style.display = 'none'

    
    
    
    appear()

    
}

let opc = 0

function appear() {

    let appearOpacity = setInterval(() => {

                    opc += 0.01

                    person.style.display = 'block';
                    person.style.opacity = opc

                  

                    if(opc > 1){

                        clearInterval(appearOpacity) 

                        alert('Vamos começar?')


                        animate()
                    }

                }, 10)
    
}

function animate() {

    
    /* 
    PROBLEMAS 
    document.body.onclick = function moviment() {


        if(walkingTrought){

            clearInterval(walking, 10) 
            clearInterval(walk, 10) 

            walkingTrought = false

        }
        if(!walkingTrought){

            walking = setInterval(bodyMoove, 10)
            walk = setInterval(walkMoove, 10)

        }
    } */
    
    let person = document.querySelector('#container-person')
    let leg1 = document.querySelector('#leg1')
    let leg2 = document.querySelector('#leg2')
    let foot1 = document.querySelector('#foot1')
    let foot2 = document.querySelector('#foot2')
    let arm1 = document.querySelector('#arm1')
    let arm2 = document.querySelector('#arm2')

    
    
    let step = 1
    
    //let bodyMovement = setInterval(bodyMoove, 10)
    let personMovement = setInterval(walkMoove, 8)
    
    function walkMoove(){

        step ++
        person.style.left = step +'px'
        if(step > 400 ){
           
            document.querySelector('.box').style.animation = 'box-move 3s linear infinite'

            clearInterval(personMovement)
        }  
    }

    //
    let direction1 = 'front'
    let direction2 = 'back'
    let rotate1 = 15
    let rotate2 = -15

    function bodyMoove(){

        if(direction1 == 'back' && rotate1 <= 30 && rotate1 > -30){

            rotate1 --

            if(rotate1 == -30){

                direction1 = 'front'

            }
            
        } 

        if(direction1 == 'front' && rotate1 >= -30 && rotate1 <= 30){

            rotate1 ++

            if(rotate1 == 30){

                direction1 = 'back'

            }

        }


        if(direction2 == 'back' && rotate2 <= 30 && rotate2 > -30){

            rotate2 --

            if(rotate2 == -30){

                direction2 = 'front'

            }
            
        } 

        if(direction2 == 'front' && rotate2 >= -30 && rotate2 <= 30){

            rotate2 ++

            if(rotate2 == 30){

                direction2 = 'back'

            }

        }

      
     
        leg1.style.transform = 'rotate('+rotate1+'deg)'
        leg2.style.transform = 'rotate('+rotate2+'deg)'
        
         
        foot1.style.transform = 'rotate('+rotate1+'deg)'
        foot2.style.transform = 'rotate('+rotate2+'deg)'

        
        arm1.style.transform = 'rotate('+rotate1 * 1.4 +'deg)'
        arm2.style.transform = 'rotate('+rotate2 * 1.4+'deg)'
        
    }



}







