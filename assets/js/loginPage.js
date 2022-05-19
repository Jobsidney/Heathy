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


const btnSubmit = document.querySelector(".btnSubmit")

btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();


    var email = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var userDetails = localStorage.getItem("UserDetails");
    var userData = JSON.parse(userDetails);

    if(email = userData.userEmail && password == userData.userPassword){
        loadNewPage();
    }
    else{
        alert("Wrong Password");
    }
})

function loadNewPage(){
    window.location.href = '../html/hospital.html';
 
}

