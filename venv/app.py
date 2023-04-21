from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_mysqldb import MySQL
import mysql.connector
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes and origins

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="Root@123",
  database="applicationDB"

)
mysql = MySQL(app)

@app.route('/greet', methods=['POST'])
def greet():
    data = request.get_json()
    name = data.get('name', 'Unknown')
    greeting = f"Hello, {name}!"
    return jsonify(greeting=greeting)








@app.route('/post', methods=['POST'])
def post():
    
    data = request.get_json()
    appln = data['appln']
    cursor = mydb.cursor(dictionary=True)
    sqlQuery = "INSERT INTO Application_Master(Appln_Name) VALUES(%s)"
    cursor.execute(sqlQuery,[appln])
    mydb.commit()


    greeting = f"Data added successfully!"
    return jsonify(greeting=greeting)



@app.route('/post1', methods=['POST'])
def post_():
    
    #data = request.get_json()
    appln = request.json['appln']
    Appln_Description=request.json['Appln_Description'] 
    OS =request.json['OS'] 
    OS_Version=request.json['OS_Version']  
    Appln_Type=request.json['Appln_Type']
    Front_End=request.json['Front_End'] 
    print("hiiiiii")
     
    cursor = mydb.cursor()
    print("heloooo")
    sqlQuery = "INSERT INTO Application_Master(Appln_Name,Appln_Description,OS,OS_Version,Appln_Type,Front_End) VALUES(%s,%s,%s,%s,%s,%s)"
    print("aaaaaaaa")
    binda=[(appln),(Appln_Description),(OS),(OS_Version),(Appln_Type),(Front_End)]
    print(binda)
    print("azzzzzzz")
    cursor.execute(sqlQuery,binda)
    print("yyyyyyyyyyyyyy")
     
    mydb.commit()
    print("cccccc")


    greeting = f"Data added successfully!"
    return jsonify(greeting=greeting)






if __name__ == '__main__':
    app.run(debug=True, port= 5002)
