FROM node:20

WORKDIR /app

COPY package.json package-lock.json ./

COPY prisma ./prisma/

RUN npm install

COPY . .

RUN npm install prisma @prisma/client

EXPOSE 3000

CMD ["sh", "-c", "npx prisma migrate deploy && npm run dev"]

