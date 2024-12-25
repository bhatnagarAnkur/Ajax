import { ApiCall } from './ApiCall.js';

let btnGet=document.getElementById("btnGet");
let btnPost=document.getElementById("btnPost");
let btnPut=document.getElementById("btnPut");
let btnDelete=document.getElementById("btnDelete");

let tblBody=document.getElementById("tblBody");

btnGet.onclick=()=>{
    
    let api=new ApiCall();

    var getUrl="http://localhost:62643/api/Employee";


    api.GetEmployees(getUrl,(users)=>{

        let template='';
        console.log(users);
        for(let user of users)
        {
            template+=`<tr>
                                <td>${user.FirstName}</td>
                                <td>${user.LastName}</td>
                                <td>${user.Email}</td>
                                <td>${user.Gender}</td>
                                <td>${user.Age}</td>
                            </tr>`
        }

        tblBody.innerHTML=template;

    });

    btnPost.onclick=()=>{

        const emp = {
            "EmployeeID": 1,
            "FirstName": 'New Employee First name',
            "LastName":'New Employee Last name',
            "Email":'New Employee Email',
            "Gender":'New Employee Gender',
            "Age":86
          }

        
        api.AddEmployee(getUrl,emp,()=>{
            debugger;
            //btnGet.onclick();
        })
    }
    
}