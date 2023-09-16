let text = document.getElementById("txt");
let submitBtn = document.getElementById("submit");
let resumeBtn = document.getElementById("resume");
let pauseBtn = document.getElementById("pause");
let speechRateSlider = document.getElementById("speechRate");
let speechLanguageSelect = document.getElementById("speechLanguage");
let audioMessage;
let currentUtterance;

submitBtn.addEventListener("click", () => {
  audioMessage.text = text.value;
  audioMessage.rate = parseFloat(speechRateSlider.value);
  audioMessage.lang = speechLanguageSelect.value;
  currentUtterance = audioMessage;
  window.speechSynthesis.speak(audioMessage);
});

resumeBtn.addEventListener("click", () => {
  pauseBtn.style.display = "block";
  resumeBtn.style.display = "none";
  if (currentUtterance && currentUtterance.paused) {
    currentUtterance.resume();
  }
});

pauseBtn.addEventListener("click", () => {
  pauseBtn.style.display = "none";
  resumeBtn.style.display = "block";
  if (currentUtterance && currentUtterance.speaking) {
    currentUtterance.pause();
  }
});
window.onload = () => {
  resumeBtn.style.display = "none";
  if ("speechSynthesis" in window) {
    audioMessage = new SpeechSynthesisUtterance();
  } else {
    alert("Speech Synthesis is not supported");
  }
};