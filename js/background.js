const audio = new Audio()
audio.src = "https://lofi.stream.laut.fm/lofi?ref=radiode&t302=2022-04-06_17-32-36&uuid=47bbcee5-a0bc-47c2-8475-72e9f74b865c"
audio.volume = 0.1;

const player = document.querySelector(".player");

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if(request == "checkState"){
        sendResponse(isPlaying = player.classList.contains("play"));
    }
})

browser.runtime.onMessage.addListener((request)=>{
    
    if(request == true) { 
        player.classList.remove("play");
        audio.pause();
    }
    else if(request == false) {
        player.classList.add("play");
        audio.play()
    }
})
