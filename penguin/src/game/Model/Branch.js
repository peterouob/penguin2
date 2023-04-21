import {} from 'vue'
import Advancement from "./Advancement.js";

export default class Branch {

    id: string;

    title: string;
    description: string;

    advancement: Map<string, Advancement>;
    

}