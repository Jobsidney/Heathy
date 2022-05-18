//Assigning variables to the input elements for switching create account and register
const loginButton = document.getElementById('loginButton');
const registerButton = document.getElementById('registerButton');
const switchToRegister = document.getElementById('createAccount');
const switchToLogin = document.getElementById('registerAccount');

switchToRegister.addEventListener("click", () => {
    displayRegister();
});

switchToLogin.addEventListener("click", () => {
    displayAccountCreation();
});

registerButton.addEventListener("click", () =>{
    registerUser();
});

const displayRegister = () => {
    document.getElementById('registerForm').style.display = "block";
    document.getElementById('loginForm').style.display = "none";
}

const displayAccountCreation = () => {
    document.getElementById('loginForm').style.display = "block";
    document.getElementById('registerForm').style.display = "none";
}

// Sign Up Form Code

const registerUser = () => {
    var username = document.getElementById('emailRegisterSection').value;
    var password = document.getElementById('passwordRegisterSection').value;

    var user = {
        userName : username,
        passWord : password
    };

    var json = JSON.stringify(user);
    localStorage.setItem("UserName",json);

    alert('Account Created Successfully');
}

// Login Form Code

const loginUser = () => {
    
}

