window.onload = () => {
  const loggedIn = localStorage.getItem("loggedIn");

  if (loggedIn === "true") {
    showMain();
  } else {
    showLogin();
  }
};
