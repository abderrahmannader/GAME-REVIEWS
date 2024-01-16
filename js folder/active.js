export class activeNav {
    constructor(){
        

    }

    active(e){

        console.log(e.target.innerHTML)

        let MMORPG = document.querySelector("#MMORPG")
        let SHOOTER = document.querySelector("#SHOOTER")
         let SAILING = document.querySelector("#SAILING")
         let PERMADEATH =  document.querySelector("#PERMADEATH")
         let SUPERHERO =  document.querySelector("#SUPERHERO")
         let PIXEL =  document.querySelector("#PIXEL")
     
         if(e.target.innerHTML == "PIXEL"){
            PIXEL.classList.add("active")
     
             MMORPG.classList.remove("active")
             SUPERHERO.classList.remove("active")
             PERMADEATH.classList.remove("active")
             SAILING.classList.remove("active")
             SHOOTER.classList.remove("active")
         }
         if(e.target.innerHTML == "MMORPG"){
             MMORPG.classList.add("active")
      
              PIXEL.classList.remove("active")
              SUPERHERO.classList.remove("active")
              PERMADEATH.classList.remove("active")
              SAILING.classList.remove("active")
              SHOOTER.classList.remove("active")
          }
     
          if(e.target.innerHTML == "SUPERHERO"){
             SUPERHERO.classList.add("active")
      
              MMORPG.classList.remove("active")
              PIXEL.classList.remove("active")
              PERMADEATH.classList.remove("active")
              SAILING.classList.remove("active")
              SHOOTER.classList.remove("active")
          }
     
          if(e.target.innerHTML == "PERMADEATH"){
             PERMADEATH.classList.add("active")
      
              MMORPG.classList.remove("active")
              SUPERHERO.classList.remove("active")
              PIXEL.classList.remove("active")
              SAILING.classList.remove("active")
              SHOOTER.classList.remove("active")
          }
     
          if(e.target.innerHTML == "SAILING"){
             SAILING.classList.add("active")
      
              MMORPG.classList.remove("active")
              SUPERHERO.classList.remove("active")
              PERMADEATH.classList.remove("active")
              PIXEL.classList.remove("active")
              SHOOTER.classList.remove("active")
          }
     
          if(e.target.innerHTML == "SHOOTER"){
             SHOOTER.classList.add("active")
      
              MMORPG.classList.remove("active")
              SUPERHERO.classList.remove("active")
              PERMADEATH.classList.remove("active")
              SAILING.classList.remove("active")
              PIXEL.classList.remove("active")
          }

    }
}