// script.js

// Citizen Login Validation
function validateLogin(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    if (email && password.length >= 6) {
      alert("Login successful!");
      window.location.href = "index.html";
    } else {
      alert("Invalid email or password.");
    }
  }
  
  // Admin Login Validation
  function validateAdminLogin(event) {
    event.preventDefault();
    const govId = document.getElementById("gov-id").value;
    const password = document.getElementById("admin-password").value;
  
    if (govId.length >= 6 && password) {
      alert("Admin login successful!");
      window.location.href = "services.html";
    } else {
      alert("Invalid Government ID or password.");
    }
  }
  
  // Signup Validation
  function validateSignup(event) {
    event.preventDefault();
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
  
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
  
    if (email && password.length >= 6) {
      alert("Sign-up successful! Please log in.");
      window.location.href = "login.html";
    } else {
      alert("Invalid details. Please try again.");
    }
  }
  