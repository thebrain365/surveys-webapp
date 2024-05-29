"use client";

import {
   SurveyFormSchema,
   type SurveyForm,
   type SurveyFormProps,
} from "@/lib/types";
import { transformFormData } from "@/lib/utils";
import toast from "react-hot-toast";

export default function SurveyForm({ submitSurvey }: SurveyFormProps) {
   const validateSurvey = async (formData: FormData) => {
      let surveyForm: SurveyForm = transformFormData(formData);

      let result = SurveyFormSchema.safeParse(surveyForm);

      if (!result.success) {
         result.error.issues.forEach((issue) => {
            toast.error(issue.message);
         });

         return;
      }

      await submitSurvey(surveyForm).then((response) => {
         if (response) {
            toast.success(
               "SUCCESS: Submission was successful. Refreshing page",
            );
            setTimeout(() => {
               window.location.reload();
            }, 3000);
         } else {
            toast.error(
               "ERROR: Something went wrong. Contact number or email already exist",
            );
         }
      });
   };

   return (
      <form action={validateSurvey}>
         <section id="personal_details">
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
                  <span>Date of Birth</span>
                  <input type="date" name="dob" required />
               </label>
               <label>
                  <span>Contact Number</span>
                  <input type="text" name="contact" required />
               </label>
            </div>
         </section>

         <section id="food">
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

         <section id="ratings">
            <p>
               Please rate your level of agreement on a scale from 1 to 5, with
               1 being &quot;strongly agree&quot; and 5 being &quot;strongly
               disagree.&quot;
            </p>
            <div>
               <table border={1}>
                  <thead>
                     <tr>
                        <th className="col-1"></th>
                        <th>Strongly Agree</th>
                        <th>Agree</th>
                        <th>Neutral</th>
                        <th>Disagree</th>
                        <th>Strongly Disagree</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td className="col-1">I like to watch movies</td>
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
                        <td className="col-1">I like to listen to radio</td>
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
                        <td className="col-1">I like to eat out</td>
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
                        <td className="col-1">I like to watch TV</td>
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
         <button type="submit">SUBMIT</button>
      </form>
   );
}
