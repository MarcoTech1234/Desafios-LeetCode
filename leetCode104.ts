class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function maxDepth(root: TreeNode | null): number {
  // Caso base
  if (root == null) return 0;

  let right = maxDepth(root.right);
  let left = maxDepth(root.left);

  return 1 + Math.max(right, left);
}
