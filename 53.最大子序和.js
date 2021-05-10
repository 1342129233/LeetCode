// 给定一个整数数组 nums, 找到讴歌具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和

let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]   // 输出 6   连续子数组[4, -1, 2, 1]
function maxSubArray(nums) {
    const memo = [];
    memo[0] = nums[0];    // 每个值大小  数组形式找出最大值，对象形式找出哪几个值最大（使用 new map()）
    let max = nums[0];    // 最大值
    let maxkey = 0
    let a = []
    let list = 0

    for(let i=1; i < nums.length; i++) {
        // 比较当前的值大，还是加下一个值大，赋值给下标的值
        memo[i] = Math.max(nums[i] + memo[i - 1], nums[i]);    // 最大值
        // console.log(memo)
        max = Math.max(max, memo[i])
    }
    return max
}

maxSubArray(nums)