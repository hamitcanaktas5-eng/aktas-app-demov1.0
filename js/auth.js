function login() {
  const user = document.getElementById("loginUser").value;
  const pass = document.getElementById("loginPass").value;

  if (user === "admin" && pass === "admin") {
    localStorage.setItem("loggedIn", "true");
    showApp();
  } else {
    alert("Hatalı giriş");
  }
}

function logout() {
  localStorage.removeItem("loggedIn");
  location.reload();
}

function showApp() {
  document.getElementById("loginScreen").classList.remove("active");
  document.getElementById("appScreen").classList.add("active");
}

window.onload = () => {
  if (localStorage.getItem("loggedIn")) {
    showApp();
  }
};
