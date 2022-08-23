const form = document.querySelector(".userLogin");
const valueForPassword = document.querySelector(".password").value

function validateForm(event) {
    event.preventDefault();
    console.log("clicking and submitting", valueForPassword)
}

form.addEventListener("submit", validateForm)