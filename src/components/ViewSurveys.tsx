import React from "react";
import { surveyStats } from "@/lib/dbService";
import { PeopleStats } from "@/lib/types";

export default async function ViewSurveys() {
   let stats: PeopleStats = {
      totalSurveys: 0,
      averageAge: 0,
      maxAge: 0,
      minAge: 0,
      pizzaRatio: 0,
      pastaRatio: 0,
      papandworsRatio: 0,
      averageMovieRating: 0,
      averageRadioRating: 0,
      averageEatOutRating: 0,
      averageTvRating: 0,
   };

   await surveyStats().then((data) => {
      stats = data;
   });

   return (
      <div id="survey-results">
         <h1>Survey Results</h1>
         <section>
            <table>
               <tbody>
                  <tr>
                     <td>Total number of surveys:</td>
                     <td>{stats.totalSurveys}</td>
                  </tr>
                  <tr>
                     <td>Average Age:</td>
                     <td>{stats.averageAge}</td>
                  </tr>
                  <tr>
                     <td>Oldest person who particiated in survey</td>
                     <td>{stats.maxAge}</td>
                  </tr>
                  <tr>
                     <td>Youngest person who particiated in survey</td>
                     <td>{stats.minAge}</td>
                  </tr>
               </tbody>
            </table>
         </section>

         <section>
            <table>
               <tbody>
                  <tr>
                     <td>Percentage of people who like Pizza:</td>
                     <td>{stats.pizzaRatio}%</td>
                  </tr>
                  <tr>
                     <td>Percentage of people who like Pasta:</td>
                     <td>{stats.pastaRatio}%</td>
                  </tr>
                  <tr>
                     <td>Percentage of people who like Pap and Wors:</td>
                     <td>{stats.papandworsRatio}%</td>
                  </tr>
               </tbody>
            </table>
         </section>

         <section>
            <table>
               <tbody>
                  <tr>
                     <td>People who like to watch movies:</td>
                     <td>{stats.averageMovieRating}</td>
                  </tr>
                  <tr>
                     <td>People who like to listen to radio:</td>
                     <td>{stats.averageRadioRating}</td>
                  </tr>
                  <tr>
                     <td>People who like to eat out:</td>
                     <td>{stats.averageEatOutRating}</td>
                  </tr>
                  <tr>
                     <td>People who like to watch TV:</td>
                     <td>{stats.averageTvRating}</td>
                  </tr>
               </tbody>
            </table>
         </section>
      </div>
   );
}
