# UI Engineering Code Challenge
... [Project intro writeup here] WIP...

### Project live links 🔥

Final Application [TO DO - add link]()

Workflow step links...🐾🐾🐾
- [Step 1 🐾: "Serve and fetch JSON"](https://robbobfrh84.github.io/trips-ui/steps/1_Serve-and-fetch-JSON/index.html)
- [Step 2 🐾: "Display the data & add base vars"](https://robbobfrh84.github.io/trips-ui/steps/2_Display-the-data/index.html)
- [Step 3 🐾: "Resize images"](https://robbobfrh84.github.io/trips-ui/steps/3_Resize-image/index.html)
- [Step 3 🐾: "Wireframe grid and breakpoints](https://robbobfrh84.github.io/trips-ui/steps/4_Wireframe-grid-and-breakpoints/index.html)

- [...](https://robbobfrh84.github.io/trips-ui/steps//index.html)
- [...](https://robbobfrh84.github.io/trips-ui/steps//index.html)
- [...](https://robbobfrh84.github.io/trips-ui/steps//index.html)
- [...](https://robbobfrh84.github.io/trips-ui/steps//index.html)

- [Final Step: "..."]()

### Project Development Overview
- ✅ Review Assignment, plan rough outline of steps-t-completion
- ✅ Setup directory, Github repo, and hosting `trips.json` for mock API request
- 🟡 Display the data, extend directory and set JS & CSS base variables
- 🟡 Resize Images
- 📲 Wireframe grid and breakpoints
- Add filter & sort order
- Ad hoc design implementation for **Fonts, background, and borders**
- Ad hoc design implementation for **Layout, transitions, and buttons**
- Accessibility & Semantic HTML refactor and review
- Performant refactor and review
- Final touches & repo documentation review.
- Bonus enhancements

----
# Project Development Notes

### Setup directory, Github repo, and hosting `trips.json` for mock API request
The data this application is build around, uses a provided [trips.json](https://storage.googleapis.com/bobs_lab_bucket/json_host/trips.json) file. However, I wanted to serve the `trips.json` resource externally, just to mock out an API request flow for the application.

I used a Google Cloud Storage Bucket to host and serve the file, and on the client-side, I used used the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) to retrieve the data and convert it into a usable javaScript object.

### Setup directory, Github repo, and hosting `trips.json` for mock API request
When setting up the foundation for this app. I wanted to make sure I had a reference to quickly change any base variables that may need to be changed at a later point. For CSS I created `css/vars.css` to be the "source of truth" for site-wide colors, spaces, sizes, fonts and other vars to maintain.

For javascript I created the file `js/app.js` to be the root trigger for any client-side events, handling initial **onload** events in addition to other ui events and routing if necessary.  

### Resize Images
With a helpful from the Code Challenge directions, I was able to tinker with the image url and discover that adding `width`, `height` and specifying my desiered size of image, allowed me to scale my images smaller for the frontend to load quickly!
- Here is the completed query parameter that was appended: `?height=200&width=356`.

Note: While I was messing around with the scaling endpoint. I did discover that a few mages didn't fit the 200/356 ratio. However they were only off by a few pixels, so I excepting "pinching" and "pulling" for this use-case.
- But, something to consider down the road.

----
# Additional Notes & Thoughts...

### Choice to stay with native javaScript
I'd read on the directions that React + Typescript is used on internal projects. However, my depth of knowledge with typescript is limited, so I opted to keep it as close to native javaScript so it'd be ready to update to React or any other framework.

----
# Resources used
- Google Chrome: https://chrome.google.com/webstore/detail/screen-reader/kgejglhpjiefppelpmljglcjbhoiplfn

----
- Website Accessibility Checklist: https://fuzzymath.com/blog/website-accessibility-checklist/
- Document and website structure: https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure
- HTML5 Semantic Tags: What They Are and How to Use Them: https://www.semrush.com/blog/semantic-html5-guide/

----
- CSS Custom Properties for Cascading Variables: https://www.w3.org/TR/css-variables-1/
- Vertical Centering Solved by Flexbox: https://philipwalton.github.io/solved-by-flexbox/demos/vertical-centering/
- Aligning Items in a Flex Container: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container#using_auto_margins_for_main_axis_alignment
