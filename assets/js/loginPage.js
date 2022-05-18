function signUp(){
    var email = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var userDetails = {
        userEmail : email,
        userPassword : password
    };

    var convertToJson = JSON.stringify(userDetails);
    localStorage.setItem("UserDetails", convertToJson);

    alert("User Added Successfully");
}

signUpButton.addEventListener = ("click", signUp)