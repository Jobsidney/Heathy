
const hospData = [
  {
    hospName: "Name: Karen Hospital",
    location: "Location: Nairobi",
    consultationFee: "Consultation: Ksh 2000",
    specialty: "Specialty: Heart Conditions, Cancer",
  },
  {
    hospName: "Name:Agha Khan Hospital",
    location: "Location: Nairobi",
    consultationFee: "Consultation:Ksh 3000",
    specialty: "Specialty: Cancer, Maternal Health",
  },
  {
    hospName: "Name: Kenyatta National Hospital",
    location: "Location: Nairobi",
    consultationFee:"Consultation: Ksh 2000",
    specialty: "Specialty: Pain Mananagement, Cancer",
  },
  {
    hospName: "Name: Nairobi Hospital",
    location: "Location: Nairobi",
    consultationFee: "Consultation: Ksh 2500",
    specialty: "Specialty: Reproductive Health, Diabetes",
  },
  {
    hospName: "Name: Nairobi West Hospital",
    location: "Location: Nairobi",
    consultationFee: "Consultation: Ksh2500",
    specialty: "Specialty: Peadiatric health",
  },
  {
    hospName: "Name: M.P Shah Hospital",
    location: "Location: Nairobi",
    consultationFee: "Consultation: Ksh 3000",
    specialty: "Specialty: Heart Conditions, Cancer"
  }
];
//constants for  Karen Hospital
const hospNameOne = document.getElementById("li-1");
const locationNameOne = document.getElementById("li-2");
const feeOne = document.getElementById("li-3");
const specialtyOne = document.getElementById("li-4");

//function for the Karen Hospital
const getHospOne = () => {
  hospNameOne.innerHTML = (hospData[0].hospName);
  locationNameOne.innerHTML = (hospData[0].location);
  feeOne.innerHTML = (hospData[0].consultationFee);
  specialtyOne.innerHTML = (hospData[0].specialty);
};
getHospOne();

//constants for Agha Khan Hospital
const hospNameTwo = document.getElementById("li-5");
const locationNameTwo = document.getElementById("li-6");
const feeTwo = document.getElementById("li-7");
const specialtyTwo = document.getElementById("li-8");

//function forAgha Khan Hospital
const getHospTwo = () => {
  hospNameTwo.innerHTML = (hospData[1].hospName);
  locationNameTwo.innerHTML = (hospData[1].location);
  feeTwo.innerHTML = (hospData[1].consultationFee);
  specialtyTwo.innerHTML = (hospData[1].specialty);
};
getHospTwo();

//constants for Kenyatta National Hospital
const hospNameThree = document.getElementById("li-9");
const locationNameThree = document.getElementById("li-10");
const feeThree = document.getElementById("li-11");
const specialtyThree = document.getElementById("li-12");

//function for Kenyatta National Hospital
const getHospThree = () => {
  hospNameThree.innerHTML = hospData[2].hospName;
  locationNameThree.innerHTML = hospData[2].location;
  feeThree.innerHTML = hospData[2].consultationFee;
  specialtyThree.innerHTML = (hospData[2].specialty);
};
getHospThree();

//constants for Nairobi Hospital
const hospNameFour = document.getElementById("li-13");
const locationNameFour = document.getElementById("li-14");
const feeFour = document.getElementById("li-15");
const specialtyFour = document.getElementById("li-16");

//function for the Nairobi Hospital
const getHospFour = () => {
  hospNameFour.innerHTML = (hospData[3].hospName);
  locationNameFour.innerHTML = (hospData[3].location);
  feeFour.innerHTML = (hospData[3].consultationFee);
  specialtyFour.innerHTML = (hospData[3].specialty);
};
getHospFour();

//constants for Nairobi West Hospital
const hospNameFive = document.getElementById("li-17");
const locationNameFive = document.getElementById("li-18");
const feeFive = document.getElementById("li-19");
const specialtyFive = document.getElementById("li-20");

//function for the Nairobi West Hospital
const getHospFive = () => {
  hospNameFive.innerHTML = (hospData[4].hospName);
  locationNameFive.innerHTML = (hospData[4].location);
  feeFive.innerHTML = (hospData[4].consultationFee);
  specialtyFive.innerHTML = (hospData[4].specialty);
};
getHospFive();

//constants for M.P Shah Hospital
const hospNameSix = document.getElementById("li-21");
const locationNameSix = document.getElementById("li-22");
const feeSix = document.getElementById("li-23");
const specialtySix = document.getElementById("li-24");

//function for M.P Shah Hospital
const getHospSix = () => {
  hospNameSix.innerHTML = (hospData[5].hospName);
  locationNameSix.innerHTML = (hospData[5].location);
  feeSix.innerHTML = (hospData[5].consultationFee);
  specialtySix.innerHTML = (hospData[5].specialty);
};
getHospSix();
