class ListNode3 {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function oddEvenList(head: ListNode | null): ListNode | null {
  if (head == null || head.next == null) return head;
  let odd = head;
  let even = head?.next;
  let headEven = head.next;

  while (even != null && even.next != null) {
    odd.next = even.next;
    odd = odd.next;

    even.next = odd.next;
    even = even.next!;
  }

  odd.next = headEven;
  return head;
}
