// 删除排序链表中的重复元素

let head = {
    val: 1,
    next: {
        val: 1,
        next: {
            val: 2,
            next: null
        }
    }
}
function deleteDuplicates(head) {
    let current = head;
    while(current !== null && current.next !== null) {
        if(current.val === current.next.val) {
            current.next = current.next.next;
        }else {
            current = current.next;
        }
    }
    return head;
}

deleteDuplicates(head)