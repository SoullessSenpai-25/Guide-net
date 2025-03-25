<?php
session_start();
// Database Connection
$host = "localhost";
$username = "root";
$password = "";
$database = "guidenet";

$conn = new mysqli($host, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if name is passed via URL
if (isset($_GET['clicked_name'])) {
    $_SESSION['name'] = $_GET['clicked_name'];  // Store clicked name in session
}
$name = $_SESSION['name'];

// Fetch user details
$query = "SELECT * FROM stud_registration WHERE NAME = ?";
$stmt = $conn->prepare($query);
$stmt->bind_param("s", $name);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $user = $result->fetch_assoc();
} else {
    echo "User details not found!";
    exit();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Personal information</title>
    <script src="Settings.js" defer></script>
    <link rel="stylesheet" href="style_personal.css">
    <link rel="stylesheet" href="search.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet">
    <!--<script src="Settings.js" defer></script>-->
</head>
<body>
    <div class="task-bar">
            <img src="logo.png" alt="GuideNet Logo">
            <h1>GuideNet</h1>
    </div>
    
    <div class="nav-bar">
        <div class="face-card">
            <img src=<?= htmlspecialchars($user['PROFILEPICTURE']); ?> alt="User Profile Picture">
                <!--<span class="status"></span>-->
            <div class="user-info">
                <h2><?= htmlspecialchars($user['NAME']); ?></h2>
                <p>Active</p>
            </div>
        </div>
        <a href="newdashboard.php"><b><h3>Home (Return)</h3></b></a>
        <a href="searchedprofile.php">Profile</a>
            <ul class="dropdown">
                <li><a href="searchedpersonal.php">Personal</a></li>
                <li><a href="searchedacademics.php">Academics</a></li>
                <li><a href="searchedadditional.php">Additional</a></li>
            </ul>
    </div>
    <div class="dashboard-container">
        <div class="profile-layout">
            <!-- Left Section -->
            <div class="profile-image-section">
                <div class="profile-image">
                    <img src=<?= htmlspecialchars($user['PROFILEPICTURE']); ?> alt="Profile">
                </div>
            </div>

            <!-- Right Section -->
            <div class="profile-content-section">
                <div class="profile-details">
                    <div class="header">
                        <h1><?= htmlspecialchars($user['NAME']); ?></h1>
                        <p class="title">Pursuing <?= htmlspecialchars($user['COURSE']); ?> in <?= htmlspecialchars($user['BRANCH']); ?></p>
                        <p class="location">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            <?= htmlspecialchars($user['STATE']); ?>
                        </p>
                    </div>

                    <div class="bio">
                        <p><?= htmlspecialchars($user['SHORTBIO']); ?> 
                        </p>
                    </div>
                    <div class="DOB">
                        <h2>Date of Birth</h2>
                        <p class="date"><?= htmlspecialchars($user['DOB']); ?></p>
                    </div>
                    <div class="language">
                        <h2>Languages</h2>
                        <div class="languages-tags">
                            <span><?= htmlspecialchars($user['LANGUAGE']); ?></span>
                            <span><?= htmlspecialchars($user['LANGUAGE']); ?></span>
                            <span><?= htmlspecialchars($user['LANGUAGE']); ?></span>
                        </div>
                    </div>

                    <div class="Hobby">
                        <h2>Hobbies</h2>
                        <div class="hobby-item">
                            <div class="hobby">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                                </svg>
                                <span><?= htmlspecialchars($user['HOBBY']); ?></span>
                            </div>
                            <p class="genre">Romantic, Fantasy and Crime Novels</p>
                            <p class="favourites">Fav Books- A silent Patient, November 9, Verity</p>
                        </div>
                        <div class="hobby-item">
                            <div class="hobby">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                                    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                                    <path d="M2 2l7.586 7.586"></path>
                                    <circle cx="11" cy="11" r="2"></circle>
                                </svg>
                                <span><?= htmlspecialchars($user['HOBBY']); ?></span>
                            </div>
                            <p class="genre">Pop, sad and Romantic songs</p>
                            <p class="favourites">Fav songs- Ilzaam ( Arjun Kanungo) </p>
                        </div>
                    </div>

                    <div class="contact">
                        <a href="#" class="contact-button">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                            <?= htmlspecialchars($user['CONTACT']); ?>
                        </a>
                        <div class="social-links">
                            <a href="#" class="social-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                </svg>
                            </a>
                            <a href="#" class="social-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                    <rect x="2" y="9" width="4" height="12"></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg>
                            </a>
                            <a href="#" class="social-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        <script src="script_search.js"></script>

</body>
</html>