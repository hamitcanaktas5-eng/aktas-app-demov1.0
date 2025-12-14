const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");
const channelList = document.getElementById("channelList");
const mainPanel = document.getElementById("mainPanel");

menuBtn.onclick = () => {
  sideMenu.classList.toggle("open");
};

document.getElementById("addChannel").onclick = () => {
  const name = prompt("Kanal adı:");
  if (!name) return;

  const div = document.createElement("div");
  div.textContent = "#" + name;
  div.onclick = () => openChannel(name);
  channelList.appendChild(div);
};

function openChannel(name) {
  sideMenu.classList.remove("open");
  mainPanel.innerHTML = `
    <h2>#${name}</h2>
    <input placeholder="Mesaj yaz..." />
  `;
}
