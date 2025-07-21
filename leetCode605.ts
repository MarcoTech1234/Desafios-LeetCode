function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    let isPlot = 1
    let totPlot = 0 

    // Caso base
    if(n <= 0) return true

    for(let plot = 0; plot < flowerbed.length; plot++){
        isPlot ^= flowerbed[plot]      // Verifica se eu posso plantar

        if(!isPlot && !flowerbed[plot]) { // Caso se o vaso atual é livre 
            isPlot = 1
            continue
        }

        if(isPlot && (flowerbed[plot+1] === 0 )){ // Caso haver vasos a frente
            totPlot++
            isPlot = 0
        }
        if(isPlot && (plot == flowerbed.length - 1)){
            totPlot++
        }

    }
    return totPlot >= n ? true : false
};