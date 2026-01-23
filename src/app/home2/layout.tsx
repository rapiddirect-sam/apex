import { Archivo_Black, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./home2.css";

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: "400",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
});

export default function Home2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${archivoBlack.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} home2-root`}>
      {children}
    </div>
  );
}
