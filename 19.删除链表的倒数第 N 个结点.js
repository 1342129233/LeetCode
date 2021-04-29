// 删除链表倒数第 n 个结点
// 进阶: 你能尝试使用一趟扫描实现吗？
// 通过两个指针后一个到达 next = null ，前一个正好指向删除的前一个

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
                    mext: null
                }
            }
        }
    }
}

function removeNthFromEnd(head, n) {
    let dummy = new ListNode();
    dummy.next = head;

    // 两个指针
    let n1 = dummy;
    let n2 = dummy;

    for(let i = 0; i < n; i++) {
        n2 = n2.next
    }

    while(n2.next !== null) {
        n1 = n1.next;
        n2 = n2.next;
    }

    n1.next = n1.next.next;
    
    return dummy.next;
}

// 删除第二个结点
removeNthFromEnd(head, 2)