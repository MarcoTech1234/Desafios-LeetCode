function reverseList(head: ListNode | null): ListNode | null {
    let passNode: ListNode | null = null

    while (head != null) {
        // Salvar o próximo nó antes de mudar as referências
        let nextNode = head.next
        
        // Inverter a ligação
        head.next = passNode
        
        // Avançar o "nó anterior" e o "atual"
        passNode = head
        head = nextNode
    }

    return passNode;
};
