# Surprise-API-responsne

This project is written in Node.js, using HTML.
I did this as a certain project I saw, and started to learn the basics of Node.js to create the server side of this project.
In this project, the client can enter his name and birth year and get a random response back, as certain terms are met, using his name and birth year.
The server side receive the GET request and using promises to handle the requests, and to sent a GET request himself from a certain API he can determine by himself, as the "suprise response"
represented by an object( could be API response or just a regular main function set- like name-sum).
The server assemble all the responses that could be sent by the terms of birth year and name and select one random response.
The client can see as well the Stats of all his requests by clicking the Stats button.
I used simple html to make the website page more accessible, using handlebars.

How To Operate:
1)First make sure you have installed request, nodemon(changed the package.json to run with nodemon), express and finally handlebars(
install by: npm install express-handlebars).

2) run: npm run dev. Should get Listenning on port: {port} message.

3) Go to the http://localhost:3000/ - (or {port}) and start using.

