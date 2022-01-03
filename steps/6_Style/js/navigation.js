function buildNaviation(tripSet) {
  tripSet.forEach( l => CONFIG.styles[l.unitStyleName] = true )
  buildFilterBtns( document.getElementById("filter_container") )
}

function buildFilterBtns(container) {
  emptyElement(container)
  for (const style in CONFIG.styles) {
    CONFIG.state.filters[style] = "active"
    const filter = document.createElement("button")
    filter.classList.add("filter-btn", "style", "active", style)
    filter.innerHTML = /*html*/`<span class="check active">✔</span> ${style}`
    filter.onclick = ()=>toggleFilter(style, CONFIG.state.filters[style])
    container.appendChild( filter )
  }
}

function toggleFilter(clicked, state) {
  checkAllSelected()
  CONFIG.state.filters[clicked] = state === "active" ? "inactive" : "active"
  CONFIG.state.allSelected = allSameState("active")
  if (allSameState("inactive")) CONFIG.state.filters[clicked] = "active"
  updateBtns()
  crossFadeListing()
}

function updateBtns() {
  for (const style in CONFIG.styles) {
    const state = CONFIG.state.filters[style]
    const classElm = document.querySelector(".filter-btn."+style)
    swapActiveClasses( state, classElm, classElm.querySelector(".check") )
  }
}

function swapActiveClasses(state, classElm, elm) {
  if (state === "inactive") {
    elm.classList.remove("active")
    classElm.classList.remove("active")
  } else {
    elm.classList.add("active")
    classElm.classList.add("active")
  }
}

async function reverseCheckInOrder(dir) {
  const otherDir = dir === "closest" ? "furthest" : "closest"
  if (CONFIG.state.checkInOrder !== dir) {
    CONFIG.state.checkInOrder = dir
    crossFadeListing(true)
    const dirBtn = document.querySelector(".sort-btn."+dir)
    dirBtn.classList.add("active")
    const otherDirBtn = document.querySelector(".sort-btn."+otherDir)
    otherDirBtn.classList.remove("active")
  }
}
