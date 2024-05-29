import { PrismaClient } from "@prisma/client";
import { PeopleStats, SurveyForm } from "@/lib/types";

const prisma = new PrismaClient();

const decimalPlace = 1;

export const submitSurvey = async (
   surveyForm: SurveyForm,
): Promise<boolean> => {
   "use server";

   try {
      await prisma.person.create({
         data: surveyForm,
      });
   } catch (error) {
      return false;
   }

   return true;
};

export const surveyStats = async (): Promise<PeopleStats> => {
   let people = await prisma.person.findMany();

   // Total number of surveys
   let totalSurveys = people.length;

   // Average Age
   let averageAge = 0,
      currentDate = new Date().getFullYear();
   people.forEach((person) => {
      averageAge += currentDate - person.dob.getFullYear();
   });

   averageAge = parseFloat((averageAge / totalSurveys).toFixed(decimalPlace));

   // Oldest person who particiated in survey
   let maxAge = 0;
   people.forEach((person) => {
      let age = currentDate - person.dob.getFullYear();
      if (age > maxAge) maxAge = age;
   });

   // Youngest person who particiated in survey
   let minAge = 120;
   people.forEach((person) => {
      let age = currentDate - person.dob.getFullYear();
      if (age < minAge) minAge = age;
   });

   // Percentage of people who like Pizza
   let pizzaPeople = await prisma.person.findMany({
      where: {
         foods: {
            some: {
               id: "pizza",
            },
         },
      },
   });

   let pizzaRatio = parseFloat(
      ((pizzaPeople.length / people.length) * 100).toFixed(decimalPlace),
   );

   // Percentage of people who like Pasta
   let pastaPeople = await prisma.person.findMany({
      where: {
         foods: {
            some: {
               id: "pasta",
            },
         },
      },
   });

   let pastaRatio = parseFloat(
      ((pastaPeople.length / people.length) * 100).toFixed(decimalPlace),
   );

   // Percentage of people who like Pap and Wors
   let papandworsPeople = await prisma.person.findMany({
      where: {
         foods: {
            some: {
               id: "papandwors",
            },
         },
      },
   });

   let papandworsRatio = parseFloat(
      ((papandworsPeople.length / people.length) * 100).toFixed(decimalPlace),
   );

   // People who like to watch movies
   let movieRatings = await prisma.personOnPreference.findMany({
      where: {
         preference: {
            id: "movies",
         },
      },
   });

   let averageMovieRating = 0;
   movieRatings.forEach((movie) => {
      averageMovieRating += parseInt(movie.rating);
   });

   averageMovieRating = parseFloat(
      (averageMovieRating / movieRatings.length).toFixed(decimalPlace),
   );

   // People who like to watch radio
   let radioRatings = await prisma.personOnPreference.findMany({
      where: {
         preference: {
            id: "radio",
         },
      },
   });

   let averageRadioRating = 0;
   radioRatings.forEach((radio) => {
      averageRadioRating += parseInt(radio.rating);
   });

   averageRadioRating = parseFloat(
      (averageRadioRating / radioRatings.length).toFixed(decimalPlace),
   );

   // People who like to watch eatOut
   let eatOutRatings = await prisma.personOnPreference.findMany({
      where: {
         preference: {
            id: "eatOut",
         },
      },
   });

   let averageEatOutRating = 0;
   eatOutRatings.forEach((eatOut) => {
      averageEatOutRating += parseInt(eatOut.rating);
   });

   averageEatOutRating = parseFloat(
      (averageEatOutRating / eatOutRatings.length).toFixed(decimalPlace),
   );

   // People who like to watch tv
   let tvRatings = await prisma.personOnPreference.findMany({
      where: {
         preference: {
            id: "tv",
         },
      },
   });

   let averageTvRating = 0;
   tvRatings.forEach((tv) => {
      averageTvRating += parseInt(tv.rating);
   });

   averageTvRating = parseFloat(
      (averageTvRating / tvRatings.length).toFixed(decimalPlace),
   );

   return {
      totalSurveys: totalSurveys,
      averageAge: averageAge,
      maxAge: maxAge,
      minAge: minAge,

      pizzaRatio: pizzaRatio,
      pastaRatio: pastaRatio,
      papandworsRatio: papandworsRatio,

      averageMovieRating: averageMovieRating,
      averageRadioRating: averageRadioRating,
      averageEatOutRating: averageEatOutRating,
      averageTvRating: averageTvRating,
   };
};
