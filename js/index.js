let email =document.getElementById("email");
let pwd   =document.getElementById("pwd");
let mob   =document.getElementById("mob");
let erroremail =document.getElementById("erroremail");
let errorpwd =document.getElementById("errorpwd");
let errornumbr =document.getElementById("errornumbr");



function emailvalidate(){
 

    if (/^([a-zA-Z0-9\.\-]+)@([a-zA-Z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/.test(email.value)) {
        return true; 

        }
    //email STATEMENT

    else {
        
          erroremail.innerHTML="Invalid email Id!";
          erroremail.style.color="red";
        }
  //EMAIL ELSE STATEMENT
}
function pwdvalidate(){

    if(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(pwd.value)){
        return true;
    }

    else {
      
       errorpwd.innerHTML="Invalid password!";
        errorpwd.style.color="red";
      
      }
}
function numbrvalidate(){
    if(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(mob.value)){
        return true;
}
else{
    errornumbr.innerHTML="Invalid mobile number!";
          errornumbr.style.color="red";
}
}
function fields(){
  
if (email.value==""||pwd.value=="") {
    alert("Fields Cannot Be Empty");
    return false;
    }  

    // NO BLANK TEXTBOX 
     
    if(pwd.value.length<8){
        alert("password must contain 8 characters");
        return false;
        }
        
        //PASSWORD LENGTH
       
        if(emailvalidate()&&pwdvalidate()&&numbrvalidate()){
          return true;
          }
          else{
            return false;
          }     
          //CALLING FUNCTION          
        }