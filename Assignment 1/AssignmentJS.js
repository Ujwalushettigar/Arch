 const students = [
 { id: 1, name: "Amit Sharma", age: 20, course: "Computer Science", marks: 85, feesPaid: true },
 { id: 2, name: "Priya Singh", age: 22, course: "Information Technology", marks: 92, feesPaid: false },
 { id: 3, name: "Ravi Kumar", age: 19, course: "Electronics", marks: 76, feesPaid: true },
 { id: 4, name: "Neha Verma", age: 21, course: "Mechanical", marks: 88, feesPaid: true },
 { id: 5, name: "Sohan Lal", age: 23, course: "Civil Engineering", marks: 65, feesPaid: false },
 { id: 6, name: "Anjali Mehta", age: 20, course: "Computer Science", marks: 95, feesPaid: true },
 { id: 7, name: "Vikas Gupta", age: 22, course: "Information Technology", marks: 58, feesPaid: false },
 { id: 8, name: "Pooja Mishra", age: 19, course: "Mechanical", marks: 80, feesPaid: true },
 { id: 9, name: "Rajesh Khanna", age: 21, course: "Electronics", marks: 70, feesPaid: false },
 { id: 10, name: "Sneha Kapoor", age: 22, course: "Civil Engineering", marks: 90, feesPaid: true }
 ];

 // MAP
const a = students.map((el)=>el=el.name);
console.log(a);

const b = students.map((l)=>l={name:l.name,course:l.course});
console.log(b);

const c = students.map((tl)=>{
    if(tl.marks>=60){
        tl.status="Pass";
    }else{
        tl.status="Fail";
    }
    return tl;
})
console.log(c);

const d = students.map((kl)=>{
    kl={name:kl.name,course:kl.course};
    console.log(kl.name,"-",kl.course);
});

const e = students.map((ml)=>{
    ml={newmarks:ml.marks+5,name:ml.name}
    return ml;
});
console.log(e);

//FILTER
const f = students.filter((dl)=>dl.course==="Computer Science");
console.log(f);

const g = students.filter((nl)=>nl.marks>80);
console.log(g);

const j = students.filter((xl)=>xl.feesPaid==false)
console.log(j);

const h = students.filter((pl)=>pl.marks>70 && pl.age>20);
console.log(h);

const i = students.filter((ol)=>ol.marks<85 && ol.course==="Mechanical");
console.log(i);

//REDUCE
const k = students.map((fl)=>marks=fl.marks).reduce((fl,ui)=>ui=fl+ui);
console.log(k);

const m = students.map((cl)=>marks=cl.marks).reduce((cl,ui)=>ui=(cl+ui));
console.log(m/10);

const n = students.map((cl)=>fees=cl.feesPaid).reduce((cl,ui)=>ui=cl+ui);
console.log(n);

const order = students.reduce((k, zl) => {
    if (!k[zl.course]) {
        k[zl.course] = [zl.name]; 
    } else {
        k[zl.course][k[zl.course].length] = zl.name; 
    }
    return k;
}, {});

console.log(order);