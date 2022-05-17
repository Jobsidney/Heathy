// Objects nested within an arary to hold the details of teh doctors.
const doctorData = [
    {
        doctorName: "Rajan Hussein",
        station: "Coptic Hospital",
        specialization: "Obstetrics gynaecology",
        description:"Doctor Rajan HUssein ahs worked with the coptic hospital for about fifeen years.<br> His most notable work in in the understanding of gynaecological issues among women"
    },
    {
        doctorName: "Marjan Monroe",
        station:'Agha khan University hospital',
        specialization: "Cardiology",
        description:"Doctor Marjan Monroe has worked at the Agha Khan hospital for 10 years. <br> She has extensive research on matters cardiology."
    },
    {
        doctorName:"Nancy Kamau",
        station:"Karen Hospital",
        specialization:"Renal research",
        description:"Doctor Nancy is a world class renal expert. She has worked in the sector for more years.<br> Her desire is to give a smile to those going through."
    },
    {
        doctorName:"Mary Mwangangi",
        station:"Texas Hospice",
        specialization:"Cancer Care",
        description:"Dr Mwangangi is currently in charge of giving continued care to the cancer patients at the Texas Hospice.<br> She is dedicated to ensuring taht cancer patients are able to feel cared for during tehir treatment. ",
    },
    {
        doctorName:"Ouma Opondo",
        station:"Nairobi Women's hospital",
        specialization:"Cancer research",
        description:"Dr Ouma has undertaken extensive cancer research across Africa.<br> Particularly, he is well-versed with teh screening and control methods of cervical cancer if detecetd early in advance. "
    },
    {
        doctorName:"Peter Waluke",
        station:"Loresho Lions Sight First",
        specialization:"Eye care",
        description:"Dr Waluke is a renowkned optician.<br> He contributes to the diagnosis and treatment of eye care related problems.  "
    }
];
// Constrants for the first 
const dName = document.getElementById('h2-1');
const workStation = document.getElementById('h2-2');
const special = document.getElementById('h2-3');
const doctorDet = document.getElementById('h2-4');
// Function to get details of second doctor
const getDetails = () => {
    dName.innerHTML = (doctorData[0].doctorName);
    workStation.innerHTML = (doctorData[0].station);
    special.innerHTML= (doctorData[0].specialization);
    doctorDet.innerHTML = (doctorData[0].description);
}
getDetails();
// constants to show the second doctor details
const dNameOne = document.getElementById('h2-5');
const stationOne = document.getElementById('h2-6');
const specialtyOne = document.getElementById('h2-7');
const doctorDetOne = document.getElementById('h2-8');
//function to get details of second doctor
const getDetailsDoctorTwo = () =>
    dNameOne.innerHTML = (doctorData[1].doctorName);
    stationOne.innerHTML = (doctorData[1].station);
    specialtyOne.innerHTML= (doctorData[1].specialization);
    doctorDetOne.innerHTML = (doctorData[1].description);
getDetailsDoctorTwo();
// Constants to obtainid details of third doctor
const dNameThree = document.getElementById('h3-1');
const stationTwo = document.getElementById('h3-2');
const specialtyTwo = document.getElementById('h3-3');
const doctorDetTwo = document.getElementById('h3-4');

// function to get details of third doctor
const getDetailsDocThree = () => {
    dNameThree.innerHTML = (doctorData[2].doctorName);
    stationTwo.innerHTML = (doctorData[2].station);
    specialtyTwo.innerHTML = (doctorData[2].specialization);
    doctorDetTwo.innerHTML = (doctorData[2].description);
}
getDetailsDocThree();

// constants to obtain details of fourth doctor
const dNameFour = document.getElementById('h4-1');
const stationThree = document.getElementById('h4-2');
const specialtyThree = document.getElementById('h4-3');
const docDetThree = document.getElementById('h4-4');

// function to get detals of fourth doctor
const getDetDocFour = () =>{
dNameFour.innerHTML = (doctorData[3].doctorName);
stationThree.innerHTML = (doctorData[3].station);
specialtyThree.innerHTML = (doctorData[3].specialization);
docDetThree.innerHTML = (doctorData[3].description);
}
getDetDocFour();

// constants to get id values for the fifth doctor
const dNameFive = document.getElementById('h5-1');
const stationFour = document.getElementById('h5-2');
const specialtyFour = document.getElementById('h5-3');
const doctDetFour = document.getElementById('h5-4');

// function to get details of the fifth doctor
const getDetDocFive = () => {
    dNameFive.innerHTML = (doctorData[4].doctorName);
    stationFour.innerHTML = (doctorData[4].station);
    stationFour.innerHTML=(doctorData[4].specialization);
    doctDetFour.innerHTML = (doctorData[4].description);
}
getDetDocFive();

//constants to get id values of the sixth doctor
const dNameSix = document.getElementById('h6-1');
const stationFive = document.getElementById('h6-2');
const specialtyFive = document.getElementById('h6-3');
const docDetFive = document.getElementById('h6-4');
// function to get details of sixth doctor
const getDetDocSix =() => {
    dNameSix.innerHTML = (doctorData[5].doctorName);
    stationFive.innerHTML = (doctorData[5].station);
    specialtyFive.innerHTML = (doctorData[5].specialization);
    docDetFive.innerHTML = (doctorData[5].description) ;

}
getDetDocSix();


// get ids for constants to be used in Making appointments
const userName = document.getElementById('tx-1');
const userDate = document.getElementById('tx-2');
const useEmail = document.getElementById('tx-3');
const phoneNo = document.getElementById('tx-4');
const button = document.getElementById('btn');
//
userName.innerText;
userDate.innerText;
useEmail.innerText;
phoneNo.innerText;
// create constant to hold
const appointments = [];
//function to make an appointment
const makeAppointment= () => {
    appointments.push(userName.value);
    appointments.push(userDate.value);
    appointments.push(useEmail.value);
    appointments.push(phoneNo.value);
}
makeAppointment();
console.log(appointments);


