const cities = [
    {
      name: "Auckland",
      population: "657,000",
      description: "Auckland, based around 2 large harbours, is a major city in the north of New Zealand's North Island.",
      url: "https://en.wikipedia.org/wiki/Auckland"
    },
    {
      name: "Wellington",
      population: "436,100",
      description: "Wellington, the capital of New Zealand, sits near the North Island's southernmost point on the Cook Strait.",
      url: "https://en.wikipedia.org/wiki/Wellington"
    },
    {
      name: "Christchurch",
      population: "381,500",
      description: "Christchurch, known for its English heritage, is located on the east coast of New Zealand's South Island.",
      url: "https://en.wikipedia.org/wiki/Christchurch"
    },
    {
      name: "Dunedin",
      population: "128,800",
      description: "Dunedin is a city in New Zealand, at the head of Otago Harbour on the South Island's southeast coast.",
      url: "https://en.wikipedia.org/wiki/Dunedin"
    }
  ]

  export const getCities = () => {
    return cities
}

// data to be displayed on the DOM and a function to grab that data to be used in other functions