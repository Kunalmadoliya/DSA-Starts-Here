// bruteforce o(n^2) and space o(1)

function mergeTwoList(list1, list2) {
  let dummy = new ListNode(-1);
  let current = dummy;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      dummy.next = list1;
      list1 = list1.next;
    } else {
      dummy.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  return dummy.next;
}

var mergeKLists = function (lists) {
    if(lists.length === 0) return []
    let result = lists[0]

    for (let i = 1; i < lists.length; i++) {
        result = mergeTwoList(result , lists[i])
    }

    return result
};

mergeKLists([
  [1, 4, 5],
  [1, 3, 4],
  [2, 6],
]);


