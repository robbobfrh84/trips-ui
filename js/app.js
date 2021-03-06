const CONFIG = {
  jsonUrl: "https://storage.googleapis.com/storage/v1/b/bobs_lab_bucket/o/json_host%2Ftrips.json?alt=media",
  maxColumns: 3,
  maxColumnWidth: 550, //550
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
  fadeIn() // it's an async, but we're not awaiting to fetch JSON.
  CONFIG.data = await fetchJSON(CONFIG.jsonUrl)
  buildNaviation(CONFIG.data.tripSet)
  buildListings(CONFIG.data.tripSet, true)
}

async function fetchJSON(url) {
  const response = await fetch(url).catch( error => fetchJSONError(error, url) )
  const json = await response.json()
  return json
}

function toggleNavigation() {
  const currentState = appNavigation.style.display
  appNavigation.style.display = currentState === "none" ? "block" : "none"
}
