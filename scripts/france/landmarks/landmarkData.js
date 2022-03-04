const landmarkData = [
    {
      name: 'Eiffel Tower',
      year: 'March 31, 1889',
      description: `The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. 
                    It is named after the engineer Gustave Eiffel, whose company designed and built the tower.`,
      url: 'https://en.wikipedia.org/wiki/Eiffel_Tower'
    },
    {
      name: 'Louvre Museum',
      year: 'August 10, 1793',
      description: `The Louvre, or the Louvre Museum, is the world's most-visited museum, and a historic landmark 
                    in Paris, France. It is the home of some of the best-known works of art, including the Mona Lisa 
                    and the Venus de Milo.`,
      url: 'https://en.wikipedia.org/wiki/Louvre'
    },
    {
      name: 'Palace of Versailles',
      year: '1634',
      description: `The Palace of Versailles is a former royal residence located in Versailles, about 12 miles west of Paris, France. 
                    The palace and park were designated a World Heritage Site by UNESCO in 1979 for its importance as the center of 
                    power, art, and science in France during the 17th and 18th centuries.`,
      url: 'https://en.wikipedia.org/wiki/Palace_of_Versailles'
    },
    {
      name: `Musee D'Orsay`,
      year: '1986',
      description: `The Musée d'Orsay is a museum in Paris, France, on the Left Bank of the Seine. It is housed in the former 
                    Gare d'Orsay, a Beaux-Arts railway station built between 1898 and 1900. The museum holds mainly French 
                    art dating from 1848 to 1914, including paintings, sculptures, furniture, and photography.`,
      url: 'https://en.wikipedia.org/wiki/Mus%C3%A9e_d%27Orsay'
    }
  ]

  export const getLandmarks = () => {
      return landmarkData
  }

