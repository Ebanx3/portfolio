const emailText = document.getElementById("emailText");

emailText.addEventListener("click", ()=>{
    navigator.clipboard.writeText("esteban2santos@gmail.com").then(()=>{})
});
