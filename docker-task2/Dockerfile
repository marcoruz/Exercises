#  Node.js-Image 
FROM node:14

#  Arbeitsverzeichnis im Container
WORKDIR /app

# Kopiere die Paketdateien und den Quellcode in das Arbeitsverzeichnis
COPY package*.json ./


# Installiere Abhängigkeiten
RUN npm install

# den Quellcode in das Arbeitsverzeichnis
COPY server.js ./

# Exponiere den Port, auf dem die App laufen wird
EXPOSE 3000

# Starte die Anwendung beim Start des Containers
CMD ["node", "server.js"]







