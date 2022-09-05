
import pymongo
import certifi
connection_string = "mongodb+srv://MyMonogDBApplication:PassWeerd!!@cluster0.jseo1wx.mongodb.net/?retryWrites=true&w=majority"

client = pymongo.MongoClient(connection_string, tlsCAFile=certifi.where())

db = client.get_database("MySuperStoreDB") #imported into server.py