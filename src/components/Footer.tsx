export default function Footer() {
  return (
    <footer className="text-center py-8 border-t border-border mt-8">
      <p className="text-text-muted text-sm mb-4">
        Los datos son recopilados de la página de{" "}
        <a
          href="https://www.instagram.com/firmechallenge/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-volt hover:text-volt-light transition-colors"
        >
          firmechallenge
        </a>{" "}
        en Instagram
      </p>
      <a
        href="https://luislocon.dev"
        target="_blank"
        rel="noopener noreferrer"
        className="text-text-muted text-sm hover:text-volt transition-colors inline-flex items-center gap-1"
      >
        Hecho con <span className="text-red-500">❤️</span> por <span className="text-volt font-medium">LoconLuis</span>
      </a>
    </footer>
  );
}
