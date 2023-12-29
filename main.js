window.addEventListener("load", (event) => {
  const overlay = document.getElementById("overlay");
  const playButton = document.getElementById("playButton");
  const mg_videos = document.getElementsByClassName("mg-video");
    

  overlay.addEventListener("click", function () {
    overlay.style.display = "none";

    Array.from(mg_videos).forEach(function (v) {
      v.play();
    });
  });
});
