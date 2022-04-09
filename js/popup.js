const playButton = document.querySelector(".button-play");
const player = document.querySelector(".player");


browser.runtime.sendMessage("checkState", function(response) {
    isPlaying = response;
    if (isPlaying) {
        player.classList.add("play");
        playButton.querySelector("img").src="../img/pause.svg";
    }
    else {
        player.classList.remove("play");
        playButton.querySelector("img").src="../img/play.svg";
    }
})



playButton.addEventListener("click", () => {

    isPlaying = player.classList.contains("play")

    if(isPlaying) {
        player.classList.remove("play");
        playButton.querySelector("img").src="../img/play.svg";
        browser.runtime.sendMessage(isPlaying)
    }
    else {
        player.classList.add("play");
        playButton.querySelector("img").src="../img/pause.svg";
        browser.runtime.sendMessage(isPlaying)
    }
})


