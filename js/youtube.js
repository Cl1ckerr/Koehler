var tag=document.createElement('script');
tag.src='https://www.youtube.com/iframe_api';
var firstScriptTag=document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag,firstScriptTag);
var player;function onYouTubeIframeAPIReady(){
    player=new YT.Player('video',{
        events:{onReady:onPlayerReady,onStateChange:onPlayerStateChange,
        },
    });
}
function onPlayerReady(event){event.target.setVolume(video[randVid].volume);event.target.playVideo();}
function onPlayerStateChange(event){var state=player.getPlayerState();if(state==0){player.playVideo();}}
