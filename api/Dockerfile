# Base image
FROM node:18-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Set NODE_ENV to production
ENV NODE_ENV=production

# Expose port 3000 for the Node.js server
EXPOSE 3000

# Start the Node.js server
CMD ["npm", "start"]
# RUN npm start

# Iniciar NGINX en primer plano
# CMD ["nginx", "-g", "daemon off;"]