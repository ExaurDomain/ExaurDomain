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
const colors = ['#ff8c00', 'green', '#ff8c00', 'green'];
let currentColorIndex = 0;

function changeTextColor() {
  textElement.style.color = colors[currentColorIndex];
  currentColorIndex = (currentColorIndex + 1) % colors.length;
}

setInterval(changeTextColor, 3000);

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
        document.getElementById('welcome').style.display = 'none';
        document.getElementById('artist-list').style.display = 'none';
        const artistPageUrl = `${artistId}.html`;

        fetch(artistPageUrl)
            .then((response) => response.text())
            .then((html) => {
                const artistPageContainer = document.getElementById('artist-page-container');
                artistPageContainer.innerHTML = html;
                artistPageContainer.style.display = 'block';
            })
            .catch((error) => {
                console.error(`Error loading artist page: ${error}`);
            });
    }
});

function toggleArtistContainer() {
    var artistContainer = document.getElementById('artist-container');
    if (artistContainer.style.display === 'none') {
        artistContainer.style.display = 'flex';
    } else {
        artistContainer.style.display = 'none';
    }
}

var chooseArtistButton = document.getElementById('choose-artist-button');
chooseArtistButton.addEventListener('click', toggleArtistContainer);
