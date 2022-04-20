function rightPlace(stringOne, char, stringTwo) {

    let newString = stringOne.replace('_', char);

    if (newString == stringTwo) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}
rightPlace('Str_ng', 'i', 'String');