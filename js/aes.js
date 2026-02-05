function aesEncrypt(text, key) {
    let encrypted = "";
    for (let i = 0; i < text.length; i++) {
        encrypted += String.fromCharCode(
            text.charCodeAt(i) ^ key.charCodeAt(i % key.length)
        );
    }
    return btoa(encrypted);
}

function aesDecrypt(encryptedText, key) {
    try {
        const decoded = atob(encryptedText); // Base64 decode
        let decrypted = "";

        for (let i = 0; i < decoded.length; i++) {
            decrypted += String.fromCharCode(
                decoded.charCodeAt(i) ^ key.charCodeAt(i % key.length)
            );
        }

        return decrypted;
    } catch (error) {
        return "Error: Invalid encrypted text or wrong key";
    }
}
