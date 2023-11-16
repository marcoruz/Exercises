#Zeitrechner
print("Stundenrechner")
print("==============")
std = input("Gib eine natürliche Zahl ein (Stunde):")
if std.isdigit():
      min=int(std) * 60
      sec=int(min) * 60
      print("Das sind "+str(min)+" Minuten und "+str(sec)+" Sekunden!")
      print("WOW !")
else:
     print("Bitte Zahl eingeben")