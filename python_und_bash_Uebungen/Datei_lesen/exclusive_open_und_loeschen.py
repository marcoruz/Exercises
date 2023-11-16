import os
import math
try:
    
    #datei öffnen zum schreiben
   datei = open("text.txt", "x")

   text = "hallo, das ist einfacher text"

   datei.write(text)

   datei.close()
   print("Datei wurde geschlossen")
except FileExistsError:
    eingabe = input("die Datei existiert schon, soll ich sie löschen: ")
    if eingabe.capitalize() == "J":
        os.remove("text.txt")   
except:
   print("etwas ist schief gelaufen")
finally:
    
    print("Datei wurde geschlossen")
    