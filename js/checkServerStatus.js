const serverStatusSpan = document.getElementById("serverStatusSpan");

const serverOn = document.createElement("span");
const serverOff = document.createElement("span");

const sendButton = document.getElementById("sendButton");

const showServerOn = () => {
  serverOn.classList.add("text-emerald-400", "text-xs", "font-bold");
  serverOn.innerText = "ON";
  serverStatusSpan.appendChild(serverOn);
};

const showServerOff = () => {
  serverOff.classList.add("text-red-400", "text-xs", "font-bold");
  serverOff.innerText = "OFF";
  serverStatusSpan.appendChild(serverOff);
  sendButton.disabled = true;
  sendButton.classList.remove("text-rose-400" , "border-rose-400", "hover:bg-rose-400", "hover:text-black");
  sendButton.classList.add("text-stone-700" , "border-stone-700");
};

fetch(`${window.serverUrl}/serverStatus`)
  .then((data) => data.json())
  .then((response) => {
    if (response.success) {
      showServerOn();
    } else {
      showServerOff();
    }
  })
  .catch(() => {
    showServerOff();
  });
