// time o(n) space o(1)

var reverseList = function(head) {
    let next = null , prev = null 

    while(head){
                //2
        next = head.next 

        //1.next -> null 
        head.next = prev

        prev = head 
        head = next
    }
    return next
    
};

reverseList([1,2,3,4,5])