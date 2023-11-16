#sortieren
print("sortieren der Wörter von Z nach A")
print("==============")

woerter = []
woerter = [str(item) for item in input("Bitte Wörter zum sortieren eingeben, für Ausgabe der Wörter (enter-Taste): ").split()]
woerter.sort(reverse=True)

print('Sortiert_Z_nach A:',woerter)