// 有效的括号（对称）（类似于栈， 进栈，出栈）stack

// 1. 创建一个 hashMap, 把括号配对进去
// 2. 创建一个 stack ,for 循环遍历字符串，对于每一个字符串，从 map 里有这个 key,那说明他是个左括号
// ，从 map 里取得相对于的右括号（为什么？），把它 push 进 task 里。否则的话。他就是右括号。需要 pop 出 stack 厘米啊的第一个字符串
// , 然后看他是否等于当前字符串，如果不相符，则返回 false
// 3. 循环结束后如果 stack 不为空，说明还剩一些左括号没有被封闭，返回 false, 否则返回 true

function isValid(s) {
    const mappings = new Map();
    mappings.set("(", ")");
    mappings.set("[", "]");
    mappings.set("{", "}");

    const stack = [];
    for(let i = 0; i < s.length; i++) {
        if(mappings.has(s[i])) {
            stack.push(mappings.get(s[i]));    // 把值 push 进去
        } else {
            if(stack.pop() !== s[i]){
                return false;
            } 
        }
    }

    // 判断 stack 是不是空
    if (stack.length !== 0) {
        return false;
    }
    return true;
}
let s = "(]"
isValid(s)