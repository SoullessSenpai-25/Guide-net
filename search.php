<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

$host = "localhost";  
$user = "root";       
$password = "";           
$database = "guidenet"; 
$conn = new mysqli($host, $user, $password, $database );

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

//header('Content-Type: application/json');

// Get search query
$query = $_GET['query'] ?? '';
$loggedInUserId = $_GET['id'] ?? '';

if (!empty($query) && !empty($loggedInUserId)) {
    // Prepare SQL query to fetch matching users
    $sql = "SELECT name FROM stud_registration WHERE name LIKE ? AND ID != ?";
    
    $stmt = $conn->prepare($sql);
    $searchTerm = "%".$query."%"; // Allow partial matches
    $stmt->bind_param("ss", $searchTerm, $loggedInUserId);
    $stmt->execute();
    $result = $stmt->get_result();
    //$result = $conn->query($sql);

    $users = [];
    if($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $users[] = ["name" => $row['name']];    
        }
    }
// Return JSON response
    header("Content-Type: application/json");
    echo json_encode($users);
    exit();

    //$stmt->close();
}
$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GuideNet - Dashboard</title>
    <link rel="stylesheet" href="style_dashboard.css">
    <link rel="stylesheet" href="search.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet">
</head>
<body>

<div class="search-container">
    <input type="text" id="searchInput" placeholder="Search users..." autocomplete="off">
    <div class="found-bar">
        <div id="searchResults" ></div>
        <div id="search-results"></div>
    </div>
</div>

<div id="overlay" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5); z-index: 1000; align-items: center; justify-content: center;">
        <iframe id="modalFrame" style="width: 80%; height: 80%; border: none;"></iframe>
    </div>
    
    <script src="script_search.js"></script>
</body>
</html>