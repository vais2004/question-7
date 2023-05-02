const showButton = document.querySelector("#show")
const output = document.querySelector("#output")
let url = 'https://jsonplaceholder.typicode.com/todos'
 function listTitle(json){
    for(const value of Object.values(json)){
        console.log(value.title)
        output.innerText = value.title
    }
 }

function errorHandler(error){
    console.log('here')
    if(Response.status === 404){
    console.log('status here')
}
}
 const showHandler = () =>{
    fetch(url)
    .then(response => response.json())
    .then(json => listTitle(json))
    .catch(errorHandler)
 }

showButton.addEventListener('click', showHandler)


