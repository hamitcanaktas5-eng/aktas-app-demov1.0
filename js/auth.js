alert("auth.js yüklendi");
function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "admin" && pass === "admin") {
    localStorage.setItem("loggedIn", "true");
    showMain();
  } else {
    alert("Hatalı giriş");
  }
}

function logout() {
  localStorage.removeItem("loggedIn");
  showLogin();
}

function showMain() {
  document.getElementById("loginScreen").classList.add("hidden");
  document.getElementById("mainScreen").classList.remove("hidden");
}

function showLogin() {
  document.getElementById("mainScreen").classList.add("hidden");
  document.getElementById("loginScreen").classList.remove("hidden");
}
