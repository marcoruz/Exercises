import time 
import datetime 
#from datetime import *
def countdown(t): 

    while t:
        mins, secs = divmod(t, 60)
        hours, mins = divmod(mins, 60) # dividieren durch 60 für Stunden
        days, hours = divmod(hours, 24) # dividieren durch 24 für Tage
        timer = '{:02d}:{:02d}:{:02d}:{:02d}'.format(days, hours, mins, secs) 
        print(timer, end="\r") 
        time.sleep(1) 
        t -= 1

    print('Ferienzeit!!') 
    
act_time = datetime.datetime.now()
time_bis_ferien =datetime.datetime(2023,4,11)
diff = time_bis_ferien - act_time
bis_zu_den_Ferien_in_sec = 24*diff*60*60
t = bis_zu_den_Ferien_in_sec
tage = diff.days
stunden = diff.seconds/3600
minuten = diff.seconds/60
sekunden = diff.seconds
print(tage,stunden,minuten,diff.seconds)
