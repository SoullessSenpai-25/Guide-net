<?php
session_start();
$host = "localhost";
$username = "root";
$password = "";
$database = "guidenet";
$conn = new mysqli($host, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit Profile</title>
    <link rel="stylesheet" href="style_edit.css">
</head>
<body>
    <div class="edit-container">
        <h1>Edit Profile</h1>
        <form class="edit-form" action="edit-profile.php" method="POST" enctype="multipart/form-data">
            <input type="hidden" name="id" value="<?php echo $_SESSION['id']; ?>">
            <div class="image-upload">
                <div class="image-preview empty">
                    <img src="" alt="">
                </div>
                <label for="profilePicture" class="image-upload-label">
                    Choose Profile Picture
                </label>
                <input type="file" id="profilePicture" name="profilePicture" accept="image/*">
                <div class="image-controls">
                    <button type="button" class="cancel-button">Remove</button>
                </div>
            </div>

            <div class="form-section">
                <h2>Basic Information</h2>
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" required>
                </div>
                <div class="form-group">
                    <label for="location">City/State</label>
                    <input type="text" id="location" name="state">
                </div>
                <div class="form-group">
                    <label for="about">About</label>
                    <textarea name="about" id="about" rows="4"></textarea>
                </div>
                <div class="form-group">
                    <label for="dob">Date of Birth</label>
                    <input type="date" id="dob" name="dob" min="1990-01-01" max="2008-12-31" >
                </div>
            </div>

            <div class="form-section">
                <h2>Education</h2>
                <!--
                <div class="form-group">
                    <label for="university">University</label>
                    <input type="text" id="university" value="Banasthali Vidyapith">
                </div>-->
                <div class="form-group">
                    <label for="course">Course</label>
                    <input type="text" id="course" name="course">
                </div>
                <div class="form-group">
                    <label for="branch">Branch</label>
                    <input type="text" id="branch" name="branch">
                </div>
                <!--
                <div class="form-group">
                    <label for="period">Period</label>
                    <input type="text" id="period" name="">
                </div>-->
                <div class="form-group">
                    <label for="cgpa">CGPA</label>
                    <input type="text" id="cgpa" name="">
                </div>
            </div>

            <div class="form-section">
                <h2>Language</h2>
                <div class="form-group">
                    <label for="language">Language (comma-separated)</label>
                    <input type="text" id="language" name="language">
                </div>
            </div>

            <div class="form-section">
                <h2>Internships</h2>
                <div id="internshipsContainer">
                    <div class="internship-entry">
                        <div class="form-group">
                            <label for="internship-title-0">Title</label>
                            <input type="text" id="internship-title-0" name="internship-tittle-0">
                        </div>
                        <div class="form-group">
                            <label for="internship-company-0">Company</label>
                            <input type="text" id="internship-company-0" name="">
                        </div>
                        <div class="form-group">
                            <label for="internship-period-0">Period</label>
                            <input type="text" id="internship-period-0" name="">
                        </div>
                    </div>
                </div>
                <button type="button" class="add-button">Add Internship</button>
            </div>

            <div class="form-section">
                <h2>Workshops/Seminars</h2>
                <div class="form-group">
                    <label for="workshops">Workshops (comma-separated)</label>
                    <input type="text" id="workshops" name="">
                </div>
            </div>

            <div class="form-section">
                <h2>Certificates</h2>
                <div class="form-group">
                    <label for="certificates">Certificates (comma-separated)</label>
                    <input type="text" id="certificates" name="">
                </div>
            </div>

            <div class="form-actions">
                <a href="newprofile.php">
                <button type="button" class="cancel-button">Cancel</button>
                <button type="submit" class="save-button">Save Changes</button></a>
            </div>
        </form>
    </div>
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $id = $_SESSION["id"];
        $name = mysqli_real_escape_string($conn, $_POST["name"]);
        $state = mysqli_real_escape_string($conn, $_POST["state"]);
        $about = mysqli_real_escape_string($conn, $_POST["about"]);
        $dob = mysqli_real_escape_string($conn, $_POST["dob"]);
        $course = mysqli_real_escape_string($conn, $_POST["course"]);
        $branch = mysqli_real_escape_string($conn, $_POST["branch"]);
        $language = mysqli_real_escape_string($conn, $_POST["language"]);
        $internship = mysqli_real_escape_string($conn, $_POST["internship-tittle-0"]);
        $imageData="";

        // Ensure the upload directory exists
        $upload_dir = "uploads/profile_pics/";
        if (!is_dir($upload_dir)) {
            mkdir($upload_dir, 0777, true);
        }

        /* --------IF WE WANT TO RETAIN OLD PROFILE PICS---------

        // Handle Profile Picture Upload
        if (!empty($_FILES["profilePicture"]["tmp_name"])) {
            $file = $_FILES["profilePicture"];
            $file_name = basename($file["name"]);
            $file_ext = pathinfo($file_name, PATHINFO_EXTENSION);
        
        // Generate a unique file name
            $new_file_name = "user_" . $id . "_" . time() . "." . $file_ext;
            $target_file = $upload_dir . $new_file_name;

        // Allow only certain file types
            $allowed_exts = ["jpg", "jpeg", "png", "gif"];
            if (!in_array(strtolower($file_ext), $allowed_exts)) {
                die("Error: Invalid file type. Only JPG, JPEG, PNG, and GIF are allowed.");
            }

        // Move file to the server
            if (move_uploaded_file($file["tmp_name"], $target_file)) {
            // Store file path in database
                $profile_picture_path = mysqli_real_escape_string($conn, $target_file);
                $updateQuery = "UPDATE stud_registration SET NAME='$name', STATE='$state', ABOUT='$about', DOB='$dob', COURSE='$course', BRANCH='$branch', LANGUAGES='$language', INTERNSHIP='$internship', PROFILEPICTURE='$profile_picture_path' WHERE ID='$id'";
            } else {
                die("Error uploading file.");
            }
        } else {
        // If no new image is uploaded, keep the existing image
            $updateQuery = "UPDATE stud_registration SET NAME='$name', STATE='$state', ABOUT='$about', DOB='$dob', COURSE='$course', BRANCH='$branch', LANGUAGES='$language', INTERNSHIP='$internship' WHERE ID='$id'";
        }

        if ($conn->query($updateQuery) === TRUE) {
            echo "<script>alert('Profile Updated Successfully!'); window.location.href='newprofile.php';</script>";
        } else {
            echo "Error updating record: " . $conn->error;
        }
    }*/


        // Fetch old profile picture path from database
        $query = "SELECT PROFILEPICTURE FROM stud_registration WHERE ID = '$id'";
        $result = $conn->query($query);
        $row = $result->fetch_assoc();
        $old_profile_picture = $row["PROFILEPICTURE"];
        // Initialize profile picture filename
        $newProfilePicture = $oldProfilePicture;


        // Handle profile picture upload
        if (!empty($_FILES["profilePicture"]["tmp_name"])) {
            $fileExt = pathinfo($_FILES["profilePicture"]["name"], PATHINFO_EXTENSION);
            $newFileName = "profile_pics/user_" . $id . "." . $fileExt;
            $filePath = $uploadDir . $newFileName;

        // Delete the old profile picture if it exists
            if (!empty($oldProfilePicture) && file_exists($uploadDir . $oldProfilePicture)) {
                unlink($uploadDir . $oldProfilePicture);
            }

        // Move the new uploaded file to the server folder
            if (move_uploaded_file($_FILES["profilePicture"]["tmp_name"], $filePath)) {
                $newProfilePicture = $newFileName;  // Update new profile picture filename
            } else {
                echo "Error uploading new profile picture.";
                exit;
            }
        }   

        // Update database with the new profile picture filename
        $updateQuery = "UPDATE stud_registration SET 
        NAME='$name', STATE='$state', ABOUT='$about', DOB='$dob', 
        COURSE='$course', BRANCH='$branch', LANGUAGES='$language', 
        INTERNSHIP='$internship', PROFILEPICTURE='$newProfilePicture' 
        WHERE ID='$id'";


        if ($conn->query($updateQuery) === TRUE) {
            echo "<script>alert('Profile Updated Successfully!'); window.location.href='newprofile.php';</script>";
        } else {
            echo "Error updating record: " . $conn->error;
        }
    }

    $conn->close();
    ?>
</body>
</html>