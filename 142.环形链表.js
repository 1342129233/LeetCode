// 输入 head = [3, 2, 0, -4],   pos = 1
// 解释：链表中又一个换默契首位链接到第二个结点

let head = {
    value: 3,
    next: {
        value: 2,
        next : {
            value: 0,
            next: {
                value: -4,
                next: null
            }
        }
    }
}
function detectCycle(head) {
    if(head === null) {
        return null
    }

    let slow = head;   // 慢指针
    let fast = head;   // 快指针   ,再次初始化的时候需要一步一步走
    let isCycle = false;    // true 表示有换
    // 首先确定有没有环， 快慢指针， 快的走两个，慢的走一个
    while(fast.next !== null && fast.next.next !== null) {
        slow = slow.next    // 走一步
        fast = fast.next.next    // 走两步
        if(slow === fast) {
            isCycle = true
            break;
        } 
    }
    if(!isCycle) {
        return null
    }
    fast = head;
    while(slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }
    
    return fast;
}
console.log(detectCycle(head))
