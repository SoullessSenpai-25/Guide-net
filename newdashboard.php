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

// Check if user is logged in
if (!isset($_SESSION['id'])) {
    header("Location: login.php");
    exit();
}
/*
if (isset($_SESSION['id'])) {
    echo json_encode(["id" => $_SESSION['id']]);
} else {
    echo json_encode(["id" => null]);
}*/
$id = $_SESSION['id'];

// Fetch user details
$query = "SELECT * FROM stud_registration WHERE ID = ?";
$stmt = $conn->prepare($query);
$stmt->bind_param("s", $id);
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
    <title>Student Dashboard</title>
    <link rel="stylesheet" href="style_dashboard.css">
    <link rel="stylesheet" href="search.css">
    <link rel="stylesheet" href="style_fc_dashboard.css">
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

        <img src=<?= htmlspecialchars($user['PROFILEPICTURE']); ?> alt="Profile image" class="profileimg">

            <div class="user-info">
                <h2><?= htmlspecialchars($user['NAME']); ?></h2>
                <p>Active</p>
            </div>
        </div>
        <a href="newprofile.php">Profile</a>
        <a href="message.php">Message</a>
        
        <a href="#" onclick="openModal('search.php')" id="searchButton">Search</a>
        <!-- Modal Container -->
        <div id="overlay">
            <div class="modal">
                <span class="close-btn" onclick="closeModal()">×</span>
                <iframe id="modalFrame" src=""></iframe>
            </div>
        </div>  

        <a href="settings.php">Settings</a>
        <a href="logout.php">Logout</a>
    </div>
    <div class="dashboard-container">
        <!-- Main Content -->
        <div class="main-content">
            <div class="dashboard-header">
                <h1>Welcome to Your Dashboard</h1>
                <p class="page-indicator">Page <span id="current-page">1</span> of <span id="total-pages">10</span></p>
            </div>

            <div id="face-card-container" class="facecards-container">
            <!-- Facecards will be loaded dynamically with JavaScript -->
            </div>

            <!-- Pagination -->
            <div class="pagination" id="pagination">
            <!-- Pagination will be generated with JavaScript -->
            </div>
        </div>
    </div>

    <script src="script_dashboard.js"></script>
    <script src="script_search.js"></script>

</body>
</html>
