function toggleKey() {
    const keyInput = document.getElementById("secretKey");
    if (keyInput.type === "password") {
        keyInput.type = "text";
    } else {
        keyInput.type = "password";
    }
}

function clearText() {
    document.getElementById('inputText').value = '';
    document.getElementById('outputText').value = '';
    document.getElementById('secretKey').value = '';
}

function processText() {
    const input = document.getElementById("inputText").value;
    const key = document.getElementById("secretKey").value;
    const operation = document.getElementById("operation").value;
    let output = "";

    if (input.trim() === "") {
        alert("Please enter some text");
        return;
    }

    // Clear the key immediately after reading it for security
    document.getElementById("secretKey").value = "";

    switch (operation) {
        case "aes-encrypt":
            if (!key) {
                alert("Secret key required for AES encryption");
                return;
            }
            output = aesEncrypt(input, key);
            break;

        case "aes-decrypt":
            if (!key) {
                alert("Secret key required for AES decryption");
                return;
            }
            output = aesDecrypt(input, key);
            break;

        case "base64-encode":
            output = base64Encode(input);
            break;

        case "base64-decode":
            output = base64Decode(input);
            break;

        case "hash":
            output = sha256(input);
            break;

        default:
            output = "Invalid operation";
    }

    document.getElementById("outputText").value = output;
}
function copyOutput() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    outputText.setSelectionRange(0, 99999); // For mobile devices
    
    navigator.clipboard.writeText(outputText.value)
        .then(() => {
            alert('Output copied to clipboard!');
        })
        .catch(err => {
            // Fallback method
            document.execCommand('copy');
            alert('Output copied to clipboard!');
        });
}