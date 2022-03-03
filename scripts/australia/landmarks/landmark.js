import { getLandmarks } from "./landmarkData.js"

export const landmark = (landmarkObj) => {
    return `<article class="landmark-card">
                <h4 class="landmark-name"><a href="${landmarkObj.url}" target="_blank"> ${landmarkObj.name}</a></h4>
				<ul>
					<li class="landmark-details">Occupation: ${landmarkObj.year}</li>
					<li class="landmark-details">Description: ${landmarkObj.description}</li>
				</ul>
        	</article>`
}

export const numberOfLandmarks = () => {
    return `<h3>The Top ${getLandmarks().length} Landmarks To Visit</h3>`
}