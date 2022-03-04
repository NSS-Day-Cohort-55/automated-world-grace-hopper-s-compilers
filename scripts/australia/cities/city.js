export const city = (cityObj) => {
    return `<article class="city-card">
				<h4 class="city-name"><a href="${cityObj.url}" target="_blank">${cityObj.name}</a></h4>
				<ul>
					<li class="city-details"><strong>Population:</strong> ${cityObj.population}</li>
					<li class="city-details"><strong>Description:</strong> ${cityObj.description}</li>
				</ul>
        	</article>`
}