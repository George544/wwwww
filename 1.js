function validateForm() {
   
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    
    
    if (name === "" || email === "") {
        alert("Please fill in all fields.");
        return false;
    }
    
    //cookie alert
    var saveCookies = confirm("Do you want to save cookies?");
    if (saveCookies) {
        alert("Cookies will be saved.");
    } else {
        alert("Cookies will not be saved.");
    }
}