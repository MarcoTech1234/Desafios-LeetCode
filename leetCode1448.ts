function goodNodes(root: TreeNode | null): number {
  if (root == null) return 0;
  return findGoodNode(root, root!);
}

function findGoodNode(root: TreeNode | null, passNode: TreeNode): number {
  // caso base
  if (root == null) return 0;

  if (root.val >= passNode.val) {
    // Chamada de recursão para nodes bons
    return findGoodNode(root.right, root) + findGoodNode(root.left, root) + 1;
  }
  // Chamada de recursão para nodes ruins
  return findGoodNode(root.right, passNode) + findGoodNode(root.left, passNode);
}
