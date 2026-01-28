const express = require('express'); //import express module
const app = express(); //create an express application

app.get('/',(request,response)=>{
    return response.send('Hello World');
    //when user visits root directory, send 'Hello World' as response
});

app.listen(3000,()=>{
    console.log('Server is running on http://Localhost:3000');
    //start the server on port 3000 and log a message to the console
})