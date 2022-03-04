export const famousCitizen = (famousCitizenObj) => {
    return `<article class="famousCitizen-card">
				<ul>
					<li class="famousCitizen-details">Name: ${famousCitizenObj.name}</li>
					<li class="famousCitizen-details">Occupation: ${famousCitizenObj.occupation}</li>
					<li class="famousCitizen-details">Description: ${famousCitizenObj.description}</li>
					<li class="famousCitizen-details"><a href="${famousCitizenObj.url}" target="_blank">Click here for more</a></li>
				</ul>
        	</article>`
}



export const famousCitizenNames = (famousCitizenObj) => {
    return `<li class="famousCitizen-details">Name: ${famousCitizenObj.name}</li>`
}