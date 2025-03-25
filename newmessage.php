<?php //include 'user_details.php'; ?>
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
/*
// Check if user is logged in
if (!isset($_SESSION['id'])) {
    header("Location: login.php");
    exit();
}*/
if (isset($_SESSION['id'])) {
    echo json_encode(["id" => $_SESSION['id']]);
} else {
    echo json_encode(["id" => null]);
}
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
    <title>Message</title>
    <link rel="stylesheet" href="style_message.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet">
</head>
<body>

<?php if (!empty($users) && is_array($users)): ?>
    <ul>
    <?php foreach ($users as $other_user): ?> 
        <li>
            <a href="message.htm?sender_id=<?= urlencode($_SESSION['ID']); ?>&receiver_id=<?= urlencode($other_user['ID']); ?>&receiver_name=<?= urlencode($other_user['NAME']); ?>">
                <a href="message.php">
                <button onclick="window.location.href='message.html'" style="font-size: 20px; padding: 15px 30px;">
                <?= htmlspecialchars($other_user['NAME']); ?>
                </button>
            </a></a>
        </li>
    <?php endforeach; ?>
    </ul>
<?php else: ?>
    <p>No users found.</p>
<?php endif; ?>



    <!--
<ul>
    '<?php /*foreach ($users as $other_user): ?> 
        <li> <!-- chat opened in same page-->
            <a href="message.html?sender_id=<?= urlencode($_SESSION['ID']); ?>&receiver_id=<?= urlencode($other_user['ID']); ?>&receiver_name=<?= urlencode($other_user['NAME']); ?>">
                <?= htmlspecialchars($other_user['NAME']); ?>
            </a>
        </li>
    <?php endforeach; */?>
</ul>
    -->
</body>
</html>