// 两个数加起来的和
// map.has(key)  key 必填，用来检测是否存在指定元素的键值，返回 true 或 false
// map.get(key)  key 想要获取的元素的键，如果找不到则返回 undefined
// map.set(key, value)  key 必填，添加到 map 对象的元素的 key 值，value 必填， 添加到 map 对象的元素的 value 值

let target = 9;
let nums = [2, 3, 11, 7];

function twoSum(nums, target) {
    const map = new Map();
    for(let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        console.log(map)
        if(map.has(complement)) {
            return [map.get(complement), i]
        } else {
            map.set(nums[i], i);
        }
    }
    return []
}

console.log(twoSum(nums, target))