
def get_grosse(num1, num2):
    if num1 > num2:
        return num1
    else:   
        return num2

def get_kleine(num1, num2):
    if num1 < num2:
        return num1
    else:
        return num2

num1 = int(input("Enter nuber1: "))
num1 = int(input("Enter nuber1: "))
num1 = int(input("Enter nuber3: "))

grosse = get_grosse(get_grosse(num1, num2), num3)
kleine = get_kleine(get_kleine(num1, num2), num3)

print("GROSSE", grosse)
print("KLEINE:", kleine)