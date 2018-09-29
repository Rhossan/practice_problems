/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**





 *            1
           2     5
         3   4     6

      The flattened tree will look like:
      
      1
        2
          3
            4
              5
                6
 */
var flatten = function(root){
    if(root){
        doFlatten(root);
    }
}
function doFlatten(root) {
    if (!root.left && !root.right) return root;

        let rightRoot = root.right;
        if(root.left){
            var leftTail = doFlatten(root.left);

            root.right = root.left;
            leftTail.right = rightRoot;
            root.left = null;

        }
    if(rightRoot) return doFlatten(rightRoot);
    else{return leftTail;}
    };
