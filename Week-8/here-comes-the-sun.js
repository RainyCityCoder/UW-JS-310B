let bodyEl = document.getElementsByTagName('body')[0];
let colorVal = 0;

let gHarrison = function () {
    /**
     * In Chromium element inspector the rgb values go to 256, but the
     * console.log code below ends at 256. To get console.log(colorVal) 
     * to show "255", have to set "if (colorVal <255>)", but then element 
     * inspector shows "rgb(254, 254, 254)". Since leaving it as-is satisfies
     * the 1st bullet point in the Homework requirements, it'll stay.
     */
    if (colorVal < 256) {
        bodyEl.style.backgroundColor = `rgb(${colorVal}, ${colorVal}, ${colorVal})`;
        colorVal += 1;
        requestAnimationFrame(gHarrison);
        //console.log(`${colorVal}`); 
    };
};

requestAnimationFrame(gHarrison);

setTimeout(() => {
    let videoWrapper = document.createElement("div");
    videoWrapper.style.color = "black";
    let videoTextEl = document.createElement("p");
    let videoText = document.createTextNode(`I couldn't resist...again`);
    videoTextEl.appendChild(videoText);
    videoWrapper.appendChild(videoTextEl);
    let iFrame = document.createElement('iframe');
    iFrame.src = "https://player.vimeo.com/video/241072365?h=661418024f";
    iFrame.title = "Easter Egg #2.";
    iFrame.frameborder = '0';
    iFrame.allow = 'autoplay; fullscreen; picture-in-picture';
    iFrame.setAttribute('allowfullscreen', '');
    iFrame.style.width = '640px';
    iFrame.style.height = '480px';
    videoWrapper.appendChild(iFrame);
    bodyEl.appendChild(videoWrapper);
}, 5000);