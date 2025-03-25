from flask import Flask, request, jsonify, render_template
import mysql.connector  
from flask_cors import CORS  # Import CORS

app = Flask(__name__)
CORS(app)  # Initialize CORS

# Database Connection
def get_db_connection():
    return mysql.connector.connect(
        host="localhost",
        user="root",
        password="",
        database="guidenet",
      
    )
db = get_db_connection()
cursor = db.cursor()

# API to Fetch Users
@app.route('/get_users', methods=['GET'])
def get_users():
    logged_in_user_id = request.args.get("id")
    db = get_db_connection()
    cursor = db.cursor()
    try:
        cursor.execute("SELECT id, name FROM stud_registration where id != %s",(logged_in_user_id,) )  # Fetch user ID and Name
        users = [{"id": row[0], "name": row[1]} for row in cursor.fetchall()]
        print("Fetched users:", users)  # Debugging output in terminal
        cursor.close()
        db.close()
        return jsonify(users) 
        
    except Exception as e:
        print("Database error:", str(e))
        return jsonify({"error": str(e)}), 500


@app.route('/get_messages', methods=['GET'])
def get_messages():
    sender_id = request.args.get('sender_id')
    receiver_id = request.args.get('receiver_id')
    db = get_db_connection()
    cursor = db.cursor()
    query = "SELECT sender_id, message FROM messages WHERE (sender_id = %s AND receiver_id = %s) OR (sender_id = %s AND receiver_id = %s) ORDER BY timestamp"
    cursor.execute(query, (sender_id, receiver_id, receiver_id, sender_id))
    
    messages = [{"sender": row[0], "message": row[1]} for row in cursor.fetchall()]
    cursor.close()
    db.close()
    return jsonify(messages)


@app.route('/send_message', methods=['POST'])
def send_message():
    try:
        data = request.get_json()
        print("Received data:", data)

        senderName = request.json.get('senderName')
        if not senderName:
            return jsonify({"error": "Sender name not found"}), 400

        sender_id = data.get('sender_id')
        receiver_id = data['receiver_id']
        message = data['message']

        db = get_db_connection()
        cursor = db.cursor()

        # 🔹 Fetch sender's name dynamically
        cursor.execute("SELECT NAME FROM stud_registration WHERE ID = %s", (sender_id,))
        senderName_result = cursor.fetchone()

        if senderName_result:
            senderName = senderName_result[0]  # Extract name
        else:
            return jsonify({"success": False, "error": "Sender name not found"}), 400

        query = "INSERT INTO messages (sender_name, sender_id, receiver_id, message) VALUES (%s, %s, %s, %s)"
        cursor.execute(query, (senderName, sender_id, receiver_id, message))
        db.commit()
        
        cursor.close()
        db.close()

        return jsonify({"success": True, "message": "Message sent successfully!"})

    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
