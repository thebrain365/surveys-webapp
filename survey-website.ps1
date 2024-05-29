# PowerShell script to run specified commands sequentially

# Run Docker Compose up
Start-Process "docker-compose" -ArgumentList "up" -NoNewWindow -Wait

# Run npm install for production dependencies
npm install --production

# Install Prisma
npm install prisma

# Run Prisma database seed
npx prisma db seed

# Build the project
npm run build

# Start the project
npm start
