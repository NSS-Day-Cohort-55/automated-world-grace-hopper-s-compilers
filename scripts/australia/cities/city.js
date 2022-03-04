export const city = (cityObj) => {
    return `<article class="city-card">
				<h4 class="city-name"><a href="${cityObj.url}" target="_blank">${cityObj.name}</a></h4>
				<ul>
					<li class="city-details">Population: ${cityObj.population}</li>
					<li class="city-details">Description: ${cityObj.description}</li>
				</ul>
        	</article>`
}