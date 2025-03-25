/*
document.addEventListener("DOMContentLoaded", function () {
    let profileImage = document.querySelector(".profileimg");
    if (profileImage) {
        console.log("Profile image found:", profileImage.src);
    } else {
        console.log("Profile image not found!");
    }
});
*/

document.addEventListener("DOMContentLoaded", function () { // Ensures the script runs only after the entire HTML document is loaded.

    let loggedInUserId = localStorage.getItem("id") || sessionStorage.getItem("id");
    console.log("Logged in: ", loggedInUserId);
    //Retrieves the logged-in user's ID from localStorage for authentication. Logs it for debugging purposes.

    if (!loggedInUserId) {
        console.error("Error: Logged-in user ID is null. Ensure id is stored properly.");
        return;
    }
/*
    // Remove stored user ID on logout click
    document.querySelector("a[href='logout.php']").addEventListener("click", function () {
        console.log("Logging out...");
        localStorage.removeItem("id");
        sessionStorage.removeItem("id");
    });

    // Ensure ID is removed when navigating away
    window.addEventListener("beforeunload", function () {
        if (window.location.pathname.includes("logout.php")) {
            localStorage.removeItem("id");
            sessionStorage.removeItem("id");
        }
    });
*/
    const searchInput = document.getElementById("searchInput");
    const searchResults = document.getElementById("searchResults");    
    const resultsContainer = document.getElementById("search-results");
    const modal = document.getElementById("overlay");

    /*searchInput: The search box.
    searchResults: Container for displaying search results.
    resultsContainer: Another element to display results.
    modal: The overlay modal for showing profiles.
    */

    // Select all links inside the overlay
    document.querySelectorAll(".overlay a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default link behavior

            let profileUrl = this.getAttribute("href"); // Get target URL
            if (profileUrl) {
                window.location.href = profileUrl; // Redirect
            } else {
                console.error("Invalid link clicked!");
            }


            /*
            // Close the overlay
            let overlay = document.querySelector(".overlay");
            if (overlay) {
                overlay.style.display = "none"; // Hide overlay
            }

            // Redirect to the profile page
            window.location.href = pageUrl;
            */
        });
    });


    if (!searchResults) {
        return;
    }
    if (searchResults) {
        searchResults.addEventListener("click", function() {
            console.log("Clicked");
            //Ensures searchResults exists before adding an event listener.
        });
    } else {
        console.error("Element #search-results not found.");
    }
    
    searchInput.addEventListener("input", function () {
        let query = searchInput.value.trim();
        if (query.length === 0) {
            searchResults.innerHTML = ""; // Clear results if empty
            searchResults.style.display = "none";
            resultsContainer.innerHTML = "";
            return;
        }
        // Fetch matching users
        fetch(`search.php?query=${encodeURIComponent(query)}&id=${loggedInUserId}`)
            .then(response => response.json())
            .then(users => {
                console.log("Fetched users:", users);
                displayResults(users);
            })
            .catch(error => console.error("Error fetching data:", error));

    });

/*Listens for input changes in searchInput.
Clears search results if the input is empty.
Fetches user data from search.php, sending the query and id as parameters.
Calls displayResults(users) to update the UI with fetched users.
*/


    function displayResults(users) {
        searchResults.innerHTML = "";     
        resultsContainer.innerHTML = ""; // Clear previous results
        if (users.length === 0) {
            resultsContainer.innerHTML = '<p>No users found</p>';
            return;
        }

        users.forEach(user => {
            const div = document.createElement("div");
            div.className = "search-item";
            div.textContent = user.name;
            searchResults.appendChild(div);

            const userLink = document.createElement("a");
            userLink.href = `searchedprofile.php?clicked_name=${encodeURIComponent(user.name)}`;
            userLink.textContent = user.name;
            userLink.classList.add("user-item");

            // Open in modal
            userLink.addEventListener("click", function (event) {
                event.preventDefault();  // Prevent full-page reload
                console.log("Clicked:", userLink.href); 
                closeModal();  
                window.location.href = userLink.href; 
                //openModal(userLink.href); // Load in modal
            });

            resultsContainer.appendChild(userLink);
        });
        searchResults.style.display = "block";
    }

/*Clears old results.
If no users are found, displays "No users found."
Creates clickable div elements with user names.
Creates anchor (<a>) elements for profile links.
Prevents full-page reload and loads the profile in a modal.
*/

    // Hide search results when clicking outside
    document.addEventListener("click", function (event) {
        if (!searchInput.contains(event.target) && !searchResults.contains(event.target)) {
            searchResults.innerHTML = "";
            searchResults.style.display = "none";
        }
    });

// ------------ Modal Link Handling ------------------------
    modal.addEventListener("click", function (event) {
        if (event.target.tagName === "A") {
            event.preventDefault(); // Prevent default navigation
            const url = event.target.href;

            closeModal(); // Close the modal

            // Navigate to the clicked link in the full window
            window.location.href = url;
        }
    });
});
//If a user clicks a link inside the modal, the modal closes, and the page navigates to the clicked link.



//------------modal functions------------------------

function openModal(pageUrl) {
    console.log("Opening modal with URL:", pageUrl);

    let modalFrame = document.getElementById("modalFrame");
    let overlay = document.getElementById("overlay");

    if (!modalFrame || !overlay) {
        console.error("Modal elements not found in the DOM.");
        return;
    }

    modalFrame.src = pageUrl; // Load the search page in iframe
    overlay.style.display = "flex"; // Show overlay

    // Close modal and open profile in full page when clicking on a user
    modalFrame.onload = function () {
        let frameDocument = modalFrame.contentDocument || modalFrame.contentWindow.document;

        frameDocument.addEventListener("click", function (event) {
            let target = event.target;
    
            // Check if the clicked element is a name link inside the list
            if (target.tagName === "A" && target.classList.contains("user-item")) {
                event.preventDefault(); // Prevent default link behavior
                let profileUrl = target.href; // Get the profile link
    
                closeModal(); // Close the modal
                window.location.href = profileUrl; // Navigate to the profile page
            }
        });
        /*
        let userLinks = frameDocument.querySelectorAll(".user-item");

        userLinks.forEach(link => {
            link.addEventListener("click", function (event) {
                event.preventDefault(); // Prevent opening in iframe
                let profileUrl = this.href; // Get the profile link
                closeModal(); // Close modal
                window.location.href = profileUrl; // Open profile in full page
            });
        });*/
    };

/*
    document.getElementById("modalFrame").src = pageUrl; // Load B.php in iframe
    document.getElementById("overlay").style.display = "flex"; // Show overlay

    // Select all links inside the overlay
    document.querySelectorAll(".overlay a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default link behavior

            // Close the overlay
            let overlay = document.querySelector(".overlay");
            if (overlay) {
                overlay.style.display = "none"; // Hide overlay
            }
            // Redirect to the profile page
            window.location.href = pageUrl;
        });
    });
*/

}
/*
Loads the provided pageUrl (search query results) inside an <iframe> (modalFrame).
Displays the modal (overlay).
*/

function closeModal() {
    document.getElementById("overlay").style.display = "none"; 
    document.getElementById("modalFrame").src = ""; 
} //Hides the modal and clears the iframe content.

// Close modal when clicking outside the form
window.onclick = function(event) {
    let overlay = document.getElementById("overlay");
    //window.location.href = pageUrl;
    if (event.target === overlay) {
        closeModal();
    }

};

function openProfilePage(pageUrl) {
    console.log("Redirecting to:", pageUrl);
    window.location.href = pageUrl;  // Redirects the entire window
}

//});