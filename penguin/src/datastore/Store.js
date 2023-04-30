import { defineStore } from "pinia";

import Item from "../game/Model/Item.js"
import Challenge from "../game/Model/Challenge.js"
import Branch from "../game/Model/Branch.js";


const useStore = defineStore('statId',{
    persist:true,
    state:() => {
        return{
            //user
            uuid: "",
            name: "",
            //state
            power: 0,
            items: ["item1", "item2"],
            challenges: [],
            advancements: {
                "branch1": ["save-1", "save-2"]
            }
        }
    }
})

export default useStore;