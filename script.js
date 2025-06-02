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
document.addEventListener("DOMContentLoaded", () => {
  const handleSubmit = (lang) => {
    const nameField = document.getElementById(`guest-name`);
    const attendanceField = document.getElementById(`attendance`);
    const responseMessage = document.getElementById(`response-message`);

    const guestName = nameField.value.trim();
    const attendanceStatus = attendanceField.value;

    if (!guestName) {
      alert("Please enter your name.");
      return;
    }

    responseMessage.textContent =
      attendanceStatus === "yes"
        ? `I'm glad you can make it, ${guestName}! See you there.`
        : `I'm sorry, ${guestName}, you can't make it.`;

    responseMessage.style.display = "block";
    nameField.value = "";
    attendanceField.value = "yes";
  };

  // Clear fields on load
  window.addEventListener("load", () => {
    document.getElementById("guest-name").value = "";
    document.getElementById("attendance").value = "yes";
  });

  // استدعاء handleSubmit لما يضغط الزر
  const submitButton = document.getElementById("submit-response");
  submitButton.addEventListener("click", (e) => {
    e.preventDefault(); // عشان ما يعملش reload أو يفتح اللينك
    handleSubmit("en");
  });
});

document
  .getElementById("submit-response")
  .addEventListener("click", function () {
    // Get name input value
    const nameInput = document.getElementById("guest-name").value.trim();

    // Basic validation: name required
    if (!nameInput) {
      alert("Please enter your name.");
      return;
    }

    // Show thank-you message
    const messageDiv = document.getElementById("response-message");
    messageDiv.style.display = "block";
    messageDiv.textContent = `Thank you, ${nameInput}! Your response has been recorded.`;

    // After 2 seconds, open Google Form in new tab
    setTimeout(() => {
      window.open("https://forms.gle/W186m2auMKtPyuaH6", "_blank");
    }, 2000);
  });
