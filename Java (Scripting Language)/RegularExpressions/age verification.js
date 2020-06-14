function verify() {
    var date = document.getElementById("dob").value;
    var frm = /^(([0-2])([0-9]))|(([3][0-1])[/]([0][0-9]))|(([1][0-2])[/]([1][9][0-9{2})|[2][0-9]{3}))$/
    var yr = date.split("/")
    if (frm.test(date) && (2020 - parseInt(yr[2])) >= 18) {
        window.alert("you are eligible")
    } else {
            window.alert("you are not eligible")
        }
    
}