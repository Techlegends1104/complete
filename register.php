<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Create Account</title>
    <link rel="stylesheet" href="css/register.css">
</head>
<body>
    <div class="register-container">
        <h2>Create Your Account</h2>
        <form action="" method="POST">
            <label for="name">Full Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" pattern="[A-Za-z ]+" title="Only letters and spaces are allowed" oninput="this.value = this.value.replace(/[^A-Za-z ]/g, '')" required>
            
            <label for="course">Course:</label>
            <select id="course" name="course" required>
                <option value="">Branch</option>
                <option value="Computer Science and Engineering">Computer Science and Engineering</option>
                <option value="Electrical Engineering">Electrical Engineering</option>
                <option value="Mechanical Engineering">Mechanical Engineering</option>
                <option value="Metallurgy Engineering">Metallurgy Engineering</option>
            </select>

            <label for="session">Session:</label>
            <select id="session" name="session" required>
                <option value="">Choose Session</option>
                <option value="2022-2025">2022-2025</option>
                <option value="2023-2026">2023-2026</option>
                <option value="2024-2027">2024-2027</option>
                <option value="2025-2028">2025-2028</option>
            </select>

            <label for="semester">Semester:</label>
            <select id="semester" name="semester" required>
                <option value="">Select Semester</option>
                <option value="1">1st Semester</option>
                <option value="2">2nd Semester</option>
                <option value="3">3rd Semester</option>
                <option value="4">4th Semester</option>
                <option value="5">5th Semester</option>
                <option value="6">6th Semester</option>
            </select>

            <label for="reg_no">Registration No:</label>
            <input type="text" id="reg_no" name="reg_no" placeholder="Enter your registration number" pattern="[0-9]+" title="Only numbers are allowed" oninput="this.value = this.value.replace(/[^0-9]/g, '')" required />

            <label for="reg_no">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />

            <label for="phone">Phone No:</label>
            <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" pattern="[0-9]{10}" title="Enter a valid 10-digit phone number" oninput="this.value = this.value.replace(/[^0-9]/g, '')" required />

            <label for="password">Password:</label>
            <div class="password-container">
                <input type="password" id="password" name="password" placeholder="Enter your password" required oninput="checkPasswordStrength()">
                <span class="toggle-password" onclick="togglePassword('password')">👁️</span>
            </div>
            <p id="password-strength"></p>

            <label>Confirm Password:</label>
            <div class="password-container">
                <input type="password" id="confirm_password" name="confirm_password" placeholder="Confirm your password" required oninput="validateConfirmPassword()">
                <span class="toggle-password" onclick="togglePassword('confirm_password')">👁️</span>
            </div>
            <p id="confirm-password-message"></p>

            <button type="submit" id="register-btn" disabled>Register</button>
        </form>
        <p>Already have an account? <a href="student_login.html">Login</a></p>
    </div>

    <script>
        function togglePassword(fieldId) {
            const passwordField = document.getElementById(fieldId);
            if (passwordField.type === "password") {
                passwordField.type = "text";
            } else {
                passwordField.type = "password";
            }
        }

        function checkPasswordStrength() {
            const password = document.getElementById("password").value;
            const strengthText = document.getElementById("password-strength");
            const registerButton = document.getElementById("register-btn");

            const strongRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
            const mediumRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/;

            if (password.length < 8) {
                strengthText.innerHTML = "❌ Too short (Min: 8 chars)";
                strengthText.style.color = "red";
                registerButton.disabled = true;
            } else if (strongRegex.test(password)) {
                strengthText.innerHTML = "✅ Strong Password";
                strengthText.style.color = "green";
                registerButton.disabled = false;
            } else if (mediumRegex.test(password)) {
                strengthText.innerHTML = "⚠️ Medium Password (Add special character)";
                strengthText.style.color = "orange";
                registerButton.disabled = true;
            } else {
                strengthText.innerHTML = "❌ Weak Password (Use uppercase, number & special char)";
                strengthText.style.color = "red";
                registerButton.disabled = true;
            }
        }

        function validateConfirmPassword() {
            const password = document.getElementById("password").value;
            const confirmPassword = document.getElementById("confirm_password").value;
            const confirmMessage = document.getElementById("confirm-password-message");
            const registerButton = document.getElementById("register-btn");

            if (confirmPassword === password) {
                confirmMessage.innerHTML = "✅ Passwords match";
                confirmMessage.style.color = "green";
                registerButton.disabled = false;
            } else {
                confirmMessage.innerHTML = "❌ Passwords do not match";
                confirmMessage.style.color = "red";
                registerButton.disabled = true;
            }
        }
    </script>
    <?php 
        include 'php/db.php' ;
        if($_SERVER["REQUEST_METHOD"] == "POST"){
            $name = $_POST['name'];
            $course = $_POST['course'];
            $session = $_POST['session'];
            $semester = $_POST['semester'];
            $reg_no = $_POST['reg_no'];
            $email = $_POST['email'];
            $phone = $_POST['phone'];
            $password = $_POST['password'];
            // $confirm_password = $_POST['confirm_password'];
            $stmt = $conn -> prepare("insert into data(name,course,session,semester,reg_no,email,phone,password) values(?,?,?,?,?,?,?,?)");
            $stmt -> bind_param("sssssssss",$name,$course,$session,$semester,$reg_no,$email,$phone,$password);
            if($stmt -> execute()){
                echo "<script>alert('Registered successfully!');</script>";
            }
            else{
                // echo "Nakamiyab";
                echo "<script>alert('Bhaiii Try Again..!!');</script>";
            }
            $stmt -> close();
            $conn -> close();
        }
    ?>
</body>
</html>
