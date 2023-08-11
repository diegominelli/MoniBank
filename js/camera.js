const botaIniciarCamera = document.querySelector("[data-video-botao]");
const campoCamera = document.querySelector("[data-camera]");
const video = document.querySelector("[data-video]");

botaIniciarCamera.addEventListener("click", async function () {
  const iniciarVideo = await navigator.mediaDevices
    .getUserMedia({ video: true, audio: false });
  
  botaIniciarCamera.style.display = "none";
  campoCamera.style.display = "block";

  video.srcObject = iniciarVideo;
})

