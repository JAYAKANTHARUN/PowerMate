from flask import Flask , jsonify , request
from flask_cors import CORS

from pymongo import MongoClient
client = MongoClient("mongodb://localhost:27017/")

mydatabase = client['emeter']
mycollection = mydatabase['users']

app = Flask(__name__)
cors = CORS(app)

@app.route('/')
def hello():
    documents = list(mycollection.find())
    for doc in documents:
        del doc['_id']
    return jsonify(documents)

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data['username']
    password = data['password']

    # Query the MongoDB database for the user with the given username and password
    result = mydatabase.credentials.find_one({'username': username, 'password': password})

    if result:
        return jsonify({'status': 1})
    else:
        return jsonify({'status': 0})

if __name__=='__main__':
    app.run(host='0.0.0.0', port=5000)