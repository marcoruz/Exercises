

datei = open("fuhrpark.txt", "+a")

#datei schreiben
eingabe = input("Welches Auto soll in die Liste:")
einzelne_autos = eingabe.split(",")

#datei schließen
for i in einzelne_autos:
    datei.write(i + "\n")
    
datei.close()

