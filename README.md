# Registration Form 03

Registration Form 03 is a simple front-end web project built using HTML, CSS, JavaScript, and jQuery.
This project demonstrates how to design a user registration form and validate user input using jQuery for easier DOM manipulation and event handling.

## 🚀 Features

* Clean registration form interface
* Multiple user input fields
* Client-side validation
* jQuery-based interaction
* Responsive layout
* Beginner-friendly structure

## 🛠️ Technologies Used

* HTML5 for page structure
* CSS3 for styling and layout
* JavaScript for logic
* jQuery for simplified DOM manipulation and validation

## 📂 Project Structure

Registration_form_03/
│── index.html
│── style.css
│── script.js

## ▶️ How to Run

1. Clone the repository
   git clone https://github.com/tharuusamaraweera/Registration_form_03.git

2. Open the project folder

3. Open index.html in any web browser

## 📌 Usage of jQuery in this Project

jQuery is used to make JavaScript code shorter and easier. It helps handle events, select elements, and validate form inputs.

In this project jQuery is used for:

* Selecting form elements
* Handling submit button click
* Checking empty input fields
* Showing validation messages
* Improving interactivity

Example:

```javascript
$(document).ready(function(){
    $("#registerForm").submit(function(e){
        e.preventDefault();
        alert("Form Submitted");
    });
});
```

## 📌 How It Works

1. User enters details in the form
2. jQuery detects submit action
3. Input values are validated
4. If valid, form is submitted
5. If not, error messages appear

## 🎯 Learning Objectives

* Understand HTML form structure
* Learn CSS styling
* Use jQuery selectors
* Handle form events
* Validate user inputs
* Build interactive forms

## 📄 License

This project is open source and available under the MIT License.
