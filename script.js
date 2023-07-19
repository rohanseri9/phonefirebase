
var firebaseConfig = {
    apiKey: "AIzaSyBCAEA7SyGmsxltEp1oqAzfpc70NBD3FRc",
    authDomain: "contact-e9cdf.firebaseapp.com",
    databaseURL: "https://contact-e9cdf-default-rtdb.firebaseio.com",
    projectId: "contact-e9cdf",
    storageBucket: "contact-e9cdf.appspot.com",
    messagingSenderId: "85744984728",
    appId: "1:85744984728:web:fef4e0ef6888e3dd69a6ed"
  };

// initialize firebase
firebase=initializeApp(firebaseConfig);

// reference your database
 var contact = firebase.database().ref('contact');
document.getElementById(" contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();    
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
  
   

    
    saveMessage(name, company, email, phone, message);
 document.querySelector(".alert").style.display = "block";


   setTimeout(() => {
     document.querySelector(".alert").style.display = "none";
  }, 3000);

document.getElementById("contactform").reset();
}
function getInputVal(id){
    return document.getElementById(id).value;
}

function   saveMessage(name, company, email, phone, message);  {
    var newcontact= contact.push();
  newcontact.set({
      name:name,
      company: company,
      email: email,
      phone: phone,
      message: message
    });
  }

