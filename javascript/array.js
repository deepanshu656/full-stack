let b=[34,56,2,3,78,9]
let c=b.find((value,index,array)=>{
    return value> 56 
})
console.log(c)
console.log(b.findIndex((value,index,array)=>
{return value > 50 }
))
b.forEach((value,index,array)=>
{console.log(value,index,array)})
let sum=0
b.forEach((value,index,array)=>{
sum=sum+value;
})
console.log(sum);
