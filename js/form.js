let email =  document.getElementById("email");
let pwd = document.getElementById("password");
let error= document.getElementById("error");
let error1= document.getElementById("error1");

function val(){
    let regexp=/^(\w+)@([A-Za-z0-9\_]+).([a-z]{2,4})(.[a-z]{2,3})?$/
    error.innerHTML="";
    error1.innerHTML="";
    if(email.value.trim()==""){
        error.innerHTML="<b>Email cannot be empty</b>";
        error.style.color="red";
        error.style.fontFamily="ariel"
        return false;
    }
    else if(regexp.test(email.value)!=true) { 
        error.innerHTML="<b>Please enter valid Email ID</b>";
        error.style.color="red";
        error.style.fontFamily="ariel";
        return false;
        }
    else if(pwd.value.trim()==""){
        error1.innerHTML="<b>Password cannot be empty</b>";
        error1.style.color="red";
        error1.style.fontFamily="ariel"
        return false;
    }
    else if(pwd.value.length <8){
        
        error1.innerHTML="<b>Password must be at least 8 characters long</b>";
        error1.style.color="red";
        return false;
    }
    else{
        return true;
        
    }
}

