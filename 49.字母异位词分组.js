// 字母异位词分组

// 1. 检查是否为空数组
// 2. 建立一个长度为 26 的数组，起始值为 0
// 3. 遍历所有字符串，将字母的出现频率，放到数组的对应位置里（利用 ascii 码）
// 4. 遍历数组，按照相同字母出现频率进行分组归类（使用 hashMap）
// 5. 遍历 map ,将结果返回

let strs = ["eat","tea","tan","ate","nat","bat"];

groupAnagrams2(strs)
// 官方
function groupAnagrams2(strs) {
    const map = new Object();
    for (let s of strs) {
        const count = new Array(26).fill(0);
        for (let c of s) {
            count[c.charCodeAt() - 'a'.charCodeAt()]++;
        }
        map[count] ? map[count].push(s) : map[count] = [s];
        console.log(map)
    }
    return Object.values(map);
};