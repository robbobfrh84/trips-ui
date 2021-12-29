const CONFIG = {
  jsonUrl: "https://storage.googleapis.com/storage/v1/b/bobs_lab_bucket/o/json_host%2Ftrips.json?alt=media"
}

window.onload = function() {
  fetch(CONFIG.jsonUrl)
    .then(response => response.json())
    .then(data => {
      // 🚨 This does need to be an async / promise, beause all errors drop to .catch!
      buildTripSet(data)
    })
    .catch(error => {
      alert("This application was unable to get the data for this site.\n\nData Link: "+CONFIG.jsonUrl)
    })
}

function buildTripSet(data) {
  const container = document.getElementById('tripSet_container')
  emptyElement(container)
  data.tripSet.forEach( listing => {
    buildListing(container, listing)
  })
  // const countWidths = document.querySelectorAll(".img-listing").forEach(e=>console.dir(e.naturalWidth))
}

function buildListing(container, listing) {
  const listingElm = document.createElement('article')
  listingElm.classList.add("listing")
  console.log("listing :", listing)

  const date = new Date(listing.checkInDate)
  const options = {  year: 'numeric', month: 'short', day: 'numeric' }
  const shortDate = date.toLocaleDateString('us-EN', options)

  // 🚨 This should be in it's own .js file
  listingElm.innerHTML = /*html*/`
    <div class="listing-info-container">
      <h3 class="app-h3">${listing.unitName}</h3>
      <h3 class="app-h3">${listing.unitStyleName}</h3>
      <h3 class="app-h3">${shortDate}</h3>
    </div>
    <div class="listing-img-container">
      <img class="img-listing"
        width="356px"
        height="200px"
        alt="..TO 🚨 ... DO..."
        src="https://cms.inspirato.com/${listing.heroImage}?height=200&width=356"
      >
    </div>
  `
  container.appendChild(listingElm)
}

function emptyElement(element) {
  let i = element.childNodes.length
  while(i--) {
    element.removeChild(element.lastChild)
  }
}
