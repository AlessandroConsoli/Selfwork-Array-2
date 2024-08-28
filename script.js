function mediaCalculator(...n) {
    let media = n.reduce((tot, el)=> tot + el) / n.length;
    console.log(media + n.filter((n)=> n < media));    
}

mediaCalculator(3, 5, 10, 2, 8);

