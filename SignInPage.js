

const userName = document.getElementById("userName");
const passWord = document.getElementById("passWord");

var arrForUsers = new Array();
let lsForUser = new Object();

arrForUsers = {
    "name": userName.value,
    "password": passWord.value    
}

console.log(arrForUsers["name"]);
console.log(arrForUsers["password"]);


sessionStorage.setItem("currentloggedin", userName);

localStorage.setItem('all_users',JSON.stringify(arrForUsers));

arrForUsers=JSON.parse((localStorage.getItem("all_users")));

clickToLogin = ()=>{
    
    if(userName.value == passWord.value && userName.value !== ''){
        window.location.assign("OrdersPage.html");
        alert("Succesfully Logged In");       
    }else{
        alert("Please Enter Valid Credentials");
    }
}
