document.getElementById('payment-form').addEventListener('submit', async function(e) {
    e.preventDefault();

    const paymentData = {
        card_number: document.getElementById('card_number').value,
        expiry: document.getElementById('expiry').value,
        cvv: document.getElementById('cvv').value,
        amount: document.getElementById('amount').value
    };

    const paymentResponseDiv = document.getElementById('payment-response');

    const paymentRes = await fetch('/api/payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(paymentData)
    });

    const paymentResult = await paymentRes.json();

    if (paymentRes.ok) {
        paymentResponseDiv.style.color = 'green';
        paymentResponseDiv.textContent = paymentResult.message;
    } else {
        paymentResponseDiv.style.color = 'red';
        paymentResponseDiv.textContent = paymentResult.message;
    }
});