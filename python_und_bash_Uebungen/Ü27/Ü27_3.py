#Kostenrechner
print("Kostenrechner")
print("==============")
rotwein_pro_Flasche = 12.99
rosewein_pro_Flasche = 9.98
weiswein_pro_Flasche = 11.99

anzahl_rotwein = input("Anzahl_Rotwein: ")
anzahl_rosewein = input("Anzahl_Rosewein: ")
anzahl_weiswein = input("Anzahl_Weiswein: ")

Menge = rotwein_pro_Flasche * int(anzahl_rotwein) + rosewein_pro_Flasche * int(anzahl_rosewein) + weiswein_pro_Flasche * int(anzahl_weiswein)

print("Die " " Gesamtkosten " " betragen " " " + str(Menge) + " €. ")