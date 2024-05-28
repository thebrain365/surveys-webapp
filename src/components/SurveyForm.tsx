"use client";

import { useFormStatus } from "react-dom";

type SubmitFunction = (formData: FormData) => void;

interface SurveyFormProp {
   submitSurvey: SubmitFunction;
}

export default function SurveyForm({ submitSurvey }: SurveyFormProp) {
   const { pending } = useFormStatus();
   return (
      <form action={submitSurvey}>
         <section>
            <p>Personal Details:</p>
            <div>
               <label>
                  <span>Full Names</span>
                  <input type="text" name="full_names" required />
               </label>
               <label>
                  <span>Email</span>
                  <input type="text" name="email" required />
               </label>
               <label>
                  <span>Data of Birth</span>
                  <input type="date" name="dob" required />
               </label>
               <label>
                  <span>Contact Number</span>
                  <input type="text" name="contact" required />
               </label>
            </div>
         </section>

         <section>
            <p>What is your favourite food?</p>
            <div>
               <label>
                  <input type="checkbox" name="pizza" />
                  <span>Pizza</span>
               </label>
               <label>
                  <input type="checkbox" name="pasta" />
                  <span>Pasta</span>
               </label>
               <label>
                  <input type="checkbox" name="papandwors" />
                  <span>Pap and Wors</span>
               </label>
               <label>
                  <input type="checkbox" name="other" />
                  <span>Other</span>
               </label>
            </div>
         </section>

         <section>
            <p>
               Please rate your level of agreement on a scale from 1 to 5, with
               1 being &quot;strongly agree&quot; and 5 being &quot;strongly
               disagree.&quot;
            </p>
            <div>
               <table>
                  <thead>
                     <tr>
                        <th>Strongly Agree</th>
                        <th>Agree</th>
                        <th>Neutral</th>
                        <th>Disagree</th>
                        <th>Strongly Disagree</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td>I like to watch movies</td>
                        <td>
                           <input
                              type="radio"
                              name="movies"
                              value="1"
                              required
                           />
                        </td>
                        <td>
                           <input
                              type="radio"
                              name="movies"
                              value="2"
                              required
                           />
                        </td>
                        <td>
                           <input
                              type="radio"
                              name="movies"
                              value="3"
                              required
                           />
                        </td>
                        <td>
                           <input
                              type="radio"
                              name="movies"
                              value="4"
                              required
                           />
                        </td>
                        <td>
                           <input
                              type="radio"
                              name="movies"
                              value="5"
                              required
                           />
                        </td>
                     </tr>
                     <tr>
                        <td>I like to listen to radio</td>
                        <td>
                           <input
                              type="radio"
                              name="radio"
                              value="1"
                              required
                           />
                        </td>
                        <td>
                           <input
                              type="radio"
                              name="radio"
                              value="2"
                              required
                           />
                        </td>
                        <td>
                           <input
                              type="radio"
                              name="radio"
                              value="3"
                              required
                           />
                        </td>
                        <td>
                           <input
                              type="radio"
                              name="radio"
                              value="4"
                              required
                           />
                        </td>
                        <td>
                           <input
                              type="radio"
                              name="radio"
                              value="5"
                              required
                           />
                        </td>
                     </tr>
                     <tr>
                        <td>I like to eat out</td>
                        <td>
                           <input
                              type="radio"
                              name="eatOut"
                              value="1"
                              required
                           />
                        </td>
                        <td>
                           <input
                              type="radio"
                              name="eatOut"
                              value="2"
                              required
                           />
                        </td>
                        <td>
                           <input
                              type="radio"
                              name="eatOut"
                              value="3"
                              required
                           />
                        </td>
                        <td>
                           <input
                              type="radio"
                              name="eatOut"
                              value="4"
                              required
                           />
                        </td>
                        <td>
                           <input
                              type="radio"
                              name="eatOut"
                              value="5"
                              required
                           />
                        </td>
                     </tr>
                     <tr>
                        <td>I like to watch TV</td>
                        <td>
                           <input type="radio" name="tv" value="1" required />
                        </td>
                        <td>
                           <input type="radio" name="tv" value="2" required />
                        </td>
                        <td>
                           <input type="radio" name="tv" value="3" required />
                        </td>
                        <td>
                           <input type="radio" name="tv" value="4" required />
                        </td>
                        <td>
                           <input type="radio" name="tv" value="5" required />
                        </td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </section>
         <button type="submit">
            {!pending && "SUBMIT"}
            {pending && "SUBMITTING SURVEY"}
         </button>
      </form>
   );
}
