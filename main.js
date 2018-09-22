function writeToDom(div, string) {
    document.getElementById(div).innerHTML = string;
}

function addToDom(div, string) {
    document.getElementById(div).innerHTML += string;
}

function encodeText() {
    document.getElementById('encodeButt').addEventListener('click', function() {
        let encodeText = document.getElementById('encodeInput').value;
        let encodeArray = encodeText.split('');
        let convertedArray = [];
        for(let i = 0; i < encodeArray.length; i++) {
            convertedArray.push(encodeArray[i].charCodeAt(0));
        }
        writeToDom('encodeOutput', convertedArray);
    })
}

encodeText();