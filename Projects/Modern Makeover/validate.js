function validate() {
    var result = "";
    result += validateName();
    result += validatePassword();
    result += validateTerms();

    if (result == "") return true;

    alert("Validation Result:\n\n" + result);
    return false;
}

function validateName() {
    var name = document.getElementsByName("name")[0].value;
    if(name.length <= 3)
        return "Name should be at least three character.\n";
    return "";
}

function validatePassword() {
    var password = valueOf("password");

    if(password.length <= 6)
        return "Password should be at least 6 characters.\n";
    return "";
}

function validateTerms() {
    var terms = document.getElementsByClassName("terms")[0];
    if(!terms.checked)
        return "Please accept terms of services and Privacy Policy";
    return "";
}

function valueOf(name) {
    return document.getElementsByName(name)[0].value;
}