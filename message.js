fetch("http://127.0.0.1:5000/get_users")
  .then(response => response.json())
  .then(users => {
      let userList = document.getElementById("user-list");
      users.forEach(user => {
          let listItem = document.createElement("li");
          listItem.textContent = user.name;
          listItem.dataset.id = user.id;
          listItem.onclick = () => openChat(user.id);
          userList.appendChild(listItem);
      });
  });
