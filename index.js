document.getElementById('pay-button').addEventListener('click', function () {
    const amount = document.getElementById('amount').value;
    if (!amount || amount <= 0) {
        alert('Please enter a valid amount.');
        return;
    }

    const upiID = 'memymyselfanish@okicici';  // Replace with your UPI ID
    const name = 'museum-eg';    // Replace with your merchant name or purpose
    const transactionNote = 'Donation for museum';
    const currency = 'INR';

    // UPI URL format
    const upiUrl = `upi://pay?pa=${upiID}&pn=${encodeURIComponent(name)}&tn=${encodeURIComponent(transactionNote)}&am=${amount}&cu=${currency}`;

    // Detect if the user is on a mobile device
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
        // If on mobile, redirect to UPI app
        window.location.href = upiUrl;
    } else {
        // If not on mobile, generate QR code
        const qr = new QRious({
            element: document.getElementById('qr-code'),
            value: upiUrl,
            size: 250 // Size of the QR code
        });

        // Optionally, display the UPI URL below the QR code
        document.getElementById('upi-url').textContent = upiUrl;
    }
});
