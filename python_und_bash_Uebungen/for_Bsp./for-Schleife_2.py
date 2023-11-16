#for-Schleife wird verwendet, um über Elemente eines Objektes zu iterieren (ein Prozess bei dem Aktionen 
autos = ["Auto1", "Auto2", "Auto3", "Auto4", "Auto5"]

print("autos in der Garage")
for auto in autos:
    print(auto)

ausgeliehene_autos = input("Geben Sie die ausgehliehen autos, durch ein komma ein: ")
ausgeliehene_autos = ausgeliehene_autos.split(",")

#liste der verbleibenden autos in der Garage
verbliebenen_autos = [auto for auto in autos if auto not in ausgeliehene_autos]

#verbleibende autos in der garage
print ("Verbleibende Autos in der Garage:")
for auto in verbliebenen_autos:
  print(auto)