from data import me
# get data from dictionary 
print(me["first_name"] + " " + me["last_name"])

# Modify
me["color"] = "gray"

# Add
me["age"] = "36"

if "title" in me:
    print(me["title"])
else:
    print('The key "title" does not exists in this distionary!')

address = me["address"]
print(address["street"] + " " + str(address["number"]) + ", " + address["city"] + ", " + address["state"])