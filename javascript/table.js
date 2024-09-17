
const prompt=require("prompt-sync")()
const n=prompt('enter a no.')
j=1;
while(j<=10){
    a=n*j;
    console.log(n,'*',j,'=',a)
    j++
}