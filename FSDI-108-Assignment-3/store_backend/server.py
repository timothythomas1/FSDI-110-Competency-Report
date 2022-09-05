
#                 👇 Class 👇Object 👇 Method
from flask import Flask, request, abort
from flask_cors import CORS
from data import me, catalog
from random import randint
import json
from config import db

app = Flask(__name__)
CORS(app) #Disable CORS so that anyone can call your API endpoints

@app.get("/")
def home():
    return "Hello from flask"

@app.get("/test")
def test():
    return "This is just another endpoint"

@app.get("/about")
def about():
    return "Tim Thomas"

###########################################################################################
################################ API PRODUCTS #############################################
###########################################################################################

def fix_id(obj):
    obj["_id"] = str(obj["_id"])
    return obj

@app.get("/api/test")
def test_api():
    return json.dumps("Welcome")

@app.get("/api/about")
def about_api():
    return json.dumps(me)

@app.get("/api/catalog")
def get_catalog():            #👇 This is a query filter for db. If empty, it will read all data points
    cursor = db.Products.find({}) # Read all products. You can NOT parse cursor into JSON!
    results = [] # So travel the cursor, save the data into a list and then we can json.dumps it. 
    for prod in cursor:
        prod = fix_id(prod)
        results.append(prod)
    return json.dumps(results)

@app.get("/api/count")
def get_count():
    count = len(catalog)
    return json.dumps(count)

@app.post("/api/catalog")
def save_product():
    product = request.get_json()
    # Validate 
    if not "title" in product:
        return abort(400, "Error: Title is required")

    # The title must have at least 5 characters
    if len(product["title"]) < 5:
            return abort(400, "Error: The title must be at least 5 characters")

    # Must have a price
    if not "price" in product:
            return abort(400, "Error: Price is required")

    # Price must be greater than 1
    if product["price"] < 1:
            return abort(400, "Error: Price must be greater or equal to $1")

    db.Products.insert_one(product)# Fixing the problem of - '_id': ObjectId('6310103f931f60b58099a2bd') - by parsing into a string first
    product["_id"] = str(product["_id"])

    return json.dumps(product)

# get  /api/catalog/total  
# return the total inv/money/value of the catalog
@app.get("/api/catalog/total")
def get_total():
    # sum all of the "price" keys from object in the catalog
    total = 0
    for item in catalog:
        runningTot = item["price"]
        total += runningTot
    return json.dumps(total)

# Iterate through the entire catalog and return the lowest priced item
@app.get("/api/catalog/lowest")
def get_lowest():
    lowest = catalog[0]["price"]
    for item in catalog:
        if item["price"] <= lowest:
            lowest = item["price"]
            product_title = item["title"]
            prod = "The cheapest product is " + product_title + " at $" + str(lowest) 
    return json.dumps(prod)

@app.get("/api/catalog/highest")
def get_highest():
    highest = catalog[0]["price"]
    for item in catalog:
        if item["price"] >= highest:
            highest = item["price"]
            product_title = item["title"]
            prod = "The most expensive product is " + product_title + " at $" + str(highest) 
    return json.dumps(prod)

# Return product by id number
@app.get("/api/product/<id>")
def get_prod_id(id):
    for item in catalog:
        if  item["_id"] == id:
            return item
    return "Something went wrong."

# Return product by id number
@app.get("/api/products/<category>")
def get_prod_by_category(category):
    categoryArray = []
    for item in catalog:
        if  (item["category"].lower() == category.lower()):
            categoryArray.append(item) 

    return categoryArray

###############################################################################################
################################## Rock, Paper, Scissors API ##################################
###############################################################################################
### play rock, paper, scissors                                                              ###
### /api/game/paper                                                                         ###
### return should be a dictionary (as json)                                                 ###
### {                                                                                       ###
###   "you": paper,                                                                         ###
###   "pc": rock,                                                                           ###
###   "winner": you                                                                         ###
### }                                                                                       ###
### step 1: create endpoint return {"pc": rock }                                            ###
### step 2: generate a random number between 0 and 2                                        ###
### change the number to be rock, paper or scissors                                         ###
### return                                                                                  ###
### {                                                                                       ###
###   "you": paper,                                                                         ###
###   "pc": rock,                                                                           ###
### }                                                                                       ###
### step 3                                                                                  ###
### finish the logic to pick the winner                                                     ###
###############################################################################################
###############################################################################################

@app.get("/api/game/<choice>")
def get_play(choice):
    game = {}
    # Validate choice to ignore capitalization inputs
    if choice.lower() == "rock" or choice.lower() == "paper" or choice.lower() == "scissors":
        game["you"] = choice.lower()
    else:
        return abort(400, "Please type rock, paper, or scissors")

    game["pc"] = randint(0, 2)
    # Convert back to rock, paper, scissors string
    if game["pc"] == 0:
        game["pc"] = "rock"
    elif game["pc"] == 1:
        game["pc"] = "paper"
    elif game["pc"] == 2:
        game["pc"] = "scissors"

    # if game["you"] == "rock" and game["pc"] == "rock" or game["you"] == "paper" and game["pc"] == "paper" or game["you"] == "scissors" and game["pc"] == "scissors":
    #     game["winner"] = "tie"

    if game["you"] == "rock" and game["pc"] == "scissors" or game["you"] == "paper" and game["pc"] == "rock" or game["you"] == "scissors" and game["pc"] == "paper":
        game["winner"] = "you"
    elif game["pc"] == "rock" and game["you"] == "scissors" or game["pc"] == "paper" and game["you"] == "rock" or game["pc"] == "scissors" and game["you"] == "paper":
        game["winner"] = "pc"
    else:
        game["winner"] = "tie"

    return json.dumps(game)

# app.run(debug=True)
