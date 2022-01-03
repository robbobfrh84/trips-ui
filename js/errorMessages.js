function fetchJSONError(error, url) {
  alert(/*html*/`
🚨 This application was unable to get the JSON data needed for this site to build.

Data Link:
${url}

Error: ${error}
  `)
}
