zahl1 = input("Bitte erste Zahl:")
zahl2 = input("Bitte erste Zahl:")

try:
    ergebnis = int(zahl1) / int(zahl2)
    print(ergebnis)
except ZeroDivisionError:
    print("Durch 0 Teilen in Mathe verboten")
except ValueError:
    print("Bitte eine Zahl eingeben")
finally:
    print("Alles gut!")