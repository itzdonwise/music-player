
const songSelector = document.getElementById('song-selector');
const showSongList = document.getElementById('show-song-list');
const songTitle = document.getElementById('song-title');
const artistName = document.getElementById('artist-name');
const song = document.getElementById('song');
const ctroicon = document.getElementById("contols"); // Play/Pause button


showSongList.addEventListener('click', function () {
    songSelector.style.display = songSelector.style.display === 'none' ? 'block' : 'none';
    songSelector.style.opacity = 1
});

// When a song is selected, update the title, artist, and play the song
songSelector.addEventListener('change', function () {
    if (this.value) {
        // Load the selected song
        song.src = this.value;
        songTitle.textContent = this.options[this.selectedIndex].getAttribute("data-title");
        artistName.textContent = this.options[this.selectedIndex].getAttribute("data-artist");

        // Play the song automatically
        song.play();
        ctroicon.classList.remove("ri-play-fill");
        ctroicon.classList.add("ri-pause-fill");

        // Hide the song list after selection
        songSelector.style.display = 'none';
    }
});

song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
};
function handleplay() {
    if (song.paused) {
        song.play();
        ctroicon.classList.remove("ri-play-fill");
        ctroicon.classList.add("ri-pause-fill");
    } else {
        song.pause();
        ctroicon.classList.remove("ri-pause-fill");
        ctroicon.classList.add("ri-play-fill");
    }
}

if (song.play()) {
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
}

progress.onchange = function () {
    song.currentTime = progress.value;
    song.play();
    ctroicon.classList.remove("ri-play-fill");
    ctroicon.classList.add("ri-pause-fill");
}
