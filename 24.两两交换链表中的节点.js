// 两两交换链表中的结点

// 6 步
// 1. n1 = p.next
// 2. n2 = p.next.next
// 3. p.next = n2
// 4. n1.next = n2.next
// 5. n2.next = n1
// 6. p = p.next.next


let head = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: null
            }
        }
    }
}
function swapPairs(head) {
    if (!head) {
        return null;
    }
    if (!head.next) {
        return head;
    }

    let dummy = new ListNode();

    dummy.next = head;
    let current = dummy;
    while(current.next !== null && current.next.next !== null) {
        let n1 = current.next;
        let n2 = current.next.next;
        current.next = n2;
        n1.next = n2.next;
        n2.next = n1;
        current = current.next.next;
    }
    return dummy.next;
}

swapPairs(head)