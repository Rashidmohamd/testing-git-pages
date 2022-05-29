const closebtn = document.querySelector(".close");
const openbtn = document.querySelector(".menu");
const tir = document.querySelector(".tir").addEventListener("click",excute)

openbtn.addEventListener("click", show);
closebtn.addEventListener("click", excute);

function excute() {
    closebtn.parentElement.style.right = "-50%"
    document.querySelector(".tir").style.backgroundColor = "transparent";
    closebtn.style.color = "transparent";

    openbtn.style.zIndex = "16";
   
}

function show() {
    document.querySelector(".nav").style.right = "0"

    document.querySelector(".tir").style.backgroundColor = "rgba(0,0,0,0.4)";

    openbtn.style.zIndex = "-1";

    closebtn.style.color = "white";

   
}



//self test

const attept = [
    { name: "rashid ", age: 22, },
    { name: "rashid ", age: 22, }
    
];


function createattept(post){
    attept.push(post)
}

createattept({name:"omar",age:55})

console.log(attept);

// const Rashid = {
//     fname: "rashid",
//     lname: "mohamed",
//     age: 22,
//     fullname: function () {
//     console.log(`${this.fname} ${this.lname}`);
// }

// }


// function Rashid(fname, lname, age, Phone) {
//     this.fname = fname;
//     this.lname = lname;
//     this.age = age;
//     this.Phone = Phone;
// }

// Rashid.prototype.fullname = function () {
//     console.log(`${this.fname} ${this.lname}`);
// }

// let person = new Rashid("Rashid ", "mohamed ", 22, "+201200267507");

// person.fullname();

// console.log(person.Phone)




