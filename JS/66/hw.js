(function(){
'use strict';

fetch('recipes.json')
.then(r=>{
if(!r.ok){
    throw new Error(`${r.status} ${r.statusText}`);
}
return r.json();
})

.then(recipes => {

   // console.log(recipes);

   const recipeList = $('#recipes');
    recipes.forEach(recipe => {
       $(`<span><input type ="radio"  name ="recipes" value="${recipe}"> ${recipe}</span>`)
        .appendTo(recipeList);
      //  .change(()=> console.log(`${recipe} was clicked`));
    
    

    });

    const recipeNameElem = $('#recipe h2');
    const recipePictureElem = $('#recipe img');
    const recipeIngredientsList = $('#recipe ul');

    $('input[type="radio"]').click(e=>{
      fetch(`${e.target.value}.json`)
      .then(r=>{
        if(!r.ok){
            throw new Error(`${r.status} ${r.statusText}`);
        }
        return r.json();
        })
   .then(recipe => {
     console.log(recipe.name);
     recipeNameElem.text(recipe.name);
     recipePictureElem.attr(
       {
            src:  recipe.pictures,
            alt:  recipe.name
       }

     );

     recipeIngredientsList.empty();
  
      recipe.ingredients.forEach(ing =>{
 
         recipeIngredientsList.append(`<li>${ing}</li>`);
  
      });
   
   })
   .catch(err=> console.error(err));


    });


})
//
    
.catch(err => console.log(err));






}());