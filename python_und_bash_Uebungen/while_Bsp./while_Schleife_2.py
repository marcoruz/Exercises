
#       Herausforderung 


#       sortieren



# unsortierte liste
unsorted_list = []


#       eingabe 
while True:
    element_input = input("     Eingabe zur Liste zufügen und Enter bestätiggen ")
    if (element_input != "q"):
        value = str(element_input)
        unsorted_list.append(value)        
    elif (element_input == "q"):
        break
print("Liste : " , unsorted_list)

# sortieren
sorted_list = sorted(unsorted_list)
print("Sortiert : " , sorted_list)
sorted_list.sort(reverse=True)
print(sorted_list)