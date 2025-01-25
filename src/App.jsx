import './App.css';
import soldTVs from "./helpers/soldTVs.js";
import purchasedTVs from "./helpers/purchasedTVs.js";
import toSellTVs from "./helpers/toSellTVs.js";
import getFormattedNameTV from "./helpers/getFormattedNameTV.js";
import {bestSellingTv} from "./constants/inventory.js";
import getFormattedPriceTV from "./helpers/getFormattedPriceTV.js";
import getFormattedSizesTV from "./helpers/getFormattedSizesTV.js";
import check from "./assets/check.png";
import minus from "./assets/minus.png";

console.log(soldTVs());
console.log(purchasedTVs());
console.log(toSellTVs());
console.log(getFormattedNameTV(bestSellingTv));
console.log(getFormattedPriceTV(bestSellingTv));
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
            <section>
                <h2>Best verkochte tv</h2>
                <div className="best-selling-product">
                    <span><img src={bestSellingTv.sourceImg} alt="Samsung UHD 55AU7040 - Crystal"/></span>
                    <div className="best-selling-product-info">
                        <p>{getFormattedNameTV(bestSellingTv)}</p>
                        <p>{getFormattedPriceTV(bestSellingTv)}</p>
                        <p>{getFormattedSizesTV(bestSellingTv)}</p>
                        <p>
                            <img src={check} alt="check"/> wifi <img src={minus} alt="unchecked"/> speech
                            <img src={check} alt="check"/> hdr <img src={check} alt="check"/> bluetooth <img
                            src={minus} alt="unchecked"/> ambilight
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default App;