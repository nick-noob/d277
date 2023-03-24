"use strict";

const emailInput = document.getElementById("emailInput");
const confirmEmailInput = document.getElementById("confirmEmailInput");
const emailMatchMessage = document.getElementById("emailMatchMessage");

emailInput.addEventListener("input", function() {
    if (emailInput.value !== confirmEmailInput.value) {
        emailMatchMessage.textContent = "Alert! Alert! Email addresses do not match.";
    } else {
        emailMatchMessage.textContent = "";
    }
});

confirmEmailInput.addEventListener("input", function() {
    if (emailInput.value !== confirmEmailInput.value) {
        emailMatchMessage.textContent = "Alert! Alert! Email addresses do not match.";
    } else {
        emailMatchMessage.textContent = "";
    }
});

