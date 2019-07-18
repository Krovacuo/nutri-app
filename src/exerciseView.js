import { elements } from "./base.js";

export const getInput = () => elements.exerciseText.value;

export const renderResult = result => {

    elements.exerciseResult.innerHTML = "";

    const html = `
    <p class="exercise_result">Estimated Calories Burned: ${result.nf_calories}kcal</p>
    `;

    elements.exerciseResult.insertAdjacentHTML("beforeend", html);

};