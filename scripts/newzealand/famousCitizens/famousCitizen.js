export const famousCitizen = (famousCitizenObj) => {
    return `<article class="famousCitizen-card">
				<h4 class="famousCitizen-name"><a href="${famousCitizenObj.url}" target="_blank">${famousCitizenObj.name}</a></h4>
				<ul>
					<li class="famousCitizen-details"><strong>Occupation:</strong> ${famousCitizenObj.occupation}</li>
					<li class="famousCitizen-details"><strong>Description:</strong> ${famousCitizenObj.description}</li>
				</ul>
        	</article>`
}

/* <div><img class="famousCitizen-image" src="images/${famousCitizenObj.image}"/></div> */

export const famousCitizenNames = (famousCitizenObj) => {
    return `<li class="famousCitizen-details">Name: ${famousCitizenObj.name}</li>`
}
