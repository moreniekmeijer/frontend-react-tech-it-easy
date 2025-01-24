import purchasedTVs from "./purchasedTVs.js";
import soldTVs from "./soldTVs.js";

function toSellTVs() {
    return purchasedTVs() - soldTVs();
}

export default toSellTVs;