/**
 *  cityList renders individual city objects as HTML
 */
 import { getCities } from "./cityData.js"
 import { city } from "./city.js"
 
 export const cityList = () => {
 
     // Get a reference to the `<section class="cityList">` element
     const contentElement = document.querySelector(".cityList")
     const cities = getCities()
 
     // make sure we provided a valid html selector above
     if (contentElement) {
 
         // Declare a variable to hold on to the city HTML representation
         let cityHTMLRepresentation = "";
 
         // loop over the array of city
         for (const eachcity of cities) {
             console.log(eachcity);
             cityHTMLRepresentation += `${city(eachcity)}`    
         }
         // Set the dom equal to the variable containing the city html representations
         // Add to the existing HTML in the content element
         contentElement.innerHTML += `${cityHTMLRepresentation}`
     }
 }