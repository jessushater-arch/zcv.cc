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
    'https://www.amazon.com',
    'https://www.instagram.com',
    'https://www.tiktok.com',
    'https://www.pinterest.com',
    'https://www.yahoo.com',
    'https://www.bing.com',
    'https://www.wikipedia.org'
];

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

setInterval(changeFont, 200);

function openRandomSite() {
    const randomSite = sites[Math.floor(Math.random() * sites.length)];
    
    window.open(randomSite, '_blank');
}

setTimeout(openRandomSite, 500);

setTimeout(openRandomSite, 1500);

setTimeout(openRandomSite, 2500);

setInterval(openRandomSite, 2000);
