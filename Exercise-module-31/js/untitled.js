//import fetch from 'node-fetch'

let _data = {
    title: "Teste de envio",
    body: "Lorem ipsom sit dolor amet consectur", 
    userId: 5
}



function getPost(){
    
    fetch('https://www.w3schools.com/xml/ajax_intro.asp#gsc.tab=0', {
    method: 'POST',
    body: JSON.stringify(_data),
    headers: {
        'Content-Type' : 'application/json; charset=UTF-8'
    }
}) 
   .then(Response => Response.json())
   .then(data => console.log(data))
   .catch(error => console.error(error))
}
getPost()


