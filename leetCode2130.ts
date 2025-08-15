/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function pairSum(head: ListNode | null): number {
    let maxTwin = 0
    let slow = head
    let fast = head
    let inverseList: ListNode | null = null
    
    // Pegar o meio da lista
    while(fast!=null){
        fast = fast.next!.next
        slow = slow!.next
    }

    // Inverter a lista
    while(slow!=null){
        let next = slow.next
        slow.next = inverseList
        inverseList = slow // Atualizando para ficar 
        slow = next
    }


    // Somando os Twins
    while(inverseList!=null){
        let sum = head!.val + inverseList.val
        maxTwin = Math.max(maxTwin, sum) 
        head = head!.next;
        inverseList = inverseList.next
    }

    return maxTwin 
};