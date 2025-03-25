document.addEventListener("DOMContentLoaded", function () {

  fetch("fetch_face_cards.php")
      .then(response => response.json())
      .then(data => {
          const faceCardContainer = document.getElementById("face-card-container"); // Ensure this ID exists in your HTML
          faceCardContainer.innerHTML = ""; // Clear existing static cards

          data.forEach(user => {
              const card = document.createElement("div");
              card.classList.add("face-card");

              card.innerHTML = `
                  <img src="data:image/jpeg;base64,${user.profilePicture}" alt="${user.name}" class="face-img">
                  <h3>${user.name}</h3>
                  <p><strong>Branch:</strong> ${user.branch}</p>
                  <p><strong>State:</strong> ${user.state}</p>
                  <p>${user.shortBio || "No bio available"}</p>
              `;

              faceCardContainer.appendChild(card);
          });
      })
      .catch(error => console.error("Error fetching face cards:", error));
});
