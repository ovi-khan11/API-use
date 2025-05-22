function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(Response => Response.json()) 
    .then(data => displayPost(data));
}
loadPost()
const ui = document.getElementById('posts')



function displayPost(posts){
    for(const post of posts){
        const div = document.createElement('div')
        div.classList.add('post')

         div.innerHTML = `
           <h3>Title: ${post?.title}</h3>
           <p>Description: ${post?.body}</p>
           <p>ID: ${post?.id}</p>
         `
        ui.appendChild(div)
    }
}