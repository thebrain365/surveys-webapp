const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
   await prisma.books.createMany({
      data: [
         {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            published_year: 1960,
            genre: "Fiction",
         },
         {
            title: "1984",
            author: "George Orwell",
            published_year: 1949,
            genre: "Dystopian",
         },
         {
            title: "Pride and Prejudice",
            author: "Jane Austen",
            published_year: 1813,
            genre: "Romance",
         },
         {
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            published_year: 1925,
            genre: "Tragedy",
         },
         {
            title: "Moby Dick",
            author: "Herman Melville",
            published_year: 1851,
            genre: "Adventure",
         },
      ],
   });
}

main()
   .then(async () => {
      await prisma.$disconnect();
   })
   .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
   });
