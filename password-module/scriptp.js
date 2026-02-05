// Toggle password view
function toggleView(id) {
  const input = document.getElementById(id);
  input.type = input.type === "password" ? "text" : "password";
}

// Generate password
function generatePassword() {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%!";
  let pwd = "";
  for (let i = 0; i < 12; i++) {
    pwd += chars[Math.floor(Math.random() * chars.length)];
  }
  document.getElementById("generatedPassword").value = pwd;
  document.getElementById("vaultPassword").value = pwd;
}

// Copy password
function copyPassword() {
  const pwd = document.getElementById("generatedPassword");
  pwd.select();
  document.execCommand("copy");
  alert("Password copied");
}

// Clear
function clearPassword() {
  document.getElementById("generatedPassword").value = "";
  document.getElementById("vaultPassword").value = "";
}

// Vault open / close
function toggleVault() {
  document.getElementById("vault").classList.toggle("hidden");
}

// Save to vault
function saveToVault() {
  const label = document.getElementById("label").value;
  const password = document.getElementById("vaultPassword").value;

  if (!label || !password) {
    alert("Enter label and password");
    return;
  }

  const vault = JSON.parse(localStorage.getItem("vault")) || [];
  vault.push({ label, password });
  localStorage.setItem("vault", JSON.stringify(vault));

  document.getElementById("label").value = "";
  document.getElementById("vaultPassword").value = "";

  loadVault();
}

// Load vault
function loadVault() {
  const vault = JSON.parse(localStorage.getItem("vault")) || [];
  const list = document.getElementById("vaultList");
  list.innerHTML = "";

  vault.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.label} :
      <input type="password" id="v${index}" value="${item.password}" readonly>
      <span class="eye" onclick="toggleView('v${index}')">👁</span>
    `;
    list.appendChild(li);
  });
}

loadVault();
