function checkAnswer(choice) {
  const resultDiv = document.getElementById("result");
  const message = document.getElementById("message");
  const retryBtn = document.getElementById("retryBtn");

  if (choice === "오 솔레미오") {
    message.innerHTML = `
      🎉 정답이에요!<br>
      외할머니, 오늘의 무대 정말 멋졌을 거예요.<br>
      직접 보지는 못했지만, 마음만은 가장 가까이에서 응원했어요. 💖<br>
      사랑합니다, 최고예요! 🌟
    `;
    retryBtn.classList.add("hidden");
  } else {
    message.innerHTML = "😢 앗, 오늘은 그 곡이 아니에요!<br>다시 골라주세요!";
    retryBtn.classList.remove("hidden");
  }

  document.querySelector(".quiz").classList.add("hidden");
  resultDiv.classList.remove("hidden");
}

function retry() {
  document.getElementById("result").classList.add("hidden");
  document.querySelector(".quiz").classList.remove("hidden");
}
