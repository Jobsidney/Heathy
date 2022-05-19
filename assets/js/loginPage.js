function signUp(){
    var email = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var userDetails = {
        userEmail : email,
        userPassword : password
    };

    var convertToJson = JSON.stringify(userDetails);
    localStorage.setItem("UserDetails", convertToJson);
    alert("Sign up successful");

}

function login(){

    var email = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var userDetails = localStorage.getItem("UserDetails");
    var userData = JSON.parse(userDetails);


    if(userDetails = userData.userEmail && password == userData.userPassword){
        alert("Hello World");
    }
    else{
        alert("Wrong Password");
    }
}