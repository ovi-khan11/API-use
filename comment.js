function loadComment(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(Response => Response.json()) 
    .then(data => displayComment(data));
}
loadComment ()

const ui = document.getElementById('comments')

function  displayComment(comments){
    
    for(const comment of comments){
        
        const div = document.createElement('div')
        div.classList.add('comment')

         div.innerHTML = `
           <h1> ${comment?.name}</h1>
           <span> ${comment?.email}</span>
           <p> ${comment?.body}</p>
           <p>${comment?.postId}</p>
         ` 
         ui.appendChild(div)
    }



}