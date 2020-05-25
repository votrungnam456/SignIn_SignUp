let submit = document.getElementById("btn-submit")
let username = document.getElementById("txtUser");
let password = document.getElementById("txtPwd");
var users =[
    {
        username :"VoTrungNam",
        password : "123"
    }
]
submit.addEventListener('click',()=>{

    if(name===username.value&&pass===password.value){
        alert("Dang nhap thanh cong")
    }
    else{
        alert("Sai tai khoan hoac mat khau")
        username.value="";
        password.value="";
    }
})