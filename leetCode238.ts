function productExceptSelf(nums: number[]): number[] {
    const length = nums.length;
    const answer: number[] = new Array(length).fill(1);

    // Produto da esquerda
    let leftProduct = 1;
    for (let i = 0; i < length; i++) {
        answer[i] = leftProduct;
        leftProduct *= nums[i];
    }

    // Produto da direita
    let rightProduct = 1;
    for (let i = length - 1; i >= 0; i--) {
        answer[i] *= rightProduct;
        rightProduct *= nums[i];
    }

    return answer;
}