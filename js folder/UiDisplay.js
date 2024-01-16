
import { loading } from "./java.js";






export class DisplayData {
    constructor(){
        

    }

    async GetData(dataName) {
        console.log(dataName)
    
        if(dataName == undefined){
            dataName = "mmorpg"
        }
       
    
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '8ea7f8d9a1msh3b355cc18e210dcp1bde9bjsnf783688f38cb',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        
        let data = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${dataName}`, options)
        let response = ''
        response = await data.json()
        console.log(response)
      


        
        console.log( response)
        
        let put = ""
        for(let i = 0; i<response.length;i++){
            put += `
    
            <div  class="col-lg-4  col-md-6 col-sm-12 cols-borders  catcher " id="${response[i].id}" >
            
              <div class="h-100 bg-transparent p-4 border border-2 rounded-4 border-black text-center text-white container-cols d-flex flex-column">
                <img class="w-100 rounded-2 " src="${response[i].thumbnail}" alt="">
                <div class="d-flex justify-content-between align-items-center pt-5 pb-2">
                  <h5 class="w-50 fs-5">${response[i].title}</h5>
                  <button class="btn btn-primary ">Free</button>
                </div>
                <p class="pt-2 ">${response[i].short_description}</p>
      
      
                <div class="liner  mt-auto "></div>
                <div class="d-flex justify-content-between pt-2 ">
                  
                  <button class="btn btn-outline-black text-white" disabled="disabled h-25">${response[i].genre}</button>
                  <button class="btn btn-outline-black text-white" disabled="disabled">${response[i].platform}</button>
                </div>
      
              </div>
      
            </div>

            
    
    
            `

           

            
    
            
            
        }

   
    
        document.querySelector(".puter").innerHTML = put

         let catcher = document.querySelectorAll(".catcher")
         let ID = ""
         for(let i = 0; i<catcher.length;i++){
            catcher[i].addEventListener('click', async function(){
                console.log(this.id)
                ID = this.id

                const options1 = {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': '8ea7f8d9a1msh3b355cc18e210dcp1bde9bjsnf783688f38cb',
                        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
                    }
                };
                
                let data1 = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${ID}`, options1)
                let response1 = ''
                response1 = await data1.json()
                console.log(response1)

                loading("d-block")

                document.querySelector(".main-display").classList.add("d-none")
                document.querySelector(".main-display1").classList.add("d-none")

                document.querySelector(".desc").classList.add("d-block")
                document.querySelector(".desc").classList.remove("d-none")



                document.querySelector(".img-desc").setAttribute("src", `${response1.thumbnail}`)
                document.querySelector(".title-desc").innerHTML = response1.title
                document.querySelector(".Category-desc").innerHTML = response1.genre
                document.querySelector(".Platform").innerHTML = response1.platform
                document.querySelector(".Status").innerHTML = response1.status
                document.querySelector(".desc-desc").innerHTML = response1.description
                document.querySelector(".show-desc").setAttribute("href", `${response1.game_url}`)

                

                document.querySelector(".pointer").addEventListener("click", function(){
                    loading("d-none")
                    document.querySelector(".main-display").classList.remove("d-none")
                document.querySelector(".main-display1").classList.remove("d-none")

                document.querySelector(".desc").classList.remove("d-block")
                document.querySelector(".desc").classList.add("d-none")

                })
                


                

                
            })
            
         }


         
          



            
           
        
            


          }



            



         }



        

        
        
    
    
    
    
    
    
    
    
    
    
       
    

