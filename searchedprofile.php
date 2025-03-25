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
    <title>GuideNet User Profile</title>
    <link rel="stylesheet" href="style_profile.css">
    <link rel="stylesheet" href="search.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet">
</head>
<body>
    <div class="task-bar">
            <img src="logo.png" alt="GuideNet Logo">
            <h1>GuideNet</h1>
    </div>
    <div class="nav-bar">
        <div class="face-card">
            <img src=<?= htmlspecialchars($user['PROFILEPICTURE']); ?> >
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
            <!--LEFT SECTION-->
            <div class="profile">
                <img src=<?= htmlspecialchars($user['PROFILEPICTURE']); ?> >
                <div class="profilename"><?= htmlspecialchars($user['NAME']); ?></div>
                <div class="profiletitle">
                    <i class="material-icons">school</i> A student of Banasthali Vidyapith</div>
                                    
            </div>
            <!--RIGHT SECTION-->
            <div class="profilecontentsection">
                <section class="card">
                    <h3>About</h3>
                    <p><?= htmlspecialchars($user['ABOUT']); ?></p>
                </section>

                <section class="card">
                    <h3>Education</h3>
                    <div class="education-item">
                        <img src="img/logo.png" alt="University" class="school-logo">
                        <div class="education-details">
                            <h4>Banasthali University</h4>
                            <p><?= htmlspecialchars($user['COURSE']); ?> <?= htmlspecialchars($user['BRANCH']); ?></p>
                            <p class="date">2022 - 2026</p>
                            <p>CGPA: 9.5/10.0</p>
                        </div>
                    </div>
                </section>
                <!-- Skills Section -->
                <section class="card">
                    <h3>Skills</h3>
                        <div class="skill-tags">
                            <span>JavaScript</span>
                            <span>TypeScript</span>
                            <span>React</span>
                            <span>Vue.js</span>
                            <span>Node.js</span>
                            <span>CSS/SASS</span>
                        </div>
                </section>

                <!-- Experience Section -->
                <section class="card">
                    <h3>Experience</h3>
                    <div class="experience-item">
                        <img src="img/fp.png" alt="Company Logo" class="company-logo">
                        <div class="experience-details">
                            <h4><?= htmlspecialchars($user['INTERNSHIP']); ?></h4>
                            <p><?= htmlspecialchars($user['PLACEMENT']); ?></p>
                            <p class="date">June 2023 - August 2023</p>
                            <ul>
                                <li>Developed and maintained web applications using JavaScript and Python</li>
                                <li>Collaborated with senior developers on full-stack projects</li>
                                <li>Implemented responsive design principles and optimized application performance</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section class="contact">
                    <a href="#" class="contact-button">
                        <i class="material-icons">mail</i>Contact me
                    </a>
                    <div class="social-links">
                        <a href="#" class="social-icon">
                            <i class="material-icons">call</i>
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
                </section>
            </div>
        </div> 
    </div>
    <script src="script_search.js"></script>
</body>
</html>