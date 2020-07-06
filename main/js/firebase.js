// Config Firebase
var firebaseConfig = {
    apiKey: "AIzaSyB_GFRQ5V6FdaHOXe_8Q60UPMFxJNvQKWQ",
    authDomain: "quintet-database.firebaseapp.com",
    databaseURL: "https://quintet-database.firebaseio.com",
    projectId: "quintet-database",
    storageBucket: "quintet-database.appspot.com",
    messagingSenderId: "28139322769",
    appId: "1:28139322769:web:0fe3154e977927437cae30",
    measurementId: "G-8K9S23VWEM"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();


function contactUs() {
    var sender = document.getElementById('InputName').value;
    var email = document.getElementById('InputEmail').value;
    var subject = document.getElementById('InputSubject').value;
    var message = document.getElementById('InputMessage').value;
    var messagekey = database.ref('contactUs').push();
    messagekey.set({
        username: sender,
        email: email,
        subject: subject,
        message : message
    }, function(error) {
        if(error) {
            alert("Sorry!! We can't record your Message. \nPlease try again after some time..");
            console.log(error);
        } else {
            alert("Your Message has been Recorded Sucessfully!!! \nThanks for your valuable Feedback..");
            console.log("Data Added!!!");
            location.reload();
        }
    });
}


function joinUs() {
    var sender = document.getElementById('Name').value;
    var email = document.getElementById('Email').value;
    var contact = document.getElementById('Contact').value;
    var qualification = document.getElementById('Qualification').value;
    var interests = document.getElementById('Interest').value;
    var links = document.getElementById('InputLinks').value;
    var joinKey = database.ref('joinUs').push();
    joinKey.set({
        name: sender,
        email: email,
        mobile: contact,
        qualification : qualification,
        interests : interests,
        links : links
    }, function(error) {
        if(error) {
            alert("Sorry!! We can't record your Response. \nPlease try again after some time..");
            console.log(error);
        } else {
            alert("Your Response has been Recorded Sucessfully!!! \nWe will Connect with you Soon.. \nThank You ;) ;)");
            console.log("Data Added!!!");
            location.reload();
        }
    });
}
