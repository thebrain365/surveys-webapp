# surveys-website

This is a practical assignment for Tshimologong Software Development Internship Programme.

Website settings:
  - Use docker to host mysql
  - runs on port :3000

To run this project, you will need:
  - .env file with the following variables defined
      - MYSQL_ROOT_PASSWORD=root_password
      - MYSQL_DATABASE=survey_app_db
      - MYSQL_USER=user
      - MYSQL_PASSWORD=password
      - MYSQL_HOST=localhost
      - DATABASE_URL=mysql://root:${MYSQL_ROOT_PASSWORD}@${MYSQL_HOST}:3306/${MYSQL_DATABASE}
   
  - You can either run "docker compose up" or start your own mysql database (make sure to provide the .env file with the credentials)

  - Run "npm install --production && npm install prisma"

  - Run "npx prisma db seed" to insert data use in the webapp

  - Run "npm run build && npm run start" to build and start the application
