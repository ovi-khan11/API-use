function loadTodos(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(Response => Response.json()) 
    .then(data => displayData(data));
}
loadTodos()
  const ui = document.getElementById('todos')
  console.log(ui);
  

function displayData(todoses){
    for(const todos of todoses){
        const div = document.createElement('div')
        div.classList.add('data')

        div.innerHTML = `
          <h1>${todos.title}</h1>
          <p>${todos.id}</P>
          <p>${todos.completed}</p>
        `
        ui.appendChild(div)
    }
    
}