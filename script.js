const loginModal = document.getElementById("login-modal");
const loginButton = document.querySelector(".nav-links li a[href='#login']");
const closeModalButton = document.getElementById("close-modal");

loginButton.addEventListener("click", () => {
    loginModal.style.display = "flex";
});

closeModalButton.addEventListener("click", () => {
    loginModal.style.display = "none";
});

const textElement = document.getElementById('changing-text');
const colors = ['#ff8c00', 'green', '#ff8c00', 'green']; // Add more colors as needed
let currentColorIndex = 0;

function changeTextColor() {
  textElement.style.color = colors[currentColorIndex];
  currentColorIndex = (currentColorIndex + 1) % colors.length;
}

setInterval(changeTextColor, 1000); // Change color every 1 second (1000 milliseconds)


/*ABOUT MUSIC ARTIST */

// JavaScript (script.js)
document.addEventListener('DOMContentLoaded', function () {
    const artistLinks = document.querySelectorAll('.artist-link');

    artistLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const artistId = this.getAttribute('data-artist');
            loadArtistPage(artistId);
        });
    });

    function loadArtistPage(artistId) {
        // Hide other sections (e.g., welcome and artist list)
        document.getElementById('welcome').style.display = 'none';
        document.getElementById('artist-list').style.display = 'none';

        // Load the artist's page using AJAX or other methods
        // For simplicity, let's assume the artist's pages are named artist1.html, artist2.html, etc.
        const artistPageUrl = `${artistId}.html`;

        // Fetch the artist's page content
        fetch(artistPageUrl)
            .then((response) => response.text())
            .then((html) => {
                // Display the artist's page content
                const artistPageContainer = document.getElementById('artist-page-container');
                artistPageContainer.innerHTML = html;
                artistPageContainer.style.display = 'block';
            })
            .catch((error) => {
                console.error(`Error loading artist page: ${error}`);
            });
    }
});
// Function to toggle the visibility of the artist container
function toggleArtistContainer() {
    var artistContainer = document.getElementById('artist-container');
    if (artistContainer.style.display === 'none') {
        artistContainer.style.display = 'flex';
    } else {
        artistContainer.style.display = 'none';
    }
}

// Add an event listener to the "Choose Artist" button
var chooseArtistButton = document.getElementById('choose-artist-button');
chooseArtistButton.addEventListener('click', toggleArtistContainer);
