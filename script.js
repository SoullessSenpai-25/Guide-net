
document.addEventListener("DOMContentLoaded", function () {
    //let loggedInUserId = localStorage.getItem("id"); // Get logged-in user ID
    let loggedInUserId = sessionStorage.getItem("id") || localStorage.getItem("id");
    console.log("Logged in: ", loggedInUserId);

    let senderName = localStorage.getItem("name");
    console.log("Retrieved senderName:", senderName);
    if (!senderName) {
        console.error("Sender name is missing in localStorage.");
    }

    if (loggedInUserId) {
        fetchMessages();
        fetchUsers(loggedInUserId);
    } else {
        console.error("Error: Logged-in user ID is null. Ensure id is stored properly.");
    }
    fetchUsers(loggedInUserId);

});

function fetchUsers(loggedInUserId) {
    fetch(`http://127.0.0.1:5000/get_users?id=${loggedInUserId}`)  
        /*.then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })*/
        .then(response => response.json())

        .then(users => {
            console.log("Users fetched:", users);

            let userList = document.getElementById("user-list");
            userList.innerHTML = ""; 
            users
            .filter(user => user.id != loggedInUserId) 
            .forEach(user => {
                //if(user.id != loggedInUserId) {
                    let li = document.createElement("li");
                    li.innerText = user.name;
                    li.classList.add("user-item");

                    li.onclick = function () {
                        user_name = user.name
                        console.log("Receiver selected:", user.id, ", Receiver name:", user.name);
                        openChat(user.id, user.name);
                    };
                    userList.appendChild(li);
            //}
            });
        })
        .catch(error => console.error("Error fetching users:", error));
}

function openChat(userId, userName) {
    localStorage.setItem("selectedUserId", userId); // Store selected user ID
    document.getElementById("chat-header").innerText = "Chat with " + userName;
    fetchMessages();
}

function fetchMessages() {
    let loggedInUserId = localStorage.getItem("id");
    let selectedUserId = localStorage.getItem("selectedUserId");

    if (!selectedUserId) {
        console.warn("No receiver selected.");
        return;
    }

    fetch(`http://127.0.0.1:5000/get_messages?sender_id=${loggedInUserId}&receiver_id=${selectedUserId}`)
        .then(response => response.json())
        .then(messages => {
            let chatBox = document.getElementById("chat-area");
            chatBox.innerHTML = "";  

            messages.forEach(msg => {
                let p = document.createElement("p");
                p.innerText = (msg.sender == loggedInUserId ? "You" : user_name) + ": " + msg.message;
                //selectedUserId instead of "user"
                chatBox.appendChild(p);
            });
        })
        .catch(error => console.error("Error fetching messages:", error));
}

function sendMessage() {
    let messageInput = document.getElementById("message-input");
    let messageText = messageInput.value;
    let senderId = localStorage.getItem("id");
    let receiverId = localStorage.getItem("selectedUserId");
    let senderName = localStorage.getItem("name");

    if (!receiverId || !messageText.trim()) {
        alert("Please select a user and type a message.");
        return;
    }

    if (!senderName) {
        console.error("Sender name is not defined");
        return;
    }
    console.log("Sending message as:", senderName);

    fetch("http://127.0.0.1:5000/send_message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            sender_id: senderId,
            senderName: senderName,
            receiver_id: receiverId,
            message: messageText
        })
    })
    .then(response => response.json())
    .then(data => {
        if(data.success) {
            messageInput.value = "";  
            fetchMessages();
        } else {
            console.error("Error sending message:", data.error);
        }
    })
    .catch(error => console.error("Error sending message:", error));
}
