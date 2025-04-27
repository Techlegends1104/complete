document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const regNoInput = document.getElementById("reg_no");
    const passwordInput = document.getElementById("password");
    const togglePassword = document.createElement("span");
    togglePassword.innerHTML = "👁";
    togglePassword.style.cursor = "pointer";
    togglePassword.style.marginLeft = "10px";
    passwordInput.parentNode.insertBefore(togglePassword, passwordInput.nextSibling);

    // Password toggle functionality
    togglePassword.addEventListener("click", function () {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
        } else {
            passwordInput.type = "password";
        }
    });

    // Form validation
    form.addEventListener("submit", function (event) {
        if (regNoInput.value.trim() === "" || passwordInput.value.trim() === "") {
            alert("Please fill in all fields before submitting.");
            event.preventDefault();
        }
    });
});