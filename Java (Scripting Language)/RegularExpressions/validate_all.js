function val_all() {
    var un = document.getElementById("Username").value;
    var mb = document.getElementById('Mobile').value;
    var em = document.getElementById("Emial ID").value;
    var rn = document.getElementById("Roll number").value;
    var us = /^[A-Z][a-zA-Z]{5,15}$/;
    var mo = /^[6-9][0-9]{9}$/;
    var emid = /^[a-zA-Z.]{6,15}[@][a-z]{3,6}[.][a-z]{1,3}$/;
    var Roll = /^[221710309]{9}[001-399]{3}$/;
    if (un == ''||mb == '' || em == '' || rn == '') {
        window.alert("all fields are mandatory"); return false;
    } else {
        if (us.test(un) && mo.test(mb) && emid.
            test(em) && Roll.test(rn)) {
                window.
                alert("Registration succesful");
            return true;
    
} else {
            window.alert("please use valid credentials"); return false;
}
    }    
}