"use client";

import { dashboardData } from "../mocks/Dashboard";
import { Section } from "../components/Section/Section";
import { NavBar } from "../components/NavBar/NavBar";
export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gradient-to-b bg-oceanBlue to-blue-800">
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="grid grid-rows-4 grid-cols-2 gap-4 h-full">
          {dashboardData.map(({ name, id }) => (
            <Section key={id} name={name} />
          ))}
        </div>
      </main>
      <NavBar />
    </div>
  );
}
