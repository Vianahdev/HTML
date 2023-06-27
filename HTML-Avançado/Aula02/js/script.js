let l_video = document.querySelector('video#video1');

function btnPlay(){
    l_video.play();
}

function btnStop(){
    l_video.pause();
    l_video.currentTime = 0;
}

function btnBack(){
    l_video.currentTime -= 5;
    
}

function btnAdvance(){
    l_video.currentTime += 5;
}

function btnSpeed(){
    l_video.playbackRate += 0.1;
}

function btnSlow(){
    l_video.playbackRate -= 0.1;
}