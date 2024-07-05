let fname = document.getElementById("fname");
let fnameError = document.getElementById("fnameError");
let lname = document.getElementById("lname");
let lnameError = document.getElementById("lnameError");
let birthDate = document.getElementById("birthDate");
let birthDateError = document.getElementById("birthDateError");
let bootcampCode = document.getElementById("bootcampCode");
let bootcampCodeError = document.getElementById("bootcampCodeError");
let email = document.getElementById("email");
let emailError = document.getElementById("emailError");
function validateForm() {
    let new_birthDate = new Date(birthDate.value);
    let age = calculate_age(new Date(new_birthDate.getUTCFullYear(), new_birthDate.getMonth(), new_birthDate.getDate()));
    event.preventDefault();
    FLnameValidate(fname, fnameError);
    FLnameValidate(lname, lnameError);
    ageValidate(age, new_birthDate, birthDateError);
    bootcampCodeValidate(bootcampCode, bootcampCodeError);
    emailValidate(email, emailError);
    if (FLnameValidate(lname, lnameError) && ageValidate(age, new_birthDate, birthDateError) && bootcampCodeValidate(bootcampCode, bootcampCodeError) && emailValidate(email, emailError))
        alert("نام : " + fname.value + '\n' +
            "نام خانوادگی : " + lname.value + '\n' +
            "سن کاربر: " + age
        )
}
function FLnameValidate(flname, flnameError) {
    if (flname.value.trim() == "") {
        flnameError.style.display = 'block';
        flnameError.textContent = "This field must be filled";
    }
    else if (flname.value.trim().length < 3) {
        flnameError.style.display = 'block';
        flnameError.textContent = "Enter at least three character";
    }
    else if (flname.value.trim().length >= 3) {
        flnameError.style.display = 'none';
        return true;
    }
}
function calculate_age(dob) {
    // Calculate the difference in milliseconds between the current date and the provided date of birth
    var diff_ms = Date.now() - dob.getTime();
    // Create a new Date object representing the difference in milliseconds and store it in the variable age_dt (age Date object)
    var age_dt = new Date(diff_ms);

    // Calculate the absolute value of the difference in years between the age Date object and the year 1970 (UNIX epoch)
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}
function ageValidate(age, new_birthDate, birthDateError) {
    if (Date.now() - new_birthDate.getTime() < 0) {
        birthDateError.style.display = 'block';
        birthDateError.textContent = "You are not born yet";
    }
    else if (age < 18) {
        birthDateError.style.display = 'block';
        birthDateError.textContent = "The minimum age for registration is eighteen years";
    }
    else if (age >= 18) {
        birthDateError.style.display = 'none';
        return true;
    }
}
function bootcampCodeValidate(bootcampCode, bootcampCodeError) {
    if (isNaN(bootcampCode.value)) {
        bootcampCodeError.style.display = 'block';
        bootcampCodeError.textContent = "Input must be a number";
    }
    else if (Number(bootcampCode.value) != 114) {
        bootcampCodeError.style.display = 'block';
        bootcampCodeError.textContent = "The input is not correct";
    }
    else if (Number(bootcampCode.value) === 114) {
        bootcampCodeError.style.display = 'none';
        return true;
    }
}
function emailValidate(email, emailError) {
    if (!email.value.includes('@')) {

        emailError.style.display = 'block';
        emailError.textContent = "The email must include the @ character";
    }
    else {
        emailError.style.display = 'none';
        return true;
    }

}
