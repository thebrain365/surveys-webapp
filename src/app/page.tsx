import Image from "next/image";
import { PrismaClient } from "@prisma/client";

import SurveyForm from "@/components/SurveyForm";

const prisma = new PrismaClient();

export default async function Home() {
   const submitSurvey = async (formData: FormData) => {
      "use server";

      console.log(formData);
   };
   return (
      <main>
         <SurveyForm submitSurvey={submitSurvey} />
      </main>
   );
}
