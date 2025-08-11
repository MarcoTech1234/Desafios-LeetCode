class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function deleteMiddle(head: ListNode | null): ListNode | null {
  let result = head;
  let total = 0;

  while (result != null) {
    total++;
    result = result.next;
  }

  if (head === null) return null;
  if (head.next === null) return null;
  const meio = Math.floor(total / 2);

  result = head;
  for (let count = 0; count < meio; count++) {
    if (result?.next == null) break;

    if (count == meio - 1) {
      result.next = result.next.next;
    }
    result = result.next;
  }

  return head;
}