const music = document.getElementById("bg-music");
let isPlaying = false;

function toggleMusic() {
  if (!isPlaying) {
    music.play();
    isPlaying = true;
  } else {
    music.pause();
    isPlaying = false;
  }
}

/* Auto-start on first tap (mobile-friendly) */
document.body.addEventListener("click", () => {
  if (!isPlaying) {
    music.play();
    isPlaying = true;
  }
}, { once: true });
