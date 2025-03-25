<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Welcome To GuideNet</title>
    <link rel="stylesheet" href="style_sign-log.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>

<body>
    <div class="navbar">
        <div class="logo">
            <a href="home.php">
                <img src="logo.png" width="50px" height="50px"> GuideNet
            </a>
        </div>
        <!--<div class="icons"></div>-->
    </div>
    <div class="full-page">
        <div class="form-box">
            <div class="welcome"><h1>Welcome To GuideNet</h1></div>
            <div class='button-box'>
                <div class="sign-btn"></div>
                    <button type='button' class='toggle-btn'> Sign Up </button>
                    <button type='button' class='toggle-btn'> Login </button>
                </div>
<?php
$host = "127.0.0.1"; // Use IP instead of "localhost"
$username = "root";
$password = ""; // Set during MySQL installation
$database = "guidenet";

// Connect to MySQL
$conn = new mysqli($host, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $id = mysqli_real_escape_string($conn, $_POST['id']);
    $reg_no = mysqli_real_escape_string($conn, $_POST['reg_no']);
    $name = mysqli_real_escape_string($conn, $_POST['name']);
    $contact = mysqli_real_escape_string($conn, $_POST['contact']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $course = mysqli_real_escape_string($conn, $_POST['course']);
    $branch = mysqli_real_escape_string($conn, $_POST['branch']);
    $dob = mysqli_real_escape_string($conn, $_POST['dob']);
    $state = mysqli_real_escape_string($conn, $_POST['state']);
    $password = mysqli_real_escape_string($conn, $_POST['password']);
    $encryptedPassword = password_hash($password, PASSWORD_DEFAULT);

    // Insert into studentlogin table
    $query1 = "INSERT INTO studentlogin (id, email, password) VALUES ('$id', '$email', '$encryptedPassword')";
    $query2 = "INSERT INTO stud_registration (id, reg_no, name, contact, email, course, branch, dob, state) 
               VALUES ('$id', '$reg_no', '$name', '$contact', '$email', '$course', '$branch', '$dob', '$state')";

    if ($conn->query($query1) === TRUE && $conn->query($query2) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $conn->error;
    }
}
else {
    ?>

    <form id="signup" class="input-group-register" method="POST" enctype="multipart/form-data">
        <input type="text" class="input-field" name="id" placeholder="ID" required>
        <input type="text" class="input-field" name="reg_no" placeholder="Registration Number" required>
        <input type="text" class="input-field" name="name" placeholder="Name" required>
        <input type="text" class="input-field" name="contact" placeholder="Contact" required>
        <input type="email" class="input-field" name="email" placeholder="Email" required>
        <input type="text" class="input-field" name="course" placeholder="Course" required>
        <input type="text" class="input-field" name="branch" placeholder="Branch" required>
        <input type="date" class="input-field" name="dob" placeholder="Date of Birth" min="1990-01-01" max="2008-12-31" required>
        <input type="text" class="input-field" name="state" placeholder="State" required>
        <input type="password" class="input-field" name="password" placeholder="Password" required>
        <!--
        <input type="password" class="input-field" name="confirmPassword" placeholder="Confirm Password" required>
    -->
        <button type="submit" class="submit-btn" id="signup-btn">Sign Up</button>
    </form>
    <?php
    } //else - form elements
// Close the connection
    $conn->close();
    ?>
    </body></html>
