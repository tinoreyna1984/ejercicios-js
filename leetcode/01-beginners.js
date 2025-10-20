/*

1. Given an array of nums, we define a running sum of an array as runningSum[i] = [sum[0],... sum[i]]
Return the running sum of nums

*/

var runningSum = function(nums) {
    for(let i = 1; i < nums.length; i++){
        nums[i] += nums[i - 1];
    }
    return nums;
};

/*

2. You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

*/

var maximumWealth = function(accounts) {
    let sums = [];
    for(let i = 0; i < accounts.length; i++){
        sums[i] = accounts[i].reduce((c, a) => c + a , 0);
    }
    return Math.max(...sums)
};


/*

3. Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.

*/

var fizzBuzz = function(n) {
    let answer = [];
    for(let i = 1; i <= n; i++){
        if(i % 3 === 0 && i % 5 !== 0){
            answer.push("Fizz")
        }
        else if(i % 3 !== 0 && i % 5 === 0){
            answer.push("Buzz")
        }
        else if(i % 3 === 0 && i % 5 === 0){
            answer.push("FizzBuzz")
        }
        else{
            answer.push(i.toString())
        }
    }
    return answer;
};

/*

4. Given an integer num, return the number of steps to reduce it to zero.

In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

*/

var numberOfSteps = function(num) {
    let times = 0;
    
    while(num > 0){
        if(num % 2 === 0) num = num/2
        else num--;
        times++;
    }
    
    return times;
};

/*

5. Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

*/

var middleNode = function(head) {
    let fast = head;
    let slow = head;
    
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    
    return slow;
};









