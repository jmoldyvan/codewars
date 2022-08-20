var mergeTwoLists = function(list1, list2) {
const dummy = new Listnode(-Infinity)
let prev = dummy
while (list1 && list2) {
    if (list1.val <= list2.val) {
        prev.next = list1;
        prev = list1list1 - list1.next}
        else{
            prev.next = list2;
            prev = list2
            list2=list2.next
        }
    }
    if(!list1 )prev.next = list2
    if(!list2 )prev.next = list1
    return dummy.next
}
var mergeTwoLists = function (l1, l2) {
    // Initialise a new LinkedList with a dummy ListNode
    let newList = new ListNode(0);

    // Maintain a reference to the head of the new LinkedList
    let headOfNewList = newList;

    // Whilst both of the passed in lists contain more elements
    while (l1 != null && l2 != null) {
        // If l1's value is smaller
        if (l1.val < l2.val) {
            // Add l1's value to the new list
            newList.next = l1;

            // Move l1 to its next element
            l1 = l1.next;
        } else {
            // Add l2's value to the new list
            newList.next = l2;

            // Move l2 to its next element
            l2 = l2.next;
        }

        // Move into the next level of the LinkedList for the next iteration
        newList = newList.next;
    }

    // If l1 has run out of elements
    if (l1 == null) {
        // Append l2 to the new list
        newList.next = l2;
    }
    // If l2 has run out of elements
    else {
        // Append l1 to the new list
        newList.next = l1;
    }

    return headOfNewList.next;
};
// mergeTwoLists(
//     [1,2,4], 
//     [1,3,4])