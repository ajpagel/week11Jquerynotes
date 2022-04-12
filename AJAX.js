//get and post methods
//use mock api for testing

//GET

$.get('https://reqres.in/api/users/2', (data) => console.log(data));

//first parameter is url to send get request to 
//second parameter method or function to invoke once response is returned. this takes an argument that is the data responded from http rrequest
//respond to data and log it out

//returns user object from the request in console

//POST

$.post('https://reqres.in/api/users', {
    name: 'Tommy',
    job: 'Front End Software Developer'
}, (data) => console.log(data));