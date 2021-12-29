function emptyElement(element) {
  let i = element.childNodes.length
  while(i--) {
    element.removeChild(element.lastChild)
  }
}

/*
  👀 Note: Will log widths of all images:
  document.querySelectorAll(".img-listing").forEach(e=>console.dir(e.naturalWidth))
*/
