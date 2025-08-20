// Show Login Form
function showLogin() {
  document.getElementById("register-box").classList.add("hidden");
  document.getElementById("login-box").classList.remove("hidden");
}

// Show Register Form
function showRegister() {
  document.getElementById("login-box").classList.add("hidden");
  document.getElementById("register-box").classList.remove("hidden");
}

// Register Function
function register() {
  let username = document.getElementById("reg-username").value;
  let password = document.getElementById("reg-password").value;

  if (username === "" || password === "") {
    alert("Please fill all fields!");
    return;
  }

  if (localStorage.getItem(username)) {
    alert("User already exists!");
    return;
  }

  localStorage.setItem(username, password);
  alert("Registration Successful! Please Login.");
  showLogin();
}

// Login Function
function login() {
  let username = document.getElementById("login-username").value;
  let password = document.getElementById("login-password").value;

  let storedPassword = localStorage.getItem(username);

  if (storedPassword === null) {
    alert("User not found! Please Register.");
    return;
  }

  if (storedPassword === password) {
    document.getElementById("login-box").classList.add("hidden");
    document.getElementById("secure-box").classList.remove("hidden");
    document.getElementById("user-name").innerText = username;
  } else {
    alert("Incorrect Password!");
  }
}

// Logout Function
function logout() {
  document.getElementById("secure-box").classList.add("hidden");
  document.getElementById("login-box").classList.remove("hidden");
  document.getElementById("login-username").value = "";
  document.getElementById("login-password").value = "";
}
