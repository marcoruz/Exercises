#msh
while True:
    eingabe = input("$>>") #echo ausgabe
    x = eingabe.split(" ")
    if x[0] == "echo":
        for i in range(1, len(x)):
         print(x[i], end=" ")
        print()
    elif x[0] == "exit":
        break
    elif x[0] == "touch": #touch datei1
      if len(x) >= 2:
        open(x[1], "x")
    else:
        print("bitte einen Dateinamen angeben")