const CONFIG = {
  jsonUrl: "https://storage.googleapis.com/storage/v1/b/bobs_lab_bucket/o/json_host%2Ftrips.json?alt=media"
}

window.onload = () => start()

async function start() {
  const data = await fetchJSON(CONFIG.jsonUrl)
  buildTripSet(data)
}

async function fetchJSON(url) {
  const response = await fetch(url).catch( error => fetchJSONError(error, url) )
  const json = await response.json()
  return json
}

function buildTripSet(data) {
  const container = document.getElementById('tripSet_container')
  emptyElement(container)
  data.tripSet.forEach( listing => {
    buildListing(container, listing)
  })
}
