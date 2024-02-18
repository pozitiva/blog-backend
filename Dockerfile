# Koristi Node.js base image
FROM node:20

# Postavi radni direktorij
WORKDIR /app

# Kopiraj package.json i package-lock.json
COPY package*.json ./

# Instaliraj zavisnosti
RUN npm install

# Kopiraj ostatak aplikacije
COPY . .

# Pokreni aplikaciju
CMD [ "npm", "start" ]
