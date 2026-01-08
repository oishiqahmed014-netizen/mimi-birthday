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
  if (!isPlaying && music) {
    music.play();
    isPlaying = true;
  }
}, { once: true });

/* =========================
   FLOATING HEARTS LOGIC
========================= */

const heartsContainer = document.querySelector(".hearts-container");

function createHeart() {
  if (!heartsContainer) return;

  const heart = document.createElement("div");
  heart.classList.add("heart");

  const hearts = ["💜", "💗", "🤍"];
  heart.innerText = hearts[Math.floor(Math.random() * hearts.length)];

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (6 + Math.random() * 4) + "s";
  heart.style.fontSize = (14 + Math.random() * 10) + "px";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 10000);
}

/* Spawn rate (slow & classy) */
setInterval(createHeart, 900);

