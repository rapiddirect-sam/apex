interface SanitizedHTMLProps {
  html: string;
  className?: string;
}

export function SanitizedHTML({ html, className }: SanitizedHTMLProps) {
  return (
    <article
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
