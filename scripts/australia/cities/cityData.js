const cities = [
  {
    name: "Brisbane, Queensland",
    population: "2.6 million",
    description: " Brisbane is the capital and most populous city of the Australian state of Queensland, and the third-most populous city in Australia, as well as Oceania.",
    url: "https://www.australia.com/en/places/brisbane-and-surrounds/guide-to-brisbane.html"
   
  },
  {
    name: "Sydney, New South Wales",
    population: "5.3 million",
    description: "New South Wales is a state on the east coast of Australia.",
    url: "https://www.sydney.com/"
  },
  {
    name: "Melbourne, Victoria",
    population: "5.0 million",
    description: "Melbourne is the capital and most-populous city of the Australian state of Victoria, and the second-most populous city in both Australia and Oceania.",
    url: "https://www.australia.com/en-us/places/melbourne-and-surrounds/guide-to-melbourne.html"
  },
  {
    name: "Cairns, Queensland",
    population: "0.2 million",
    description: "Cairns is a city in Queensland, Australia, on the tropical north east coast of Far North Queensland.",
    url: "https://www.australia.com/en/places/cairns-and-surrounds/guide-to-cairns.html"
  }
]

export const getCities = () => {
  return cities
}