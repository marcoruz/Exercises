n = int(input("Bitte eine positive Zahl eingeben: "))

if n == 0:
    n = 1
else:
    for i in range(1,n):
        n = n * i
print(n)