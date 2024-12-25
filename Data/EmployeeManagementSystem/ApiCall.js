export class ApiCall
{
    xhr=new XMLHttpRequest();
    

    GetEmployees(url, callback)
    {
        this.xhr.open("GET",url,true);
        this.xhr.send();
        this.xhr.onload=()=>{
            
            let employess= JSON.parse(this.xhr.responseText);
            callback(employess);
        }
    }

    AddEmployee(url,emp, callback)
    {
        this.xhr.open("POST",url,true);
       
        this.xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        //this.xhr.setRequestHeader("Content-Type", "application/json ");

        this.xhr.send(JSON.stringify(emp));
        this.xhr.onload=()=>{
            
            let employess= JSON.parse(this.xhr.responseText);
            callback(employess);
        }
    }
}