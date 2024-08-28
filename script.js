function mediaCalculator(...n) {
    let media = n.reduce((tot, el)=> tot + el) / n.length;
    console.log(media);
    let minoriDiMedia = n.filter((n)=> n < media);
    console.log(minoriDiMedia);
    let maggioriDiMedia = n.filter((n)=> n > media);
    console.log(maggioriDiMedia);
        
}

mediaCalculator(3, 5, 10, 2, 8);



// Appunto per la Q&A:   è possibile inserire una stringa preimpostata prima dell'array risultante?

