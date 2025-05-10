// console.log("ICET");
let customerList =[
    {
        id:1,
        name:"saman",
        email:"saman@gmail.com"

    },
    {
        id:1,
        name:"kamal",
        email:"kamal@gmail.com"
    },
    {
        id:2,
        name:"nimal",
        email:"nimal@gmail.com"

    },
    {
        
        id:3,
        name:"sunimal",
        email:"sunimal@gmail.com"

    },
    
]
let tblCustomer = document.getElementById("tblCustomer");

///////////function clear//////////////////

// let loop=(customer)=>{
//    tblCustomer.innerHTML+=`
//     <tr>
//         <th>iD</th>
//         <th>Name</th>
//         <th>Email</th>
//      </tr>` 
// }
// customerList.forEach(loop)

/////////////////////////////

////for each with function/////

let body=
    `<tr>
        <th>iD</th>
        <th>Name</th>
        <th>Email</th>
    </tr>`

customerList.forEach(customer=>{
   body +=`
    <tr>
        <td>${customer.id}</td>
        <td>${customer.name}</td>
        <td>${customer.email}</td>
    </tr>
` 
})




tblCustomer.innerHTML=body;
console.log(tblCustomer);
