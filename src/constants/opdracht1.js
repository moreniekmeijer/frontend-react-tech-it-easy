import {inventory} from "./inventory.js";

// opdracht 1a:
const tvTypes = inventory.map((tv) => tv.type);
console.log(tvTypes);

// opdracht 1b:
const soldTvs = inventory.filter((tv) => (tv.originalStock - tv.sold) <= 0);
console.log(soldTvs);

// opdracht 1c:
const specificTv = inventory.find((tv) => tv.type === "NH3216SMART");
console.log(specificTv);

// opdracht 1d:
const suitableForSport = inventory.map((tv) => {
    const suitable = tv.refreshRate >= 100;
    return "name: " + tv.brand + " " + tv.name + ", suitable: " + suitable;
});
console.log(suitableForSport);

// opdracht 1e:
const largeTvs = inventory.filter((tv) => (tv.availableSizes.some((size) => size >= 65)));
console.log(largeTvs);

// opdracht 1f:
const ambiLightTvs = inventory.filter((tv) => {
    const ambiLightOption = tv.options.find((ambiLightOption) => ambiLightOption.name === "ambiLight");
    return ambiLightOption.applicable === true;
});
console.log(ambiLightTvs);
