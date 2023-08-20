import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const LOCALS_KEY = "videoplayer-current-time";    

function onPlay(data) {
    let currentTime = data.seconds;
    localStorage.setItem(LOCALS_KEY, currentTime);
}

player.on('timeupdate', throttle(onPlay, 1000));

const playedTime = localStorage.getItem(LOCALS_KEY);

player.setCurrentTime(playedTime).then(function (seconds) {
        // seconds = playedTime;
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;
        default:
            // some other error occurred
            break;
    }
});
