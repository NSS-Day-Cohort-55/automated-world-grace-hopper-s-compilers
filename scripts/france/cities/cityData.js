const cities = [
    {
      name: 'Paris',
      population: '2.161 million',
      description: `Also known as the Latin Quarter, the 5th arrondissement is home to the Sorbonne university and 
                    student-filled cafes. It's also known for its bookshops, including the famed Shakespeare & Company. 
                    Family-friendly attractions include the Jardin des Plantes botanical gardens and the National Museum 
                    of Natural History.`,
      url: `https://wikitravel.org/en/Paris`
    },
    {
      name: 'Provence',
      population: '5.059 million',
      description: `Provence, a region in southeastern France bordering Italy and the Mediterranean Sea, is known for 
                    its diverse landscapes, from the Southern Alps and Camargue plains to rolling vineyards, olive groves, 
                    pine forests and lavender fields.`,
      url: 'https://wikitravel.org/en/Provence-Alpes-C%C3%B4te_d%27Azur'
    },
    {
      name: 'Marseille',
      population: '861,635',
      description: `Marseille, a port city in southern France, has been a crossroads of immigration and trade since 
                    its founding by the Greeks circa 600 B.C. At its heart is the Vieux-Port (Old Port), where 
                    fishmongers sell their catch along the boat-lined quay.`,
      url: 'https://wikitravel.org/en/Marseille'
    },
    {
      name: 'Cannes',
      population: '74,285',
      description: `Cannes, a resort town on the French Riviera, is famed for its international film festival. 
                    Its Boulevard de la Croisette, curving along the coast, is lined with sandy beaches, upmarket 
                    boutiques and palatial hotels.`,
      url: 'https://wikitravel.org/en/Cannes'
    }
  ]

export const getCities = () => {
    return cities
}