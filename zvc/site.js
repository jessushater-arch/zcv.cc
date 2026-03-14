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

const fonts = [
    'Arial, sans-serif',
    'Verdana, sans-serif',
    'Times New Roman, serif',
    'Courier New, monospace',
    'Georgia, serif',
    'Comic Sans MS, cursive',
    'Impact, sans-serif',
    'Trebuchet MS, sans-serif',
    'Palatino, serif',
    'Garamond, serif',
    'Franklin Gothic Medium, sans-serif',
    'Lucida Console, monospace'
];

function changeFont() {
    const textElement = document.getElementById('text');
    if (textElement) {
        const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
        textElement.style.fontFamily = randomFont;
    }
}

setInterval(changeFont, 200);

function redirectToRandomSite() {
    const randomSite = sites[Math.floor(Math.random() * sites.length)];
    window.location.href = randomSite;
}

setTimeout(redirectToRandomSite, 500);