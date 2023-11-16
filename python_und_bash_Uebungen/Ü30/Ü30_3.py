
def Element(list, element):
    for element in list:
        if element == element:
            return True
    return False

obst = ["Huhn","Kuh","Pferd","Katze","Hund","Maus"]


print(element(list, "Hund"))
print(element(list, "Katze"))