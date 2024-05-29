import { PrismaClient } from "@prisma/client";
import { People } from "@/lib/seedData";

const prisma = new PrismaClient();

async function main() {
   await prisma.personOnPreference.deleteMany();
   await prisma.preference.deleteMany();
   await prisma.food.deleteMany();
   await prisma.person.deleteMany();

   await prisma.food.createMany({
      data: [
         { name: "Pizza", id: "pizza" },
         { name: "Pasta", id: "pasta" },
         { name: "Pap and Wors", id: "papandwors" },
         { name: "Other", id: "other" },
      ],
   });

   await prisma.preference.createMany({
      data: [
         { name: "Movies", id: "movies" },
         { name: "Radio", id: "radio" },
         { name: "Eat out", id: "eatOut" },
         { name: "Tv", id: "tv" },
      ],
   });

   // People.forEach(async (person) => {
   //    await prisma.person.create({
   //       data: {
   //          id: person.id,
   //          full_name: person.full_name,
   //          dob: person.dob,
   //          contact: person.contact,
   //          foods: {
   //             connect: person.food.map((id) => ({ id })),
   //          },
   //          preferences: {
   //             create: [
   //                {
   //                   rating: person.preference.movies,
   //                   preference: {
   //                      connect: {
   //                         id: "movies",
   //                      },
   //                   },
   //                },
   //                {
   //                   rating: person.preference.radio,
   //                   preference: {
   //                      connect: {
   //                         id: "radio",
   //                      },
   //                   },
   //                },
   //                {
   //                   rating: person.preference.eatOut,
   //                   preference: {
   //                      connect: {
   //                         id: "eatOut",
   //                      },
   //                   },
   //                },
   //                {
   //                   rating: person.preference.tv,
   //                   preference: {
   //                      connect: {
   //                         id: "tv",
   //                      },
   //                   },
   //                },
   //             ],
   //          },
   //       },
   //    });
   // });
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
