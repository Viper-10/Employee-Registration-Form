"use strict";
var Designation;
(function (Designation) {
    Designation["INTERN"] = "intern";
    Designation["UX_ENGINEER"] = "ux-engineer";
    Designation["BACKEND_DEVELOPER"] = "backend-developer";
    Designation["FRONTEND_DEVELOPER"] = "frontend-developer";
})(Designation || (Designation = {}));
const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const employeeIdInput = (document.getElementById("employee-id"));
const personalEmailInput = (document.getElementById("personal-email"));
const aadharIdInput = (document.getElementById("aadhar-card-id"));
const panIdInput = document.getElementById("pan-card-id");
const designationInput = (document.getElementById("designation"));
const phoneNumberInput = (document.getElementById("phone-number"));
const form = document.querySelector(".form");
form.addEventListener("submit", formSubmitHandler);
firstNameInput.addEventListener("focusout", nameInputValidator);
lastNameInput.addEventListener("focusout", nameInputValidator);
aadharIdInput.addEventListener("focusout", aadharInputValidator);
panIdInput.addEventListener("focusout", panInputValidator);
phoneNumberInput.addEventListener("focusout", phoneNumberValidator);
personalEmailInput.addEventListener("focusout", emailValidator);
employeeIdInput.addEventListener("focusout", employeeIdValidator);
function validator(inputElement, validatorFunction, message) {
    var _a;
    const errorMessageDiv = (_a = inputElement.parentElement) === null || _a === void 0 ? void 0 : _a.nextElementSibling;
    if (!validatorFunction(inputElement.value)) {
        inputElement.style.borderColor = "red";
        inputElement.style.borderWidth = "4px";
        if (errorMessageDiv)
            errorMessageDiv.textContent = message;
        setTimeout(() => {
            inputElement.style.borderColor = "transparent";
            inputElement.style.borderWidth = "2px";
            if (errorMessageDiv)
                errorMessageDiv.textContent = "";
        }, 1500);
        return false;
    }
    return true;
}
function employeeIdValidator(e) {
    validator(e.target, validEmployeeId, "Invalid Employee id");
}
function emailValidator(e) {
    validator(e.target, validEmail, "Invalid Email id");
}
function aadharInputValidator(e) {
    validator(e.target, validAadharId, "Invalid Aadhar id");
}
function nameInputValidator(e) {
    validator(e.target, validName, "Invalid first name");
}
function panInputValidator(e) {
    validator(e.target, validPanId, "Invalid Pan card id");
}
function phoneNumberValidator(e) {
    validator(e.target, validPhoneNumber, "Invalid Phone number");
}
function formSubmitHandler(e) {
    e.preventDefault();
    const employeeId = employeeIdInput.value.trim();
    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const aadharId = aadharIdInput.value.trim();
    const panId = panIdInput.value.trim();
    const phoneNumber = phoneNumberInput.value.trim();
    const personalEmail = personalEmailInput.value.trim();
    const designation = designationInput.value.trim();
    let validEntry = 1;
    validEntry =
        validEntry & +validator(personalEmailInput, validEmail, "Invalid Email id");
    validEntry =
        validEntry & +validator(firstNameInput, validName, "Invalid first name");
    validEntry =
        validEntry & +validator(lastNameInput, validName, "Invalid last name");
    validEntry =
        validEntry & +validator(panIdInput, validPanId, "Invalid Pan card id");
    validEntry =
        validEntry & +validator(aadharIdInput, validAadharId, "Invalid Aadhar id");
    validEntry =
        validEntry &
            +validator(phoneNumberInput, validPhoneNumber, "Invalid Phone number");
    validEntry =
        validEntry &
            +validator(designationInput, validDesignation, "Invalid designation");
    validEntry =
        validEntry &
            +validator(employeeIdInput, validEmployeeId, "Invalid Employeeid");
    if (!validEntry)
        return;
    console.log(employeeId, firstName, lastName, aadharId, panId, phoneNumber, personalEmail, designation);
}
function validEmployeeId(id) {
    return id.trim().length > 0;
}
function validEmail(email) {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return email.match(mailformat);
}
function validPhoneNumber(phoneNumber) {
    const NUMBER_OF_DIGITS = 10;
    if (phoneNumber.length != NUMBER_OF_DIGITS ||
        parseInt(phoneNumber) < Math.pow(10, 9)) {
        return false;
    }
    return true;
}
function validName(name) {
    if (name.length === 0)
        return false;
    for (let c of name) {
        if (!((c >= "a" && c <= "z") || (c >= "A" && c <= "Z"))) {
            return false;
        }
    }
    return true;
}
function validAadharId(id) {
    const AADHAR_ID_LENGTH = 12;
    if (id.length != AADHAR_ID_LENGTH ||
        parseInt(id) < Math.pow(10, AADHAR_ID_LENGTH - 1))
        return false;
    return true;
}
function validPanId(id) {
    const PAN_ID_LENGTH = 10;
    if (id.length != PAN_ID_LENGTH)
        return false;
    for (let i = 0; i < PAN_ID_LENGTH; ++i) {
        const c = id.charAt(i);
        if (i < 5) {
            if (!(c >= "A" && c <= "Z"))
                return false;
        }
        else if (i < 9) {
            if (!(c >= "0" && c <= "9"))
                return false;
        }
        else if (!(c >= "A" && c <= "Z")) {
            return false;
        }
    }
    return true;
}
function validDesignation(designation) {
    return Object.values(Designation).includes(designation);
}
//# sourceMappingURL=app.js.map