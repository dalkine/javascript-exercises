const palindromes = function (word) {
        let result=true;
        word=clean(word);
for(let i=0,j=(word.length-1);i<=word.length-1;i++,j--){
   
    if(!(word[i]==word[j])){
     
        result= false;
    }

}
return result;

};
function clean(str){
    result=str.replace(/[^A-Za-z]/g,'');
    result=result.toLowerCase();
    return result
}
// Do not edit below this line
module.exports = palindromes;
