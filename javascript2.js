let namee_error = document.getElementById('name_error');
let tel_error = document.getElementById('tel_error');
let emaill_error = document.getElementById('emaill_error');
let message_error = document.getElementById('message_error');
let button_error = document.getElementById("button_error");

function validate_name() {
    
    let namee = document.getElementById('name').value;
    let name_check = /^[A-Za-z]*\s{1}[A-Za-z]*$/;

    if (namee.length == ""){
        namee_error.innerHTML = "Name required!!!";
        return false;
    }
    if (!namee.match(name_check)) {
        namee_error.innerHTML = "Valid name required";
        return false;
    } 
    namee_error.style.color = "green";
    namee_error.innerHTML = "Valid";
    return true;
} 

function validate_email() {

    let emaill = document.getElementById('emaill').value;
    let email_check =/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if  (emaill.length == "") {
        emaill_error.innerHTML = "Email required!!!";
        return false;
    } 
    if (!emaill.match(email_check)) {
        emaill_error.innerHTML = "Email format invalid!!!";
        return false;
    }
    emaill_error.style.color = "green";
    emaill_error.innerHTML = "Valid";
    return true;
    
}

function validate_tel() {

    let tel = document.getElementById('tel').value;
    let tel_check = /^([0_\-\.])+([0-9_\-\.])+([0-9_\-\.])+([0-9_\-\.]) +([0-9_\-\.])+([0-9_\-\.])+([0-9_\-\.])+ ([0-9_\-\.])+([0-9_\-\.])+([0-9_\-\.])+([0-9_\-\.])$/;

    if (tel.length == "") {
        tel_error.innerHTML = "Phone-number required !!!";
        return false;
    } 
    if (!tel.match(tel_check)) {
        tel_error.innerHTML = "Phone-number format invalid!!!";
        return false;
    } 

    tel_error.style.color = "green";
    tel_error.innerHTML = "Valid";
    return true;
}    

function validate_message(){

    let message = document.getElementById('message').value;

    if (message.length == "") {
        message_error.innerHTML = "Input message !!!";
        return false;
    } 
    if (message.length <= 30) {
        message_error.innerHTML = "Message too short!!!";
        return false;
    } 
    if (message.length >= 1000) {
        message_error.innerHTML = "Message more than 1000 letters!!!";
        return false;
    } 
    message_error.style.color = "green";
    message_error.innerHTML = "Valid";
    return true;
}    

//function validate_maritalstatus() {
//    let marital_error = document.getElementById('gender_error');
//    let maritalstatus = document.querySelector('input[name="maritalstatus"]:checked');
//
//    //if (!maritalstatus) {
//    //    marital_error.innerHTML = "Select marital status!!!";
//    //   return false
//    //}
//    //marital_error.style.color = "green";
//    //marital_error.innerHTML = "Valid";
//    //return true;
//} 

//function validate_nationality() {
//
//    //let nationality = document.querySelector('input[name="nationality"]:checked');
//    //let select_country = document.getElementById('select_country');
//
//    //if (!nationality == ghana || nigeria || kenya || usa || others) {
//        //nationality_error.innerHTML = "Please select nationality!!!";
//        //return false;
//    //} 
//    //nationality_error.style.color = "green";
//    //nationality_error.innerHTML = "Valid";
//    //return true;
//}                
    
function validate_form() {

    if (!validate_email() || !validate_name() || !validate_tel() || !validate_message()) {
        button_error.style.display = "block";
        button_error.innerHTML = "Validate all answers";
        setTimeout(function(){button_error.style.display = "none";}, 3000);
        return false;
    } else {
        window.location.href = "SUBMIT PAGE.HTML";
    }
    
    
}


        