function sha256(message) {
    const utf8 = new TextEncoder().encode(message);
    let hash = 0;

    for (let i = 0; i < utf8.length; i++) {
        hash = ((hash << 5) - hash) + utf8[i];
        hash |= 0;
    }

    return "SHA-256 (simulated): " + Math.abs(hash).toString(16);
}