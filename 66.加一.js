// 加一

let digits = [1, 2, 3];

function plusOne(digits) {
    for(let i = digits.length - 1; i >= 0; i--){
        if(digits[i] !== 9) {
            digits[i]++;
            return digits;
        } else {
            digits[i] = 0
        }
    }

    // 执行到这里就全是 9
    const result = [1, ...digits];
    return result
}

plusOne(digits)