
// let passwordLenght = 8;
// let form = document.getElementById('loginForm');
// form.onsubmit = function () {
//     var Email = form['email'].value
//     if (!emailRule.test(Email)) {
//         alert('please enter a correct email')
//         return false
//     }
//     if (password.length = 0) {
//         alert('please enter a correct password')
//         return false
//     }
//     window.location.href ='Home.html'
// }

// // document.getElementById("myBtn").addEventListener("click", myFunction);

// // function myFunction() {
// //     console.log(`hwy`);
// //     let email = document.getElementById('email').value;
// //     let password = document.getElementById('pwd').value;
// //     console.log(`email = ${email} password = ${password}`);
// //     alert(`button Clicked ${email}`);
// // }



let form = document.getElementById('loginForm');
let email = document.getElementById('email');
let pwd = document.getElementById('pwd');
const loginBtn= document.getElementById('myBtn');
const home = document.getElementById('home');

// document.getElementById('myBtn').addEventListener('click', navigatePage);

// form.addEventListener('submit', e => {
//     e.preventDefault();
//     const emailValue = email.trim();
//     console.log(emailValue)
//     const pwdValue = pwd.trim();
//     console.log(pwdValue)
//     if (emailValue === '' || (!emailRule.test(emailValue))  ) {
//         console.log('Enter correct email');
//     }
//     if (pwdValue === '' || pwdValue.length < 8) {
//         console.log('password must be at least 8 character')
//     }
    
// //    window.location.href = "Home.html";

// })



function validateInput() {
    // else console.log('user login');
}
// const msg=document.getElementById('message');

// form.addEventListener('submit',function(e){
//     e.preventDefault();
//     // console.log('LOGIN');
//     const emailRule = /\w+\d*\w*@\w+\d*\w+\.\w+[.]*\w+$/i;
//     if(emailRule.test(email.value) && pwd.value !== ''){
//         // msg.textContent=`Please insert a correct email and password`;
//         console.log(`LogedIn`);

//     }else{
//         console.log(`Put a correct mail and Password`);
//     }

//     // if(pwd.value.trim() === ''){
//     //     console.log(`Your pasword must not be empty`)
//     // }else{
//     //     console.log(`You are LoggedIn`)
//     // }
// })

loginBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log('logedIn');
    home.style.opacity=100;

})