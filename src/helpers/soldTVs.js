import {inventory} from "../constants/inventory.js";

function soldTVs() {
    let amountSold = 0;

    for (let i = 0; i < inventory.length; i++) {
        amountSold += inventory[i].sold;
    }
    return amountSold;
}

export default soldTVs;