function emptyElement(element) {
  let i = element.childNodes.length
  while(i--) {
    element.removeChild(element.lastChild)
  }
}

function sortTripSet(tripSet) {
  const tripSetUTC = tripSet.map( listing => {
    listing.checkInUTC = new Date(listing.checkInDate).getTime()
    return listing
  })
  const tripSetClosest = tripSetUTC.sort( (a, b) => a.checkInUTC - b.checkInUTC )
  return tripSetClosest
}

function allSameState(state) {
  let allSame = true
  for (const style in CONFIG.state.filters) {
    if (CONFIG.state.filters[style] != state) {
      allSame = false
    }
  }
  return allSame
}

function checkAllSelected() {
  if (CONFIG.state.allSelected) { // Makes all inactive if all selected
    for (const style in CONFIG.state.filters) {
      CONFIG.state.filters[style] = "inactive"
    }
    CONFIG.state.allSelected = false
  }
}

function filterTripSet(tripSet) {
  const filteredTripSet = []
  tripSet.forEach( (listing, index) => {
    if (CONFIG.state.filters[listing.unitStyleName] != "inactive") {
      filteredTripSet.push(listing)
    }
  })
  return filteredTripSet
}

async function fadeIn() {
  document.body.style.display = "block"
  await timeout(250, ()=>{
    document.body.style.backgroundColor = "rgba(255,255,255,0)"
  })
  await timeout(250, ()=>{ appHeader.style.opacity = 1 })
  await timeout(250, ()=>{ appNavigation.style.opacity = 1 })
  await timeout(250, ()=>{ appMain.style.opacity = 1 })
  await timeout(0, ()=>{ popListing() })
}

async function timeout(delay, callback) {
  return new Promise(resolve => setTimeout(()=>{
    callback()
    resolve()
  },delay))
}

async function crossFadeListing(reverse) {
  if (reverse) CONFIG.data.tripSet.reverse()
  // tripSet_container.style.opacity = 0
  buildListings(CONFIG.data.tripSet)
  // await timeout(500, ()=>{ buildListings(CONFIG.data.tripSet) })
  tripSet_container.style.opacity = 1
}

function popListing(elms) {
  const listings = elms || [...document.querySelectorAll(".listing.pop")]
  listings.forEach( listing => {
     setTimeout(()=>{
       listing.classList.remove("pop")
     },random(1,500))
  })
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/*
  👀 Note: Will log widths of all images:
  document.querySelectorAll(".img-listing").forEach(e=>console.dir(e.naturalWidth))
*/
