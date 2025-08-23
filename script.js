const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

// ดึง audio element
const musicIntro = document.getElementById("music-intro");
const musicYes = document.getElementById("music-yes");

// =====================
// ให้เสียง intro เล่นหลัง interaction ครั้งแรก
let firstInteraction = false;

function enableMusicIntro() {
  if (!firstInteraction) {
    musicIntro.muted = false; // ปลด muted
    musicIntro.play();
    firstInteraction = true;
  }
}

// =====================
// ปุ่ม No หนี
noBtn.addEventListener("mouseover", () => {
  enableMusicIntro(); // เปิดเพลง intro หากยังไม่เล่น
  const maxX = questionContainer.offsetWidth - noBtn.offsetWidth;
  const maxY = questionContainer.offsetHeight - noBtn.offsetHeight;
  const newX = Math.floor(Math.random() * maxX);
  const newY = Math.floor(Math.random() * maxY);

  noBtn.style.position = "absolute";
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});

// =====================
// ปุ่ม Yes
yesBtn.addEventListener("click", () => {
  enableMusicIntro(); // เปิดเพลง intro หากยังไม่เล่น

  questionContainer.style.display = "none";
  heartLoader.style.display = "inherit";

  // ปิดเพลงแรก แล้วเปิดเพลงที่สอง
  musicIntro.pause();
  musicIntro.currentTime = 0; // รีเซ็ต
  musicYes.muted = false;      // ปลด muted
  musicYes.play();

  setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "inherit";
    gifResult.play();
  }, 3000);
});
