function gramophone(band, album, song) {
    let duration = (String(album).length * String(band).length) * String(song).length / 2
    let rotations = duration / 2.5;
    console.log(`The plate was rotated ${Math.ceil(rotations)} times.`);
}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs');