function submitForm(event) {
  event.preventDefault();
  document.getElementById("form-status").innerText = "Thanks for reaching out! This is a static demo.";
}

// Typing animation effect
const text = "Hi, I'm Maryam — Creative Developer & AI Enthusiast 💡";
let i = 0;
function typeText() {
  if (i < text.length) {
    document.querySelector(".typing-text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeText, 50);
  }
}