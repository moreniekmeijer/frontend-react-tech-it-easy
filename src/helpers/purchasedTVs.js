import {inventory} from "../constants/inventory.js";

function purchasedTVs() {
    let amountPurchased = 0;

    for (let i = 0; i < inventory.length; i++) {
        amountPurchased += inventory[i].originalStock;
    }
    return amountPurchased;
}

export default purchasedTVs;