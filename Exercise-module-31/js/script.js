
const url ='https://api.github.com/users';
let user = 'Ste452'
const main = document.getElementById('main')
let text = ''

function getUser(user) {
    
    fetch(`${url}/${user}`, {
        method: 'GET',
        Headers: {
            'Content-Type': 'application/json; charset=UTF-8' 
        } 
    })
        .then((Response) => Response.json())
        .then((data) => {
           text += `${data.name} possui ${data.public_repos} repositório público no GitHub como ${data.login} <br>`
           main.innerHTML = text
        })    
    
    .catch((error) => console.error('Erro: ', error.menssage || error))
}

const userInput = document.getElementById('username')

userInput.addEventListener('focusout', function (event){
    getUser(event.target.value)
})

