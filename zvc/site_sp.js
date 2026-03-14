const fonts = ['Arial', 'Verdana', 'Times New Roman', 'Courier', 'Georgia', 'Comic Sans MS'];

setInterval(() => {
    document.getElementById('text').style.fontFamily = 
        fonts[Math.floor(Math.random() * fonts.length)];
}, 200);
