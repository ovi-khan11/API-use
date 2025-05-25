
     

    document.getElementById('search-button').addEventListener('click', function () {
      const inputText = document.getElementById('search-input').value
      const foodContainer = document.getElementById('Foods');
      foodContainer.innerHTML = "";

      if (inputText === "") {
        alert("Please enter a food name.");
        return;
      }

      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`)
        .then(res => res.json())
        .then(data => {
          const meals = data.meals;

          if (!meals) {
            foodContainer.innerHTML = "<p>No food found!</p>";
            return;
          }

          meals.forEach(meal => {
            const mealDiv = document.createElement("div");
            mealDiv.classList.add("meal-card");

            const mealName = document.createElement("h3");
            mealName.textContent = meal.strMeal;

            const mealImg = document.createElement("img");
            mealImg.src = meal.strMealThumb;
            mealImg.alt = meal.strMeal;

            const mealInstructions = document.createElement("p");
            mealInstructions.textContent = meal.strInstructions.substring(0, 250) + "...";

            mealDiv.appendChild(mealName);
            mealDiv.appendChild(mealImg);
            mealDiv.appendChild(mealInstructions);

            foodContainer.appendChild(mealDiv);
          });
        })
        .catch(error => {
          console.error("Error:", error);
          foodContainer.innerHTML = "<p>Something went wrong.</p>";
        });
    });
  





    

   
        
    
