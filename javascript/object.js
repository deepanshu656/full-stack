let student={
    name:"aman" ,
    rollno: 34,
    marks:[34,54,56],
    isMinor:true,
    address:{
        city:"delhi",
        state:"delhi"

    },
    showName: function(){
        console.log(this.name);
    }
}
console.log(student.name)
console.log(student.marks[1])
console.log(student.address.state)

student.showName()
console.log(student['name'])

