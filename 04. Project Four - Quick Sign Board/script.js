document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded Successfully !!!'); 

    const colorPicker = document.getElementById('colorPicker'); 
    const boardBackground = document.getElementById('BackgroundColor'); 
    const penFontSize = document.getElementById('penSize');    
    const clearBtn = document.getElementById('clearBtn'); 
    const saveWithDownloadBtn = document.getElementById('saveWithDownloadBtn'); 
    const previousStateBtn = document.getElementById('previousStateBtn');
    const signBoard = document.getElementById('signBoard'); 

    console.log("tools", colorPicker, boardBackground, penFontSize);
    console.log("button", clearBtn, saveWithDownloadBtn, previousStateBtn); 
    console.log("signBoard", signBoard);

    
})