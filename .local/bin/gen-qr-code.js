#!/usr/bin/env node
const QRCode = require('qrcode');
const url = process.argv[2];

if (!url) {
    console.error('Please provide a URL as an argument');
    process.exit(1);
}

// Generate QR code and save as PNG
QRCode.toFile('qr-code.png', url, {
    width: 500,
    margin: 2,
    color: {
        dark: '#000000',
        light: '#ffffff'
    }
}, (err) => {
    if (err) {
        console.error('Error generating QR code:', err);
        process.exit(1);
    }
    console.log('QR code generated successfully: qr-code.png');
});