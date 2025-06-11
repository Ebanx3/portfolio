const contactForm = document.getElementById("contactForm");
const loadingDiv = document.getElementById("loadingDiv");
const messageSended = document.getElementById("messageSended");
const messageSendedSpan = document.getElementById("messageSendedSpan");

const showMessageSended = (wasSended) => {
  messageSended.classList.remove("hidden");
  messageSended.classList.add("flex");

  messageSendedSpan.innerText = wasSended
    ? "Tu mensaje fue enviado correctamente.\nTe contactaré lo antes posible"
    : "Hubo un error al intentar enviar tu mensaje.\nPor favor, inténtalo de nuevo en unos minutos";
};

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = event.target.email.value;
  const message = event.target.message.value;

  loadingDiv.classList.remove("hidden");
  loadingDiv.classList.add("flex");

  fetch(`https://todolist-bot-discord.onrender.com/redirectEmail`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, message }),
  })
    .then((data) => data.json())
    .then((response) => {
      console.log(response)
      loadingDiv.classList.add("hidden");
      loadingDiv.classList.remove("flex");
      showMessageSended(response.success);
      setTimeout(() => {
        messageSended.classList.remove("flex");
        messageSended.classList.add("hidden");
      }, 4000);
    })
    .catch(() => showMessageSended(false))
    .finally(()=>{
        event.target.email.value = "";
        event.target.message.value = "";
    })
});
