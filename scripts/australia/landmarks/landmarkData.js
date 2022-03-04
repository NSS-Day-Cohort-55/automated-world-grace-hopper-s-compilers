const landmarkData = [
  {
    name: "Sydney Opera House",
    year: 1956,
    description: "Sydney Opera House is not only the most famous landmark in the country, this unique structure is one of the most instantly recognizable and iconic buildings in the world.",
    url: "https://australianlandmarks.com.au/new-south-wales/sydney-opera-house-landmarks-of-new-south-wales"
  },
  {
    name: "Port Arthur",
    year: 1833,
    description: "Port Arthur Historic Site houses Australia's most intact convict, including restored buildings, ruins, a harbour, a coalmine, a factory and an Isle of the Dead.",
    url: "https://australianlandmarks.com.au/tasmania/port-arthur-landmarks-of-tasmania",
  },
  {
    name: "Kangaroo Island",
    year: 1812,
    description: "Not just one of the most spectacular places to see a wide variety of Australia's native fauna, most of the 4,600 residents of the Kangaroo Island are primary producers offering some of the best gourmet cuisine to be found in Australia.",
    url: "https://australianlandmarks.com.au/south-australia/kangaroo-island-landmarks-of-south-australia",
  },
  {
    name: "Great Barrier Reef",
    year: 1768,
    description: "The Great Barrier Reef is the world's largest coral reef system composed of over 2,900 individual reefs and 900 islands stretching over 2,300 km over an area of approximately 344,400 sq km.",
    url: "https://www.australia.com/en-us/places/cairns-and-surrounds/guide-to-the-great-barrier-reef.html"
  }
]

export const getLandmarks = () => {
  return landmarkData
}