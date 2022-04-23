function spiceMustFlow(startingYield) {
    let dayCounter = 0;
    let extractedSpices = 0;

    while (startingYield >= 100) {
        dayCounter++;
        extractedSpices += startingYield;

        if (extractedSpices < 26) {
            extractedSpices -= extractedSpices;
        } else {
            extractedSpices -= 26;
        }
        startingYield -= 10;
    }

    if (extractedSpices < 26) {
        extractedSpices -= extractedSpices;
    } else {
        extractedSpices -= 26;
    }

    console.log(dayCounter);
    console.log(extractedSpices);
}
spiceMustFlow(450);