import ReactDOM from 'react-dom';
import React, { useState } from 'react';

// Select the button element by its ID
const myButton = document.getElementById('infoIcon');
const upBtn = document.getElementById('compressInfo');

function App() {
  const [showComponent, setShowComponent] = useState(false);

  const toggleComponent = () => {
    setShowComponent(!showComponent);

  };

  return (
    <div>
      {showComponent ? (
        <i
          id="infoIcon"
          className="fa-solid fa-chevron-up fa-lg"
          onClick={toggleComponent}
        ></i>
      ) : (
        <i
          className={`fa-solid fa-circle-info fa-lg ${showComponent ? 'active' : ''}`}
          onClick={toggleComponent}
        ></i>
      )}
      {showComponent ? <MyComponent /> : null}
      
    </div>
  );
};

function MyComponent() {
  return <div transition-style="in:wipe:down" className="overrides" id="fullDetails">
        
        <div className="fullDetailsBox">
          <div>
            <i className="fa-regular fa-envelope fa-xl"></i>
            <div>
              <p className="Title">EMAIL</p>
              <p className="TitleInfo"><a href='mailto:shivisingh75059@gmail.com'>shivisingh75059@gmail.com</a></p>
            </div>
          </div>
        </div>
        
        <div className="fullDetailsBox">
          <div>
            <i className="fa-solid fa-mobile-screen fa-2xl"></i>
            <div>
              <p className="Title">PHONE</p>
              <p className="TitleInfo"><a href='tel:7505948046'>+91 7505948046</a></p>
            </div>
          </div>
        </div>

        <div className="fullDetailsBox">
          <div>
            <i className="fa-solid fa-calendar-days fa-xl"></i>
            <div>
              <p className="Title">BIRTHDATE</p>
              <p className="TitleInfo"><a href="https://calendar.google.com?date=1998-1-15">15 JAN 1998</a></p>
            </div>
          </div>
        </div>

        <div className="fullDetailsBox">
          <div>
            <i className="fa-solid fa-location-dot fa-xl"></i>
            <div>
              <p className="Title">ADDRESS</p>
              <p className="TitleInfo">Roorkee,Uttarakhand, India</p>
            </div>
          </div>
        </div>
      </div>;
}


// index.js (or your entry point)


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('expandInfo')
);

//navigation elements--------
let qualification = document.getElementById('qualification');
let about = document.getElementById('about');
let portfolio = document.getElementById('portfolio');
let certificates = document.getElementById('certificates');
let contact = document.getElementById('contacts');

let info = document.getElementById('homepage2');
let qualiBox = document.getElementById('qualiBox');
let certBox = document.getElementById('certBox');
let contactBox = document.getElementById('contactBox');
let portfolioBox = document.getElementById('portfolioBox');
//change color on click on nav items-----------------
about.style.color = "#C69749";

function changeColorToRed() {
  // Reset the color of all clickable elements in the div
  var clickableElements = document.querySelectorAll('.active');
  clickableElements.forEach(function(element) {

    element.style.color = "#ffffff"; // Reset to the initial color
  });

  // Change the color of the clicked element to red
  this.style.color = "#C69749";
}

// Add a click event listener to all clickable elements
var clickableElements = document.querySelectorAll('.active');
clickableElements.forEach(function(element) {
  element.addEventListener("click", changeColorToRed);
});


//event listners------------
let showQualification = () => {
  info.classList.remove('show');
  info.classList.add('hide');
  certBox.classList.remove('show');
  certBox.classList.add('hide');
  qualiBox.classList.add('show');
  qualiBox.classList.add('glitch');
  qualiBox.classList.remove('hide');
  contactBox.classList.add('hide');
  contactBox.classList.remove('show')
  portfolioBox.classList.remove('show');
  portfolioBox.classList.add('hide');
};

let showAbout = () => {
  qualiBox.classList.remove('show');
  qualiBox.classList.add('hide');
  certBox.classList.remove('show');
  certBox.classList.add('hide');
  info.classList.add('show');
  info.classList.remove('hide');

  info.classList.add('glitch');
  contactBox.classList.add('hide');
  contactBox.classList.remove('show')
  portfolioBox.classList.remove('show');
  portfolioBox.classList.add('hide');
};

let showCertificates = () => {
  qualiBox.classList.remove('show');
  qualiBox.classList.add('hide');
  info.classList.remove('show');
  info.classList.add('hide');
  certBox.classList.add('show');
  certBox.classList.add('glitch');
  certBox.classList.remove('hide');

  contactBox.classList.add('hide');
  contactBox.classList.remove('show')
  portfolioBox.classList.remove('show');
  portfolioBox.classList.add('hide');
};

let showContactForm = () => {
  qualiBox.classList.remove('show');
  qualiBox.classList.add('hide');
  info.classList.remove('show');
  info.classList.add('hide');
  certBox.classList.add('hide');
  certBox.classList.remove('show');
  contactBox.classList.remove('hide')

  contactBox.classList.add('show');
  
  portfolioBox.classList.remove('show');
  portfolioBox.classList.add('hide');
};


let showPortfolio = () => {
  qualiBox.classList.remove('show');
  qualiBox.classList.add('hide');
  info.classList.remove('show');
  info.classList.add('hide');
  certBox.classList.add('hide');
  certBox.classList.remove('show');
  contactBox.classList.add('hide')
  contactBox.classList.remove('show');
  portfolioBox.classList.add('glitch');
  portfolioBox.classList.add('show');
  portfolioBox.classList.remove('hide');
}

qualification.addEventListener('click', showQualification);
about.addEventListener('click', showAbout);
certificates.addEventListener('click', showCertificates);

contact.addEventListener('click', showContactForm);
portfolio.addEventListener('click', showPortfolio);



let warnBox = document.getElementById('warning');

let sendBtn = document.getElementById('submit');
let form = document.getElementById('contactForm');
let success = document.getElementById('successfull');

function showWarning() {
  var warningElement = document.getElementById('warning');

  // Remove the 'hide' class
  warningElement.classList.remove('hide');

  // After 2 seconds, add the 'hide' class back
  setTimeout(function() {
    warningElement.classList.add('hide');
  }, 2000);
}


const Contact = () => {
  return (
    
      <div className="hide" id="succesfull">
     <i className="fa-solid fa-envelope-circle-check fa-2xl"></i>
     <h2>Sent Successfully !</h2>
   </div>
  
  );
};

function checkInputs() {
  var input1 = document.getElementById('name').value;
  var input2 = document.getElementById('mail').value;

  if (input1 !== '' && input2 !== '') {


    ReactDOM.render(<Contact />, document.getElementById('contactForm')); // Assuming 'root' is the ID of the main div in your HTML file
    console.log('Button clicked!');
  } else {
    showWarning();
    console.log('fill all the fields');
  }
}


sendBtn.addEventListener('click', checkInputs);


