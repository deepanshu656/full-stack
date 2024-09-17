// function add(a,b) {

//     return a+b
// }
// // add{10,20}
// // console.log(add(30,40));


// function cube(a){
//     return a**3;
// }
// console.log(cube(4));

//                      arrow function 
// let si=(p,t,r)=>{
//     return (p*t*r)/100
// }

//     let square=a=>a**2
//     console.log(square(36));


// call back function =>


    let multiplyby5AndAdd=(n,fn)=>{
        let s=n*5
        return fn(5)
    }
let add10=function(a){return a+10}
    console.log(multiplyby5AndAdd(10,add10))
    console.log(multiplyby5AndAdd(5,x=>x+20))


    
