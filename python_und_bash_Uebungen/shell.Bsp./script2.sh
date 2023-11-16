#!/bin/bash


mkdir meine_dateien
touch datei1 datei2 datei3
mv datei1 meine_dateien/    
mv datei2 meine_dateien/    
mv datei3 meine_dateien/    
tar –cf backup.tar meine_dateien/
rm –rf meine_dateien
tar –xf backup.tar 


echo “Das Skript wurde ausgeführt!“

