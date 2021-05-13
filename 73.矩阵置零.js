// 矩阵置零

// 1.检查并标记第一行和第一列是否有0, (firstColHasZero  和  firstRowHasZero)
// 2.使用第一行和第一列，来标记其余行业是否含有0
// 3.接下来，利用第一行和第一列的标0情况将 matrix 中的数字标 0
// 4.最后，处理第一行和第一列，如果 firstColHasZero 等于true，第一列全设为0，如果 firstRowHasZero 等于true，第一列全部标记为0


let matrix = [[1,1,1],[1,0,1],[1,1,1]]
function setZeroes(matrix) {
    let firstColHasZero = false;
    let firstRowHasZero = false;
    // 检查第一列是否有 0 
    for(let i = 0; i < matrix.length; i++) {
        if(matrix[i][0] === 0) {
            firstColHasZero = true;
        }
    }
    // 检查第一行是否有 0 
    for(let i = 0; i < matrix[0].length; i++) {
        if(matrix[0][i] === 0) {
            firstRowHasZero = true;
        }
    }
    // 使用第一行和第一列，来标记其余行列是否含有 0 ，所以从 1 开始
    for(let row = 1; row < matrix.length; row++) {
        for(let col = 1; col < matrix[0].length; col++) {
            if(matrix[row][col] === 0) {
                matrix[row][0] = 0;
                matrix[0][col] = 0;
            }
        }
    }
    // 接下来，利用第一行和第一列的标 0 情况，将 matrix 中的数字标 0
    for(let row = 1; row < matrix.length; row++) {
        for(let col = 1; col < matrix[0].length; col++) {
            if(matrix[row][0] === 0 || matrix[0][col] === 0) {
                matrix[row][col] = 0;
            }
        }
    }
    // 最后，处理第一行和第一列
    // 如果 firstColHasZero 等于 true, 将第一列全设为 0
    if(firstColHasZero) {
        for(let i = 0; i < matrix.length; i++) {
            matrix[i][0] = 0;
        }
    }
    // 如果 firstRowHasZero 等于 true, 将第一列全设为 0
    if(firstRowHasZero) {
        for(let i = 0; i < matrix[0].length; i++) {
            matrix[0][i] = 0;
        }
    }
    return matrix;
}

setZeroes(matrix)