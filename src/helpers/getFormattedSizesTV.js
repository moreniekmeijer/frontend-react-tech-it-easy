function getFormattedSizesTV(tv) {

    // Ik heb hier .map voor gebruikt, een functie die ik heb gevonden voor arrays.
    // Dat leek me een makkelijkere manier om de array te bewerken.
    return tv.availableSizes
        .map(size => {
            const cm = Math.round(size * 2.54);
            return `${size} inch (${cm} cm)`;
        })
        .join(" | ");
}

export default getFormattedSizesTV;