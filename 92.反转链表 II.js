// 反转链表 II

let head = {
    val: 1, 
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: null
                }
            }
        }
    }
}

let left = 2;
let n = 4;

function reverseBetween(head, left, right) {
    let prev = null;
    let curr = head;
    let next = head;
    for (let i = 1; i < left; i++) {
        prev = curr;
        curr = curr.next
    }
    let prev2 = prev;
    let curr2 = curr;

    // 中间的反转
    for(let i = left; i <= right; i++) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    if(prev2 !== null) {  // left > 1
        prev2.next = prev;
    } else {
        head = prev;
    }

    curr2.next = curr;
    return head;
}

reverseBetween(head, left, right)

reverseBetween2(head, left, right)

function reverseBetween2(head, left, right) {
    const dummyNode = new ListNode(-1);
    dummyNode.next = head;

    let pre = dummyNode;
    // 第 1 步：从虚拟头节点走 left - 1 步，来到 left 节点的前一个节点
    // 建议写在 for 循环里，语义清晰
    for(let i = 0; i < left - 1; i++) {
        pre = pre.next;    // 反转的前一个结点
    }

    // 第 2 步：从 pre 再走 right - left + 1 步，来到 right 节点
    let rightNode = pre;
    for (let i = 0; i < right - left + 1; i++) {
        rightNode = rightNode.next;
    }

    // 第 3 步：切断出一个子链表（截取链表）
    let leftNode = pre.next;   // 反转的结点
    let curr = rightNode.next;     // 反转的后一个结点

    // 注意，切断链接, 防止循环
    pre.next = null;
    rightNode.next = null;

    // 第 4 步：反转链表
    reverseLinkedList(leftNode);

    // 第 5 步：接回到原来的链表中
    pre.next = rightNode;
    leftNode.next = curr;
    return dummyNode.next;

}

const reverseLinkedList = (head) => {
    let pre = null;
    let cur = head;

    while(cur) {
        const next = cur.next
        cur.next = pre;
        pre = cur;
        cur = next;
    }
}