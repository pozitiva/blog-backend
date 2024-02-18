FROM node:20
# Postavi radni direktorijum u kontejneru
WORKDIR /app
# Kopiraj package.json i package-lock.json da bi se omogućio korak instalacije zavisnosti
COPY package*.json ./

# Instaliraj zavisnosti
RUN npm install

# Kopiraj preostale fajlove aplikacije
COPY . .

# Izloži port na kojem aplikacija sluša
EXPOSE 8800

# Komanda za pokretanje aplikacije
CMD ["npm", "start"]

