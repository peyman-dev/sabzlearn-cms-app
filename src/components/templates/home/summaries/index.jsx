import React from "react";
import SummaryCard from "./fragments/summary-card";
import { generateSummaries } from "../modules";

export default function Summaries() {
  // Fetch 'Items' dynamicly and generate Options
  const summaries = generateSummaries({
    adminsLength: 4,
    productsLength: 12,
    ticketsLength: 5,
    usersLength: 32,
  });
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-5 mt-6">
      {summaries.map((summary) => (
        <SummaryCard {...summary} key={summary.id}/>
      ))}
    </div>
  );
}
