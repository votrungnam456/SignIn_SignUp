let submit = document.getElementById("btn-submit")
let username = document.getElementById("txtUser");
let password = document.getElementById("txtPwd");
submit.addEventListener('click',()=>{
    let name ="VoTrungNam";
    let pass = "123";
    if(name===username.value&&pass===password.value){
        alert("Dang nhap thanh cong")
    }
    else{
        alert("Sai tai khoan hoac mat khau")
        username.value="";
        password.value="";
    }
})