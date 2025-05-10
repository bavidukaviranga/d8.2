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

// console.log(tblCustomer);


function addCustomer(){
    let customerId = document.getElementById("txtId").value;
    let customerName = document.getElementById("txtName").value;
    let customerEmail = document.getElementById("txtEmail").value;
    // console.log("ID :"+id);
    // console.log("Name :"+name);
    // console.log("Email :"+email);
    customerList.push({
            id : customerId,
            name : customerName,
            email : customerEmail
    });

    loadTable();

    
}
function loadTable(){
    let tblCustomer = document.getElementById("tblCustomer");
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



}