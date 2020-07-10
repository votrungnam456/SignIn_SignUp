// check firebase

// window.onload = () => {
//     console.log(firebase.app().name);
//     view.setActiveScreen('register');
//   }
//-------------------------------------------------------------------------------------------
let btnSubmit = document.getElementById("btn-submit")
btnSubmit.addEventListener('click', async ()=>{
  let  error = document.getElementById("err").value
  let genderUser 
  let  confirmPwd = document.getElementById('txtAgPwd').value
  let newUser={
    pwd : document.getElementById('txtPwd').value,
    displayName: document.getElementById('first-name').value+" "+document.getElementById('middle-last-name').value,
    email : document.getElementById('email').value,
  }
  let genders = document.getElementsByName('gender')

  for (var i = 0, length = genders.length; i < length; i++) {
      if (genders[i].checked) {
        genderUser = genders[i];
        break;
      }
  }   
  newUser.gender = genderUser
  if (newUser.displayName && newUser.email&&newUser.gender&&newUser.pwd === confirmPwd) {
      try {
        await firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.pwd);  
        firebase.auth().currentUser.updateProfile({
          newUser
        }) 
        firebase.auth().currentUser.sendEmailVerification();
        alert("Done!!")
        window.open('signin.html','_self')
      } catch (error) {
        error.innerHTML = "<p>Tài khoản đã tồn tại</p>";
        error.style.display="block";
      }
    }
  else{
    error.innerHTML = "<p>Tài khoản hoặc mật khẩu không được để trống</p>";
    error.style.display="block";
  }  
})