Kleiderschrank = ["Hose", "T-shirt", "Kleid"]
Kommode = ["Schuhe", "Socken", "Muetzen"]

print(Kleiderschrank[0])
print(Kleiderschrank[1])
print(Kleiderschrank[2])

for Kleidungsstueck in Kleiderschrank:
    print (Kleidungsstueck.lower())
    
Kleiderschrank.append("Pullover")
for Kleidungsstueck in Kleiderschrank:
    print (Kleidungsstueck)
    
Kleiderschrank.extend(Kommode)    

print (Kleiderschrank)
print (len(Kleiderschrank))