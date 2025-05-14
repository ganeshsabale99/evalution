function reverseWords(s) {
 
    let res = " ";

    for(let i=s.length-1; i>=0; i--){
        if(s[i] !== " "){
            res = res + s[i];
        }else{
            res = res + " ";
        }
    }
    console.log("res", res);
    return res;
}

let str = "Hello World";
console.log(reverseWords(str));
