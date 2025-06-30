// 3. Write a function to find the longest palindromic substring in a string.

function longestPalindromicSubString(str){
    if(!str||str.length<1){
        console.log("no further operations");
    }
     let start =0;
     let maxLength=0;

     const expandAroundCenter=(left,right)=>{
        while(left>=0 && right<str.length &&str[left]===str[right]){
            if(right - left +1 >maxLength){
                maxLength=right-left+1;
                start=left;
            }
            left--;
            right++;

        }
     }
     for(let i=0;i<str.length;i++){
        expandAroundCenter(i,i+1);
        expandAroundCenter(i-1,i+1);
     }
     return str.substring(start,start+maxLength);   
}
console.log(longestPalindromicSubString("babad"));
console.log(longestPalindromicSubString("baabbaad"));
