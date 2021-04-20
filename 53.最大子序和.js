// 给定一个整数数组 nums, 找到讴歌具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和

let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]   // 输出 6   连续子数组[4, -1, 2, 1]
function maxSubArray(nums) {
    const memo = [];
    memo[0] = nums[0];
    let max = nums[0];
    let maxkey = 0
    let a = []
    let list = 0

    for(let i=1; i < nums.length; i++) {
        memo[i] = Math.max(nums[i] + memo[i - 1], nums[i]);    // 最大值
        // console.log(memo)
        max = Math.max(max, memo[i])
    }

    // 下面是自己找出是哪几个数字的和，你在范围
    maxkey = memo.indexOf(max)  // 找到最大值数组最后一个下标，第几次值最大
    for(let i = max; i > 0; i--) {
        if(nums[i] === max) {
            a.push(nums[i])
            break;
        }
        
        if(list === max) {
            console.log(a);
            break;
        } else {
            list = list + nums[i]
            a.push(nums[i])
        }
    }
    return max
}

maxSubArray(nums)