"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SelectPage() {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);
  const handleNavigation = (section: string) => {
    if (section === "hrm") {
      router.push("/dashboard-hrm");
    } else if (section === "crm") {
      router.push("/dashboard-crm");
    }
  };

  return (
    <div className="flex h-screen">
      {isClient && (
        <>
          <div
            className={`w-1/2 h-full flex justify-center items-center transition-all duration-500 cursor-pointer ${
              hoveredSection === "hrm"
                ? "bg-oceanBlue brightness-110 shadow-lg"
                : hoveredSection === "crm"
                ? "bg-steelBlue opacity-70"
                : "bg-steelBlue"
            }`}
            onMouseEnter={() => setHoveredSection("hrm")}
            onMouseLeave={() => setHoveredSection(null)}
            onClick={() => handleNavigation("hrm")}
          >
            <h1 className="text-white text-6xl font-bold">HRM</h1>
          </div>
          <div
            className={`w-1/2 h-full flex justify-center items-center transition-all duration-500 cursor-pointer ${
              hoveredSection === "crm"
                ? "bg-gold brightness-110 shadow-lg"
                : hoveredSection === "hrm"
                ? "bg-brown opacity-70"
                : "bg-brown"
            }`}
            onMouseEnter={() => setHoveredSection("crm")}
            onMouseLeave={() => setHoveredSection(null)}
            onClick={() => handleNavigation("crm")}
          >
            <h1 className="text-white text-6xl font-bold">CRM</h1>
          </div>
        </>
      )}
    </div>
  );
}
