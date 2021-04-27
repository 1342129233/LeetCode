// 最长回文字符串  tableDataProject

// 1. 如果字符出的长度小于 2, 直接返回原字符串
// 2. 定义两个变量，一个 start 存储当前找到的最大回文字符串的起始未知，另一个 maxLength 记录字符串的长度（终止位置解释 start + maxLength）
// 3. 创建一个 expandAroundCenter ，判断 左边 右边是否越界，同时判断最左边的字符是否等于最右边的字符
// 4. 如果以上 3 个田间都满足，则判断是否需要更新回文字符串最大长度及最大字符串的起始位置，然后将 left--, right++, 继续判断，直到不满足三个条件之一
// 5. 遍历字符串，每个位置调用 expandAroundCenter 两遍，第一遍检查 i - 1, i + 1, 第二遍检查i , i+ 1

let s = "babad"
function longestPalindrome(s) {
    if(s.length < 2) {
        return s;
    }
    let start = 0;
    let maxLength = 1;

    function expandAroundCenter(left, right) {
        while(left >= 0 && right < s.length && s[left] === s[right]) {
            if(right - left + 1 > maxLength) {
                maxLength = right - left + 1;
                start = left;
            }
            left--;
            right++
        }
    }

    for(let i = 0; i < s.length; i++) {
        expandAroundCenter(i - 1, i + 1);    // 奇数有中心点 三个条件(两个边界符合 + bab 两个 b 符合继续扩散)
        expandAroundCenter(i, i + 1);    // 偶数没有中心点  三个条件(两个边界符合 + bb 两个 b 符合继续扩散)
    }

    return s.substring(start, start + maxLength)
}

console.log(longestPalindrome(s))