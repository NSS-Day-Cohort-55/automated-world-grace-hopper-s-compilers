export const landmark = (landmarkObj) => {
    return `<article class="landmark-card">
                <h4 class="landmark-name"><a href="${landmarkObj.url}" target="_blank"> ${landmarkObj.name}</a></h4>
				<ul>
					<li class="landmark-details">Occupation: ${landmarkObj.year}</li>
					<li class="landmark-details">Description: ${landmarkObj.description}</li>
				</ul>
        	</article>`
}