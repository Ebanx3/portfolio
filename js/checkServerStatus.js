const serverStatusSpan = document.getElementById("serverStatusSpan");

const serverOn = document.createElement("span");
const serverOff = document.createElement("span");

const sendButton = document.getElementById("sendButton");
const spanVisits = document.getElementById("visits");

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
  sendButton.classList.remove("text-rose-400" , "border-rose-400", "hover:text-black");
  sendButton.classList.add("text-stone-700" , "border-stone-700" , 'hover:bg-stone-900');
};

fetch(`https://todolist-bot-discord.onrender.com/serverStatus`)
  .then((data) => data.json())
  .then((response) => {
    console.log(response)
    if (response.success) {
      showServerOn();
      spanVisits.innerText = "Veces que visitaron este portfolio: " + response.visits;
    } else {
      showServerOff();
    }
  })
  .catch(() => {
    showServerOff();
  });
