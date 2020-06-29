Diagrams created using: https://www.websequencediagrams.com/

## Exercise 0.4:

title User Submits new note

browser -> server : HTTP POST https://fullstack-exampleapp.herokuapp.com/new_note

note over server: Server saves the note and redirects user to /notes

server --> browser: HTTP Redirect https://fullstack-exampleapp.herokuapp.com/notes

browser -> server : HTTP GET https://fullstack-exampleapp.herokuapp.com/main.css  

server --> browser: main.css

note over browser: Browser applies styles

browser -> server : HTTP GET https://fullstack-exampleapp.herokuapp.com/main.js

server --> browser: main.js

note over browser: The main.js is processed by the browser and a request for data.json is made

browser -> server : HTTP GET https://fullstack-exampleapp.herokuapp.com/data.json

server -> browser: data.json

note over browser: Browser displays note data

![0 4](https://user-images.githubusercontent.com/47337941/86058214-84f2fb80-ba2e-11ea-994b-66273fd565ca.png)

## Exercise 0.5:

title User Navigates to SPA

browser -> server : HTTP GET https://fullstack-exampleapp.herokuapp.com/spa

server --> browser: HTML file

browser -> server : HTTP GET https://fullstack-exampleapp.herokuapp.com/main.css  

server --> browser: main.css

note over browser: Browser applies styles

browser -> server : HTTP GET https://fullstack-exampleapp.herokuapp.com/main.js

server --> browser: main.js

note over browser: The main.js is processed by the browser and a request for data.json is made

browser -> server : HTTP GET https://fullstack-exampleapp.herokuapp.com/data.json

server -> browser: data.json

note over browser: Browser displays note data

![0 5](https://user-images.githubusercontent.com/47337941/86058215-84f2fb80-ba2e-11ea-808f-fb21eedb1891.png)

## Exercise 0.6:
title User Submits New Note SPA

note over  browser: User submits form with new note as JSON data

browser -> server: HTTP POST https://fullstack-exampleapp.herokuapp.com/new_note_spa 

server --> browser: 201 status code (Created) and sends back JSON note data

note over browser: spa.js appends the new note to list of displayed notes without refreshing page

![0 6](https://user-images.githubusercontent.com/47337941/86058213-84f2fb80-ba2e-11ea-9ad8-d9d0ef7e3b14.png)
