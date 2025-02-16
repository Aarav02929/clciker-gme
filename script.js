function saveUsername() {
  const username = document.getElementById("username").value;
  if (username.trim()) {
    document.cookie = `username=${username}; path=/`;
    window.location.href = "gamepage.html";
  }
}
