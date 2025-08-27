const text = "Isamar Delfino"; // Change this to your desired text
const speed = 80; // Typing speed in milliseconds
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("terminal-effect").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;