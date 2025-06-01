const envelope = document.getElementById("envelope");
const stamp = document.getElementById("stamp");

stamp.addEventListener("click", () => {
  envelope.classList.add("open");
  stamp.style.display = "none"; // Hide the stamp after click
});

// Smooth scroll function
let currentSection = 0;
const scrollToSection = (index) => {
  sections[index].scrollIntoView({ behavior: "smooth" });
  currentSection = index;
};
