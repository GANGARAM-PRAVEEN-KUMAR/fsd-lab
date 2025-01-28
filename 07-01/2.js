function calculateSum(...rest){
    return rest.reduce((num,val)=>num+val);
}

console.log(calculateSum(1,2,3,4,5))
