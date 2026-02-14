const express = require('express'); //import express module
const app = express(); //create an express application
const fs = require('fs'); //import file system module
//we don't need to install fs as it is a core module of nodejs

app.get('/',(request,response)=>{
    return response.send('Hello World');
    //when user visits root directory, send 'Hello World' as response
});


app.get('/todos',(request,response)=>{
    fs.readFile('./store/todos.json','utf-8',(err,data)=>{
        //relative path to the todos.json file, read it as utf-8 encoding, and handle the callback with error and data parameters
        if(err){
            return response.status(500).send('Error, reading todos');
            //if there is an error reading the file, send 500 status code with error message
        }

        const todos = JSON.parse(data);
        //parse the JSON data from the file
        return response.json(todos);
    })

})




app.listen(3000,()=>{
    console.log('Server is running on http://Localhost:3000');
    //start the server on port 3000 and log a message to the console
})