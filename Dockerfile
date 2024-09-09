# Use an official Node.js runtime as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Install a lightweight web server to serve the build
RUN npm install -g serve

# Expose the port on which the app will run
EXPOSE 5000

# Command to serve the build
CMD ["serve", "-s", "build", "-l", "5000"]
