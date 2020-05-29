let submit = document.getElementById("btn-submit")
let username = document.getElementById("txtUser");
let password = document.getElementById("txtPwd");
let checkwrg = document.getElementById("form-login")
let error = document.getElementById("err")
let users,getdata;

async function getData(url){
    getdata = await fetch(url);
    users = await getdata.json()
}
getData("https://5ed1024f4e6d7200163a045c.mockapi.io/api/c4e/users");

submit.addEventListener('click',async ()=>{
    let check = false;
    error.innerHTML = "<p>Sai tài khoản hoặc mật khẩu</p>";
    users.forEach(user => {
        if(user.username != undefined && user.password != undefined){
         if(user.username.toLowerCase()==username.value.toLowerCase()&&user.password.toLowerCase()==password.value.toLowerCase()){
             window.open('home.html','_self')
             check=true;
         }
    }
    });
    if(check==false)
    {
        error.style.display="block";
        // let para = document.createElement("p");
        // let node = document.createTextNode("Sai tài khoản hoặc mật khẩu");
        // para.appendChild(node);
        // checkwrg.appendChild(para);
    }
})