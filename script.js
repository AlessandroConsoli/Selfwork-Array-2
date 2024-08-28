function mediaCalculator(...n) {
    let somma = n.reduce((tot, el)=> tot + el);
    console.log("tot = ", somma);
    
    let media = somma / n.length;
    console.log("media = ", media);

    let minoriDiMedia = n.filter((n)=> n < media);
    console.log("i valori minori della media sono: ", minoriDiMedia);

    let maggioriDiMedia = n.filter((n)=> n > media);
    console.log("i valori maggiori della media sono: ", maggioriDiMedia);
        
}

mediaCalculator(3, 5, 10, 2, 8);




