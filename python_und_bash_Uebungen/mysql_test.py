import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  user="mysqluser",
  password="321qwerty"
)

print(mydb)