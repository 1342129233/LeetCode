// 螺旋矩阵
// 1. 如果数组为空，返回空数组
// 2. 定义4个边界及当前方向
// 3. 当左边界小于等于右边界，且上边界小于等于下边界时，执行 while 循环，
//    按照右，下，左，上的顺序，依次将路径伤的字符串添加到结果里
// 4. while 循环结束后，返回结果

let matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]

function spiralOrder(matrix) {
    if(matrix.length === 0) {
        return [];
    }
    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;

    let direction = "right";
    let result = [];

    while(left <= right && top <= bottom){
        if(direction === "right") {
            for(let i = left; i <= right; i++) {
                result.push(matrix[top][i])
            }
            top++;
            direction = "bottom"
        } else if(direction === "bottom") {
            for(let i = top; i <= bottom; i++) {
                result.push(matrix[i][right])
            }
            right--;
            direction = "left";
        } else if(direction === "left") {
            for(let i = right; i >= left; i--) {
                result.push(matrix[bottom][i])
            }
            bottom--;
            direction = "top";
        } else if(direction === "top") {
            for(let i = bottom; i >= top; i--) {
                result.push(matrix[i][left])
            }
            left++;
            direction = "right";
        }
    }
    return result;
}

spiralOrder(matrix)