
# Use the Node.js 12.2.0 Alpine base image
FROM node:12.2.0-alpine

# Set the working directory inside the container to /app
WORKDIR /app

# Copy the current directory's files and directories to the /app directory inside the container
COPY . .
