const CONFIG = {
  jsonUrl: "https://storage.googleapis.com/storage/v1/b/bobs_lab_bucket/o/json_host%2Ftrips.json?alt=media",
  maxColumns: 4,
  maxColumnWidth: 350, //550
  tripSet: [], // Created in "start" function
  styles: [],
  state: {
    checkInOrder: "closest",
    allSelected: true,
    filters: {} // Created in "buildNaviation" function
  }
}

window.onload = () => start()
window.onresize = () => buildListings(CONFIG.data.tripSet)

async function start() {
  CONFIG.data = await fetchJSON(CONFIG.jsonUrl)
  buildNaviation(CONFIG.data.tripSet)
  buildListings(CONFIG.data.tripSet)
}

async function fetchJSON(url) {
  const response = await fetch(url).catch( error => fetchJSONError(error, url) )
  const json = await response.json()
  return json
}
