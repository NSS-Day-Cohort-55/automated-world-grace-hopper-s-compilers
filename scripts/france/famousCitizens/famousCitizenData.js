const famousCitizens = [
    {
      name: 'Napoleon Bonaparte',
      occupation: 'Military Leader',
      description: `Napoleon Bonaparte was a French military and political leader who rose to prominence during 
                    the French Revolution and led several successful campaigns during the Revolutionary Wars. He 
                    was the de facto leader of the French Republic as First Consul from 1799 to 1804.`,
      url: 'https://en.wikipedia.org/wiki/Napoleonnk'
    },
    {
      name: 'Marie Curie',
      occupation: 'Physicist',
      description: `Marie Salomea Skłodowska Curie was a Polish and naturalized-French physicist and chemist who 
                    conducted pioneering research on radioactivity.`,
      url: 'https://en.wikipedia.org/wiki/Marie_Curie'
    },
    {
      name: 'Joan of Arc',
      occupation: 'Military Personnel',
      description: `Joan of Arc, who called herself "Joan the Maiden" and is now nicknamed "The Maid of Orléans", 
                    is considered a heroine of France for her role during the Lancastrian phase of the Hundred Years' 
                    War. She is also a saint in the Roman Catholic Church.`,
      url: 'https://en.wikipedia.org/wiki/Joan_of_Arc'
    },
    {
      name: 'Jacques Cartier',
      occupation: 'Navigator and explorer',
      description: `Jacques Cartier was a French-Breton maritime explorer for France. Jacques Cartier 
                    was the first European to describe and map the Gulf of Saint Lawrence and the shores 
                    of the Saint Lawrence River, which he named "The Country of Canadas" after the Iroquoian 
                    names for the two big settlements he saw at Stadacona (Quebec City) and at Hochelaga 
                    (Montreal Island).`,
      url: 'https://en.wikipedia.org/wiki/Jacques_Cartier'
    }
  ]

  export const getfamousCitizens = () => {
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