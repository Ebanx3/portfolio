const emailText = document.getElementById("emailText");
const emailCopiedText = document.getElementById("emailCopied");

const modalVisible = false;

const showModal = () => {
  if (modalVisible) return;
  emailCopiedText.classList.remove("hidden");
  setTimeout(() => {
    emailCopiedText.classList.add("hidden");
    modalVisible = false;
  }, 2000);
};

emailText.addEventListener("click", () => {
  navigator.clipboard.writeText("esteban2santos@gmail.com").then(() => {
    showModal();
  });
});
