// Initialize Firebase (ADD YOUR OWN DATA)
var config = {

    apiKey: "AIzaSyA84tz1xBReMBhdsqwSmyddOQLt5yQzpBw",
    authDomain: "techkib-contact.firebaseapp.com",
    databaseURL: "https://techkib-contact-default-rtdb.firebaseio.com/",
    projectId: "techkib-contact",
    storageBucket: "techkib-contact.appspot.com",
    messagingSenderId: "242553918630",
    appId: "1:242553918630:web:443151e9289ba23bf2d067",
    measurementId: "G-1P5GS1SS0R"
  
  };
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('Techkib_News_subscription');
  
  // Listen for form submit
  document.getElementById('contactFormTechkib').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var TechkibSubscriberName = getInputVal('TechkibSubscriberName');
    //var company = getInputVal('company');
    var emailTechkib = getInputVal('emailTechkib');
    //var phone = getInputVal('phone');
    //var message = getInputVal('message');
  
    // Save message
    saveMessage(TechkibSubscriberName, emailTechkib);
  
    // Show alert
    document.querySelector('.alert-message').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert-message').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactFormTechkib').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(TechkibSubscriberName, emailTechkib){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: TechkibSubscriberName,
      //company:company,
      email: emailTechkib,
      //phone:phone,
      //message:message,
    });
    
  }
