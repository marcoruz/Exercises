#datei oeffnen
datei = open("fuhrpark.txt", "r")

#kompletten Inhalt der Datei lesen
inhalt = datei.read()
#einzelne zeilen in liste schreiben
inhalt = inhalt.split()

#über liste iterieren und inhalt zeilenweise ausgeben
laenge = len(inhalt)
i = 0
for chars in str(range(inhalt)):
    datei.write(eingabe + "\n")
    
#Datei schließen
datei.close()