export default class Exercise {
    constructor(exercise) {
        this.exercise = exercise;
    }

    // app_id: a85620e6 app_key: 8c8ce17420367ed56bc28cb84ce66315

    async  getResult() {
        const res = await fetch("https://trackapi.nutritionix.com/v2/natural/exercise", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-app-id": "a85620e6",
                "x-app-key": "8c8ce17420367ed56bc28cb84ce66315",
                "x-remote-user-id": 0
            },
            body: JSON.stringify({query: this.exercise})
        });
        const data = await res.json();
        // console.log(data);
        this.exercise_result = data.exercises[0];
        // console.log(this.exercise_result);
    }

}