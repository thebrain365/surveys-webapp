"use client";

import React from "react";
import Link from "next/link";

export default function Navbar() {
   return (
      <nav>
         <h1>_Surveys</h1>
         <Link href="/">FILL OUT SURVEY</Link>
         <Link href="/view-surveys">VIEW SURVEY RESULTS</Link>
      </nav>
   );
}
