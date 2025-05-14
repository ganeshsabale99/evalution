
function countVAndC(str) {
    const res = "aeiouAEIOU";
    let count1 = 0;
    let count2 = 0;

    for (let bag of str) {
        
        if (bag.match(/[a-zA-Z]/)) {
            if (res.includes(bag)) {
                count1++;
            } else {
                count2++;
            }
        }
    }

    return { vowels: count1, consonants: count2 };
}

let str="hello world";

console.log(countVAndC(str))