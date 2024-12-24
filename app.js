let btnTextData=document.getElementById("btnTextdata");
let btnJsondata=document.getElementById("btnJsondata");
let btnApidata=document.getElementById("btnApidata");

let divTextResult=document.getElementById("divTextResult");
let divJsonResult=document.getElementById("divJsonResult");
let divApiResult=document.getElementById("divApiResult");

btnTextData.onclick= function() {
    let xhr=new XMLHttpRequest();

    xhr.open("GET","./Data/message.txt",true);
    xhr.send();

    xhr.onload=()=>{
        if(xhr.status==200)
        {
            divTextResult.innerHTML=xhr.responseText;
        }
    }
}

btnJsondata.onclick= function() {
    let xhr=new XMLHttpRequest();
    xhr.open("GET","./Data/users.json",true);
    xhr.send();

    xhr.onload=()=>{
        
        let data=JSON.parse(xhr.responseText);
        console.log(data);

        divJsonResult.innerHTML=`<ul class='list-unstyled'>
                            <li>id: ${data.id}</li>
                            <li>Name: ${data.name}</li>
                            <li>age: ${data.age}</li>
                        </ul>`
    }
}

btnApidata.onclick= function() {
    let xhr=new XMLHttpRequest();
    xhr.open("GET","https://jsonplaceholder.typicode.com/users",true);
    xhr.send();

    xhr.onload=()=>{
        
        let users=JSON.parse(xhr.responseText);
        

        let template='';
        for(let user of users)
        {
            template+=`<ul class='list-group mt-4'>
                                <li class='list-group-item'>id: ${user.id}</li>
                                <li class='list-group-item'>Name: ${user.name}</li>
                                <li class='list-group-item'>email: ${user.email}</li>
                            </ul>`
        }

        divApiResult.innerHTML=template;
    }
}