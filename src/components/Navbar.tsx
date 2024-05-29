"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {

   const toggleActive = () => {
      document.querySelectorAll(".link").forEach(element => {
         element.classList.toggle("active-link")
      })
   }

   return (
      <nav>
         <h1>_Surveys</h1>
         <Link href="/" className="link active-link" onClick={toggleActive}>FILL OUT SURVEY</Link>
         <Link href="/view-surveys" className="link" onClick={toggleActive}>VIEW SURVEY RESULTS</Link>
      </nav>
   );
}
