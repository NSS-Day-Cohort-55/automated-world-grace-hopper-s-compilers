export const famousCitizen = (famousCitizenObj) => {
    return `<article class="famousCitizen-card">
<<<<<<< HEAD
				<ul>
					<li class="famousCitizen-details">Name: ${famousCitizenObj.name}</li>
					<li class="famousCitizen-details">Occupation: ${famousCitizenObj.occupation}</li>
					<li class="famousCitizen-details">Description: ${famousCitizenObj.description}</li>
					<li class="famousCitizen-details"><a href="${famousCitizenObj.url}" target="_blank">Click here for more</a></li>
=======
				<h4 class="famousCitizen-name"><a href="${famousCitizenObj.url}" target="_blank">${famousCitizenObj.name}</a></h4>
				<ul>
					<li class="famousCitizen-details">Occupation: ${famousCitizenObj.occupation}</li>
					<li class="famousCitizen-details">Description: ${famousCitizenObj.description}</li>
>>>>>>> b29d036fcb702dabd7c92f25d8f20133c6db4c60
				</ul>
        	</article>`
}

/* <div><img class="famousCitizen-image" src="images/${famousCitizenObj.image}"/></div> */

export const famousCitizenNames = (famousCitizenObj) => {
    return `<li class="famousCitizen-details">Name: ${famousCitizenObj.name}</li>`
<<<<<<< HEAD
}
=======
}
>>>>>>> b29d036fcb702dabd7c92f25d8f20133c6db4c60
