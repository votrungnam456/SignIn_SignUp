let submit = document.getElementById("btn-submit")
let username = document.getElementById("txtUser");
let password = document.getElementById("txtPwd");
let checkwrg = document.getElementById("form-login")
var users =[
    {
        username :"VoTrungNam",
        password : "123"
    },
    {
        username:"votrungnghia",
        password:"456"
    }
]
submit.addEventListener('click',()=>{
    let check = false;
    users.forEach(user => {
        if(username.value === user.username && password.value === user.password){
            window.open('home.html')
            check=true;
        }
    });
    if(check==false)
    {
        
        let para = document.createElement("p");
        let node = document.createTextNode("Sai tài khoản hoặc mật khẩu");
        para.appendChild(node);
        checkwrg.appendChild(para);
    }
})