const fontSizeControl = document.querySelector('#font-size-control');
const textElement = document.querySelector('#text');
textElement.style.fontSize = fontSizeControl.value + 'px';

fontSizeControl.addEventListener('input', function() {
    const fontSize = fontSizeControl.value + 'px';
    textElement.style.fontSize = fontSize;
});