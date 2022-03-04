/**
 *  landmarkList renders individual landmark objects as HTML
 */
 import { getLandmarks } from "./landmarkData.js"
 import { landmark, numberOfLandmarks } from "./landmark.js"
 
 export const landmarkList = () => {
 
     // Get a reference to the `<section class="landmarkList">` element
     const contentElement = document.querySelector(".landmarkList")
     const landmarks = getLandmarks()
 
     // make sure we provided a valid html selector above
     if (contentElement) {
 
         // Declare a variable to hold on to the landmark HTML representation
         let landmarkHTMLRepresentation = "";
 
         landmarkHTMLRepresentation += numberOfLandmarks()
         // loop over the array of landmark
         for (const eachlandmark of landmarks) {
             console.log(eachlandmark);
             landmarkHTMLRepresentation += `${landmark(eachlandmark)}`    
         }
         // Set the dom equal to the variable containing the landmark html representations
         // Add to the existing HTML in the content element
         contentElement.innerHTML += `${landmarkHTMLRepresentation}`
     }
 }
