### Serve and fetch JSON
- The `index.html` file in this folder is a simple application that reads the `trips.json` file from the **Google Cloud Storage Bucket**
- The file is retrieved using a simple `.fetch` request.
- Once the file is uploaded to the browser, the data is than converted to an **array** of **objects** that is displayed on the browser in a **<text-area>** tag.

### Resources
- Resource .json URL: https://storage.googleapis.com/bobs_lab_bucket/json_host/trips.json
- File location in Google Storage Bucket > https://storage.googleapis.com/bobs_test_bucket
  - NOTE: this storage bucket will require requested access from @robbobfrh84.
