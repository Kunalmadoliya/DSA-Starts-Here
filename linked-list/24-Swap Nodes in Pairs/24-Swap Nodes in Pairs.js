/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    if (head == null || head.next == null) {
        return head;
    }
    let dummy = new ListNode(-1);
    dummy.next = head;

    let curr = dummy;

    while (curr.next !== null && curr.next.next !== null) {
        let t1 = curr.next;       // first node of the pair
        let t2 = t1.next;         // second node of the pair

        t1.next = t2.next;        // first points to whatever comes after the pair
        t2.next = t1;             // second points back to first
        curr.next = t2;           // curr now points to the new head of the pair (second)

        curr = t1;                // move curr to the end of the swapped pair
    }

    return dummy.next;
};