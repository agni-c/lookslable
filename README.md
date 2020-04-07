# lookslabel

Index.js : Node JS server code.

/public/index.html: Captures Users latitude & longitude & selfi & landmark.

/public/logs/index.html: Logs lattitude longitude and Captured Image with time stamp.

/Sketch.js: Relevent javascript for Capturing lat & lon and image and timestamp.

/public/logs/logs.js: Retrives data from Database.db to show on /logs/index.html.

Style.css: Contais dummy CSS Designs for Index.html

Database.db: Stored data using NEDB,{Lat, long ,"landmark",Image}/\*lat,lon,"landmark" as string and

                                                     image as Base64/*

## UPDATE

- Uploads data to fireStore
- main DB is firestore now
- New Update: Images gets stored in cloud storage
