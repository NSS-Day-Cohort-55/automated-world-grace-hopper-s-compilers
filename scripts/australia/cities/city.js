export const city = (cityObj) => {
    return `<article class="city-card">
<<<<<<< HEAD
				<ul>
					<li class="city-details">Name: ${cityObj.name}</li>
					<li class="city-details">Occupation: ${cityObj.population}</li>
					<li class="city-details">Description: ${cityObj.description}</li>
					<li class="city-details"><a href="${cityObj.url}" target="_blank">Click here for more</a></li>
=======
				<h4 class="city-name"><a href="${cityObj.url}" target="_blank">${cityObj.name}</a></h4>
				<ul>
					<li class="city-details">Occupation: ${cityObj.population}</li>
					<li class="city-details">Description: ${cityObj.description}</li>
>>>>>>> b29d036fcb702dabd7c92f25d8f20133c6db4c60
				</ul>
        	</article>`
}