// 给定一个整数数组 nums，找出一个序列中乘积最大的连续子序列（该序列最少包含一个数）
// * 负负得正 

let nums = [2, 3, -2, 4]  // 输出 6

function maxProduct(nums) {
    // 最大值数组
    const maxProductMemo = [];
    // 最小值数组
    const minProductMemo = [];
    maxProductMemo[0] = nums[0];
    minProductMemo[0] = nums[0];

    let max = nums[0]

    for (let i = 1; i < nums.length; i++) {
        maxProductMemo[i] = Math.max(nums[i], nums[i] * maxProductMemo[i - 1], nums[i] * minProductMemo[i - 1])  // 本身 最大值， 最小值取，可能又一个最大的负数可能
        minProductMemo[i] = Math.min(nums[i], nums[i] * maxProductMemo[i - 1], nums[i] * minProductMemo[i - 1])  // 最小值
        max = Math.max(max, maxProductMemo[i]);
        console.log(maxProductMemo, minProductMemo)
    }
    console.log(max)
    return max;
}
maxProduct(nums)