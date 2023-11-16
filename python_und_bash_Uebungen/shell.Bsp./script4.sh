#!/bin/bash

# Script erstellt Archive aus dem Backup
echo "Bitte einen Namen Eingeben"
read Vari
Vari=$Vari.tar
Vari2=/tmp/meine_backup
  

echo "$(date +%H:%M:%S):$(date)"

#Um den Ordner /home/debian zu sichern, darf man sich nicht in diesem Ordner befinden!
#cd $Vari2

#Ein Backup vom Homeverzeichnis
tar –czf $Vari /home/debian/

echo "Der Name des Ordner": $HOME

#erstellt mir in tmp mein Backup Ordner
mkdir /tmp/meine_backup

# Im Verzeichnis zum kopieren wechseln
cd /home/debian

# Das Backup in den meine_backup Ordner kopieren   
cp $Vari /$Vari2/$Vari   

# Im Verzeichnis zum löschen wechseln
cd /home/debian

# Das Benutzerverzeichnis löschen
rm –rf /home/debian/*

#Verzeichnis wechseln
cd $Vari2

tar –xf $Vari –C /

echo "Name des Archiv": $Vari

echo "Pfad des Archiv": $Vari2

echo "$(date +%H:%M:%S):$(date)"

