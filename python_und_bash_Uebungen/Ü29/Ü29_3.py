#Anzahl der Vokale vom Benuzter ausgeben
Vokalezaehlen = str(input("Gib bitte irgend ein Text ein:"))
count = 0
i = 0 
for i in range(len((Vokalezaehlen))):
    if (
        (Vokalezaehlen[i] == "a")
        or (Vokalezaehlen[i] == "e")
        or (Vokalezaehlen[i] == "i")
        or (Vokalezaehlen[i] == "o")
        or (Vokalezaehlen[i] == "u")
    ):
        count += 1

nurtext = "Die Anzahl deiner Vokale im Text sind"    
strcount = str(count) 
print("Die Anzahl der Vokale im Text ist : ", strcount)

x = nurtext + " " + strcount + "\n"
with open("Vokale.txt", "w") as f:
     f.write(x)