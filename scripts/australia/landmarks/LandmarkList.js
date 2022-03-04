
 import { getLandmarks } from "./landmarkData.js"
 import { landmark, numberOfLandmarks } from "./landmark.js"
 
 export const landmarkList = () => {
 
     const contentElement = document.querySelector(".landmarkList")
     const landmarks = getLandmarks()
 
     
     if (contentElement) {
 
        
         let landmarkHTMLRepresentation = "";
 
         landmarkHTMLRepresentation += numberOfLandmarks()
         
         for (const eachlandmark of landmarks) {
             console.log(eachlandmark);
             landmarkHTMLRepresentation += `${landmark(eachlandmark)}`    
         }
        
         contentElement.innerHTML += `${landmarkHTMLRepresentation}`
     }
 }

