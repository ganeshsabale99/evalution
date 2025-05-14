function mergeObj(obj1, obj2){
    const merged = { ...obj1, ...obj2 };
    return merged;
}
const obj1 = { name: "John", age: 30 };
const obj2 = { age: 40, city: "New York" };

console.log(mergeObj(obj1, obj2));
