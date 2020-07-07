
// btnSubmit.addEventListener('click', ()=>{
//    
// })

// check firebase

// window.onload = () => {
//     console.log(firebase.app().name);
//     view.setActiveScreen('register');
//   }



let btnSubmit = document.getElementById("btn-submit")
btnSubmit.addEventListener('click', async ()=>{
    let pwd = document.getElementById('txtPwd')
    let agPwd = document.getElementById('txtAgPwd')
    let error = document.getElementById("err")
    let FName = document.getElementById('first-name')
    let MLName = document.getElementById('middle-last-name')
    let email = document.getElementById('email')
    let user = document.getElementById('txtUser')
    let genders = document.getElementsByName('gender')
    let gender
    for (var i = 0, length = genders.length; i < length; i++) {
        if (genders[i].checked) {
          gender = genders[i];
          break;
        }
    }
    // if(pwd.value!= agPwd.value){
    //             error.innerHTML = "<span>Mật khẩu và nhập lại mật khẩu không khớp nhau !!<span>";
    //         }
    if (pwd.value === agPwd.value) {
        try {
          await firebase.auth().createUserWithEmailAndPassword(email.value, pwd.value);
    
          firebase.auth().currentUser.updateProfile({
            displayName: `${FName.value} ${MLName.value}`,
            // genderUser:`${gender.value}`, 
            // userNameUser: `${user.value}`,
          })
    
          firebase.auth().currentUser.sendEmailVerification();
          //view.setMessage('form-success', 'Register success');
        } catch (error) {
          //view.setMessage('form-error', error.message)
          console.log(error)
        }
      }
      
})