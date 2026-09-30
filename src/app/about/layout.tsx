import { inter, playfair } from "../fontDefinitions";
import "../home3.css";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${inter.variable} ${playfair.variable} home3-root`}>
      {children}
    </div>
  );
}
