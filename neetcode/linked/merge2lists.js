// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. 
// The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// this solution uses recursion to build a stack
// each iteration through we initially check if either list is empty and 
// return the stack we have

// for the recursion we compare values of list head
// if one is larger we call the fucntion again with the next head as parameter

// repeat on until we hit the first point

var mergeTwoLists = function (l1, l2) {
    if (!l1) return l2;
    else if (!l2) return l1;
    else if (l1.val <= l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2
    }
};