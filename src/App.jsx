import './App.css';
import soldTVs from "./helpers/soldTVs.js";
import purchasedTVs from "./helpers/purchasedTVs.js";
import toSellTVs from "./helpers/toSellTVs.js";
import getFormattedNameTV from "./helpers/getFormattedNameTV.js";
import {bestSellingTv} from "./constants/inventory.js";
import getFormattedPriceTV from "./helpers/getFormattedPriceTV.js";
import getFormattedSizesTV from "./helpers/getFormattedSizesTV.js";

console.log(soldTVs());
console.log(purchasedTVs());
console.log(toSellTVs());
console.log(getFormattedNameTV(bestSellingTv));
console.log(getFormattedPriceTV(bestSellingTv.price));
console.log(getFormattedSizesTV(bestSellingTv));

function App() {
    return (
        <>
            <h1>Tech it easy dashboard 7</h1>
            <section>
                <h2>Verkoopoverzicht</h2>
                <div className="products-container">
                    <div className="sold-products">
                        <p>Aantal verkochte producten</p>
                        <p>{soldTVs()}</p>
                    </div>
                    <div className="purchased-products">
                        <p>Aantal ingekochte producten</p>
                        <p>{purchasedTVs()}</p>
                    </div>
                    <div className="to-sell-products">
                        <p>Aantal te verkopen producten</p>
                        <p>{toSellTVs()}</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default App
