//Javascript document for handling the form functions   

//function that will run once the event of form submission occurs
function submitForm(event) {

 //Saving the name input data in the user's local storage
    localStorage.setItem("name", document.getElementById("name").value);
    console.log("Name:", localStorage.getItem("name"));
 //Saving the email input data in the user's local storage
    localStorage.setItem("email", document.getElementById("email").value);
    console.log("Email:", localStorage.getItem("email"));
 //Saving the gender input data in the user's local storage
    const gender = document.querySelector('input[name="gender"]:checked')?.value || "Not specified";
    localStorage.setItem("gender", "Gender");
    console.log("Gender:", localStorage.getItem("gender"));
 //Saving the favourite colour input data in the user's local storage
    localStorage.setItem("favColor", document.getElementById("colorpicker").value);
    console.log("Favourite Color:", localStorage.getItem("favColor"));
//Saving the profession input data in the user's local storage
    localStorage.setItem("profession", document.getElementById("profession").value);
    console.log("Profession:", localStorage.getItem("profession"));
    //Saving the purpose input data in the user's local storage
    localStorage.setItem("purpose", document.querySelector('textarea[name="purpose"]').value);
    console.log("Purpose:", localStorage.getItem("purpose"));
}

//Triggers the local storage save when the form is submitted through and event listener
document.getElementById('myform').addEventListener('submit', submitForm);
