document.getElementById('search-button').addEventListener('click', function(){
        const p = document.getElementById('error')
          p.style.display = 'none'

          const error = document.getElementById('error-two')
           error.style.display ="none"
           const categoriesDiv = document.getElementById('categories'); //  add this line

  categoriesDiv.style.display = 'none'; //  hide categories

      const input = document.getElementById('search-input')
      const inputText = input.value
 
       if(!inputText){
        const p = document.getElementById('error')
          p.style.display = 'block'
          return
        
       }
       else{
         fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`)
      .then(res=>res.json())
      .then(data=>displayData(data.meals))
       input.value = "";
       }

 })
 

   const displayData =(foods)=> {
     if(foods ==null){
      const error = document.getElementById('error-two')
      error.style.display ="block"
      
      
     }


    const uiDiv = document.getElementById('foods')
      uiDiv.innerHTML = ""

   const singleFoodDetails = document.getElementById('single-food-details')
    singleFoodDetails.textContent= ''


     foods.forEach (food => {
       const div = document.createElement("div")
       div.classList.add('shadow-xl')
       div.innerHTML = `
         <div onclick="loadSingleFood(${food.idMeal})" class="p-4 cursor-pointer">
            <img class="h-52 w-full" src="${food.strMealThumb}" alt="">
            <div class="card-body">
                 <h3 class="text-20xl my-3">${food.strMeal}</h3>
                 <p class="text-justify">${food.strInstructions.slice(0,230)}</p>
            </div>
            
        </div>
       ` 
       uiDiv.appendChild(div)

     })
 }

const loadSingleFood = (id) =>{
     
     fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(res=>res.json())
      .then(data=>displaySingleFood(data.meals[0]))
}
const displaySingleFood = (food) =>{
  window.scrollTo(0,0);
  
    const singleFoodDetails = document.getElementById('single-food-details')
    singleFoodDetails.innerHTML= `
        <div class="p-4 ">
            <img class=" w-full" src="${food.strMealThumb}" alt="">
            <div class="card-body">
                 <h3 class="text-4xl my-3">${food.strCategory}</h3>
                 <p class="text-justify">${food.strInstructions}</p>
                 <a href="${food.strYoutube}" target="-blank">go to youtube</a>
            </div>
            
        </div>
    `
}

const loadCategoryApi = () => {
  fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(response => response.json())
    .then(data => displayCategories(data.categories))

};

loadCategoryApi();

const displayCategories = (categories) => {
  const uiDiv = document.getElementById("categories");

  categories.forEach(category => {
    const div = document.createElement('div');
    div.classList.add('category');
    div.innerHTML = `
      <img src="${category.strCategoryThumb}" alt="${category.strCategory}">
      <h3>${category.strCategory}</h3>
      <p>${category.strCategoryDescription.slice(0, 100)}...</p>
    `;
    uiDiv.appendChild(div);
 });
};
    

   
        
    
