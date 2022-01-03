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
  await timeout(300, ()=>{
    document.body.style.backgroundColor = "rgba(255,255,255,0)"
  })
  await timeout(300, ()=>{
    appHeader.style.opacity = 1
  })
  await timeout(300, ()=>{
    appNavigation.style.opacity = 1
  })
  await timeout(300, ()=>{
    appMain.style.opacity = 1
  })
}

async function timeout(delay, callback) {
  return new Promise(resolve => setTimeout(()=>{
    callback()
    resolve()
  },delay))
}

/*
  👀 Note: Will log widths of all images:
  document.querySelectorAll(".img-listing").forEach(e=>console.dir(e.naturalWidth))
*/
