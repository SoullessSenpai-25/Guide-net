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
}
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

$get_name_query = "SELECT NAME FROM stud_registration WHERE ID = '$id'";
$result = mysqli_query($conn, $get_name_query);
$row = mysqli_fetch_assoc($result);
$senderName = $row['NAME']; // Fetch sender's name

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chat Portal</title>
    <link rel="stylesheet" href="style_message.css">
    <script src="script.js" defer></script>
</head>
<body>
    <div class="container">
        <div class="user-list">
            <h3>Users</h3>
            <ul id="user-list"></ul>
        </div>
        <div class="chat-box">
            <h3 id="chat-header">Chat Area</h3>
    
            <script>
            // Store sender name in localStorage
            localStorage.setItem("id", "<?php echo $id; ?>");
            localStorage.setItem("name", "<?php echo $senderName; ?>");

            let loggedInUserId = sessionStorage.getItem("userId");
            function openChat(userId, userName) {
                //if (userId == loggedInUserId) return;

                // Update chat header dynamically
                document.getElementById("chat-header").innerText = "Chat with " + userName;
            
                // Fetch and display previous messages
                fetch(`http://127.0.0.1:5000/get_messages?receiver_id=${userId}`)
                .then(response => response.json())
                .then(messages => {
                    let chatBox = document.getElementById("chat-box");
                    chatBox.innerHTML = ""; // Clear old messages
                    messages.forEach(msg => {
                        let p = document.createElement("p");
                        p.innerText = msg.sender + ": " + msg.message;
                        chatBox.appendChild(p);
                    });
                })
                .catch(error => console.error("Error fetching messages:", error));
            }
            </script>
        
            <div id="chat-area" class="chat-messages"></div>
            <div class="input-area">
                <input type="text" id="message-input" placeholder="Type Message">
                <button onclick="sendMessage()">Send</button>
            </div>
        </div>
    </div>
</body>
</html>
