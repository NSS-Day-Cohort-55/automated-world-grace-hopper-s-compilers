import { getLandmarks } from "./landmarkData.js"

export const landmark = (landmarkObj) => {
    return `<article class="landmark-card">
<<<<<<< HEAD
				<ul>
					<li class="landmark-details">Name: ${landmarkObj.name}</li>
					<li class="landmark-details">Occupation: ${landmarkObj.year}</li>
					<li class="landmark-details">Description: ${landmarkObj.description}</li>
					<li class="landmark-details"><a href="${landmarkObj.url}" target="_blank">Click here for more</a></li>
				</ul>
        	</article>`
}
export const numberOfLandmarks = () => {
    return `<h3>The Top ${getLandmarks().length} Landmarks To Visit</h3>`
}

=======
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
>>>>>>> b29d036fcb702dabd7c92f25d8f20133c6db4c60
