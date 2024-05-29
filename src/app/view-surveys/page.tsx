import React from "react";
import { PrismaClient } from "@prisma/client";
import ViewSurveys from "@/components/ViewSurveys";
import NoSurveys from "@/components/NoSurveys";

const prisma = new PrismaClient();

export default async function ViewSurveysPage() {
   let surveyCount = (await prisma.person.findMany()).length;
   return (
      <main>
         {surveyCount === 0 && <NoSurveys />}
         {surveyCount > 0 && <ViewSurveys />}
      </main>
   );
}
