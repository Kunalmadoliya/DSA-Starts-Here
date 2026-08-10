var isPalindrome = function (head) {


    let fast = head
    let slow = head

    while (fast !== null && fast.next !== null) {
        fast = fast.next.next
        slow = slow.next
    }

    let prev = null
    let current = slow

    while (current !== null) {
        let next = current.next
        current.next = prev
        prev = current
        current = next
    }

    let first = head
    let second = prev

    while (second !== null) {
        if (first.val !== second.val) {
            return false
        }
        first = first.next
        second = second.next
    }
    return true

};