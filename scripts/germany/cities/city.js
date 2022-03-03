export const city = (cityObj) => {
  return `<article class="city-card">
      <ul>
        <li class="city-details">Name: ${cityObj.name}</li>
        <li class="city-details">Occupation: ${cityObj.population}</li>
        <li class="city-details">Description: ${cityObj.description}</li>
        <li class="city-details"><a href="${cityObj.url}" target="_blank">Click here for more</a></li>
      </ul>
        </article>`
}