export default class Requirement {

    requiredAdvancements: Map<string, Set<string>>
    requiredItem: Set<string>

    requiredPower: number;

    isMet(store){

        if (store.power < this.requiredPower){
            return false;
        }

        // Check if the required progress is met.
        for (const branchName of Object.keys(this.requiredAdvancements)) {
            if (!store.advancements.has(branchName))
            {
                return false;
            }

           for (const advancement of this.requiredAdvancements.get(branchName)){
                if (!store.advancements.get(branchName)){
                    return false;
                }
           }
        }

        // Check if the user has the required item(s)
        for (const itemId of this.requiredItem){
            if (!store.items.contains(itemId)){
                return false;
            }
        }
        return true;

    }

}