function loadApi(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response => Response.json())
    .then(json => displayInfo(json));

}
loadApi()

 const usersDiv  = document.getElementById('users');
      console.log(usersDiv )




function displayInfo(users){
    
for(const user of users){
  const div = document.createElement('div')
  div.classList.add('user')
  
     div.innerHTML = `
          <h1>${user.name}</h1>
          <p>${user.email}</P>
          <span>${user.phone}</span>
          <p>${user.username}</p>
`
usersDiv.appendChild(div)


}
}
