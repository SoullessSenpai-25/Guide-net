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
if (!isset($_SESSION['id'])) {
    die("You must be logged in to send messages.");
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (empty($_POST['message'])) {
        die("Message cannot be empty!");
    }

    $message = trim($_POST['message']);
    $sender_id = $_SESSION['id']; // Use logged-in user's ID
    $receiver_id = $_POST['receiver_id'];
    $get_name_query = "SELECT NAME FROM stud_registration WHERE ID = $sender_id";
    $stmt = $conn->prepare($get_name_query);
    $stmt->bind_param("s", $sender_id);
    $stmt->execute();
    $userName = $stmt->get_result()->fetch_assoc()['name'];

    $sql = "INSERT INTO messages (sender_name, sender_id, receiver_id, message) VALUES (?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssss", $senderName, $sender_id, $receiver_id, $message);

    if ($stmt->execute()) {
        echo "Message sent successfully!";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}
?>
