"use client";

interface LastUpdatedProps {
  date: string;
}

export default function LastUpdated({ date }: LastUpdatedProps) {
  const formatDate = (dateString: string) => {
    const d = new Date(dateString);
    return d.toLocaleDateString("es-ES", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="text-center pt-10 pb-8 text-text-secondary text-sm">
      <span className="inline-flex items-center gap-2">
        <span className="w-1.5 h-1.5 bg-volt rounded-full animate-pulse-subtle" />
        Actualizado {formatDate(date)}
      </span>
    </div>
  );
}
