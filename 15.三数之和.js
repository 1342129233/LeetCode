// 三数之和

// 1. 给数组排序
// 2. 便利数组，从 0 遍历到 length- 2（为什么？）
// 3.如果当前的数字等于前一个数字，则跳过这个数（为什么？）
// 4.如果数字不同，则设置 start = i + 1, end = length - 1,查看i, start 和 end 三个数的和比零大还是小，如果比 0 小，
//   start++ ,如果比 0 大 end--, 如果等于 0, 把这个三个数加入待结果里
// 5.返回结果

function threeSum(nums) {
    let result = [];
    nums.sort(function (a, b) {
        return a - b
    });

    for(let i = 0; i < nums.length - 2; i++) {
        if(i === 0 || nums[i] !== nums[i - 1]) {
            let start = i + 1, end = nums.length - 1;
            while(start < end){
                if (nums[i] + nums[start] + nums[end] === 0) {
                    result.push([nums[i], nums[start], nums[end]]);
                    start++;
                    end--;
                    while (start < end && nums[start] === nums[start - 1]) { // 防止重复
                        start++;
                    }
                    while (start < end && nums[end] === nums[end + 1]) {
                        end--;
                    }
                } else if (nums[i] + nums[start] + nums[end] < 0) {
                    start++
                } else {
                    end--
                }
            }
        }
    }
    console.log(result)
    return result;
}

let nums = [-1,0,1,2,-1,-4]
threeSum(nums)