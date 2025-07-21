function maxArea(height: number[]): number {
    let size = 0;
    let rigth = 0;
    let left = height.length - 1;

    while (rigth < left) {
        let minHeight = Math.min(height[left], height[rigth]);
        let width = left - rigth;
        let area = minHeight * width;
        if (area >= size) size = area;
        if (height[left] < height[rigth]) {
            left--;
        } else {
            rigth++;
        }
    }

    return size;
}

// 1 Solução (Brute Force), infelizmente acasionando no Time Limit Exceeded
// function maxArea(height: number[]): number {
//     let size = 0
//     for(let rigth = 0; rigth < height.length;rigth++){
//         for(let left = height.length - 1; left > rigth; left--){
//             // Tem mais logica (Distancia e a compatibilidade de tamanho)
//             let smallerHeigth = height[left] < height[rigth] ? height[left] : height[rigth]
//             console.log(`A altura menor é smallerHeigth ${smallerHeigth}`)
//             let length =  height.length - (height.length - left) - (rigth)
//             console.log(`O comprimento é length ${smallerHeigth}`)
//             let area = smallerHeigth * length
//             console.log(`A area é ${area} e a area salva é ${size}`)
//             if(area >= size) size = area
//         }
//     }

//     return size;
// };
