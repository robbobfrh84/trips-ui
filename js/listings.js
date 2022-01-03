function buildListings(tripSet) {
  const tripSetClosest = sortTripSet(tripSet) // NOTE: The data set already came sorted. But, we will check and sort to control the front-end data.
  const container = document.getElementById('tripSet_container')
  const width = CONFIG.maxColumnWidth
  const colCntCheck = Math.floor( (window.innerWidth - 1)  / width ) + 1
  const colCnt = colCntCheck > CONFIG.maxColumns ? CONFIG.maxColumns : colCntCheck

  emptyElement(container) // Empty all elements in columns
  for (var i = 0; i < colCnt; i++) {
    container.innerHTML += /*html*/`<div class="col"></div>`
  }

  const columns = [...container.children]
  const filteredTripSet = filterTripSet(tripSet)
  filteredTripSet.forEach( (listing, index) => {
    buildListing(columns[index % columns.length], listing)
  })

}

function buildListing(container, listing) {
  const listingElm = document.createElement('article')
  listingElm.classList.add("listing")
  const date = new Date(listing.checkInDate)
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
    timeZoneName: 'short'
  }
  const shortDate = date.toLocaleDateString('us-EN', options)
  listingElm.innerHTML = listingHTML(listing, shortDate)
  container.appendChild(listingElm)
  document.querySelectorAll(".listing.pop")
}

function listingHTML(listing, shortDate) {
  const nameLength = listing.unitName.split("").length
  const nameSize = nameLength > 25 ? "sm" : ""
  const width = CONFIG.maxColumnWidth
  const height = (width*9) / 16 // rough ratio of common images
  const searchQuery = "?width="+CONFIG.maxColumnWidth+"&height="+height
  return /*html*/`
    <h3 class="app-h3 name ${nameSize}">${listing.unitName}</h3>
    <div class="listing-img-container">
      <img class="listing-img"
        alt="..TO 🚨 ... DO..."
        src="https://cms.inspirato.com/${listing.heroImage}${searchQuery}"
      >
    </div>
    <div>
      <h3 class="app-h3 lables">
        <span class="lables-container">
          <span>UNIT</span>
          <span>STYLE</span>
        </span>
        ${listing.unitStyleName}
      </h3>
      <div class="lables-divider"></div>
      <h3 class="app-h3 lables date">
        <span class="lables-container">
          <span>CHECK</span>
          <span>IN</span>
        </span>
        ${shortDate}
      </h3>
    </div>
  `
}
