let nam = document.getElementById("name")
let email =  document.getElementById("email");
let pwd = document.getElementById("password");
let pwd1 = document.getElementById("password1");
let num = document.getElementById("num");
let error= document.getElementById("error");
let error1= document.getElementById("error1");
let error2= document.getElementById("error2");
let error3= document.getElementById("error3");
let error4= document.getElementById("error4");
function val(){
    let regexp=/^(\w+)@([A-Za-z0-9\_]+).([a-z]{2,4})(.[a-z]{2,3})?$/
    error.innerHTML="";
    error1.innerHTML="";
    error2.innerHTML="";
    error3.innerHTML="";
    
    if(nam.value.trim()==""){
        error.innerHTML="<b>Name cannot be empty</b>";
        error.style.color="red";
        error.style.fontFamily="ariel"
        return false;
    }
    else if(email.value.trim()==""){
        error1.innerHTML="<b>Email cannot be empty</b>";
        error1.style.color="red";
        error1.style.fontFamily="ariel"
        return false;
    }
    else if(regexp.test(email.value)!=true) { 
        error1.innerHTML="<b>Please enter valid Email ID</b>";
        error1.style.color="red";
        error1.style.fontFamily="ariel";
        return false;
        }
    else if(pwd.value.trim()==""){
        error2.innerHTML="<b>Password cannot be empty</b>";
        error2.style.color="red";
        error2.style.fontFamily="ariel"
        return false;
    }
    else if(pwd.value.length <8){
        
        error2.innerHTML="<b>Password must be at least 8 characters long</b>";
        error2.style.color="red";
        return false;
    }
    else if(pwd1.value.trim()==""){
        error3.innerHTML="<b>Password cannot be empty</b>";
        error3.style.color="red";
        error3.style.fontFamily="ariel"
        return false;
    }
    else if(pwd1.value.length <8){
        
        error3.innerHTML="<b>Password must be at least 8 characters long</b>";
        error3.style.color="red";
        return false;
    }
    else if(pwd.value != pwd1.value) {

        error3.innerHTML="<b>Passwords do not MATCH</b>";
        error3.style.color="red";
        return false;
    }
    else if(num.value.trim()==""){
        error4.innerHTML="<b>Phone NO. cannot be empty</b>";
        error4.style.color="red";
        error4.style.fontFamily="ariel"
        return false;
    }
    else if( num.value.length <10 || num.value.length>10){
        
        error4.innerHTML="<b>Phone NO. must be 10 digits long</b>";
        error4.style.fontSize="10px";
        error4.style.color="red";
        return false;
    }
    else if (num.value.length==10){
        var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if((num.value.match(phoneno))){
        return true;
        }
        else
        {
            alert("message");
            return false;
        }
    }
    else{
        return true;
        
    }
}

