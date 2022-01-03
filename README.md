# UI Engineering Code Challenge
... [Project intro writeup here] WIP...

## Project's live links 🔥

✨ [Completed application link](https://robbobfrh84.github.io/trips-ui/index.html) ✨

#### Workflow steps status links...🐾🐾🐾
  - [Step 1 🐾: Serve and fetch JSON](https://robbobfrh84.github.io/trips-ui/steps/1_Serve-and-fetch-JSON/index.html)  
  - [Step 2 🐾: Display the data & add base vars](https://robbobfrh84.github.io/trips-ui/steps/2_Display-the-data/index.html)  
  - [Step 3 🐾: Resize images](https://robbobfrh84.github.io/trips-ui/steps/3_Resize-images/index.html)  
  - [Step 4 🐾: Responsive grid](https://robbobfrh84.github.io/trips-ui/steps/4_Responsive-grid/index.html)  
  - [Step 5 🐾: Filter and sort](https://robbobfrh84.github.io/trips-ui/steps/5_Filter-and-sort/index.html)
  - [Step 6 🐾: Style](https://robbobfrh84.github.io/trips-ui/steps/6_Style/index.html)
  - [Final Step: "Refactor & Semantic HTML"](https://robbobfrh84.github.io/trips-ui/index.html)

## Project Development Overview
- ✅ Review Assignment, plan rough outline of steps-t-completion
- ✅ Setup directory, Github repo, and hosting `trips.json` for mock API request
- ✅ Display the data, extend directory and set JS & CSS base variables
- ✅ Resize Images
- ✅ Wireframe responsive grid
- ✅ Filter and Sort
- ✅ Ad hoc design implementation
- ✅ Performant refactor and review
- ✅ Accessibility & Semantic HTML refactor and review
- ✅ Final touches & repo documentation review.
- ...🟡 ⭐️ Bonus enhancements
  - Animated popup for listings...
  - Mock delay & loader.

----
# Project Development Notes

### Setup directory, Github repo, and hosting `trips.json` for mock API request
The data this application is build around, uses a provided [trips.json](https://storage.googleapis.com/bobs_lab_bucket/json_host/trips.json) file. However, I wanted to serve the `trips.json` resource externally, just to mock out an API request flow for the application.

I used a Google Cloud Storage Bucket to host and serve the file, and on the client-side, I used used the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) to retrieve the data and convert it into a usable javaScript object.

### Display the data, extend directory and set JS & CSS base variables
When setting up the foundation for this app. I wanted to make sure I had a reference to quickly change any base variables that may need to be changed at a later point. For CSS I created `css/vars.css` to be the "source of truth" for site-wide colors, spaces, sizes, fonts and other vars to maintain.

For javascript I created the file `js/app.js` to be the root trigger for any client-side events, handling initial **onload** events in addition to other ui events and routing if necessary.  

### Resize Images
With a helpful hint from the Code Challenge directions, I was able to tinker with the image url and discover that adding `width`, `height` and specifying my desired size of image, allowed me to scale my images smaller for the frontend to load quickly!
- Here is the completed query parameter that was appended: `?height=200&width=356`.

Note: While I was messing around with the scaling endpoint. I did discover that a few mages didn't fit the 200/356 ratio. However they were only off by a few pixels, so I excepting "pinching" and "pulling" for this use-case.
- But, something to consider down the road.

### Responsive grid
I struggled a bit with this step. Getting the listings into columns wasn't too tricky. However, because the items needed to be sorted by date, reordering the columns with CSS would put them out of order. There may be a way, but I elected to use JS event to re-order the columns on **LG - MD - SM** break points.

### Filter and Sort
Because of limited unit style filter types(4), I decided to go with a discovery UI. Clicking a filter when all filters are selected result in **only** the unit style selected showing in the listings. However, select another and that unit style is added to the listings, showing two types.  


----
# Additional Notes & Thoughts...

### Choice to stay with native javaScript
I'd read on the directions that React + Typescript is used on internal projects. However, my depth of knowledge with typescript is limited, so I opted to keep it as close to native javaScript so it'd be ready to update to React or any other framework.

----
# Resources used
- A list of resources can be found in the [Resources.md](https://robbobfrh84.github.io/trips-ui/Resources.md) file.
