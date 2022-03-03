/**
 *  famousCitizenList renders individual famousCitizen objects as HTML
 */
 import { getfamousCitizens, getfamousCitizenNames } from "./famousCitizenData.js"
 import { famousCitizen, famousCitizenNames } from "./famousCitizen.js"
 
 export const famousCitizenList = () => {
 
     // Get a reference to the `<section class="famousCitizenList">` element
     const contentElement = document.querySelector(".famousCitizenList")
     const famousCitizens = getfamousCitizens()
 
     // make sure we provided a valid html selector above
     if (contentElement) {
 
         // Declare a variable to hold on to the famousCitizen HTML representation
         let famousCitizenHTMLRepresentation = "";
 
         // loop over the array of famousCitizen
         for (const eachfamousCitizen of famousCitizens) {
             console.log(eachfamousCitizen);
             famousCitizenHTMLRepresentation += `${famousCitizen(eachfamousCitizen)}`    
         }
         // Set the dom equal to the variable containing the famousCitizen html representations
         // Add to the existing HTML in the content element
         contentElement.innerHTML += `${famousCitizenHTMLRepresentation}`
     }
 }

 export const famousCitizenNamesList = () => {
 
    // Get a reference to the `<section class="famousCitizenList">` element
    const contentElement = document.querySelector(".famousCitizenNamesList")
    const names = getfamousCitizenNames()

    // make sure we provided a valid html selector above
    if (contentElement) {

        // Declare a variable to hold on to the famousCitizen HTML representation
        let nameHTMLRepresentation = "";

        // loop over the array of famousCitizen
        for (const name of names) {
            console.log(name);
            nameHTMLRepresentation += `${famousCitizenNames(name)}`    
        }
        // Set the dom equal to the variable containing the famousCitizen html representations
        // Add to the existing HTML in the content element
        contentElement.innerHTML += `${nameHTMLRepresentation}`
    }
}
