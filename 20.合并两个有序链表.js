// 合并两个有序链表  * 必须是有序

let l1 = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 4,
            next: null
        }
    }
}

let l2 = {
    val: 1,
    next: {
        val: 3,
        next: {
            val: 4,
            next: null
        }
    }
}

function mergeTwoLists(l1, l2) {
    // 定义一个空结点
    let curr = new ListNode();

    let dummy = curr;

    while(l1 !== null && l2 !== null) {
        if(l1.val < l2.val) {
            curr.next = l1;
            l1 = l1.next;
        } else {
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next;
    }

    if(l1 !== null) {
        curr.next = l1
    }
    if(l2 !== null) {
        curr.next = l2
    }
    console.log(dummy.next)
    return dummy.next
}
mergeTwoLists(l1, l2)