import Requirement from "./Requirement.js";

export default class Item{

    id: string;
    displayName: string;
    description: string;
    requirement: Requirement;

    constructor(
        id: string,
        displayName: string,
        description: string
        ) {

        this.id = id;
        this.displayName = displayName;
        this.description = description;
    }
}