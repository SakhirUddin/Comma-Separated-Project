function convertText(){
    let inputText = document.getElementById('inputBox').value;
    let textLines = inputText.split('\n');
    const array = textLines.map(textLines=>textLines.trim()).join(',');
    let outputText = document.getElementById('outputBox');
    outputText.textContent = array;
}