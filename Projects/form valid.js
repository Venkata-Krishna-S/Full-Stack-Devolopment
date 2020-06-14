function validate() {
    var result = "";
    result += validateName();
    result += validateEmail();
    result += validatePassword();
    result += validateTerms();
    
    if (result == "") return true; 
    alert("validation Result:\n\n" + result);
    return false;
}
function validateName() {
    var name = document.getElementsByName("name")[0].value;
    if (name.length <= 3)
        return "Name shoud contain atleast three charecters.\n";
    return "";
}
function validateEmail() {
    var email = valueof("emial");
    var retype = valueof("retype_email");
    if (email.indexof("@")== -1)
        return "Please input a valid adress.\n";
    if (email != retype)
        return "emial adress didnot match.\n";
    return "";
}
function validatePassword() {
    var password = valueof("password");
    var retype= valueof ("retype_password")
    if (password.length <= 6)
        return "Password shoud contain atleast three charecters.\n";
    if (password != retype)
        return "Password didnot match.\n";
    return "";
}
function validateTerms() {
    var terms = document.getElementsByName("terms")[0];
    if (!terms.checked)
        return "Plese accept the service and privacy polocy";
    return "";
}
function valueof(name) {
    return document.getElementsByName(name)[0]
}
