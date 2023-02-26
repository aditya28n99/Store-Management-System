

const userName = document.getElementById("userName");
const passWord = document.getElementById("passWord");

clickToLogin = ()=>{
    if(userName.value == passWord.value && userName.value !== ''){
        window.location.assign("OrdersPage.html");
        alert("Succesfully Logged In");       
    }else{
        alert("Please Enter Valid Credentials");
    }
}
