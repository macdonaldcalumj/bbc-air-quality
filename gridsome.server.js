// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

function dataLoader(path, id, lang) {
  // Will load in data from JSON files as specified at
  // https://github.com/bbc/vj-code-tests/tree/master/airquality/src/data

  const data = require(path)

  const totalCities = Number(data["total_cities_1_value"])
  let processedData = {
    id: id,
    lang: lang
  }

  processedData.heroImage = data["hero_1_image"]
  processedData.heroTitle = data["hero_1_title"]
  processedData.byline = data["article-info_1_byline"]
  processedData.date = data["article-info_1_date"]
  processedData.category = data["article-info_1_category"]
  processedData.categoryUrl = data["article-info_1_category_url"]
  processedData.textBlock1 = [
    data["p_1_value"],
    data["p_2_value"],
    data["p_3_value"],
    data["p_4_value"],
    data["p_5_value"],
  ]
  processedData.method = data["compare-tabs_1_method"]
  processedData.tabsTitle = data["compare-tabs_1_title"]
  processedData.tabsCities = []

  for (let i = 1; i <= totalCities; i++) {
    processedData.tabsCities.push({
      name: data["compare-tabs_1_city_" + i + "_name"],
      aqi: data["compare-tabs_1_city_" + i + "_aqi"],
      cig: Number(data["compare-tabs_1_city_" + i + "_cigg"]),
    })
  }

  processedData.textBlock2 = [
    data["p_6_value"],
    data["p_7_value"],
    data["p_8_value"],
    data["p_9_value"],
    data["p_10_value"],
  ]

  return processedData
}

module.exports = function (api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/

    const englishData = dataLoader('./data/english.json', 1, 'en-gb')
    const hindiData = dataLoader('./data/hindi.json', 2, 'hi-in')

    const collection = addCollection({
      typeName: "AirQuality",
    });

    collection.addNode(englishData)
    collection.addNode(hindiData)
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
