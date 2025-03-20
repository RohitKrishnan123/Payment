document.getElementById('login-form').addEventListener('submit', async function(e) {
    e.preventDefault();

    const loginData = {
        email: document.getElementById('login-email').value,
        password: document.getElementById('login-password').value
    };

    const loginResponseDiv = document.getElementById('login-response');

    const loginRes = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData)
    });

    const loginResult = await loginRes.json();

    if (loginRes.ok) {
        loginResponseDiv.style.color = 'green';
        loginResponseDiv.textContent = loginResult.message;
        window.location.href = '/payment';
    } else {
        loginResponseDiv.style.color = 'red';
        loginResponseDiv.textContent = loginResult.message;
    }
});