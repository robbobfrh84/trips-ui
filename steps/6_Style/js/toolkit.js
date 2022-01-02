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

// function getVarCSS(name, rawUnit) { // 🚨 NOT USED? REMOVE?
//   const css = getComputedStyle(document.documentElement)
//   const varCSS = css.getPropertyValue(name) // .split(rawUnit)[0])
//   const value = !rawUnit ? varCSS : parseInt(varCSS.split(rawUnit)[0])
//   return value
// }

/*
  👀 Note: Will log widths of all images:
  document.querySelectorAll(".img-listing").forEach(e=>console.dir(e.naturalWidth))
*/
