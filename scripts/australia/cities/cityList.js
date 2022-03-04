
 import { getCities } from "./cityData.js"
 import { city } from "./city.js"
 
 export const cityList = () => {
 
     const contentElement = document.querySelector(".cityList")
     const cities = getCities()
 
     if (contentElement) {
 
         
         let cityHTMLRepresentation = "";
 
         for (const eachcity of cities) {
             console.log(eachcity);
             cityHTMLRepresentation += `${city(eachcity)}`    
         }
        
         contentElement.innerHTML += `${cityHTMLRepresentation}`
     }
 }