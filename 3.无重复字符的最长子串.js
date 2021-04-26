// 无重复字符的最长子串
// new Set()    Set 是 es6 新增的数据结构，似于数组，但它的一大特性就是所有元素都是唯一的，没有重复的值，我们一般称为集合
// 当添加实例中已经存在的元素，set不会进行处理添加
// list.has(key)  key必填， 判断该值是否为Set的成员
// set.size  表示 Set 对象中的元素个数

function lengthOfLongestSubstring() {
    const set = new Set();
    let i = 0, j = 0, maxLength = 0;
    if(set.length === 0) {
        return 0;
    }

    for(i; i < s.length; i++) {
        if(!set.has(s[i])) {
            set.add(s[i]);
            maxLength = Math.max(maxLength, set.size)
        } else {
            while(set.has(s[i])) {
                set.delete(s[j]);
                j++;
            }
            set.add(s[i]);
        }
    }
    return maxLength
}

lengthOfLongestSubstring()