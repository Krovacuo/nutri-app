export default class Exercise {
    constructor(exercise) {
        this.exercise = exercise;
    }

   

    async  getResult() {
        const res = await fetch("https://trackapi.nutritionix.com/v2/natural/exercise", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-app-id": "",
                "x-app-key": "",
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
