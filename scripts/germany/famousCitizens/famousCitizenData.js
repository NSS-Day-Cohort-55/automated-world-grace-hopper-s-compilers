<<<<<<< HEAD:scripts/germany/famousCitizens/famousCitizensData.js
=======
const famousCitizens = [
  {
    name: 'Albert Einstein',
    occupation: 'Physicist',
    description: 'Einstein was a theoretical physicist and is best known for developing the theory of relativity',
    url: 'https://en.wikipedia.org/wiki/Albert_Einstein'
  },
  {
    name: 'Angela Merkel',
    occupation: 'Chancellor of Germany',
    description: 'Merkel is a retired politician and scientist who served as the chancellor of Germany from 2005 to 2021',
    url: 'https://en.wikipedia.org/wiki/Angela_Merkel'
  },
  {
    name: 'Ludwig van Beethoven',
    occupation: 'Composer and Pianist',
    description: 'Beethoven\'s works rank amongst the most performed of the classical music repertoire and span the transition from the Classical period to the Romantic era in classical music',
    url: 'https://en.wikipedia.org/wiki/Ludwig_van_Beethoven'
  },
  {
    name: 'Johann Sebastian Bach',
    occupation: 'Composer',
    description: 'Bach was a composer in the late Baroque period known for his orchestral music such as the Brandenburg Concertos',
    url: 'https://en.wikipedia.org/wiki/Johann_Sebastian_Bach'
  }
]

export const getfamousCitizens = () => {
  console.log(famousCitizens);
  return famousCitizens
}

export const getfamousCitizenNames = () => {
  const names = []
  for (const citizen of famousCitizens) {
      names.push(citizen.name)
  }
  console.log(names);
  return names
}
>>>>>>> b29d036fcb702dabd7c92f25d8f20133c6db4c60:scripts/germany/famousCitizens/famousCitizenData.js
