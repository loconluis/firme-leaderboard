import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen px-6 md:px-12 lg:px-16 max-w-6xl mx-auto flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-bebas text-volt mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-bebas text-white mb-4">
          Página No Encontrada
        </h2>
        <p className="text-text-secondary text-base md:text-lg mb-8 max-w-md">
          La página que buscas no existe o ha sido movida.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-volt text-black font-semibold rounded-lg hover:bg-volt/90 transition-colors"
        >
          Volver al Leaderboard
        </Link>
      </div>
    </main>
  );
}
