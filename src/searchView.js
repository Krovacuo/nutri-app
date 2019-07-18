import {
    elements
} from "./base.js";

export const getInput = () => elements.searchInput.value;

const searchNutrient = (nutrients, id) => {
    const nutrient = nutrients.find(nutrient => {
        return nutrient.attr_id === id;
    });
    return nutrient.value;
};

export const renderSavedFood = food => {
    const html = `
    
        <li data-id=${food.ndb_no}>
        <img class="saved_food_img" src=${food.photo.thumb} alt=${food.food_name}>
        <p>${food.food_name}</p> 
        <button class="delete_saved_food">X</button>
        </li>
    
        `;

    elements.savedFoodList.insertAdjacentHTML("beforeend", html);
}

export const renderStoredSavedFood = savedFood => {

    savedFood.forEach(food => {
        const html = `
    
        <li data-id=${food.ndb_no}>
        <img class="saved_food_img" src=${food.photo.thumb} alt=${food.food_name}>
        <p>${food.food_name}</p> 
        <button class="delete_saved_food">X</button>
        </li>
    
        `;

        elements.savedFoodList.insertAdjacentHTML("beforeend", html);
    })

};

export const deleteSavedFood = id => {

    let stored_foods = JSON.parse(localStorage.getItem("stored_foods"));
    stored_foods.forEach((food, index) => {
        if (food.ndb_no === parseInt(id)) {
            stored_foods.splice(index, 1);
            console.log(stored_foods);
        }
    });

    // console.log(stored_foods);
    localStorage.setItem("stored_foods", JSON.stringify(stored_foods));

};

export const getSavedFood = id => {

    let stored_foods = JSON.parse(localStorage.getItem("stored_foods"));
    let saved_food = "";
    stored_foods.forEach((food, index) => {
        if (food.ndb_no === parseInt(id)) {
            saved_food = food;
        }
    });
    return saved_food;
}

export const renderInfo = food => {

    elements.food_info.innerHTML = " ";


    const html = `
    <div class="food_info_text">
    <img class="food_img" src=${food.photo.thumb} alt=${food.food_name}>
    <h2>Nutrition Facts</h2>
    <p class="food_title">${food.food_name[0].toUpperCase()}${food.food_name.slice(1)}</p>
    <p class="serving">Serving: ${food.serving_qty} ${food.food_name} ${food.serving_unit} (${food.serving_weight_grams}g)</p>
    <p class="calories">Calories ${food.nf_calories}</p>

    <p class="total_fat">Total Fat ${food.nf_total_fat}g</p>
    <ul>
        <li class="saturated_fat"><p<Saturated Fat ${food.nf_saturated_fat}g</p></li>
        <li class="trans_fat"><p>Trans Fat ${searchNutrient(food.full_nutrients, 606)}g</p></li>
        <li class="poly_fat"><p>Polyunsaturated Fat ${searchNutrient(food.full_nutrients, 646)}g</p></li>
        <li class="mono_fat"><p>Monounsaturated Fat ${searchNutrient(food.full_nutrients, 645)}g</p></li>
    </ul>
    <p class="cholesterol">Cholesterol ${food.nf_cholesterol}mg</p>
    <p class="sodium">Sodium ${food.nf_sodium}mg</p>
    <p class="potassium">Potassium ${food.nf_potassium}mg</p>
    <p class="total_carb">Total Carbohydrates ${food.nf_total_carbohydrate}g</p>
    <ul>
        <li class="diet_fig"><p>Dietary Fiber ${food.nf_dietary_fiber ? food.nf_dietary_fiber : "0"}g</p></li>
        <li class="sugar"><p>Sugars ${food.nf_sugars ? food.nf_sugars : "0"}g</p></li>
    </ul>
    <p class="protein">Protein ${food.nf_protein}g</p>

    <p class="vitA">Vitamin A ${searchNutrient(food.full_nutrients, 318)}mg</p>
    <p class="vitC">Vitamin C ${searchNutrient(food.full_nutrients, 401)}mg</p>
    <p class="calcium">Calcium ${searchNutrient(food.full_nutrients, 301)}mg</p>
    <p class="iron">Iron ${searchNutrient(food.full_nutrients, 303)}mg</p>
    </div>
    `;

    elements.food_info.insertAdjacentHTML("beforeend", html);

};