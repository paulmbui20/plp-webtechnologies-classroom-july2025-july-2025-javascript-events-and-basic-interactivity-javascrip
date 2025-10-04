// =======================================
// Part 1: Event Handling
// =======================================

// Click Event Example
const messageBtn = document.getElementById("messageBtn");
const messageOutput = document.getElementById("messageOutput");

messageBtn.addEventListener("click", () => {
  messageOutput.textContent = "Button clicked! JavaScript event triggered. 🎉";
});

// Mouseover Event Example
const hoverText = document.getElementById("hoverText");
hoverText.addEventListener("mouseover", () => {
  hoverText.style.color = "red";
});
hoverText.addEventListener("mouseout", () => {
  hoverText.style.color = "black";
});

// =======================================
// Part 2: Interactive Elements
// =======================================

// 🔦 Light/Dark Mode Toggle
const toggleThemeBtn = document.getElementById("toggleThemeBtn");

toggleThemeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Update button text
  if (document.body.classList.contains("dark-mode")) {
    toggleThemeBtn.textContent = "Switch to Light Mode ☀️";
  } else {
    toggleThemeBtn.textContent = "Toggle Dark Mode 🌙";
  }
});

// 🔢 Counter Game
let count = 0;
const countDisplay = document.getElementById("count");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");

increaseBtn.addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});

decreaseBtn.addEventListener("click", () => {
  if (count > 0) count--;
  countDisplay.textContent = count;
});

resetBtn.addEventListener("click", () => {
  count = 0;
  countDisplay.textContent = count;
});

// =======================================
// Part 3: Form Validation
// =======================================

const form = document.getElementById("userForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const formSuccess = document.getElementById("formSuccess");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Stop form submission
  let valid = true;

  // Reset error messages
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  formSuccess.textContent = "";

  // Validate Name
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required.";
    valid = false;
  }

  // Validate Email using Regex
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    emailError.textContent = "Please enter a valid email address.";
    valid = false;
  }

  // Validate Password (at least 6 chars, 1 number)
  const passwordPattern = /^(?=.*[0-9]).{6,}$/;
  if (!passwordPattern.test(passwordInput.value)) {
    passwordError.textContent = "Password must be at least 6 characters and include a number.";
    valid = false;
  }

  // If valid, show success message
  if (valid) {
    formSuccess.textContent = "✅ Form submitted successfully!";
    form.reset();
  }
});
