var lengthOfLongestSubstring = function(s) {
    if(s.length == 0) return 0;
    let maxLength = 1, i = 0, j = 0, n = s.length;
    const a = s.split('')
    //console.log(a)
    const mySet = new Set();
    while(i < n && j < n) {
        if(!mySet.has(a[j])) {
            mySet.add(a[j++])
            maxLength = Math.max(maxLength, j-i);
        } 
        else {
          mySet.delete(a[i++]);  
        }     
    }
    return maxLength;
};

console.log(lengthOfLongestSubstring("abac"))