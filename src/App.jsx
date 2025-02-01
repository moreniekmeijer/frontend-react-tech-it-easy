import './App.css';
import soldTVs from "./helpers/soldTVs.js";
import purchasedTVs from "./helpers/purchasedTVs.js";
import toSellTVs from "./helpers/toSellTVs.js";
import getFormattedNameTV from "./helpers/getFormattedNameTV.js";
import {inventory, bestSellingTv, bestSellingTv as availableSizes} from "./constants/inventory.js";
import getFormattedPriceTV from "./helpers/getFormattedPriceTV.js";
import getFormattedSizesTV from "./helpers/getFormattedSizesTV.js";
import check from "./assets/check.png";
import minus from "./assets/minus.png";
import outOfStock from "./assets/out-of-stock.png";

console.log(soldTVs());
console.log(purchasedTVs());
console.log(toSellTVs());
console.log(getFormattedNameTV(bestSellingTv));
console.log(getFormattedPriceTV(bestSellingTv));
console.log(getFormattedSizesTV(bestSellingTv));

function App() {

    // opdracht 3:
    function sortBySold() {
        inventory.sort((a, b) => b.sold - a.sold);
        console.log("Meest verkocht eerst");
        console.log(inventory);
    }

    function sortByPrice() {
        inventory.sort((a, b) => a.price - b.price);
        console.log("Goedkoopste eerst");
        console.log(inventory);
    }

    function sortForSport() {
        inventory.sort((a, b) => a.refreshRate - b.refreshRate);
        console.log("Meest geschikt voor sport eerst");
        console.log(inventory);
    }

    // bonusopdracht 1:
    function sortByLargestScreen() {
        inventory.sort((a, b) => b.availableSizes[(availableSizes.availableSizes.length - 1)] -
            a.availableSizes[(availableSizes.availableSizes.length - 1)]);
        console.log("Grootste schermgroottes eerst");
        console.log(inventory);
    }

    return (
        <>
            <h1>Tech it easy dashboard</h1>
            <section>
                <h2>Verkoopoverzicht</h2>
                <div className="dashboard">
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
                <h2>Best verkochte TV</h2>
                <div className="product">
                    <span><img src={bestSellingTv.sourceImg} alt="Samsung UHD 55AU7040 - Crystal"/></span>
                    <div className="product-info">
                        <p>{getFormattedNameTV(bestSellingTv)}</p>
                        <p>{getFormattedPriceTV(bestSellingTv)}</p>
                        <p>{getFormattedSizesTV(bestSellingTv)}</p>
                        <ul>
                            <li><img src={check} alt="check"/> wifi</li>
                            <li><img src={minus} alt="unchecked"/> speech</li>
                            <li><img src={check} alt="check"/> hdr</li>
                            <li><img src={check} alt="check"/> bluetooth</li>
                            <li><img src={minus} alt="unchecked"/> ambilight</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section>
                <h2>Alle merken</h2>
                <ul>
                    {inventory.map((tv) => <li key={tv.type}>{tv.brand}</li>)}
                </ul>
                <h2>{`Alle TV's`}</h2>
                <button type="button" onClick={sortBySold}>Meest verkocht eerst</button>
                <button type="button" onClick={sortByPrice}>Goedkoopste eerst</button>
                <button type="button" onClick={sortForSport}>Meest geschikt voor sport eerst</button>
                <button type="button" onClick={sortByLargestScreen}>Grootste schermgroottes eerst</button>
                {inventory.map((tv) => {
                    return <div key={tv.type} className="product">
                        {/*bonusopdracht 2*/}
                        {tv.originalStock - tv.sold === 0 &&
                            <span className="sold-out"><img src={outOfStock} alt="Out of stock"/></span>}
                        <span><img src={tv.sourceImg} alt="Samsung UHD 55AU7040 - Crystal"/></span>
                        <div className="product-info">
                            <p>{getFormattedNameTV(tv)}</p>
                            <p>{getFormattedPriceTV(tv)}</p>
                            <p>{getFormattedSizesTV(tv)}</p>
                            <ul>
                                {tv.options.map((option) => {
                                    if (option.applicable === true) {
                                        return <li key={option.name}><img src={check} alt="check"/> {option.name}
                                        </li>
                                    } else {
                                        return <li key={option.name}><img src={minus} alt="unchecked"/> {option.name}
                                        </li>
                                    }
                                })}
                            </ul>
                        </div>
                    </div>
                })}
            </section>
        </>
    )
}

export default App;