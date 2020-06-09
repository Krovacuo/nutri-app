export default class Search {
    constructor(search) {
        this.search = search;
    }

    

    async  getInfo() {
        const res = await fetch("https://trackapi.nutritionix.com/v2/natural/nutrients", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-app-id": "",
                "x-app-key": "",
                "x-remote-user-id": 0
            },
            body: JSON.stringify({query: this.search})
        });
        const data = await res.json();
        this.food_info = data.foods[0];
        // console.log(this.food);
    }

    saveFood() {

        if(!localStorage.getItem("stored_foods")){
            let stored_foods = [];
            stored_foods.push(this.food_info);
            localStorage.setItem("stored_foods", JSON.stringify(stored_foods));
        } else {
            let stored_foods = JSON.parse(localStorage.getItem("stored_foods"));
            stored_foods.push(this.food_info);
            console.log(stored_foods);
            localStorage.setItem("stored_foods", JSON.stringify(stored_foods));            
        }

    }
        

}
