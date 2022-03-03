const famousCitizens = [
    {
      name: "Steven Adams",
      occupation: "NBA Player",
      description: "Steven Funaki Adams is a New Zealand professional basketball player for the Memphis Grizzlies of the National Basketball Association. After playing one season with his hometown team Wellington Saints in 2011, Adams moved to the United States in 2012 to play college basketball for Pittsburgh.",
      url: "https://en.wikipedia.org/wiki/Steven_Adams"
    },
    {
      name: "Sir Peter Jackson",
      occupation: "Film Director, Screenwriter, and Producer",
      description: "Sir Peter Robert Jackson is a New Zealand film director, screenwriter, and film producer. He is best known as the director, writer, and producer of the Lord of the Rings trilogy and the Hobbit trilogy, both of which are adapted from the novels of the same name by J. R. R. Tolkien.",
      url: "https://en.wikipedia.org/wiki/Peter_Jackson"
    },
    {
      name: "Lorde",
      occupation: "Singer/Songwriter",
      description: "Ella Marija Lani Yelich-O'Connor, known professionally as Lorde, is a New Zealand singer-songwriter. Taking inspiration from the British aristocracy for her stage name, she is known for employing unconventional musical styles and introspective songwriting.",
      url: "https://en.wikipedia.org/wiki/Lorde"
    },
    {
      name: "Taika Waititi",
      occupation: "Filmmaker, Actor, and Comedian",
      description: "Taika David Cohen, known professionally as Taika Waititi, is a New Zealand filmmaker, actor, and comedian. He is a recipient of an Academy Award, a BAFTA Award, and a Grammy Award, and has received two nominations at the Primetime Emmy Awards.",
      url: "https://en.wikipedia.org/wiki/Taika_Waititi"
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