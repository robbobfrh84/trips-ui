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
}

function listingHTML(listing, shortDate) {
  return /*html*/`
    <h3 class="app-h3 name">${listing.unitName}</h3>
    <div class="listing-img-container">
      <img class="img-listing"
        width="356px"
        height="200px"
        alt="..TO 🚨 ... DO..."
        src="https://cms.inspirato.com/${listing.heroImage}?height=200&width=356"
      >
    </div>
    <div class="listing-info-container">
      <h3 class="app-h3">${listing.unitStyleName}</h3>
      <h3 class="app-h3">${shortDate}</h3>
    </div>

  `
}
