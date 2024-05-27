import Image from "next/image";
import { PrismaClient, books } from "@prisma/client";

const prisma = new PrismaClient();

export default async function Home() {
   await prisma.books.create({
      data: {
         title: "book 1",
         author: "Shakes",
         published_year: 2024,
         genre: "best seller",
      },
   });

   let books: books[] = [];

   await prisma.books
      .findMany()
      .then((data) => {
         books = [...data];
      })
      .catch((err) => {
         console.log(err);
      });

   return (
      <main>
         <h1>Muano Makhokha</h1>
         <div>
            {books.map((book: books) => (
               <div key={book.id}>
                  <h3>{book.title}</h3>
                  <p>{book.author}</p>
               </div>
            ))}
         </div>
      </main>
   );
}
