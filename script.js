const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const pic = document.getElementById("pic");

yesBtn.onclick = () => {
  message.innerHTML = "I LOVE YOU BAVA💞 Umma💋";
  pic.style.display = "block"; // show image
};

noBtn.onmouseover = () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);
  noBtn.style.position = "fixed";
  noBtn.style.right = x + "px";
  noBtn.style.bottom = y + "px";
};