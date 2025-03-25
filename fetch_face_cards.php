<?php
$servername = "localhost"; // Change if needed
$username = "root"; // Your database username
$password = ""; // Your database password
$database = "guidenet"; // Your database name

$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch face card details
$sql = "SELECT ID, NAME, BRANCH, STATE, PROFILEPICTURE, SHORTBIO FROM stud_registration";
$result = $conn->query($sql);

$faceCards = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $faceCards[] = [
            "id" => $row["ID"],
            "name" => $row["NAME"],
            "branch" => $row["BRANCH"],
            "state" => $row["STATE"],
            "profilePicture" => base64_encode($row["PROFILEPICTURE"]), // Convert blob to base64
            "shortBio" => $row["SHORTBIO"]
        ];
    }
}

// Send JSON response
header('Content-Type: application/json');
echo json_encode($faceCards);

$conn->close();
?>
