

import { activeNav } from "./active.js"
import { DisplayData } from "./UiDisplay.js"


loading("d-none")

export function loading(action){

    document.querySelector(".main-display").classList.add("d-none")
    document.querySelector(".main-display1").classList.add("d-none")
    document.querySelector(".blackCover").classList.remove("d-none")
    console.log(action)
    
    setTimeout(function(){
       
        document.querySelector(".main-display").classList.remove(`${action}`)
        document.querySelector(".main-display1").classList.remove(`${action}`)
        document.querySelector(".blackCover").classList.add("d-none")
    
        
    
    },1000)

}







let active = new activeNav
let displayData = new DisplayData



console.log(displayData.GetData())

document.querySelector(".navbar").addEventListener('click', function(e){
    active.active(e)

})



document.querySelector(".navbar-nav").addEventListener('click', function(e){
    
   let selector =  e.target.innerHTML.toLowerCase().toString()
   console.log(selector)
   loading("d-none")
   
   displayData.GetData(selector)

   
   


})




function displayDesc(){

    document.querySelector(".main-display").classList.add("d-none")
    document.querySelector(".main-display1").classList.add("d-none")
}






