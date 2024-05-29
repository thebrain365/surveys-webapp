import { SurveyForm } from "@/lib/types";

export function transformFormData(formData: FormData): SurveyForm {
   let surveyForm: SurveyForm = {
      full_name: formData.get("full_names") as string,
      email: formData.get("email") as string,
      dob: new Date(formData.get("dob") as string),
      contact: formData.get("contact") as string,
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
   };

   let foodsArray = [];

   if (formData.get("pizza")) foodsArray.push("pizza");
   if (formData.get("pasta")) foodsArray.push("pasta");
   if (formData.get("papandwors")) foodsArray.push("papandwors");
   if (formData.get("other")) foodsArray.push("other");

   if (foodsArray.length > 0) {
      surveyForm.foods = {
         connect: foodsArray.map((id) => ({ id })),
      };
   }

   return surveyForm;
}
