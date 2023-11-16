print("Zahlenraten")
print("===========")
import random
inSchleife = True
versuche = 0
zufallszahlen = random.randint(0,9)



while inSchleife:
    versuche = versuche + 1
    print(versuche)
    eingabezahl = int(input("Bitte eine Zahl zwischen 0 und 9 eingeben, mal sehen ob du diese eraten kannst. Bitte Zahl eingeben: "))
    if eingabezahl == zufallszahlen:
        print("Super, genau richtig erraten")
        inSchleife = False
        exit
    elif eingabezahl < zufallszahlen:
        print("Die eingegeben Zahl ist kleiner als die Zufallszahl")
    else:
        print("Die eingegebene Zahl ist größer als die Zufallszahl")
        
    if  (versuche == 7):
      #zufallszahlen = str(zufallszahlen)
         print("Schade, die gesuchte Zahl war" " " + str(zufallszahlen))
         print("Du benötigtes", versuche,"versuche")
         print("Auf Wiedersehen")
         inSchleife = False
    exit

    
