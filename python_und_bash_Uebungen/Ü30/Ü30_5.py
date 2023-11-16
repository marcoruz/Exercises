def check_leap(jahr):
    if (jahr % 400 == 0) or (jahr % 100 != 0) and (jahr % 4 == 0):
        print(f"{jahr} (JA)")
    else:
        print(f"{jahr} (NEIN)")
        
check_leap(1900)
print("kein Schaltjahr")

check_leap(2000)
print("kein Schaltjahr")

check_leap(2004)
print("kein Schaltjahr")

check_leap(2006)
print("kein Schaltjahr")