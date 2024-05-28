import Image from "next/image";
import { PrismaClient } from "@prisma/client";
import SurveyForm from "@/components/SurveyForm";

const prisma = new PrismaClient();

export default async function Home() {
   const submitSurvey = async (formData: FormData) => {
      "use server";

      let foodsArray = [];

      if (formData.get("pizza")) foodsArray.push("pizza");
      if (formData.get("pasta")) foodsArray.push("pasta");
      if (formData.get("papandwors")) foodsArray.push("papandwors");
      if (formData.get("other")) foodsArray.push("other");

      await prisma.person.create({
         data: {
            full_name: formData.get("full_names") as string,
            dob: new Date(formData.get("dob") as string),
            contact: formData.get("contact") as string,
            foods: {
               connect: foodsArray.map((id) => ({ id })),
            },
            preferences: {
               create: [
                  {
                     rating: formData.get("movies") as string,
                     preference: {
                        connect: {
                           id: "movies",
                        },
                     },
                  },
                  {
                     rating: formData.get("radio") as string,
                     preference: {
                        connect: {
                           id: "radio",
                        },
                     },
                  },
                  {
                     rating: formData.get("eatOut") as string,
                     preference: {
                        connect: {
                           id: "eatOut",
                        },
                     },
                  },
                  {
                     rating: formData.get("tv") as string,
                     preference: {
                        connect: {
                           id: "tv",
                        },
                     },
                  },
               ],
            },
         },
      });
   };
   return (
      <main>
         <SurveyForm submitSurvey={submitSurvey} />
      </main>
   );
}
