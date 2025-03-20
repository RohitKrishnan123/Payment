from flask import Flask, render_template, request, jsonify, redirect, url_for

app = Flask(__name__)

# Dummy user database
users = {"user@example.com": "password123"}

# Endpoint for homepage
@app.route('/')
def home():
    return render_template('index.html')

# Endpoint for payment page
@app.route('/payment')
def payment():
    return render_template('index2.html')

# Endpoint for login
@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    if email in users and users[email] == password:
        return jsonify({"status": "success", "message": "Login successful."}), 200
    else:
        return jsonify({"status": "error", "message": "Authentication failed."}), 401

# Endpoint to process payment
@app.route('/api/payment', methods=['POST'])
def process_payment():
    data = request.json
    card_number = data.get('card_number')
    expiry = data.get('expiry')
    cvv = data.get('cvv')
    amount = data.get('amount')

    # Simplified payment processing logic (stubbed)
    if len(card_number) == 16 and len(cvv) == 3:
        # Assume payment success
        return jsonify({"status": "success", "message": f"Payment of ${amount} processed successfully."}), 200
    else:
        return jsonify({"status": "error", "message": "Invalid card details."}), 400

if __name__ == '__main__':
    app.run(debug=True)