const postContainer = document.getElementById('posts')
let postMarkup = ''
      
function getPost() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
        .then(response => response.json())
        .then(data => {
           data.map(function(post){
                postMarkup += `
                   <div class="posts-item">
                       <h3>${post.title}</h3>
                       <p>${post.body}</p>
                    </div>
                `
           })
            postContainer.innerHTML = postMarkup
        })
    .catch(error => console.error(error))

}  

getPost()