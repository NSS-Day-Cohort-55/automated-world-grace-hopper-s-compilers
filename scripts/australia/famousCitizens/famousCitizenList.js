
 import { getfamousCitizens, getfamousCitizenNames } from "./famousCitizenData.js"
 import { famousCitizen, famousCitizenNames } from "./famousCitizen.js"
 
 export const famousCitizenList = () => {
 
    
     const contentElement = document.querySelector(".famousCitizenList")
     const famousCitizens = getfamousCitizens()
 
    
     if (contentElement) {
 
         let famousCitizenHTMLRepresentation = "";
 
         
         for (const eachfamousCitizen of famousCitizens) {
             console.log(eachfamousCitizen);
             famousCitizenHTMLRepresentation += `${famousCitizen(eachfamousCitizen)}`    
         }
         
         contentElement.innerHTML += `${famousCitizenHTMLRepresentation}`
     }
 }
