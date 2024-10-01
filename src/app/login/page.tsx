"use client";

import { useState } from "react";

export default function Login() {
  const [isRegistering, setIsRegistering] = useState(false);

  const handleToggle = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <div className="flex h-screen">
      {/* Lewa strona */}
      <div className="w-1/2 bg-oceanBlue flex justify-center items-center">
        <h1 className="text-white text-7xl font-bold animate-pulse">
          NEXICRM
        </h1>
      </div>

      {/* Prawa strona */}
      <div className="w-1/2 bg-steelBlue flex flex-col justify-center items-center p-8">
        <h2 className="text-2xl text-white font-semibold mb-4">
          {isRegistering ? "Rejestracja" : "Logowanie"}
        </h2>
        <form className="w-full max-w-sm">
          <div className="mb-6">
            <label className="block text-white-700 text-sm font-bold mb-2" htmlFor="email">
              E-mail
            </label>
            <input
              className="bg-transparent border-b-2 border-white focus:outline-none focus:border-gold transition-all duration-300 w-full py-2 px-3 text-white leading-tight placeholder-white-500 placeholder-opacity-50"
              id="email"
              type="email"
              placeholder="Wprowadź swój e-mail"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-white-700 text-sm font-bold mb-2" htmlFor="password">
              Hasło
            </label>
            <input
              className="bg-transparent border-b-2 border-white focus:outline-none focus:border-gold transition-all duration-300 w-full py-2 px-3 text-white leading-tight placeholder-white-500 placeholder-opacity-50"
              id="password"
              type="password"
              placeholder="Wprowadź swoje hasło"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-gold hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              {isRegistering ? "Zarejestruj się" : "Zaloguj się"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
