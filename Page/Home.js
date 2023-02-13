function showLoader() {
    $(".loader").fadeIn("slow");
}
function hideLoader() {
    $(".loader").fadeOut("slow");
}

let form = document.getElementById('loginForm');
let email = document.getElementById('email');
let pwd = document.getElementById('pwd');
const loginBtn= document.getElementById('myBtn');
const home = document.getElementById('home');
const loginContent = document.getElementById('form');



loginBtn.addEventListener('click',function(e){
    e.preventDefault();
    // console.log('LOGIN');
    const emailRule = /\w+\d*\w*@\w+\d*\w+\.\w+[.]*\w+$/i;
    if(emailRule.test(email.value) && pwd.value !== ''){
        // msg.textContent=`Please insert a correct email and password`;
        // console.log(`LogedIn`);
        home.style.display='block';
        loginContent.style.display='none';

    }else{
        alert(`Put a correct mail and Password`);
        home.style.opacity=0;
    }

    // if(pwd.value.trim() === ''){
    //     console.log(`Your pasword must not be empty`)
    // }else{
    //     console.log(`You are LoggedIn`)
    // }
})

// loginBtn.addEventListener('click',(e)=>{
//     e.preventDefault();
//     console.log('logedIn');
//     home.style.opacity=100;

// })