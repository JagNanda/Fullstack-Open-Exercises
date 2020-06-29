Exercise 0.4:

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

Exercise 0.5:
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


Exercise 0.6:
title User Submits New Note SPA

note over  browser: User submits form with new note as JSON data
browser -> server: HTTP POST https://fullstack-exampleapp.herokuapp.com/new_note_spa 
server --> browser: 201 status code (Created) and sends back JSON note data
note over browser: spa.js appends the new note to list of displayed notes without refreshing page