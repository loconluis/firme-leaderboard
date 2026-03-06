"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error);
  }, [error]);

  return (
    <main className="min-h-screen px-6 md:px-12 lg:px-16 max-w-6xl mx-auto flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bebas text-volt mb-4">
          Error al Cargar
        </h1>
        <p className="text-text-secondary text-base md:text-lg mb-8 max-w-md">
          Hubo un problema al cargar el leaderboard. Por favor, intenta de nuevo.
        </p>
        <button
          onClick={reset}
          className="px-6 py-3 bg-volt text-black font-semibold rounded-lg hover:bg-volt/90 transition-colors"
        >
          Intentar de Nuevo
        </button>
      </div>
    </main>
  );
}
