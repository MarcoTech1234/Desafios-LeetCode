function leafSimilar(root1: TreeNode | null, root2: TreeNode | null) {
  let values1: number[] = [];
  let values2: number[] = [];
  getLeaf(root1, values1);
  getLeaf(root2, values2);

  if (values1.length !== values2.length) {
    return false;
  }
  return values1.join() == values2.join();
}

function getLeaf(root: TreeNode | null, values: number[]): number[] {
  if (!root) return [];

  if (!root?.left && !root?.right) {
    values.push(root.val);
    return values;
  }

  getLeaf(root.left, values);
  getLeaf(root.right, values);
  return values;
}