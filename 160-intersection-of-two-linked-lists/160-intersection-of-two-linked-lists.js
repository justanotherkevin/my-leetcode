/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let refA = headA;
    let refB = headB;
    let visited = new Set(); 
    
    while ( refA && refB ) {
        if ( refA === refB ) return refA;
        if (visited.has(refA)) return refA;
        if (visited.has(refB)) return refB;
        
        visited.add(refA);
        visited.add(refB);
        
        refA = refA.next 
        refB = refB.next
    }
    
    let temp = refA ? refA : refB;
    while (temp) {
        if (visited.has(temp)) return temp;
        temp = temp.next 
    }
    
    return null;
};