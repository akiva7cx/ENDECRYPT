// Base64 Encode (Unicode-safe)
function base64Encode(text) {
    try {
        return btoa(unescape(encodeURIComponent(text)));
    } catch (e) {
        return "Error encoding Base64";
    }
}

// Base64 Decode (Unicode-safe)
function base64Decode(input) {
    try {
        return decodeURIComponent(escape(atob(input)));
    } catch (e) {
        return "Error: Invalid Base64 input";
    }
}
