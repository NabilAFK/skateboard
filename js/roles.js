
document.querySelector('body').addEventListener('keydown', function(event) {
    
    
    if(event.keyCode === 32){
       
        
        jump()
        
    } 
    
    
})



function jump() {
    
    let person = document.querySelector('#container-person')
    
         
    person.classList.toggle('jump')
  

}





