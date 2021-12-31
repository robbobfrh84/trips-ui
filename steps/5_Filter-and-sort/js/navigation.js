function buildNaviation(tripSet) {

  const styles = {}

  tripSet.forEach((item, i) => { // this could be collapsed to just = true. no else.
    if (!styles[item.unitStyleName]) {
      styles[item.unitStyleName] = 1
    } else {
      styles[item.unitStyleName]++
    }
  })

  const container = document.getElementById("filter_container")
  for (const style in styles) {
    const filter = buildFilterBtn(style)
    container.appendChild(filter)
  }
  const selectAll = buildSelectAllBtn()
  container.appendChild(selectAll)

}

function toggleFilter(filter, styleClicked) {

  if (CONFIG.state.allSelected) { // Makes all inactive if all selected
    for (const style in CONFIG.state.filters) {
      CONFIG.state.filters[style] = "inactive"
    }
    CONFIG.state.allSelected = false
  }

  for (const style in CONFIG.state.filters) { // toggled active
    if (style === styleClicked) {
      const now = CONFIG.state.filters[style]
      CONFIG.state.filters[style] = now === "active" ? "inactive" : "active"
    }
  }

  let allActive = true
  for (const style in CONFIG.state.filters) {
    if (CONFIG.state.filters[style] === "inactive") {
      allActive = false
    }
  }
  if (allActive) CONFIG.state.allSelected = true


  console.log("CONFIG.state.filters :", CONFIG.state.filters)

}

function buildFilterBtn(style) {
  CONFIG.state.filters[style] = !CONFIG.state.filters[style] ? "active" : "inactive"
  const state = CONFIG.state.filters[style]
  const stateIcon = CONFIG.state.filters[style] == "active" ? "✔" : " "
  if (CONFIG.state.filters[style] === "inactive") {
    CONFIG.state.allSelected = false
  }

  const filter = document.createElement("button")
  filter.classList.add("filter-btn", state)
  filter.innerHTML = stateIcon+" "+style
  filter.onclick = ()=>toggleFilter(filter, style)
  return filter
}

function buildSelectAllBtn() {
  const selectAll = document.createElement("button")
  selectAll.innerHTML = "Select all"
  selectAll.classList.add("filter-btn")
  if (CONFIG.state.allSelected) {
    selectAll.classList.add("disabled")
  }
  return selectAll
}



    // const styleGroup = [...document.querySelectorAll(".style_"+style)]
    // if (CONFIG.state.filters[style] === "active") {
    //   styleGroup.forEach( listing => {
    //     console.log(listing)
    //   })
    // } else {
    //   styleGroup.forEach( listing => {
    //     console.log("NO" + listing)
    //   })
    // }
