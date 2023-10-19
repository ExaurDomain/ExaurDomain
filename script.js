// JavaScript (script.js)
document.addEventListener('DOMContentLoaded', function () {
    // Show the artist container by default
    var artistContainer = document.getElementById('artist-container');
    artistContainer.style.display = 'flex';
    
    // Rest of your JavaScript code...
    
    // Function to toggle the visibility of the artist container
    function toggleArtistContainer() {
        if (artistContainer.style.display === 'none' || artistContainer.style.display === '') {
            artistContainer.style.display = 'flex';
        } else {
            artistContainer.style.display = 'none';
        }
    }

    // Add an event listener to the "Choose Artist" button (if you decide to add it back later)
    var chooseArtistButton = document.getElementById('choose-artist-button');
    chooseArtistButton.addEventListener('click', toggleArtistContainer);
});
