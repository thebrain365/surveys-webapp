import { z } from "zod";

export type SubmitFunction = (surveyForm: SurveyForm) => Promise<boolean>;

export type SurveyFormProps = {
   submitSurvey: SubmitFunction;
};

export type PeopleStats = {
   totalSurveys: number;
   averageAge: number;
   maxAge: number;
   minAge: number;

   pizzaRatio: number;
   pastaRatio: number;
   papandworsRatio: number;

   averageMovieRating: number;
   averageRadioRating: number;
   averageEatOutRating: number;
   averageTvRating: number;
};

let currentDate = new Date();
let minYear = currentDate.getFullYear() - 121;
let maxYear = currentDate.getFullYear() - 4;
export const SurveyFormSchema = z.object({
   full_name: z.string().regex(/[a-zA-Z]+$/i, {
      message: "ERROR: Names can only contain letters",
   }),
   email: z
      .string()
      .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i, {
         message: "ERROR: Please enter a valid email",
      }),
   dob: z
      .date()
      .min(new Date(currentDate.setFullYear(minYear)), {
         message:
            "ERROR: You are too YOUNG. You must be 5 to 120 years old to partipate",
      })
      .max(new Date(currentDate.setFullYear(maxYear)), {
         message:
            "ERROR: You are too OLD. You must be 5 to 120 years old to partipate",
      }),
   contact: z.string().regex(/^[0-9]+$/i, {
      message: "ERROR: Contact Numbers can only contain digits",
   }),
   foods: z
      .object({
         connect: z.array(z.object({ id: z.string() })),
      })
      .optional(),
   preferences: z.object({
      create: z.array(
         z.object({
            rating: z.string(),
            preference: z.object({
               connect: z.object({
                  id: z.string(),
               }),
            }),
         }),
      ),
   }),
});

export type SurveyForm = z.infer<typeof SurveyFormSchema>;
