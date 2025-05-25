function loadAlbum(){
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(Response => Response.json()) 
    .then(data => displayAlbum(data));
}
loadAlbum()

const ui = document.getElementById('albums')

function displayAlbum(albums){
    // console.log(albums);
    for(const album of albums){
         const div = document.createElement('div')
         div.classList.add('album')
         div.innerHTML = `
            <h1>${album.title}</h1> 
            <p>${album.userId}</p>
            <p>${album.id}</p>
         `
         ui.appendChild(div)
         
    }
    
}