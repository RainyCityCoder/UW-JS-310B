let bodyEl = document.getElementsByTagName('body')[0];
let colorVal = 255;

let myOldFriend = setInterval(() => {
    /**
     * In Chromium element inspector colorVal goes to 0, but the
     * console.log code below ends at -1. To get console.log(colorVal) 
     * to show "0", have to set "if (colorVal > 0)", but then element 
     * inspector shows "rgb(1, 1, 1)". Since at a macro level both 
     * accomplish the same thing, I'm going to leave as-is.
     */
    if (colorVal >= 0) {
        bodyEl.style.backgroundColor = `rgb(${colorVal}, ${colorVal}, ${colorVal})`;
        colorVal -= 1;
        //console.log(colorVal); // uncomment to see colorVal decrease
    } else {
        clearInterval(myOldFriend);
    }
}, 10); // shorter interval OKed by Kevin on Slack

setTimeout(() => {
    let videoWrapper = document.createElement("div");
    videoWrapper.style.color = "white";
    let videoTextEl = document.createElement("p");
    let videoText = document.createTextNode(`I couldn't resist...`);
    videoTextEl.appendChild(videoText);
    videoWrapper.appendChild(videoTextEl);
    let iFrame = document.createElement('iframe');
    iFrame.src = "https://player.vimeo.com/video/546836503?h=c13df96243";
    iFrame.title = "Easter Egg.";
    iFrame.frameborder = '0';
    iFrame.allow = 'autoplay; fullscreen; picture-in-picture';
    iFrame.setAttribute('allowfullscreen', '');
    iFrame.style.width = '640px';
    iFrame.style.height = '360px';
    videoWrapper.appendChild(iFrame);
    bodyEl.appendChild(videoWrapper);
}, 3500);
