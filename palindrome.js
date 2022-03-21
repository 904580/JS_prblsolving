var longestPalindrome = function(s) {
    let start, end, result = 0;
    
    for(let i=0; i < s.length; i++) {
        let tempStart = i;
        let tempEnd = i;
        
        while(s[tempEnd] === s[tempEnd+1]) tempEnd++;
        
        while(tempStart >= 0 && tempEnd < s.length && s[tempStart-1] == s[tempEnd+1]) {
            tempStart--;
            tempEnd++
        }
        if(result < tempEnd - tempStart+1) {
            result = tempEnd - tempStart+1;
            start = tempStart;
            end = tempEnd;
        }
    }
    return s.substring(start, end+1);
};

 var result=longestPalindrome("babad");
 console.log(result);