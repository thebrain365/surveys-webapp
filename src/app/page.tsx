import SurveyForm from "@/components/SurveyForm";
import { submitSurvey } from "@/lib/dbService";

export default async function Home() {
   return (
      <main>
         <SurveyForm submitSurvey={submitSurvey} />
      </main>
   );
}
