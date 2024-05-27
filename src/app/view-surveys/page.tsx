import React from "react";

export default function ViewSurveys() {
   return (
      <div>
         <h1>Survey Results</h1>
         <section>
            <table>
               <tr>
                  <td>Total number of surveys:</td>
                  <td>#surveys</td>
               </tr>
               <tr>
                  <td>Average Age:</td>
                  <td>#avetage age</td>
               </tr>
               <tr>
                  <td>Oldest person who particiated in survey</td>
                  <td>#max age</td>
               </tr>
               <tr>
                  <td>Youngest person who particiated in survey</td>
                  <td>#min age</td>
               </tr>
            </table>
         </section>

         <section>
            <table>
               <tr>
                  <td>Percentage of people who like Pizza:</td>
                  <td># % Pizza</td>
               </tr>
               <tr>
                  <td>Percentage of people who like Pasta:</td>
                  <td># % Pasta</td>
               </tr>
               <tr>
                  <td>Percentage of people who like Pap and Wors:</td>
                  <td># % Pap and Wors</td>
               </tr>
            </table>
         </section>

         <section>
            <table>
               <tr>
                  <td>People who like to watch movies:</td>
                  <td>#average of rating</td>
               </tr>
               <tr>
                  <td>People who like to listen to radio:</td>
                  <td>#average of rating</td>
               </tr>
               <tr>
                  <td>People who like to eat out:</td>
                  <td>#average of rating</td>
               </tr>
               <tr>
                  <td>People who like to watch TV:</td>
                  <td>#average of rating</td>
               </tr>
            </table>
         </section>
      </div>
   );
}
