class ListNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}
var addTwoNumbers = function (l1, l2) {
    let carry = 0
    let node1 = l1
    let node2 = l2

    let resultStartingNode = null
    let resultCurrentNode = null

    while (node1 || node2 || carry > 0) {
        let firstNode = node1?.val ?? 0
        let secondNode = node2?.val ?? 0

        sum = firstNode + secondNode + carry

        carry = Math.floor(sum / 10)
        let digit = sum % 10

        if (resultStartingNode === null) {
            let node = new ListNode(digit)
            resultStartingNode = node
            resultCurrentNode = node
        } else {
            resultCurrentNode.next = new ListNode(digit, null)
            resultCurrentNode = resultCurrentNode.next
        }

        if (node1 !== null) {
            node1 = node1.next
        }

        if (node2 !== null) {
            node2 = node2.next
        }
    }

    return resultStartingNode
};