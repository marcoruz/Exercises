#while-Schleife Über while-Schleifen kann Python-Code solange ausgeführt werden, bis eine vorgegebene Bedingung eintrifft

#count = 1
#while count <= 33.0:
  #print(count)
 # count += 1.5 #erhöht count um 1 nach jeder Iteration

#i = 1
#n = 5

#while i <= n:
  #print(i)
  #i = i +1
  
  
while True:
    user_input = input(" Geben sie etwas ein (oder 'ende', um das Programm zu beendet): ")
    if user_input == 'ende':
       break #Beende die Schleife , wenn der Benutzer "ende" eingibt
    print(f"Sie haben {user_input} eingeben.")