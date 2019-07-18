import Search from "./src/Search.js";
import Exercise from "./src/Exercise.js";
import * as searchView from "./src/searchView.js";
import * as exerciseView from "./src/exerciseView.js";
import { elements } from "./src/base.js";

const state = {};
if(localStorage.getItem("stored_foods")) {
    searchView.renderStoredSavedFood(JSON.parse(localStorage.getItem("stored_foods")));
}


const controlSearch = async () => {

    // get query from view
    const query = searchView.getInput();

    if(query) {

        // new search object and add to state
        state.search = new Search(query);

        // preapre UI for results

        // search for info
        await state.search.getInfo();

        // save food in local storage
        state.search.saveFood();

        // render results on the UI
        console.log(state.search.food_info);
        searchView.renderInfo(state.search.food_info);
        searchView.renderSavedFood(state.search.food_info);
        elements.searchInput.value = "";

    }
}

const controlExercise = async () => {

    // get query from view
    const query = exerciseView.getInput();
    
    if(query) {

        // new search object and add to state
        state.exercise = new Exercise(query);

        // preapre UI for results

        // search for info
        await state.exercise.getResult();

        // render results on the UI
        console.log(state.exercise.exercise_result);
        exerciseView.renderResult(state.exercise.exercise_result);
        elements.exerciseText.value = "";
    }
};

elements.searchForm.addEventListener("submit", event => {
    event.preventDefault();
    controlSearch();
});

elements.exerciseForm.addEventListener("submit", event => {
    event.preventDefault();
    controlExercise();
});

elements.savedFoodContainer.addEventListener("click", event => {
    // console.log(event.target);
    if(event.target.classList.contains("delete_saved_food")) {
        let food_id = event.target.parentElement.dataset.id;
        console.log(food_id);
        searchView.deleteSavedFood(food_id);
        event.target.parentElement.remove();
    }

});

elements.savedFoodContainer.addEventListener("click", event => {
    if(event.target.tagName != "BUTTON"){
        let element = event.target.closest("LI");
        console.log(element.tagName);
        console.log(element.dataset.id);
        let food = searchView.getSavedFood(element.dataset.id);
        searchView.renderInfo(food);
    }
    
    
});


// const  exercise = new Exercise("ran 1 mile");
// exercise.getResult();











